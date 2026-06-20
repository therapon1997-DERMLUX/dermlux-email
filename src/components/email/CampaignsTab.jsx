import { useEffect, useState } from 'react'
import { collection, onSnapshot, query, orderBy, doc, deleteDoc, updateDoc, setDoc, serverTimestamp, Timestamp } from 'firebase/firestore'
import { db } from '../../firebase/config'
import CreateCampaignModal from './CreateCampaignModal'
import CampaignSendModal from './CampaignSendModal'

const STATUS_STYLE = {
  draft:   'bg-gray-100 text-gray-600',
  sending: 'bg-blue-100 text-blue-700',
  partial: 'bg-orange-100 text-orange-700',
  auto:    'bg-purple-100 text-purple-700',
  sent:    'bg-green-100 text-green-700',
  failed:  'bg-red-100 text-red-600',
}
const STATUS_LABEL = {
  draft:   'Draft',
  sending: 'Αποστολή…',
  partial: 'Μερική Αποστολή',
  auto:    '🤖 Αυτόματη',
  sent:    'Στάλθηκε',
  failed:  'Σφάλμα',
}

function pct(a, b) {
  if (!b) return '—'
  return Math.round((a / b) * 100) + '%'
}

function formatCountdown(nextBatchAt) {
  if (!nextBatchAt) return ''
  const next = nextBatchAt.toDate ? nextBatchAt.toDate() : new Date(nextBatchAt)
  const diff = next - Date.now()
  if (diff <= -1800000) return '⚠️ Καθυστέρηση'
  if (diff <= 0) return 'Σε λίγο…'
  const hours = Math.floor(diff / 3600000)
  const mins  = Math.floor((diff % 3600000) / 60000)
  if (hours > 0) return `${hours}ω ${mins}λ`
  return `${mins} λεπτά`
}

export default function CampaignsTab() {
  const [campaigns, setCampaigns] = useState([])
  const [loading, setLoading]     = useState(true)
  const [showCreate, setShowCreate] = useState(false)
  const [editCampaign, setEditCampaign] = useState(null)
  const [sendCampaign, setSendCampaign] = useState(null)
  const [testSendModal, setTestSendModal] = useState(null) // campaign
  const [testResult, setTestResult]       = useState(null) // { status, msg }
  const [triggerResult, setTriggerResult] = useState(null) // { status, msg }
  const [, setTick] = useState(0) // for countdown re-renders

  // Countdown ticker — refreshes every 30s while any campaign is in auto mode
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 30000)
    return () => clearInterval(id)
  }, [])

  async function handlePause(campaign) {
    await updateDoc(doc(db, 'email_campaigns', campaign.id), {
      autoSend: false,
      status:   'partial',
    })
  }

  async function handleEndCampaign(campaign) {
    if (!window.confirm(`Ολοκλήρωση καμπάνιας "${campaign.name}";\nΘα σταματήσει η αυτόματη αποστολή και η καμπάνια θα χαρακτηριστεί ως ολοκληρωμένη.`)) return
    await updateDoc(doc(db, 'email_campaigns', campaign.id), {
      autoSend: false,
      status:   'sent',
    })
  }

  async function handleResumeAuto(campaign) {
    // Set nextBatchAt to now so the cron picks it up within 15 minutes
    await updateDoc(doc(db, 'email_campaigns', campaign.id), {
      autoSend:      true,
      status:        'auto',
      nextBatchAt:   Timestamp.fromMillis(Date.now()),
      autoSendError: null,
    })
  }

  async function handleTriggerNow(campaign) {
    setTriggerResult({ status: 'sending', msg: 'Αποστολή batch…' })
    try {
      const workerUrl = import.meta.env.VITE_WORKER_URL
      const res  = await fetch(`${workerUrl}/trigger-auto`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        // Pass campaignId directly — worker fetches by ID, no query race condition
        body: JSON.stringify({ campaignId: campaign.id }),
      })
      const data = await res.json()
      const entry = data.report?.find(r => r.id === campaign.id)
      if (!entry) {
        setTriggerResult({ status: 'error', msg: '❌ Η καμπάνια δεν βρέθηκε' })
      } else if (entry.action === 'sent') {
        setTriggerResult({ status: 'done', msg: `✅ Στάλθηκαν ${entry.sent} emails · Εναπομένουν: ${entry.remaining}` })
      } else if (entry.action === 'skipped') {
        setTriggerResult({ status: 'done', msg: `ℹ️ Η καμπάνια ολοκληρώθηκε ήδη` })
      } else if (entry.action === 'error') {
        setTriggerResult({ status: 'error', msg: `❌ ${entry.error}` })
      } else {
        setTriggerResult({ status: 'done', msg: `ℹ️ ${entry.action}` })
      }
    } catch (e) {
      setTriggerResult({ status: 'error', msg: `❌ ${e.message}` })
    }
    setTimeout(() => setTriggerResult(null), 8000)
  }

  async function submitTestSend(campaign, name, email) {
    setTestSendModal(null)
    setTestResult({ status: 'sending', msg: `Αποστολή στο ${email}…` })
    try {
      const workerUrl = import.meta.env.VITE_WORKER_URL
      const campaignId = campaign.id
      const contactId  = `test_${email.replace(/[^a-zA-Z0-9]/g, '_')}`
      const res = await fetch(`${workerUrl}/send-campaign`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          campaignId,
          campaign,
          contacts: [{ id: contactId, name: name || 'Test', email }],
        }),
      })
      const data = await res.json()
      const result = data.results?.[0]
      if (result?.status === 'sent') {
        // Save email_sends record so webhook can track opens/clicks on the real campaign
        const sendId = `${campaignId}||test||${email}`
        await setDoc(doc(db, 'email_sends', sendId), {
          campaignId,
          contactId,
          email,
          resendId:     result.resendId || null,
          status:       'sent',
          isTest:       true,
          campaignName: campaign.name || '',
          subject:      campaign.subject || '',
          sentAt:       serverTimestamp(),
          failedReason: null,
          openedAt:     null,
          clickedAt:    null,
          bouncedAt:    null,
          createdAt:    serverTimestamp(),
        })
        setTestResult({ status: 'done', msg: `✅ Εστάλη στο ${email}` })
      } else {
        setTestResult({ status: 'error', msg: `❌ Σφάλμα: ${result?.error || JSON.stringify(data)}` })
      }
    } catch (e) {
      setTestResult({ status: 'error', msg: `❌ ${e.message}` })
    }
    setTimeout(() => setTestResult(null), 6000)
  }

  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, 'email_campaigns'), orderBy('createdAt', 'desc')),
      snap => { setCampaigns(snap.docs.map(d => ({ id: d.id, ...d.data() }))); setLoading(false) }
    )
    return unsub
  }, [])

  async function handleDelete(campaign) {
    if (!window.confirm(`Διαγραφή καμπάνιας "${campaign.name}";`)) return
    await deleteDoc(doc(db, 'email_campaigns', campaign.id))
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{campaigns.length} καμπάνιες</p>
        <button className="btn-primary" onClick={() => { setEditCampaign(null); setShowCreate(true) }}>
          + Νέα Καμπάνια
        </button>
      </div>

      {loading ? (
        <CampaignsSkeleton />
      ) : campaigns.length === 0 ? (
        <div className="text-center py-24">
          <div className="text-5xl mb-4">📧</div>
          <div className="font-semibold text-gray-600 mb-1">Δεν υπάρχουν καμπάνιες ακόμα</div>
          <div className="text-sm text-gray-400 mb-5">Δημιούργησε την πρώτη σου καμπάνια για να ξεκινήσεις</div>
          <button className="btn-primary" onClick={() => setShowCreate(true)}>+ Νέα Καμπάνια</button>
        </div>
      ) : (
        <div className="space-y-3">
          {campaigns.map(c => (
            <CampaignCard
              key={c.id}
              c={c}
              testResult={testResult}
              onSend={() => setSendCampaign(c)}
              onEdit={() => { setEditCampaign(c); setShowCreate(true) }}
              onPause={() => handlePause(c)}
              onTriggerNow={() => handleTriggerNow(c)}
              onResumeAuto={() => handleResumeAuto(c)}
              onEndCampaign={() => handleEndCampaign(c)}
              onClone={() => { setEditCampaign({ ...c, name: c.name + ' (αντίγραφο)', status: 'draft' }); setShowCreate(true) }}
              onTest={() => setTestSendModal(c)}
              onDelete={() => handleDelete(c)}
            />
          ))}
        </div>
      )}

      {showCreate && (
        <CreateCampaignModal
          campaign={editCampaign}
          onClose={() => { setShowCreate(false); setEditCampaign(null) }}
        />
      )}
      {sendCampaign && (
        <CampaignSendModal
          campaign={sendCampaign}
          onClose={() => setSendCampaign(null)}
        />
      )}

      {/* Test send modal */}
      {testSendModal && (
        <TestSendModal
          campaign={testSendModal}
          onClose={() => setTestSendModal(null)}
          onSend={(name, email) => submitTestSend(testSendModal, name, email)}
        />
      )}

      {/* Test result toast */}
      {testResult && (
        <div className={`fixed bottom-6 right-6 px-5 py-3 rounded-lg shadow-lg text-white text-sm z-50 max-w-sm ${testResult.status === 'done' ? 'bg-green-600' : testResult.status === 'error' ? 'bg-red-600' : 'bg-blue-600'}`}>
          {testResult.msg}
        </div>
      )}

      {/* Trigger result toast */}
      {triggerResult && (
        <div className={`fixed bottom-20 right-6 px-5 py-3 rounded-lg shadow-lg text-white text-sm z-50 max-w-sm ${triggerResult.status === 'done' ? 'bg-purple-600' : triggerResult.status === 'error' ? 'bg-red-600' : 'bg-purple-400'}`}>
          {triggerResult.msg}
        </div>
      )}
    </div>
  )
}

function TestSendModal({ campaign, onClose, onSend }) {
  const [name,  setName]  = useState('')
  const [email, setEmail] = useState('')
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl shadow-xl p-6 w-full max-w-sm space-y-4">
        <div className="font-semibold text-gray-900">🧪 Test Send — {campaign.name}</div>
        <div className="space-y-3">
          <div>
            <label className="block text-xs text-gray-500 mb-1">Όνομα (για {'{{name}}'})</label>
            <input className="input w-full" placeholder="π.χ. Μαρία" value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs text-gray-500 mb-1">Email *</label>
            <input className="input w-full" type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
        </div>
        <div className="flex gap-2 pt-1">
          <button className="btn-secondary flex-1" onClick={onClose}>Ακύρωση</button>
          <button className="btn-primary flex-1" disabled={!email.includes('@')}
            onClick={() => onSend(name, email)}>
            Αποστολή Test
          </button>
        </div>
      </div>
    </div>
  )
}

function CampaignsSkeleton() {
  return (
    <div className="space-y-3 animate-pulse">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="card p-5 space-y-4">
          <div className="flex justify-between items-start">
            <div className="space-y-2 flex-1">
              <div className="h-4 bg-gray-200 rounded-full w-2/5" />
              <div className="h-3 bg-gray-100 rounded-full w-3/5" />
            </div>
            <div className="h-6 bg-gray-100 rounded-full w-24 ml-4" />
          </div>
          <div className="grid grid-cols-4 gap-3">
            {[...Array(4)].map((_, j) => <div key={j} className="h-10 bg-gray-100 rounded-xl" />)}
          </div>
          <div className="h-8 bg-gray-100 rounded-xl" />
        </div>
      ))}
    </div>
  )
}

function CampaignCard({ c, testResult, onSend, onEdit, onPause, onResumeAuto, onTriggerNow, onEndCampaign, onClone, onTest, onDelete }) {
  const statusBorder = {
    draft:   'border-l-gray-200',
    sending: 'border-l-blue-400',
    auto:    'border-l-purple-500',
    partial: 'border-l-orange-400',
    sent:    'border-l-emerald-500',
    failed:  'border-l-red-400',
  }

  const remaining = (c.stats?.total ?? 0) - (c.stats?.sent ?? 0)
  const progress  = c.stats?.total ? Math.round(((c.stats?.sent ?? 0) / c.stats.total) * 100) : 0

  return (
    <div className={`card border-l-4 ${statusBorder[c.status] || statusBorder.draft} overflow-hidden`}>
      <div className="p-5 space-y-4">

        {/* Header */}
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <div className="font-semibold text-gray-900 truncate">{c.name}</div>
            <div className="text-sm text-gray-500 mt-0.5 truncate">{c.subject}</div>
            <div className="text-xs text-gray-400 mt-0.5">
              {c.fromName} &lt;{c.fromEmail}&gt;
            </div>
          </div>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ${STATUS_STYLE[c.status] || STATUS_STYLE.draft}`}>
            {STATUS_LABEL[c.status] || c.status}
          </span>
        </div>

        {/* Stats for sent / partial / auto */}
        {c.stats && (c.status === 'sent' || c.status === 'partial' || c.status === 'auto') && (
          <div className="grid grid-cols-4 gap-2 text-center">
            {[
              { label: 'Εστάλη',     value: c.stats.sent ?? 0,                         bold: true },
              { label: 'Ανοίχθηκαν', value: pct(c.stats.opened,  c.stats.sent),        color: 'text-blue-600' },
              { label: 'Κλικ',       value: pct(c.stats.clicked, c.stats.sent),        color: 'text-indigo-600' },
              { label: 'Opt-out',    value: c.stats.unsubscribed ?? 0,                 color: 'text-orange-500' },
            ].map(({ label, value, bold, color }) => (
              <div key={label} className="bg-gray-50 rounded-xl py-2.5 px-1">
                <div className={`text-base font-bold ${color || 'text-gray-800'}`}>{value}</div>
                <div className="text-xs text-gray-400 mt-0.5">{label}</div>
              </div>
            ))}
          </div>
        )}

        {/* Auto-send error banner */}
        {c.autoSendError && (
          <div className="bg-red-50 border border-red-200 rounded-lg px-3 py-2 text-xs text-red-700 flex items-start gap-2">
            <span className="shrink-0">⚠️</span>
            <div>
              <span className="font-semibold">Σφάλμα αυτόματης αποστολής: </span>
              {c.autoSendError}
            </div>
          </div>
        )}

        {/* Progress bar (sending / auto / partial) */}
        {(c.status === 'sending' || c.status === 'auto' || c.status === 'partial') && c.stats?.total > 0 && (
          <div className="space-y-1.5">
            <div className="flex justify-between text-xs text-gray-500">
              {c.status === 'auto' ? (
                <span>
                  Επόμενο batch:{' '}
                  <span className={`font-semibold ${formatCountdown(c.nextBatchAt).startsWith('⚠') ? 'text-red-600' : 'text-purple-700'}`}>
                    {formatCountdown(c.nextBatchAt)}
                  </span>
                </span>
              ) : c.status === 'sending' ? (
                <span className="text-blue-600 font-medium">Αποστολή σε εξέλιξη…</span>
              ) : (
                <span className="text-orange-600">{remaining > 0 ? `${remaining} εναπομένουν` : 'Σε παύση'}</span>
              )}
              <span className="font-semibold">{c.stats.sent ?? 0} / {c.stats.total} · {progress}%</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${
                  c.status === 'auto' ? 'bg-purple-500' :
                  c.status === 'sending' ? 'bg-blue-500' : 'bg-orange-400'
                }`}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex gap-2 flex-wrap items-center border-t pt-3">
          {c.status === 'draft' && (
            <>
              <button className="btn-primary text-xs" onClick={onSend}>📤 Αποστολή</button>
              <button className="btn-secondary text-xs" onClick={onEdit}>✏️ Επεξεργασία</button>
            </>
          )}
          {c.status === 'auto' && (
            <>
              <button className="btn-primary text-xs bg-purple-600 hover:bg-purple-700 border-purple-600" onClick={onTriggerNow}>
                ▶ Στείλε Τώρα
              </button>
              <button className="btn-secondary text-xs" onClick={onPause}>⏸ Παύση</button>
              <button className="btn-secondary text-xs text-red-500 hover:text-red-700 hover:border-red-300" onClick={onEndCampaign}>
                🏁 Τέλος Καμπάνιας
              </button>
            </>
          )}
          {c.status === 'partial' && (
            <>
              <button className="btn-primary text-xs" onClick={onResumeAuto}>🤖 Συνέχεια Αυτόματα</button>
              <button className="btn-secondary text-xs" onClick={onSend}>▶️ Χειροκίνητα</button>
              <button className="btn-secondary text-xs text-red-500 hover:text-red-700 hover:border-red-300" onClick={onEndCampaign}>
                🏁 Τέλος Καμπάνιας
              </button>
            </>
          )}
          {c.status === 'sent' && (
            <>
              <button className="btn-primary text-xs" onClick={onSend}>🎯 Νέο Κοινό</button>
              <button className="btn-secondary text-xs" onClick={onClone}>📋 Αντιγραφή ως Draft</button>
            </>
          )}
          <button
            className="btn-secondary text-xs"
            onClick={onTest}
            disabled={testResult?.status === 'sending'}
          >
            🧪 Test
          </button>
          {c.status === 'draft' && (
            <button className="text-xs text-red-400 hover:text-red-600 ml-auto transition-colors" onClick={onDelete}>
              Διαγραφή
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
