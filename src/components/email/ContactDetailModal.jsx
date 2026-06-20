import { useEffect, useState } from 'react'
import { collection, query, where, getDocs, doc, getDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { statusLabel, statusColor, INACTIVE_STATUSES } from '../../utils/emailValidation'
import { computeTags, formatSpend, getDistrict } from '../../utils/contactTags'

// ── Source badge ──────────────────────────────────────────────────────────────

const SOURCE_META = {
  csv_import:      { label: 'CSV / Excel',    cls: 'bg-blue-100 text-blue-700' },
  'resend-webhook':{ label: 'Resend (auto)',   cls: 'bg-purple-100 text-purple-700' },
  manual:          { label: 'Χειροκίνητα',    cls: 'bg-gray-100 text-gray-600' },
}

function SourceBadge({ source }) {
  const meta = SOURCE_META[source] || { label: source || '—', cls: 'bg-gray-100 text-gray-500' }
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${meta.cls}`}>
      {meta.label}
    </span>
  )
}

// ── Date helper ───────────────────────────────────────────────────────────────

function fmt(val) {
  if (!val) return null
  const d = val?.toDate ? val.toDate() : new Date(val)
  if (isNaN(d)) return null
  return d.toLocaleDateString('el-GR', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

// ── Email history item ────────────────────────────────────────────────────────

function HistoryRow({ send, campaignName }) {
  const events = []
  if (send.sentAt)    events.push({ icon: '📤', label: 'Εστάλη',   time: fmt(send.sentAt),    cls: 'text-gray-500' })
  if (send.openedAt)  events.push({ icon: '👁️',  label: 'Ανοίχθηκε', time: fmt(send.openedAt),  cls: 'text-blue-600' })
  if (send.clickedAt) events.push({ icon: '🖱️',  label: 'Κλικ',     time: fmt(send.clickedAt), cls: 'text-green-600' })
  if (send.bouncedAt) events.push({ icon: '⚠️',  label: 'Bounce',   time: fmt(send.bouncedAt), cls: 'text-red-500' })

  const statusBadge = {
    sent:    'bg-gray-100 text-gray-600',
    opened:  'bg-blue-100 text-blue-700',
    bounced: 'bg-red-100 text-red-600',
    failed:  'bg-orange-100 text-orange-600',
  }[send.status] || 'bg-gray-100 text-gray-500'

  return (
    <div className="border border-gray-100 rounded-xl p-4 space-y-3">
      {/* Campaign name + status */}
      <div className="flex items-start justify-between gap-2 flex-wrap">
        <div className="font-medium text-gray-800 text-sm">{campaignName || send.campaignId}</div>
        <span className={`badge text-xs ${statusBadge}`}>{send.status}</span>
      </div>

      {/* Event timeline */}
      <div className="flex flex-wrap gap-x-5 gap-y-1">
        {events.map((e, i) => (
          <div key={i} className={`flex items-center gap-1 text-xs ${e.cls}`}>
            <span>{e.icon}</span>
            <span className="font-medium">{e.label}</span>
            {e.time && <span className="text-gray-400">· {e.time}</span>}
          </div>
        ))}
      </div>

      {send.failedReason && (
        <div className="text-xs text-red-500 bg-red-50 rounded px-2 py-1">
          Αιτία αποτυχίας: {send.failedReason}
        </div>
      )}
    </div>
  )
}

// ── Main modal ────────────────────────────────────────────────────────────────

export default function ContactDetailModal({ contact, onClose, onStatusChange }) {
  const [sends, setSends]           = useState([])
  const [campaigns, setCampaigns]   = useState({}) // id → name
  const [loading, setLoading]       = useState(true)
  const [saving, setSaving]         = useState(false)

  useEffect(() => {
    async function load() {
      try {
        // Fetch email sends for this contact
        const sendsSnap = await getDocs(
          query(collection(db, 'email_sends'), where('email', '==', contact.email))
        )
        const sendDocs = sendsSnap.docs.map(d => ({ id: d.id, ...d.data() }))
        sendDocs.sort((a, b) => {
          const ta = a.sentAt?.toDate?.() || new Date(a.sentAt || 0)
          const tb = b.sentAt?.toDate?.() || new Date(b.sentAt || 0)
          return tb - ta // newest first
        })
        setSends(sendDocs)

        // Fetch unique campaign names
        const campaignIds = [...new Set(sendDocs.map(s => s.campaignId).filter(Boolean))]
        const nameMap = {}
        await Promise.all(campaignIds.map(async id => {
          try {
            const snap = await getDoc(doc(db, 'email_campaigns', id))
            if (snap.exists()) nameMap[id] = snap.data().name || id
          } catch { nameMap[id] = id }
        }))
        setCampaigns(nameMap)
      } catch (e) {
        console.error('ContactDetailModal load error:', e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [contact.email])

  async function handleStatusChange(newStatus) {
    setSaving(true)
    try {
      const update = { status: newStatus, updatedAt: serverTimestamp() }
      if (newStatus === 'unsubscribed') update.unsubscribedAt = serverTimestamp()
      if (newStatus === 'active') {
        update.unsubscribedAt = null
        update.bouncedAt      = null
        update.complainedAt   = null
        update.failedAt       = null
        update.lastEvent      = null
      }
      await updateDoc(doc(db, 'email_contacts', contact.id), update)
      onStatusChange?.({ ...contact, status: newStatus })
    } finally {
      setSaving(false)
    }
  }

  const isInactive = INACTIVE_STATUSES.has(contact.status)

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="card w-full max-w-lg max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>

        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-lg font-semibold text-gray-900">Στοιχεία Επαφής</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl leading-none">✕</button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 p-6 space-y-5">

          {/* Contact card */}
          <div className="bg-gray-50 rounded-xl p-4 space-y-3">
            <div className="flex items-start justify-between gap-3 flex-wrap">
              <div>
                <div className="font-semibold text-gray-900 text-base flex items-center gap-1.5">
                  {contact.name || <span className="text-gray-400 italic">Χωρίς όνομα</span>}
                  {contact.lastEngagedAt && contact.status === 'active' && (
                    <span title="Engaged — έχει ανοίξει/κάνει κλικ">🔥</span>
                  )}
                </div>
                <div className="text-sm text-gray-500 mt-0.5">{contact.email}</div>
                {contact.phone && <div className="text-sm text-gray-500">{contact.phone}</div>}
              </div>
              <div className="flex flex-col items-end gap-1.5">
                <span className={`badge text-xs ${statusColor(contact.status)}`}>
                  {statusLabel(contact.status)}
                </span>
                <SourceBadge source={contact.source} />
              </div>
            </div>

            {/* Timestamps */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs text-gray-500 pt-1 border-t border-gray-200">
              {contact.addedAt && (
                <div><span className="font-medium text-gray-600">Προστέθηκε:</span> {fmt(contact.addedAt)}</div>
              )}
              {contact.importedAt && (
                <div><span className="font-medium text-gray-600">Εισήχθη:</span> {fmt(contact.importedAt)}</div>
              )}
              {contact.lastEngagedAt && (
                <div><span className="font-medium text-gray-600">Τελ. ενέργεια:</span> {fmt(contact.lastEngagedAt)}</div>
              )}
              {contact.lastSentAt && (
                <div><span className="font-medium text-gray-600">Τελ. αποστολή:</span> {fmt(contact.lastSentAt)}</div>
              )}
              {contact.unsubscribedAt && (
                <div className="text-red-500"><span className="font-medium">Opt-out:</span> {fmt(contact.unsubscribedAt)}</div>
              )}
              {contact.bouncedAt && (
                <div className="text-red-500"><span className="font-medium">Bounce:</span> {fmt(contact.bouncedAt)}</div>
              )}
              {contact.complainedAt && (
                <div className="text-purple-600"><span className="font-medium">Spam:</span> {fmt(contact.complainedAt)}</div>
              )}
            </div>
          </div>

          {/* Tags + CRM snapshot */}
          {(() => {
            const tags    = computeTags(contact)
            const spend   = formatSpend(contact.totalSpend)
            const appts   = parseInt(contact.appointmentCount) || 0
            const district = getDistrict(contact.city)
            const csvTags = Array.isArray(contact.tags) ? contact.tags : []
            return (
              <div className="space-y-3">
                {/* Spend + appointments highlight */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-4 py-3 text-center">
                    <div className="text-xs text-emerald-600 font-medium mb-0.5">Σύνολο Δαπανών</div>
                    <div className="text-xl font-bold text-emerald-700">{spend || '€0'}</div>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-center">
                    <div className="text-xs text-blue-600 font-medium mb-0.5">Ραντεβού</div>
                    <div className="text-xl font-bold text-blue-700">{appts}</div>
                  </div>
                </div>

                {/* Auto tags */}
                {tags.length > 0 && (
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Tags</div>
                    <div className="flex flex-wrap gap-1.5">
                      {tags.map(t => (
                        <span key={t.key} className={`inline-block px-2.5 py-1 rounded-full text-xs font-medium border ${t.cls}`}>
                          {t.label}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CRM raw tags */}
                {csvTags.length > 0 && (
                  <div>
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">CRM Categories</div>
                    <div className="flex flex-wrap gap-1.5">
                      {csvTags.map(t => (
                        <span key={t} className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* CRM info row */}
                {(contact.omniluxStatus || contact.omniluxSource || district || contact.language) && (
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs bg-gray-50 rounded-xl p-3">
                    {contact.omniluxStatus && (
                      <div><span className="font-medium text-gray-500">CRM Status: </span><span className="text-gray-700">{contact.omniluxStatus}</span></div>
                    )}
                    {contact.omniluxSource && (
                      <div><span className="font-medium text-gray-500">Πηγή: </span><span className="text-gray-700">{contact.omniluxSource}</span></div>
                    )}
                    {district && (
                      <div><span className="font-medium text-gray-500">Περιοχή: </span><span className="text-gray-700">{district}</span></div>
                    )}
                    {contact.language && (
                      <div><span className="font-medium text-gray-500">Γλώσσα: </span><span className="text-gray-700">{contact.language}</span></div>
                    )}
                    {contact.lastAppointmentAt && (
                      <div className="col-span-2"><span className="font-medium text-gray-500">Τελ. ραντεβού: </span><span className="text-gray-700">{fmt(contact.lastAppointmentAt)}</span></div>
                    )}
                  </div>
                )}
              </div>
            )
          })()}

          {/* Status action */}
          <div className="flex gap-2">
            {contact.status === 'active' ? (
              <button
                disabled={saving}
                onClick={() => handleStatusChange('unsubscribed')}
                className="flex-1 text-sm py-2 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 transition-colors disabled:opacity-50">
                Opt-out επαφής
              </button>
            ) : (
              <button
                disabled={saving}
                onClick={() => handleStatusChange('active')}
                className="flex-1 text-sm py-2 rounded-lg border border-green-300 text-green-700 hover:bg-green-50 transition-colors disabled:opacity-50">
                Επαναφορά σε ενεργό
              </button>
            )}
          </div>

          {/* Email history */}
          <div>
            <div className="font-semibold text-gray-700 text-sm mb-3 flex items-center gap-2">
              Ιστορικό Emails
              {!loading && (
                <span className="text-xs font-normal text-gray-400">({sends.length} αποστολές)</span>
              )}
            </div>

            {loading ? (
              <div className="text-center py-8 text-gray-400 text-sm">Φόρτωση…</div>
            ) : sends.length === 0 ? (
              <div className="text-center py-8 text-gray-400 text-sm bg-gray-50 rounded-xl">
                Δεν έχει λάβει κανένα email ακόμα.
              </div>
            ) : (
              <div className="space-y-2">
                {sends.map(s => (
                  <HistoryRow key={s.id} send={s} campaignName={campaigns[s.campaignId]} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
