import { useState, useMemo } from 'react'
import { doc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { statusLabel, statusColor, INACTIVE_STATUSES, isValidEmail } from '../../utils/emailValidation'
import { DISTRICTS, getDistrict, computeTags, formatSpend, SPEND_TIERS, APPT_TIERS } from '../../utils/contactTags'
import ContactUploadModal from './ContactUploadModal'
import ContactDetailModal from './ContactDetailModal'

const PAGE_SIZE = 100

const SOURCE_META = {
  csv_import:       { label: 'CSV',          cls: 'bg-blue-100 text-blue-700' },
  'resend-webhook': { label: 'Resend',        cls: 'bg-purple-100 text-purple-700' },
  manual:           { label: 'Χειροκίνητα',  cls: 'bg-gray-100 text-gray-600' },
}
function SourceBadge({ source }) {
  const m = SOURCE_META[source] || { label: source || '—', cls: 'bg-gray-100 text-gray-400' }
  return <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${m.cls}`}>{m.label}</span>
}

function fmtDate(val) {
  if (!val) return null
  const d = val?.toDate ? val.toDate() : new Date(val)
  if (isNaN(d)) return null
  return d.toLocaleDateString('el-GR', { day: '2-digit', month: 'short', year: 'numeric' })
}

const STATUS_FILTERS = ['all', 'active', 'unsubscribed', 'bounced', 'complained', 'failed', 'invalid']
const FILTER_LABEL   = {
  all: 'Όλοι', active: 'Ενεργοί', unsubscribed: 'Opt-out',
  bounced: 'Bounce', complained: 'Spam', failed: 'Αποτυχία', invalid: 'Άκυρα',
}

const TREATMENT_LABELS = {
  injectables:  { label: 'Injectables', icon: '💉' },
  laser:        { label: 'Laser',       icon: '⚡' },
  facial:       { label: 'Facial',      icon: '✨' },
  consultation: { label: 'Consultation',icon: '📋' },
  other:        { label: 'Other',       icon: '🔖' },
}

const EMPTY_XFILTER = {
  districts:           [],
  spendTiers:          [],
  apptTiers:           [],
  treatmentCategories: [],
  omniluxStatuses:     [],
  languages:           [],
  sources:             [],
}

function actionMeta(status) {
  if (status === 'active') return { label: 'Opt-out', cls: 'border-red-200 text-red-500 hover:bg-red-50', next: 'unsubscribed' }
  return { label: 'Επαναφορά', cls: 'border-green-300 text-green-700 hover:bg-green-50', next: 'active' }
}

function toggle(arr, val) {
  return arr.includes(val) ? arr.filter(v => v !== val) : [...arr, val]
}

function FChip({ label, count, active, onClick, color = 'blue' }) {
  const colors = {
    blue:   active ? 'bg-blue-600 text-white border-blue-600'       : 'bg-white text-gray-600 border-gray-200 hover:border-blue-400',
    green:  active ? 'bg-emerald-600 text-white border-emerald-600' : 'bg-white text-gray-600 border-gray-200 hover:border-emerald-400',
    purple: active ? 'bg-purple-600 text-white border-purple-600'   : 'bg-white text-gray-600 border-gray-200 hover:border-purple-400',
    orange: active ? 'bg-orange-500 text-white border-orange-500'   : 'bg-white text-gray-600 border-gray-200 hover:border-orange-400',
  }
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium border transition-colors ${colors[color]}`}
    >
      {label}
      {count != null && (
        <span className={`text-xs font-semibold ${active ? 'opacity-75' : 'text-gray-400'}`}>{count}</span>
      )}
    </button>
  )
}

function FilterGroup({ title, children }) {
  return (
    <div className="space-y-1.5">
      <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{title}</div>
      <div className="flex flex-wrap gap-1.5">{children}</div>
    </div>
  )
}

export default function ContactsTab({ contacts, loading, onContactsChange }) {
  const [search, setSearch]               = useState('')
  const [statusFilter, setStatusFilter]   = useState('all')
  const [xFilter, setXFilter]             = useState(EMPTY_XFILTER)
  const [showFilters, setShowFilters]     = useState(false)
  const [showUpload, setShowUpload]       = useState(false)
  const [selectedContact, setSelectedContact] = useState(null)
  const [page, setPage]                   = useState(0)

  // Reset to page 0 whenever filters change
  function handleStatusFilter(s) { setStatusFilter(s); setPage(0) }
  function handleSearch(v)       { setSearch(v);        setPage(0) }
  function handleXFilter(fn)     { setXFilter(fn);      setPage(0) }

  const available = useMemo(() => {
    const cntField = (field) => {
      const m = {}
      for (const c of contacts) {
        const v = (c[field] || '').trim()
        if (v) m[v] = (m[v] || 0) + 1
      }
      return Object.entries(m).sort((a, b) => b[1] - a[1])
    }
    // District counts (mapped from raw city values)
    const districtCounts = {}
    for (const c of contacts) {
      const d = getDistrict(c.city)
      if (d) districtCounts[d] = (districtCounts[d] || 0) + 1
    }
    // Spend tier counts
    const spendCounts = {}
    for (const t of SPEND_TIERS) {
      spendCounts[t.id] = contacts.filter(t.match).length
    }
    // Appointment tier counts
    const apptCounts = {}
    for (const t of APPT_TIERS) {
      apptCounts[t.id] = contacts.filter(t.match).length
    }
    const treatCats = {}
    for (const c of contacts) {
      const cats = Array.isArray(c.treatmentCategories) ? c.treatmentCategories : []
      for (const cat of cats) treatCats[cat] = (treatCats[cat] || 0) + 1
    }
    return {
      districtCounts,
      spendCounts,
      apptCounts,
      omniluxStatuses: cntField('omniluxStatus'),
      languages:       cntField('language'),
      sources:         cntField('omniluxSource'),
      treatCats,
    }
  }, [contacts])

  const filtered = useMemo(() => {
    let base = contacts
    if (statusFilter !== 'all') base = base.filter(c => c.status === statusFilter)

    if (xFilter.districts.length)
      base = base.filter(c => xFilter.districts.includes(getDistrict(c.city)))
    if (xFilter.spendTiers.length)
      base = base.filter(c => SPEND_TIERS.filter(t => xFilter.spendTiers.includes(t.id)).some(t => t.match(c)))
    if (xFilter.apptTiers.length)
      base = base.filter(c => APPT_TIERS.filter(t => xFilter.apptTiers.includes(t.id)).some(t => t.match(c)))
    if (xFilter.treatmentCategories.length)
      base = base.filter(c => {
        const cats = Array.isArray(c.treatmentCategories) ? c.treatmentCategories : []
        return xFilter.treatmentCategories.some(cat => cats.includes(cat))
      })
    if (xFilter.omniluxStatuses.length)
      base = base.filter(c => xFilter.omniluxStatuses.includes((c.omniluxStatus || '').trim()))
    if (xFilter.languages.length)
      base = base.filter(c => xFilter.languages.includes((c.language || '').trim()))
    if (xFilter.sources.length)
      base = base.filter(c => xFilter.sources.includes((c.omniluxSource || '').trim()))

    if (search.trim()) {
      const q = search.toLowerCase()
      base = base.filter(c =>
        c.email?.toLowerCase().includes(q) ||
        c.name?.toLowerCase().includes(q) ||
        c.phone?.includes(q)
      )
    }
    return base
  }, [contacts, statusFilter, xFilter, search])

  const counts = useMemo(() => {
    const m = { all: contacts.length }
    STATUS_FILTERS.forEach(s => { if (s !== 'all') m[s] = contacts.filter(c => c.status === s).length })
    return m
  }, [contacts])

  const activeXFilters =
    xFilter.districts.length + xFilter.spendTiers.length + xFilter.apptTiers.length +
    xFilter.treatmentCategories.length + xFilter.omniluxStatuses.length +
    xFilter.languages.length + xFilter.sources.length

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const pageContacts = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE)

  async function setContactStatus(contact, newStatus) {
    const update = { status: newStatus, updatedAt: serverTimestamp() }
    if (newStatus === 'unsubscribed') {
      update.unsubscribedAt     = serverTimestamp()
      update.optOutCampaignId   = null
      update.optOutCampaignName = null
      update.optOutSource       = 'manual'
    }
    if (newStatus === 'active') {
      update.unsubscribedAt     = null
      update.bouncedAt          = null
      update.complainedAt       = null
      update.failedAt           = null
      update.lastEvent          = null
      update.optOutCampaignId   = null
      update.optOutCampaignName = null
      update.optOutSource       = null
    }
    await updateDoc(doc(db, 'email_contacts', contact.id), update)
    // Update local state so the UI reflects the change immediately
    onContactsChange(prev => prev.map(c => c.id === contact.id ? { ...c, ...update } : c))
  }

  const inactiveTotal = (counts.bounced || 0) + (counts.complained || 0) + (counts.failed || 0) + (counts.unsubscribed || 0)

  return (
    <div className="space-y-4">

      {/* Inactive warning */}
      {inactiveTotal > 0 && statusFilter === 'all' && activeXFilters === 0 && (
        <div className="bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-sm text-amber-800 flex items-center gap-2">
          <span className="text-lg">⚠️</span>
          <span>
            <strong>{inactiveTotal}</strong> επαφές είναι ανενεργές (bounce / spam / αποτυχία / opt-out) και εξαιρούνται αυτόματα από κάθε αποστολή.
          </span>
        </div>
      )}

      {/* Invalid email warning */}
      {(() => {
        const noEmail = contacts.filter(c => c.status === 'active' && !isValidEmail(c.email)).length
        if (!noEmail || statusFilter !== 'all' || activeXFilters !== 0) return null
        return (
          <div className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-600 flex items-center gap-2">
            <span className="text-lg">📭</span>
            <span>
              <strong>{noEmail}</strong> ενεργές επαφές δεν έχουν έγκυρο email και δεν θα συμπεριληφθούν σε καμπάνιες.
              {' '}Αυτός είναι ο λόγος που ο αριθμός στην αποστολή είναι <strong>{counts.active - noEmail}</strong> αντί για <strong>{counts.active}</strong>.
            </span>
          </div>
        )
      })()}

      {/* Status filter row */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          {STATUS_FILTERS.map(s => {
            const cnt = counts[s] || 0
            if (s !== 'all' && s !== 'active' && cnt === 0) return null
            return (
              <button key={s} onClick={() => handleStatusFilter(s)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-colors ${
                  statusFilter === s
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
                }`}>
                {FILTER_LABEL[s]}
                <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-xs ${
                  statusFilter === s ? 'bg-white/20'
                  : INACTIVE_STATUSES.has(s) && cnt > 0 ? 'bg-red-100 text-red-600'
                  : 'opacity-60'
                }`}>{cnt}</span>
              </button>
            )
          })}
        </div>
        <button className="btn-primary text-sm" onClick={() => setShowUpload(true)}>
          + Εισαγωγή CSV / Excel
        </button>
      </div>

      {/* Search + Filter toggle row */}
      <div className="flex items-center gap-2">
        <input
          className="input flex-1 max-w-sm"
          placeholder="Αναζήτηση ονόματος, email, τηλεφώνου…"
          value={search}
          onChange={e => handleSearch(e.target.value)}
        />
        <button
          onClick={() => setShowFilters(v => !v)}
          className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium border transition-colors ${
            showFilters || activeXFilters > 0
              ? 'bg-blue-600 text-white border-blue-600'
              : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
          }`}
        >
          <span>🔽 Φίλτρα</span>
          {activeXFilters > 0 && (
            <span className="bg-white/20 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
              {activeXFilters}
            </span>
          )}
        </button>
        {activeXFilters > 0 && (
          <button
            onClick={() => { setXFilter(EMPTY_XFILTER); setPage(0) }}
            className="text-xs text-gray-400 hover:text-red-500 font-medium transition-colors"
          >
            ✕ Καθαρισμός
          </button>
        )}
      </div>

      {/* Expandable filter panel */}
      {showFilters && (
        <div className="border border-gray-200 rounded-xl bg-gray-50 p-4 space-y-4">

          {Object.keys(available.districtCounts).length > 0 && (
            <FilterGroup title="📍 Περιοχή">
              {DISTRICTS.map(({ id, color }) => {
                const cnt = available.districtCounts[id]
                if (!cnt) return null
                return (
                  <FChip key={id} label={id} count={cnt}
                    active={xFilter.districts.includes(id)}
                    color={color}
                    onClick={() => handleXFilter(f => ({ ...f, districts: toggle(f.districts, id) }))}
                  />
                )
              })}
            </FilterGroup>
          )}

          {/* Spend tiers */}
          <FilterGroup title="💶 Δαπάνη">
            {SPEND_TIERS.map(t => {
              const cnt = available.spendCounts[t.id] || 0
              if (!cnt) return null
              return (
                <FChip key={t.id} label={t.label} count={cnt}
                  active={xFilter.spendTiers.includes(t.id)}
                  color="green"
                  onClick={() => handleXFilter(f => ({ ...f, spendTiers: toggle(f.spendTiers, t.id) }))}
                />
              )
            })}
          </FilterGroup>

          {/* Appointment tiers */}
          <FilterGroup title="📅 Ραντεβού">
            {APPT_TIERS.map(t => {
              const cnt = available.apptCounts[t.id] || 0
              if (!cnt) return null
              return (
                <FChip key={t.id} label={t.label} count={cnt}
                  active={xFilter.apptTiers.includes(t.id)}
                  color="purple"
                  onClick={() => handleXFilter(f => ({ ...f, apptTiers: toggle(f.apptTiers, t.id) }))}
                />
              )
            })}
          </FilterGroup>

          {Object.keys(available.treatCats).length > 0 && (
            <FilterGroup title="💆 Κατηγορία Θεραπείας">
              {Object.entries(TREATMENT_LABELS).map(([key, { label, icon }]) => {
                const cnt = available.treatCats[key]
                if (!cnt) return null
                return (
                  <FChip key={key} label={`${icon} ${label}`} count={cnt}
                    active={xFilter.treatmentCategories.includes(key)}
                    color="green"
                    onClick={() => handleXFilter(f => ({ ...f, treatmentCategories: toggle(f.treatmentCategories, key) }))}
                  />
                )
              })}
            </FilterGroup>
          )}

          {available.omniluxStatuses.length > 0 && (
            <FilterGroup title="👤 Status CRM">
              {available.omniluxStatuses.map(([st, cnt]) => (
                <FChip key={st} label={st} count={cnt}
                  active={xFilter.omniluxStatuses.includes(st)}
                  color="orange"
                  onClick={() => handleXFilter(f => ({ ...f, omniluxStatuses: toggle(f.omniluxStatuses, st) }))}
                />
              ))}
            </FilterGroup>
          )}

          {available.sources.length > 0 && (
            <FilterGroup title="📋 Πηγή">
              {available.sources.map(([src, cnt]) => (
                <FChip key={src} label={src} count={cnt}
                  active={xFilter.sources.includes(src)}
                  color="purple"
                  onClick={() => handleXFilter(f => ({ ...f, sources: toggle(f.sources, src) }))}
                />
              ))}
            </FilterGroup>
          )}

          {available.languages.length > 0 && (
            <FilterGroup title="🌐 Γλώσσα">
              {available.languages.map(([lang, cnt]) => (
                <FChip key={lang} label={lang} count={cnt}
                  active={xFilter.languages.includes(lang)}
                  onClick={() => handleXFilter(f => ({ ...f, languages: toggle(f.languages, lang) }))}
                />
              ))}
            </FilterGroup>
          )}
        </div>
      )}

      {/* Active filter chips */}
      {activeXFilters > 0 && (
        <div className="flex flex-wrap gap-1.5 text-xs">
          {xFilter.districts.map(d => (
            <span key={d} className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
              📍 {d}
              <button onClick={() => handleXFilter(f => ({ ...f, districts: f.districts.filter(v => v !== d) }))} className="hover:text-blue-900">✕</button>
            </span>
          ))}
          {xFilter.spendTiers.map(id => {
            const t = SPEND_TIERS.find(t => t.id === id)
            return t ? (
              <span key={id} className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
                💶 {t.label}
                <button onClick={() => handleXFilter(f => ({ ...f, spendTiers: f.spendTiers.filter(v => v !== id) }))} className="hover:text-emerald-900">✕</button>
              </span>
            ) : null
          })}
          {xFilter.apptTiers.map(id => {
            const t = APPT_TIERS.find(t => t.id === id)
            return t ? (
              <span key={id} className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
                📅 {t.label}
                <button onClick={() => handleXFilter(f => ({ ...f, apptTiers: f.apptTiers.filter(v => v !== id) }))} className="hover:text-purple-900">✕</button>
              </span>
            ) : null
          })}
          {xFilter.treatmentCategories.map(c => (
            <span key={c} className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-medium">
              {TREATMENT_LABELS[c]?.icon} {TREATMENT_LABELS[c]?.label || c}
              <button onClick={() => handleXFilter(f => ({ ...f, treatmentCategories: f.treatmentCategories.filter(v => v !== c) }))} className="hover:text-emerald-900">✕</button>
            </span>
          ))}
          {xFilter.omniluxStatuses.map(c => (
            <span key={c} className="inline-flex items-center gap-1 bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">
              👤 {c}
              <button onClick={() => handleXFilter(f => ({ ...f, omniluxStatuses: f.omniluxStatuses.filter(v => v !== c) }))} className="hover:text-orange-900">✕</button>
            </span>
          ))}
          {xFilter.sources.map(c => (
            <span key={c} className="inline-flex items-center gap-1 bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-medium">
              📋 {c}
              <button onClick={() => handleXFilter(f => ({ ...f, sources: f.sources.filter(v => v !== c) }))} className="hover:text-purple-900">✕</button>
            </span>
          ))}
          {xFilter.languages.map(c => (
            <span key={c} className="inline-flex items-center gap-1 bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-medium">
              🌐 {c}
              <button onClick={() => handleXFilter(f => ({ ...f, languages: f.languages.filter(v => v !== c) }))} className="hover:text-blue-900">✕</button>
            </span>
          ))}
        </div>
      )}

      {/* Table */}
      {loading ? (
        <div className="card p-8 text-center space-y-3">
          <div className="inline-block w-8 h-8 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin" />
          <div className="text-gray-400 text-sm">Φόρτωση επαφών…</div>
        </div>
      ) : filtered.length === 0 ? (
        <div className="text-center py-20 text-gray-400">
          <div className="text-4xl mb-3">📭</div>
          <div>Δεν βρέθηκαν επαφές</div>
          {contacts.length === 0 && (
            <button className="mt-4 btn-primary text-sm" onClick={() => setShowUpload(true)}>
              + Εισαγωγή CSV / Excel
            </button>
          )}
        </div>
      ) : (
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">Όνομα</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">Email</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500 hidden sm:table-cell">Τηλέφωνο</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500 hidden md:table-cell">Πηγή</th>
                  <th className="text-left px-4 py-3 font-medium text-gray-500">Status</th>
                  {statusFilter === 'unsubscribed' && (
                    <th className="text-left px-4 py-3 font-medium text-gray-500 hidden lg:table-cell">Καμπάνια opt-out</th>
                  )}
                  <th className="text-left px-4 py-3 font-medium text-gray-500 hidden lg:table-cell">Αποστολές</th>
                  <th className="px-4 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {pageContacts.map(c => {
                  const { label, cls, next } = actionMeta(c.status)
                  return (
                    <tr key={c.id}
                      onClick={() => setSelectedContact(c)}
                      className={`hover:bg-blue-50 cursor-pointer transition-colors ${INACTIVE_STATUSES.has(c.status) ? 'opacity-70' : ''}`}>
                      <td className="px-4 py-3 font-medium text-gray-900">
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {c.name || <span className="text-gray-400 italic text-xs">Χωρίς όνομα</span>}
                          {c.lastEngagedAt && c.status === 'active' && (
                            <span title="Engaged">🔥</span>
                          )}
                        </div>
                        {/* Compact tags row */}
                        <div className="flex flex-wrap gap-1 mt-1">
                          {computeTags(c).slice(0, 4).map(t => (
                            <span key={t.key} className={`inline-block px-1.5 py-0.5 rounded text-[10px] font-medium border ${t.cls}`}>
                              {t.label}
                            </span>
                          ))}
                          {formatSpend(c.totalSpend) && (
                            <span className="inline-block px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                              {formatSpend(c.totalSpend)}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-600 text-xs">{c.email}</td>
                      <td className="px-4 py-3 text-gray-500 text-sm hidden sm:table-cell">{c.phone || '—'}</td>
                      <td className="px-4 py-3 hidden md:table-cell">
                        <div className="flex flex-col gap-0.5">
                          <SourceBadge source={c.source} />
                          {(c.addedAt || c.importedAt) && (
                            <span className="text-xs text-gray-400">
                              {fmtDate(c.addedAt || c.importedAt)}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-4 py-3">
                        <span className={`badge text-xs ${statusColor(c.status)}`}>
                          {statusLabel(c.status)}
                        </span>
                      </td>
                      {statusFilter === 'unsubscribed' && (
                        <td className="px-4 py-3 hidden lg:table-cell">
                          {c.optOutCampaignName
                            ? <span className="text-xs text-gray-700 font-medium">{c.optOutCampaignName}</span>
                            : c.optOutSource === 'manual'
                              ? <span className="text-xs text-gray-400 italic">Χειροκίνητα</span>
                              : <span className="text-xs text-gray-300">—</span>
                          }
                        </td>
                      )}
                      <td className="px-4 py-3 text-gray-500 hidden lg:table-cell">{c.sendCount || 0}</td>
                      <td className="px-4 py-3" onClick={e => e.stopPropagation()}>
                        <button
                          onClick={() => setContactStatus(c, next)}
                          className={`text-xs px-2 py-1 rounded-md border transition-colors ${cls}`}>
                          {label}
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Footer: count + pagination */}
          <div className="px-4 py-2 border-t bg-gray-50 flex items-center justify-between gap-4 flex-wrap text-xs text-gray-400">
            <span>
              Εμφανίζονται {page * PAGE_SIZE + 1}–{Math.min((page + 1) * PAGE_SIZE, filtered.length)} από {filtered.length} επαφές
              {statusFilter === 'active' && activeXFilters === 0 && (
                <span className="ml-2 text-green-600 font-medium">· {counts.active} θα λάβουν την επόμενη καμπάνια</span>
              )}
            </span>
            {totalPages > 1 && (
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setPage(0)}
                  disabled={page === 0}
                  className="px-2 py-1 rounded border border-gray-200 hover:border-blue-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                  «
                </button>
                <button
                  onClick={() => setPage(p => p - 1)}
                  disabled={page === 0}
                  className="px-2 py-1 rounded border border-gray-200 hover:border-blue-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                  ‹
                </button>
                <span className="px-2 text-gray-500 font-medium">{page + 1} / {totalPages}</span>
                <button
                  onClick={() => setPage(p => p + 1)}
                  disabled={page >= totalPages - 1}
                  className="px-2 py-1 rounded border border-gray-200 hover:border-blue-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                  ›
                </button>
                <button
                  onClick={() => setPage(totalPages - 1)}
                  disabled={page >= totalPages - 1}
                  className="px-2 py-1 rounded border border-gray-200 hover:border-blue-400 disabled:opacity-30 disabled:cursor-not-allowed transition-colors">
                  »
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {showUpload && (
        <ContactUploadModal
          onClose={() => setShowUpload(false)}
          existingContacts={contacts}
        />
      )}

      {selectedContact && (
        <ContactDetailModal
          contact={selectedContact}
          onClose={() => setSelectedContact(null)}
          onStatusChange={updated => setSelectedContact(updated)}
        />
      )}
    </div>
  )
}
