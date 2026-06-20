import { useState, useEffect, useRef } from 'react'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { loadContactsCache, saveContactsCache, STALE_MS } from '../../utils/contactsCache'
import ContactsTab from './ContactsTab'
import CampaignsTab from './CampaignsTab'
import MetricsTab from './MetricsTab'
import TemplatesTab from './TemplatesTab'
import MyProgressTab from './MyProgressTab'

const TABS = [
  { id: 'contacts',  label: '👥 Επαφές' },
  { id: 'campaigns', label: '📧 Καμπάνιες' },
  { id: 'templates', label: '🎨 Templates' },
  { id: 'metrics',   label: '📊 Μετρικά' },
  { id: 'progress',  label: '🚀 My Progress' },
]

function fmtSync(ts) {
  if (!ts) return ''
  return new Date(ts).toLocaleString('el-GR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
}

// Safety net: collapse any contacts that share an email so a person can
// never appear (or be emailed) twice — even if the cache or DB has a stray
// duplicate. When duplicates exist, keep the suppressed one (opt-out/bounce/
// spam) so we never email someone who unsubscribed on their other record.
const SUPPRESSED = new Set(['opt-out', 'optout', 'unsubscribed', 'bounced', 'bounce', 'spam', 'complained'])
export function dedupeByEmail(list) {
  const byEmail = new Map()
  for (const c of list) {
    const key = (c.email || '').trim().toLowerCase()
    if (!key) continue
    const existing = byEmail.get(key)
    if (!existing) { byEmail.set(key, c); continue }
    const curSupp  = SUPPRESSED.has((c.status || '').toLowerCase())
    const prevSupp = SUPPRESSED.has((existing.status || '').toLowerCase())
    if (curSupp && !prevSupp) byEmail.set(key, c)         // prefer suppressed record
  }
  return [...byEmail.values()]
}

export default function EmailMarketing() {
  const [tab, setTab]                 = useState('contacts')
  const [contacts, setContacts]       = useState([])
  const [contactsLoading, setContactsLoading] = useState(true)
  const [refreshing, setRefreshing]   = useState(false)
  const [lastSync, setLastSync]       = useState(null)
  const [error, setError]             = useState(null)
  const loadedRef = useRef(false)   // true once contacts came from cache or server
  const saveTimer = useRef(null)

  // Fetch fresh contacts from Firestore (~15k reads — only on demand / stale cache)
  async function fetchFresh() {
    setRefreshing(true)
    setError(null)
    try {
      const snap = await getDocs(query(collection(db, 'email_contacts'), orderBy('email')))
      const list = dedupeByEmail(snap.docs.map(d => ({ id: d.id, ...d.data() })))
      setContacts(list)
      const now = Date.now()
      setLastSync(now)
      loadedRef.current = true
      await saveContactsCache(list)
    } catch (err) {
      console.error('Failed to load contacts', err)
      setError('Δεν ήταν δυνατή η φόρτωση των επαφών. Πιθανόν πρόβλημα σύνδεσης ή ημερήσιου ορίου της βάσης.')
    } finally {
      setRefreshing(false)
      setContactsLoading(false)
    }
  }

  // On mount: serve from cache instantly; hit the server only if cache is missing or stale
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const cached = await loadContactsCache()
      if (cancelled) return
      if (cached?.contacts?.length) {
        const deduped = dedupeByEmail(cached.contacts)
        setContacts(deduped)
        setLastSync(cached.savedAt)
        setContactsLoading(false)
        loadedRef.current = true
        // if the cache still carried duplicates, it's from before the merge —
        // refresh from Firestore now rather than waiting for the 24h staleness
        if (deduped.length < cached.contacts.length || Date.now() - cached.savedAt > STALE_MS) fetchFresh()
      } else {
        fetchFresh()
      }
    })()
    return () => { cancelled = true }
  }, [])

  // Keep the cache in sync with local edits (opt-out, restore, uploads...)
  useEffect(() => {
    if (!loadedRef.current || contacts.length === 0) return
    clearTimeout(saveTimer.current)
    saveTimer.current = setTimeout(() => saveContactsCache(contacts), 1500)
    return () => clearTimeout(saveTimer.current)
  }, [contacts])

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 flex-wrap">
        <span className="text-2xl">📧</span>
        <div className="flex-1 min-w-[220px]">
          <h1 className="text-xl font-bold text-gray-900">Email Marketing</h1>
          <p className="text-sm text-gray-500">Διαχείριση επαφών, αποστολή καμπανιών, μετρικά</p>
        </div>
        <div className="flex items-center gap-2">
          {lastSync && (
            <span className="text-xs text-gray-400">Συγχρονισμός: {fmtSync(lastSync)}</span>
          )}
          <button
            onClick={fetchFresh}
            disabled={refreshing}
            className="px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-300 bg-white text-gray-600 hover:border-blue-400 hover:text-blue-700 transition-colors disabled:opacity-50"
            title="Φέρνει τις τελευταίες επαφές από τη βάση"
          >
            {refreshing ? '⏳ Ανανέωση…' : '🔄 Ανανέωση'}
          </button>
        </div>
      </div>

      {/* Error banner with retry */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700 flex items-center justify-between gap-3 flex-wrap">
          <span>⚠️ {error}</span>
          <button onClick={fetchFresh} className="px-3 py-1 rounded-lg bg-red-600 text-white text-xs font-semibold hover:bg-red-700">
            Δοκίμασε ξανά
          </button>
        </div>
      )}

      {/* Tab bar — always clickable, even while contacts load */}
      <div className="flex gap-1 bg-gray-100 rounded-xl p-1 w-fit">
        {TABS.map(t => (
          <button key={t.id}
            onClick={() => setTab(t.id)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              tab === t.id
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
            }`}>
            {t.label}
          </button>
        ))}
      </div>

      {/* Content */}
      {tab === 'contacts'  && (
        <ContactsTab
          contacts={contacts}
          loading={contactsLoading}
          onContactsChange={setContacts}
        />
      )}
      {tab === 'campaigns' && <CampaignsTab />}
      {tab === 'templates' && <TemplatesTab />}
      {tab === 'metrics'   && <MetricsTab contacts={contacts} />}
      {tab === 'progress'  && <MyProgressTab />}
    </div>
  )
}
