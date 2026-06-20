import { useState, useEffect, useMemo } from 'react'
import {
  collection, getDocs, query, where,
  doc, updateDoc, writeBatch, serverTimestamp, increment, Timestamp,
} from 'firebase/firestore'
import { db } from '../../firebase/config'
import { contactDocId, isActiveContact, isValidEmail } from '../../utils/emailValidation'
import { DISTRICTS, getDistrict, SPEND_TIERS, APPT_TIERS } from '../../utils/contactTags'

const WORKER_URL = import.meta.env.VITE_WORKER_URL

const BATCH_OPTIONS    = [25, 50, 100, 200, 500]
const INTERVAL_OPTIONS = [
  { label: '30 λεπτά', value: 0.5 },
  { label: '1 ώρα',    value: 1   },
  { label: '2 ώρες',   value: 2   },
  { label: '4 ώρες',   value: 4   },
  { label: '6 ώρες',   value: 6   },
  { label: '12 ώρες',  value: 12  },
  { label: '24 ώρες',  value: 24  },
]

const EMPTY_SEG = {
  districts:                   [],
  excludeDistricts:            [],
  spendTiers:                  [],
  apptTiers:                   [],
  statuses:                    [],
  excludeStatuses:             [],
  sources:                     [],
  languages:                   [],
  treatmentCategories:         [],
  excludeTreatmentCategories:  [],
  keyword:                     '',
}

const TREATMENT_CATEGORY_LABELS = {
  injectables:  { label: 'Injectables', icon: '💉' },
  laser:        { label: 'Laser',       icon: '⚡' },
  facial:       { label: 'Facial',      icon: '✨' },
  consultation: { label: 'Consultation',icon: '📋' },
  other:        { label: 'Other',       icon: '🔖' },
}

function calcTime(remaining, batchSize, intervalHours) {
  const batches = Math.ceil(remaining / batchSize)
  if (batches <= 1) return { label: 'Αμέσως', detail: '1 batch' }
  const totalHours = (batches - 1) * intervalHours
  if (totalHours < 1) return { label: `~${Math.round(totalHours * 60)} λεπτά`, detail: `${batches} batches` }
  if (totalHours < 24) return { label: `~${totalHours % 1 === 0 ? totalHours : totalHours.toFixed(1)} ώρες`, detail: `${batches} batches` }
  return { label: `~${(totalHours / 24).toFixed(1)} μέρες`, detail: `${batches} batches` }
}

// Toggle an item in/out of an array
function toggle(arr, val) {
  return arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]
}

// ── Chip component ─────────────────────────────────────────────────────────────
function Chip({ label, count, active, onClick, color = 'blue' }) {
  const colors = {
    blue:   active ? 'bg-blue-600 text-white border-blue-600'       : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400',
    red:    active ? 'bg-red-500 text-white border-red-500'          : 'bg-white text-gray-600 border-gray-200 hover:border-red-400',
    green:  active ? 'bg-emerald-600 text-white border-emerald-600'  : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-400',
    purple: active ? 'bg-purple-600 text-white border-purple-600'    : 'bg-white text-gray-600 border-gray-200 hover:border-purple-400',
  }
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${colors[color]}`}
    >
      {label}
      {count != null && (
        <span className={`text-xs font-semibold ${active ? 'opacity-80' : 'text-gray-400'}`}>
          {count}
        </span>
      )}
    </button>
  )
}

// ── Filter section ─────────────────────────────────────────────────────────────
function FilterSection({ title, icon, children }) {
  return (
    <div className="space-y-2">
      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider flex items-center gap-1.5">
        <span>{icon}</span>{title}
      </div>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  )
}

// ── Main component ─────────────────────────────────────────────────────────────
export default function CampaignSendModal({ campaign, onClose }) {
  const [loading, setLoading]         = useState(true)
  const [allActive, setAllActive]     = useState([])
  const [alreadySent, setAlreadySent] = useState(0)
  const [step, setStep]               = useState('preview')
  const [progress, setProgress]       = useState(0)
  const [sentCount, setSentCount]     = useState(0)
  const [failCount, setFailCount]     = useState(0)
  const [error, setError]             = useState('')
  const [isAutoMode, setIsAutoMode]   = useState(false)
  const [showAdvanced, setShowAdvanced] = useState(false)

  // Segmentation state
  const [seg, setSeg] = useState(EMPTY_SEG)

  // Send settings
  const [batchSize,     setBatchSize]     = useState(campaign.batchSize     || 100)
  const [intervalHours, setIntervalHours] = useState(campaign.intervalHours || 2)

  useEffect(() => {
    async function load() {
      try {
        const contactsSnap = await getDocs(
          query(collection(db, 'email_contacts'), where('status', '==', 'active'))
        )
        const active = contactsSnap.docs
          .map(d => ({ id: d.id, ...d.data() }))
          .filter(c => isActiveContact(c.status) && isValidEmail(c.email))

        const sendsSnap = await getDocs(
          query(collection(db, 'email_sends'), where('campaignId', '==', campaign.id))
        )
        const sentEmails = new Set(
          sendsSnap.docs
            .filter(d => d.data().status !== 'failed' && !d.data().isTest)
            .map(d => d.data().email)
        )
        setAlreadySent(sentEmails.size)
        setAllActive(active.filter(c => !sentEmails.has(c.email)))
        setLoading(false)
      } catch (e) {
        setError(e.message)
        setLoading(false)
      }
    }
    load()
  }, [campaign.id])

  // ── Compute available filter values ──────────────────────────────────────────
  const available = useMemo(() => {
    const count = (field) => {
      const m = {}
      for (const c of allActive) {
        const v = (c[field] || '').trim()
        if (v) m[v] = (m[v] || 0) + 1
      }
      return Object.entries(m).sort((a, b) => b[1] - a[1])
    }
    const districtCounts = {}
    for (const c of allActive) {
      const d = getDistrict(c.city)
      if (d) districtCounts[d] = (districtCounts[d] || 0) + 1
    }
    const spendCounts = {}
    for (const t of SPEND_TIERS) spendCounts[t.id] = allActive.filter(t.match).length
    const apptCounts  = {}
    for (const t of APPT_TIERS)  apptCounts[t.id]  = allActive.filter(t.match).length
    const treatCatCounts = {}
    for (const c of allActive) {
      const cats = Array.isArray(c.treatmentCategories) ? c.treatmentCategories : []
      for (const cat of cats) treatCatCounts[cat] = (treatCatCounts[cat] || 0) + 1
    }
    return {
      districtCounts,
      spendCounts,
      apptCounts,
      statuses:            count('omniluxStatus'),
      sources:             count('omniluxSource'),
      languages:           count('language'),
      treatmentCategories: treatCatCounts,
    }
  }, [allActive])

  // ── Apply segmentation ───────────────────────────────────────────────────────
  const remaining = useMemo(() => {
    return allActive.filter(c => {
      const district = getDistrict(c.city)
      const status   = (c.omniluxStatus || '').trim()
      const source   = (c.omniluxSource || '').trim()
      const lang     = (c.language      || '').trim()
      const kw       = seg.keyword.toLowerCase().trim()

      if (seg.districts.length        && !seg.districts.includes(district))       return false
      if (seg.excludeDistricts.length && seg.excludeDistricts.includes(district)) return false
      if (seg.spendTiers.length       && !SPEND_TIERS.filter(t => seg.spendTiers.includes(t.id)).some(t => t.match(c)))  return false
      if (seg.apptTiers.length        && !APPT_TIERS.filter(t => seg.apptTiers.includes(t.id)).some(t => t.match(c)))    return false
      if (seg.statuses.length         && !seg.statuses.includes(status))          return false
      if (seg.excludeStatuses.length  && seg.excludeStatuses.includes(status))   return false
      if (seg.sources.length          && !seg.sources.includes(source))           return false
      if (seg.languages.length        && !seg.languages.includes(lang))           return false
      if (seg.treatmentCategories.length) {
        const cCats = Array.isArray(c.treatmentCategories) ? c.treatmentCategories : []
        if (!seg.treatmentCategories.some(cat => cCats.includes(cat)))            return false
      }
      if (seg.excludeTreatmentCategories.length) {
        const cCats = Array.isArray(c.treatmentCategories) ? c.treatmentCategories : []
        if (seg.excludeTreatmentCategories.some(cat => cCats.includes(cat)))      return false
      }
      if (kw) {
        const haystack = `${c.treatments || ''} ${c.categories || ''}`.toLowerCase()
        if (!haystack.includes(kw)) return false
      }
      return true
    })
  }, [allActive, seg])

  const thisBatch = remaining.slice(0, batchSize)
  const afterThis = remaining.length - thisBatch.length
  const timeEst   = calcTime(remaining.length, batchSize, intervalHours)
  const activeFilters = [
    seg.districts.length, seg.excludeDistricts.length,
    seg.spendTiers.length, seg.apptTiers.length,
    seg.statuses.length, seg.excludeStatuses.length,
    seg.sources.length, seg.languages.length,
    seg.treatmentCategories.length, seg.excludeTreatmentCategories.length,
    seg.keyword !== '',
  ].filter(Boolean).length

  const sampleHtml = (campaign.htmlBody || '')
    .replaceAll('{{name}}', 'Αγαπητέ Πελάτη')
    .replaceAll('{{unsubscribe_url}}', '#')

  // ── Send handler ─────────────────────────────────────────────────────────────
  async function handleSend(autoMode = false) {
    if (!WORKER_URL || WORKER_URL.includes('YOUR-SUBDOMAIN')) {
      setError('Το VITE_WORKER_URL δεν έχει οριστεί.')
      return
    }
    setStep('sending')
    setError('')
    setIsAutoMode(autoMode)

    const isFirstBatch = campaign.status === 'draft'
    // In auto mode, save the audience segment so the worker can apply it
    const hasFilters = autoMode && Object.entries(seg).some(([k, v]) =>
      Array.isArray(v) ? v.length > 0 : v !== ''
    )
    await updateDoc(doc(db, 'email_campaigns', campaign.id), {
      status:        'sending',
      batchSize,
      intervalHours,
      'stats.total': isFirstBatch ? remaining.length : (campaign.stats?.total ?? remaining.length + alreadySent),
      ...(isFirstBatch ? { sentAt: serverTimestamp() } : {}),
      ...(autoMode ? { audienceSegment: hasFilters ? JSON.stringify(seg) : null } : {}),
    })

    let totalSent = 0, totalFailed = 0

    try {
      const res = await fetch(`${WORKER_URL}/send-campaign`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          campaignId: campaign.id,
          campaign: {
            name:      campaign.name,
            subject:   campaign.subject,
            fromName:  campaign.fromName,
            fromEmail: campaign.fromEmail,
            htmlBody:  campaign.htmlBody,
          },
          contacts: thisBatch.map(c => ({ id: c.id, email: c.email, name: c.name || '' })),
        }),
      })
      if (!res.ok) throw new Error(`Worker error: ${await res.text()}`)

      const { results } = await res.json()
      totalSent   = results.filter(r => r.status === 'sent').length
      totalFailed = results.filter(r => r.status === 'failed').length
      setSentCount(totalSent)
      setFailCount(totalFailed)
      setProgress(100)

      // Write email_sends docs
      for (let i = 0; i < results.length; i += 500) {
        const batch = writeBatch(db)
        results.slice(i, i + 500).forEach(r => {
          batch.set(doc(db, 'email_sends', `${campaign.id}||${r.email}`), {
            campaignId:   campaign.id,
            contactId:    contactDocId(r.email),
            email:        r.email,
            resendId:     r.resendId || null,
            status:       r.status,
            sentAt:       serverTimestamp(),
            failedReason: r.error || null,
            openedAt:     null,
            clickedAt:    null,
            bouncedAt:    null,
            createdAt:    serverTimestamp(),
          })
        })
        await batch.commit()
      }

      const isDone    = afterThis === 0
      const newStatus = isDone ? 'sent' : (autoMode ? 'auto' : 'partial')
      await updateDoc(doc(db, 'email_campaigns', campaign.id), {
        status:         newStatus,
        'stats.sent':   increment(totalSent),
        'stats.failed': increment(totalFailed),
        ...(autoMode && !isDone ? {
          autoSend:    true,
          nextBatchAt: Timestamp.fromMillis(Date.now() + intervalHours * 60 * 60 * 1000),
        } : {}),
      })

      setStep('done')
    } catch (e) {
      setError(e.message)
      await updateDoc(doc(db, 'email_campaigns', campaign.id), {
        status: alreadySent > 0 ? 'partial' : 'draft',
      }).catch(() => {})
      setStep('confirm')
    }
  }

  // ── Loading ──────────────────────────────────────────────────────────────────
  if (loading) {
    return (
      <ModalShell onClose={onClose} title="Αποστολή Καμπάνιας">
        <div className="text-center py-10 text-gray-400">Φόρτωση επαφών…</div>
      </ModalShell>
    )
  }

  // ── Nothing left ─────────────────────────────────────────────────────────────
  if (!loading && allActive.length === 0) {
    return (
      <ModalShell onClose={onClose} title="Αποστολή Ολοκληρώθηκε">
        <div className="text-center py-8 space-y-3">
          <div className="text-5xl">✅</div>
          <div className="text-lg font-semibold text-green-700">Όλες οι επαφές έχουν λάβει αυτή την καμπάνια!</div>
          <div className="text-sm text-gray-500">{alreadySent} επαφές έχουν ήδη λάβει αυτό το email.</div>
          <button className="btn-primary mt-2" onClick={onClose}>Κλείσιμο</button>
        </div>
      </ModalShell>
    )
  }

  // ── Done ─────────────────────────────────────────────────────────────────────
  if (step === 'done') {
    const autoRunning = isAutoMode && afterThis > 0
    return (
      <ModalShell onClose={onClose} title={afterThis === 0 ? 'Αποστολή Ολοκληρώθηκε' : autoRunning ? 'Αυτόματη Αποστολή Ξεκίνησε' : 'Batch Στάλθηκε'}>
        <div className="text-center py-6 space-y-4">
          <div className="text-5xl">{afterThis === 0 ? '✅' : autoRunning ? '🤖' : '⏸️'}</div>
          <div className={`text-lg font-semibold ${afterThis === 0 ? 'text-green-700' : autoRunning ? 'text-purple-700' : 'text-blue-700'}`}>
            {afterThis === 0 ? 'Η καμπάνια ολοκληρώθηκε!' : autoRunning ? `Στάλθηκαν ${sentCount} — συνεχίζει αυτόματα` : `${sentCount} emails στάλθηκαν`}
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 text-sm space-y-1.5">
            <Row label="Στάλθηκαν τώρα"  val={sentCount} cls="text-green-600" />
            {failCount > 0 && <Row label="Αποτυχίες" val={failCount} cls="text-red-500" />}
            <Row label="Εναπομένουν" val={afterThis} cls={afterThis > 0 ? (autoRunning ? 'text-purple-600' : 'text-orange-600') : 'text-gray-400'} border />
          </div>
          {autoRunning && (
            <div className="bg-purple-50 border border-purple-200 rounded-lg px-4 py-3 text-sm text-purple-800">
              Τα επόμενα <strong>{Math.min(afterThis, batchSize)}</strong> emails θα αποσταλούν αυτόματα σε <strong>{INTERVAL_OPTIONS.find(o => o.value === intervalHours)?.label}</strong>. Μπορείτε να κλείσετε τη σελίδα.
            </div>
          )}
          <div className="flex gap-2">
            {!autoRunning && (
              <button
                className="btn-secondary flex-1"
                onClick={() => { setSeg(EMPTY_SEG); setStep('audience') }}
              >
                🎯 Νέο Κοινό
              </button>
            )}
            <button className="btn-primary flex-1" onClick={onClose}>Κλείσιμο</button>
          </div>
        </div>
      </ModalShell>
    )
  }

  // ── Sending ───────────────────────────────────────────────────────────────────
  if (step === 'sending') {
    return (
      <ModalShell title="Αποστολή σε εξέλιξη…">
        <div className="space-y-5 py-2">
          <div className="space-y-2">
            <div className="flex justify-between text-sm font-medium">
              <span className="text-blue-700">Αποστολή {thisBatch.length} emails…</span>
              <span>{progress}%</span>
            </div>
            <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div><div className="text-2xl font-bold text-green-600">{sentCount}</div><div className="text-xs text-gray-500">Στάλθηκαν</div></div>
            <div><div className="text-2xl font-bold text-red-400">{failCount}</div><div className="text-xs text-gray-500">Αποτυχίες</div></div>
          </div>
          {error && <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">⚠️ {error}</div>}
        </div>
      </ModalShell>
    )
  }

  // ── Main modal ────────────────────────────────────────────────────────────────
  const TABS = [
    { id: 'preview',     label: '👁 Προεπισκόπηση' },
    { id: 'audience',    label: activeFilters > 0 ? `🎯 Κοινό  ${activeFilters}` : '🎯 Κοινό' },
    { id: 'autoConfirm', label: '🤖 Αυτόματη' },
    { id: 'confirm',     label: '📤 Χειροκίνητη' },
  ]

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-3xl mt-4 mb-4">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">Αποστολή Καμπάνιας</h2>
            {alreadySent > 0 && <div className="text-xs text-orange-600 mt-0.5">Συνέχεια — {alreadySent} έχουν ήδη λάβει αυτό το email</div>}
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
        </div>

        {/* Tabs */}
        <div className="px-6 pt-4">
          <div className="flex gap-1 bg-gray-100 rounded-lg p-1 text-sm overflow-x-auto">
            {TABS.map(t => (
              <button key={t.id} onClick={() => setStep(t.id)}
                className={`flex-1 py-2 px-2 rounded-md font-medium transition-colors whitespace-nowrap ${
                  step === t.id
                    ? t.id === 'autoConfirm' ? 'bg-white shadow-sm text-purple-700'
                    : t.id === 'audience'    ? 'bg-white shadow-sm text-blue-700'
                    : 'bg-white shadow-sm text-gray-900'
                    : 'text-gray-500 hover:text-gray-700'
                }`}>
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="px-6 pb-6 pt-4 space-y-4">

          {/* ════════════════════════════════════════════════════════ PREVIEW */}
          {step === 'preview' && (
            <>
              <div className="grid grid-cols-2 gap-3 text-sm">
                <div className="bg-gray-50 rounded-lg px-3 py-2">
                  <div className="text-xs text-gray-400 mb-0.5">Θέμα</div>
                  <div className="font-medium text-gray-800 truncate">{campaign.subject}</div>
                </div>
                <div className="bg-gray-50 rounded-lg px-3 py-2">
                  <div className="text-xs text-gray-400 mb-0.5">Αποστολέας</div>
                  <div className="font-medium text-gray-800 truncate">{campaign.fromName}</div>
                </div>
              </div>
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-inner" style={{ height: 460 }}>
                {sampleHtml.trim()
                  ? <iframe srcDoc={sampleHtml} className="w-full h-full border-0" sandbox="allow-same-origin" title="Email Preview" />
                  : <div className="h-full flex items-center justify-center text-gray-400">Δεν υπάρχει περιεχόμενο</div>}
              </div>
              <div className="flex items-center justify-between pt-1">
                <div className="text-sm text-gray-500">
                  <span className="font-bold text-blue-700">{allActive.length}</span> επαφές συνολικά
                </div>
                <button className="btn-primary" onClick={() => setStep('audience')}>Επόμενο →</button>
              </div>
            </>
          )}

          {/* ════════════════════════════════════════════════════════ AUDIENCE */}
          {step === 'audience' && (
            <div className="space-y-5">

              {/* Live result bar */}
              <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
                <div>
                  <span className="text-2xl font-bold text-blue-700">{remaining.length}</span>
                  <span className="text-sm text-gray-500 ml-2">/ {allActive.length} επαφές επιλεγμένες</span>
                  {activeFilters > 0 && (
                    <span className="ml-2 text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full font-semibold">
                      {activeFilters} φίλτρα ενεργά
                    </span>
                  )}
                </div>
                {activeFilters > 0 && (
                  <button
                    className="text-xs text-gray-400 hover:text-red-500 transition-colors font-medium"
                    onClick={() => setSeg(EMPTY_SEG)}
                  >
                    ✕ Καθαρισμός
                  </button>
                )}
              </div>

              {/* ── District include ── */}
              <FilterSection title="Περιοχή — Συμπερίληψη" icon="📍">
                {DISTRICTS.map(({ id }) => {
                  const cnt = available.districtCounts[id] || 0
                  if (!cnt) return null
                  return (
                    <Chip key={id} label={id} count={cnt}
                      active={seg.districts.includes(id)}
                      onClick={() => setSeg(s => ({ ...s, districts: toggle(s.districts, id) }))}
                    />
                  )
                })}
              </FilterSection>

              {/* ── District exclude ── */}
              <FilterSection title="Περιοχή — Εξαίρεση" icon="🚫">
                {DISTRICTS.map(({ id }) => {
                  const cnt = available.districtCounts[id] || 0
                  if (!cnt) return null
                  return (
                    <Chip key={id} label={id} count={cnt}
                      active={seg.excludeDistricts.includes(id)}
                      color="red"
                      onClick={() => setSeg(s => ({ ...s, excludeDistricts: toggle(s.excludeDistricts, id) }))}
                    />
                  )
                })}
              </FilterSection>

              {/* ── Spend tiers ── */}
              <FilterSection title="Δαπάνη" icon="💶">
                {SPEND_TIERS.map(t => {
                  const cnt = available.spendCounts[t.id] || 0
                  if (!cnt) return null
                  return (
                    <Chip key={t.id} label={t.label} count={cnt}
                      active={seg.spendTiers.includes(t.id)}
                      color="green"
                      onClick={() => setSeg(s => ({ ...s, spendTiers: toggle(s.spendTiers, t.id) }))}
                    />
                  )
                })}
                {SPEND_TIERS.every(t => !available.spendCounts[t.id]) && (
                  <span className="text-xs text-gray-400 italic">Δεν υπάρχουν δεδομένα δαπάνης</span>
                )}
              </FilterSection>

              {/* ── Appointment tiers ── */}
              <FilterSection title="Ραντεβού" icon="📅">
                {APPT_TIERS.map(t => {
                  const cnt = available.apptCounts[t.id] || 0
                  if (!cnt) return null
                  return (
                    <Chip key={t.id} label={t.label} count={cnt}
                      active={seg.apptTiers.includes(t.id)}
                      color="purple"
                      onClick={() => setSeg(s => ({ ...s, apptTiers: toggle(s.apptTiers, t.id) }))}
                    />
                  )
                })}
                {APPT_TIERS.every(t => !available.apptCounts[t.id]) && (
                  <span className="text-xs text-gray-400 italic">Δεν υπάρχουν δεδομένα ραντεβού</span>
                )}
              </FilterSection>

              {/* ── CRM Status include ── */}
              {available.statuses.length > 0 && (
                <FilterSection title="Status CRM — Συμπερίληψη" icon="👤">
                  {available.statuses.map(([st, cnt]) => (
                    <Chip key={st} label={st} count={cnt}
                      active={seg.statuses.includes(st)}
                      color="green"
                      onClick={() => setSeg(s => ({ ...s, statuses: toggle(s.statuses, st) }))}
                    />
                  ))}
                </FilterSection>
              )}

              {/* ── CRM Status exclude ── */}
              {available.statuses.length > 0 && (
                <FilterSection title="Status CRM — Εξαίρεση" icon="🚫">
                  {available.statuses.map(([st, cnt]) => (
                    <Chip key={st} label={st} count={cnt}
                      active={seg.excludeStatuses.includes(st)}
                      color="red"
                      onClick={() => setSeg(s => ({ ...s, excludeStatuses: toggle(s.excludeStatuses, st) }))}
                    />
                  ))}
                </FilterSection>
              )}

              {/* ── Language ── */}
              {available.languages.length > 0 && (
                <FilterSection title="Γλώσσα" icon="🌐">
                  {available.languages.map(([lang, cnt]) => (
                    <Chip key={lang} label={lang} count={cnt}
                      active={seg.languages.includes(lang)}
                      onClick={() => setSeg(s => ({ ...s, languages: toggle(s.languages, lang) }))}
                    />
                  ))}
                </FilterSection>
              )}

              {/* ── Treatment Categories include ── */}
              {Object.keys(available.treatmentCategories).length > 0 && (
                <FilterSection title="Κατηγορία Θεραπείας — Συμπερίληψη" icon="💆">
                  {Object.entries(TREATMENT_CATEGORY_LABELS).map(([key, { label, icon }]) => {
                    const cnt = available.treatmentCategories[key] || 0
                    if (!cnt) return null
                    return (
                      <Chip key={key} label={`${icon} ${label}`} count={cnt}
                        active={seg.treatmentCategories.includes(key)}
                        color="green"
                        onClick={() => setSeg(s => ({ ...s, treatmentCategories: toggle(s.treatmentCategories, key) }))}
                      />
                    )
                  })}
                </FilterSection>
              )}

              {/* ── Treatment Categories exclude ── */}
              {Object.keys(available.treatmentCategories).length > 0 && (
                <FilterSection title="Κατηγορία Θεραπείας — Εξαίρεση" icon="🚫">
                  {Object.entries(TREATMENT_CATEGORY_LABELS).map(([key, { label, icon }]) => {
                    const cnt = available.treatmentCategories[key] || 0
                    if (!cnt) return null
                    return (
                      <Chip key={key} label={`${icon} ${label}`} count={cnt}
                        active={seg.excludeTreatmentCategories.includes(key)}
                        color="red"
                        onClick={() => setSeg(s => ({ ...s, excludeTreatmentCategories: toggle(s.excludeTreatmentCategories, key) }))}
                      />
                    )
                  })}
                </FilterSection>
              )}

              {/* ── Source ── */}
              {available.sources.length > 0 && (
                <FilterSection title="Πηγή Επαφής" icon="📋">
                  {available.sources.map(([src, cnt]) => (
                    <Chip key={src} label={src} count={cnt}
                      active={seg.sources.includes(src)}
                      color="purple"
                      onClick={() => setSeg(s => ({ ...s, sources: toggle(s.sources, src) }))}
                    />
                  ))}
                </FilterSection>
              )}

              {/* ── Advanced: keyword ── */}
              <div>
                <button
                  className="text-xs font-semibold text-gray-400 hover:text-gray-600 flex items-center gap-1"
                  onClick={() => setShowAdvanced(v => !v)}
                >
                  {showAdvanced ? '▲' : '▼'} Προχωρημένα (Θεραπεία / Κατηγορία)
                </button>
                {showAdvanced && (
                  <div className="mt-3 border border-gray-200 rounded-xl p-4 bg-gray-50">
                    <input
                      type="text"
                      placeholder="π.χ. laser, botox, facial…"
                      value={seg.keyword}
                      onChange={e => setSeg(s => ({ ...s, keyword: e.target.value }))}
                      className="input w-full text-sm"
                    />
                    <div className="text-xs text-gray-400 mt-1">Αναζήτηση στα πεδία Treatments και Categories</div>
                  </div>
                )}
              </div>

              {remaining.length === 0 && (
                <div className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2">
                  ⚠️ Κανένα αποτέλεσμα με τα τρέχοντα φίλτρα. Αλλάξτε την επιλογή.
                </div>
              )}

              <div className="flex gap-3 pt-1">
                <button className="btn-secondary flex-1" onClick={() => setStep('preview')}>← Πίσω</button>
                <button className="btn-primary flex-1 bg-purple-600 hover:bg-purple-700" disabled={remaining.length === 0} onClick={() => setStep('autoConfirm')}>
                  🤖 Αυτόματη →
                </button>
                <button className="btn-primary flex-1" disabled={remaining.length === 0} onClick={() => setStep('confirm')}>
                  📤 Χειροκίνητη →
                </button>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════ AUTO CONFIRM */}
          {step === 'autoConfirm' && (
            <div className="space-y-4">

              {/* Audience summary pill */}
              <AudienceSummary remaining={remaining} allActive={allActive} activeFilters={activeFilters} onEdit={() => setStep('audience')} />

              {/* Settings */}
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Μέγεθος Batch</label>
                  <select className="input w-full text-sm" value={batchSize} onChange={e => setBatchSize(Number(e.target.value))}>
                    {BATCH_OPTIONS.map(n => <option key={n} value={n}>{n} emails / batch</option>)}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Συχνότητα</label>
                  <select className="input w-full text-sm" value={intervalHours} onChange={e => setIntervalHours(Number(e.target.value))}>
                    {INTERVAL_OPTIONS.map(o => <option key={o.value} value={o.value}>{o.label}</option>)}
                  </select>
                </div>
              </div>

              {/* Time calculator */}
              <div className="bg-purple-50 border border-purple-200 rounded-xl p-4">
                <div className="text-xs font-semibold text-purple-600 uppercase tracking-wider mb-3">📊 Υπολογισμός Αποστολής</div>
                <div className="grid grid-cols-4 gap-3 text-center">
                  {[
                    { val: remaining.length,                       label: 'Επαφές' },
                    { val: Math.ceil(remaining.length / batchSize), label: 'Batches' },
                    { val: INTERVAL_OPTIONS.find(o => o.value === intervalHours)?.label.split(' ')[0], label: 'Μεταξύ batches' },
                    { val: timeEst.label, label: 'Εκτίμηση', cls: 'text-emerald-600' },
                  ].map(({ val, label, cls }) => (
                    <div key={label} className="bg-white rounded-lg p-3 border border-purple-100">
                      <div className={`text-xl font-bold text-purple-700 ${cls || ''}`}>{val}</div>
                      <div className="text-xs text-gray-500">{label}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3 text-sm text-blue-800 space-y-1">
                <div>Το <strong>πρώτο batch ({thisBatch.length} emails)</strong> θα σταλεί τώρα αμέσως.</div>
                <div>Τα επόμενα αυτόματα κάθε <strong>{INTERVAL_OPTIONS.find(o => o.value === intervalHours)?.label}</strong> μέσω server.</div>
                <div className="text-blue-600 text-xs">Δεν χρειάζεται να κρατάτε τη σελίδα ανοιχτή.</div>
              </div>

              {error && <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">⚠️ {error}</div>}

              <div className="flex gap-3 pt-1">
                <button className="btn-secondary flex-1" onClick={() => setStep('audience')}>← Κοινό</button>
                <button className="btn-primary flex-1 bg-purple-600 hover:bg-purple-700" disabled={remaining.length === 0} onClick={() => handleSend(true)}>
                  🤖 Εκκίνηση Αυτόματης
                </button>
              </div>
            </div>
          )}

          {/* ════════════════════════════════════════════════════════ MANUAL CONFIRM */}
          {step === 'confirm' && (
            <div className="space-y-4">

              <AudienceSummary remaining={remaining} allActive={allActive} activeFilters={activeFilters} onEdit={() => setStep('audience')} />

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Μέγεθος Batch</label>
                <select className="input w-full text-sm" value={batchSize} onChange={e => setBatchSize(Number(e.target.value))}>
                  {BATCH_OPTIONS.map(n => <option key={n} value={n}>{n} emails / batch</option>)}
                </select>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 space-y-2 text-sm">
                <div><span className="font-medium text-gray-700">Καμπάνια:</span> {campaign.name}</div>
                <div><span className="font-medium text-gray-700">Θέμα:</span> {campaign.subject}</div>
                <div><span className="font-medium text-gray-700">Από:</span> {campaign.fromName} &lt;{campaign.fromEmail}&gt;</div>
                <div className="border-t border-blue-200 pt-2 grid grid-cols-3 text-center gap-2">
                  <div><div className="text-lg font-bold text-blue-700">{thisBatch.length}</div><div className="text-xs text-gray-500">Στέλνονται τώρα</div></div>
                  <div><div className="text-lg font-bold text-gray-400">{alreadySent}</div><div className="text-xs text-gray-500">Ήδη στάλθηκαν</div></div>
                  <div><div className="text-lg font-bold text-orange-500">{afterThis}</div><div className="text-xs text-gray-500">Επόμενο batch</div></div>
                </div>
              </div>

              <div className="bg-yellow-50 border border-yellow-200 rounded-lg px-4 py-3 text-sm text-yellow-800">
                ⚠️ Θα σταλεί σε <strong>{thisBatch.length}</strong> επαφές. Αυτή η ενέργεια δεν αναιρείται.
              </div>

              {error && <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">⚠️ {error}</div>}

              <div className="flex gap-3 pt-1">
                <button className="btn-secondary flex-1" onClick={() => setStep('audience')}>← Κοινό</button>
                <button className="btn-primary flex-1" disabled={remaining.length === 0} onClick={() => handleSend(false)}>
                  📤 Αποστολή {thisBatch.length} emails
                </button>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}

// ── Audience summary bar ────────────────────────────────────────────────────────
function AudienceSummary({ remaining, allActive, activeFilters, onEdit }) {
  return (
    <div className="flex items-center justify-between bg-blue-50 border border-blue-200 rounded-xl px-4 py-3">
      <div className="text-sm">
        <span className="font-bold text-blue-700 text-lg">{remaining.length}</span>
        <span className="text-gray-500 ml-1.5">επαφές επιλεγμένες</span>
        {activeFilters > 0 && (
          <span className="ml-2 text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full font-semibold">
            {activeFilters} φίλτρα
          </span>
        )}
      </div>
      <button className="text-xs text-blue-600 hover:text-blue-800 font-semibold" onClick={onEdit}>
        ✏️ Επεξεργασία κοινού
      </button>
    </div>
  )
}

// ── Helpers ─────────────────────────────────────────────────────────────────────
function Row({ label, val, cls, border }) {
  return (
    <div className={`flex justify-between ${border ? 'border-t pt-1.5' : ''}`}>
      <span className="text-gray-500">{label}</span>
      <span className={`font-semibold ${cls || ''}`}>{val}</span>
    </div>
  )
}

function ModalShell({ children, onClose, title }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
          {onClose && <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>}
        </div>
        {children}
      </div>
    </div>
  )
}
