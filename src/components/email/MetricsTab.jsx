import { useEffect, useState, useMemo } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'

const BENCHMARKS = { open: 21, click: 2.6 }
const WORKER_URL = import.meta.env.VITE_WORKER_URL

function pct(a, b) { return (!b || !a) ? 0 : Math.round((a / b) * 100) }
function fmt(n)    { return (n || 0).toLocaleString('el-GR') }

function fmtDate(val) {
  if (!val) return '—'
  const d = val?.toDate ? val.toDate() : new Date(val)
  return d.toLocaleDateString('el-GR', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit' })
}

// ─── Main ─────────────────────────────────────────────────────────────────────
export default function MetricsTab({ contacts = [] }) {
  const [campaigns,  setCampaigns]  = useState([])
  const [testSends,  setTestSends]  = useState([])
  const [loading,    setLoading]    = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [selected,   setSelected]   = useState(null)

  async function load() {
    try {
      const [campaignSnap, testSnap] = await Promise.all([
        getDocs(query(collection(db, 'email_campaigns'), where('status', 'in', ['sent', 'auto', 'partial']))),
        getDocs(query(collection(db, 'email_sends'), where('isTest', '==', true))),
      ])
      const docs = campaignSnap.docs.map(d => ({ id: d.id, ...d.data() }))
      docs.sort((a, b) =>
        (b.sentAt?.seconds || b.createdAt?.seconds || 0) -
        (a.sentAt?.seconds || a.createdAt?.seconds || 0)
      )
      setCampaigns(docs)
      const tests = testSnap.docs.map(d => ({ id: d.id, ...d.data() }))
      tests.sort((a, b) => (b.sentAt?.seconds || 0) - (a.sentAt?.seconds || 0))
      setTestSends(tests)
    } finally {
      setLoading(false)
      setRefreshing(false)
    }
  }

  useEffect(() => { load() }, [])

  function refresh() { setRefreshing(true); load() }

  // Campaigns flagged excludeFromMetrics (e.g. 1st campaign — webhook was not
  // active, so its opens/clicks were never recorded) stay visible in the list
  // but do NOT count towards the aggregate KPIs and the comparison chart.
  const included = useMemo(() => campaigns.filter(c => !c.excludeFromMetrics), [campaigns])

  const totals = useMemo(() => {
    const t = { sent: 0, opened: 0, clicked: 0, unsubscribed: 0, bounced: 0, failed: 0 }
    included.forEach(c => {
      if (!c.stats) return
      t.sent         += c.stats.sent         || 0
      t.opened       += c.stats.opened       || 0
      t.clicked      += c.stats.clicked      || 0
      t.unsubscribed += c.stats.unsubscribed || 0
      t.bounced      += c.stats.bounced      || 0
      t.failed       += c.stats.failed       || 0
    })
    return t
  }, [campaigns])

  if (loading) return <Skeleton />

  if (campaigns.length === 0) {
    return (
      <div className="text-center py-24">
        <div className="text-5xl mb-4">📊</div>
        <div className="font-semibold text-gray-600 mb-1">Δεν υπάρχουν δεδομένα</div>
        <div className="text-sm text-gray-400">Στείλε πρώτα μια καμπάνια για να δεις τα αποτελέσματα</div>
      </div>
    )
  }

  // "Effective opens" = opened OR clicked (you can't click without opening)
  const effectiveOpened = included.reduce((sum, c) => {
    const s = c.stats || {}
    return sum + Math.max(s.opened || 0, s.clicked || 0)
  }, 0)

  const openPct  = pct(totals.opened,  totals.sent)
  const effectiveOpenPct = pct(effectiveOpened, totals.sent)
  const clickPct = pct(totals.clicked, totals.sent)
  const hasEngagement = totals.opened > 0 || totals.clicked > 0
  const opensPixelBlocked = totals.opened === 0 && totals.clicked > 0

  return (
    <div className="space-y-5">

      {/* Header */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest">Επισκόπηση</span>
        <button
          onClick={refresh}
          disabled={refreshing}
          className="text-xs text-gray-400 hover:text-indigo-500 transition-colors flex items-center gap-1"
        >
          <span className={refreshing ? 'animate-spin inline-block' : ''}>↺</span>
          {refreshing ? 'Φόρτωση…' : 'Ανανέωση'}
        </button>
      </div>

      {/* KPI cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        <KpiCard
          icon="📧" label="Αποστολές" value={fmt(totals.sent)}
          sub={`${included.length} καμπάνιες${campaigns.length > included.length ? ` (+${campaigns.length - included.length} εκτός)` : ''}`} color="sky"
        />
        <KpiCard
          icon="👁" label={opensPixelBlocked ? 'Open Rate *' : 'Open Rate'}
          value={opensPixelBlocked ? effectiveOpenPct + '%' : openPct + '%'}
          sub={opensPixelBlocked
            ? `≥${fmt(effectiveOpened)} ανοίγματα (pixel blocked)`
            : `${fmt(totals.opened)} ανοίγματα`}
          color={(opensPixelBlocked ? effectiveOpenPct : openPct) >= BENCHMARKS.open ? 'emerald' : 'amber'}
          badge={(opensPixelBlocked ? effectiveOpenPct : openPct) >= BENCHMARKS.open
            ? `↑ vs ${BENCHMARKS.open}%`
            : `↓ vs ${BENCHMARKS.open}%`}
          badgeGood={(opensPixelBlocked ? effectiveOpenPct : openPct) >= BENCHMARKS.open}
        />
        <KpiCard
          icon="🖱️" label="Click Rate" value={clickPct + '%'}
          sub={`${fmt(totals.clicked)} κλικ`}
          color={clickPct >= BENCHMARKS.click ? 'indigo' : 'amber'}
          badge={clickPct >= BENCHMARKS.click ? `↑ vs ${BENCHMARKS.click}%` : `↓ vs ${BENCHMARKS.click}%`}
          badgeGood={clickPct >= BENCHMARKS.click}
        />
        <KpiCard
          icon="🚫" label="Opt-outs / Bounces"
          value={fmt(totals.unsubscribed + totals.bounced)}
          sub={pct(totals.unsubscribed + totals.bounced, totals.sent) + '% rate'}
          color="rose"
        />
      </div>

      {/* Opens = 0 but clicks > 0 → pixel blocked by email clients */}
      {totals.opened === 0 && totals.clicked > 0 && (
        <div className="flex gap-3 bg-orange-50 border border-orange-200 rounded-xl px-4 py-3">
          <span className="text-xl shrink-0">👁</span>
          <div className="text-sm space-y-2">
            <div className="font-semibold text-orange-800">Το tracking pixel μπλοκάρεται από τους email clients</div>
            <div className="text-orange-700 text-xs leading-relaxed space-y-1.5">
              <div>Το webhook <strong>έχει</strong> το <code className="bg-orange-100 px-1 rounded">email.opened</code> event — αλλά το Resend δεν το πυροδοτεί γιατί το tracking pixel μπλοκάρεται από Gmail, Outlook, κ.ά.</div>
              <div className="font-medium">Τι να κάνεις:</div>
              <div>1. <strong>Resend → Domains → [domain] → Open Tracking</strong> — βεβαιώσου ότι είναι ενεργό.</div>
              <div>2. Αν είναι ήδη ενεργό, αυτό είναι φυσιολογικό. Το <strong>Open Rate * = {effectiveOpenPct}%</strong> (από clicks) είναι το ελάχιστο πραγματικό open rate σου.</div>
            </div>
          </div>
        </div>
      )}
      {/* No engagement at all */}
      {!hasEngagement && totals.sent >= 20 && totals.clicked === 0 && (
        <div className="flex gap-3 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
          <span className="text-xl shrink-0">⚠️</span>
          <div className="text-sm">
            <div className="font-semibold text-amber-800 mb-0.5">Opens και Clicks εμφανίζονται μόνο μέσω Resend Webhooks</div>
            <div className="text-amber-700 text-xs leading-relaxed">
              Πήγαινε στο <strong>Resend → Webhooks</strong> και πρόσθεσε:<br />
              <code className="bg-amber-100 px-1.5 py-0.5 rounded font-mono">{WORKER_URL}/webhook</code>
              {' '}με events: <code className="bg-amber-100 px-1 py-0.5 rounded text-xs">email.opened, email.clicked, email.bounced, email.complained</code>
            </div>
          </div>
        </div>
      )}

      {/* Campaign rows */}
      <div>
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">Καμπάνιες</div>
        <div className="space-y-2">
          {campaigns.map(c => (
            <div key={c.id} className={c.excludeFromMetrics ? 'opacity-60' : ''}>
              {c.excludeFromMetrics && (
                <div className="text-xs text-amber-600 font-medium mb-1 flex items-center gap-1">
                  ⚠️ Εκτός συνολικών μετρικών — το webhook δεν ήταν ενεργό κατά την αποστολή (τα opens/clicks δεν καταγράφηκαν)
                </div>
              )}
              <CampaignRow
                campaign={c}
                expanded={selected === c.id}
                onToggle={() => setSelected(selected === c.id ? null : c.id)}
                onRebuild={refresh}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Test Emails section */}
      <div>
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">🧪 Test Emails</div>
        {testSends.length === 0 ? (
          <div className="text-sm text-gray-400 text-center py-6 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            Δεν υπάρχουν test emails ακόμα. Χρησιμοποίησε το 🧪 Test σε μια καμπάνια.
          </div>
        ) : (
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="text-left px-4 py-2 font-medium text-gray-500 text-xs">Καμπάνια</th>
                  <th className="text-left px-4 py-2 font-medium text-gray-500 text-xs">Email</th>
                  <th className="text-left px-4 py-2 font-medium text-gray-500 text-xs">Στάλθηκε</th>
                  <th className="text-center px-4 py-2 font-medium text-gray-500 text-xs">Άνοιγμα</th>
                  <th className="text-center px-4 py-2 font-medium text-gray-500 text-xs">Κλικ</th>
                  <th className="text-center px-4 py-2 font-medium text-gray-500 text-xs">Bounce</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {testSends.map(t => (
                  <tr key={t.id} className="hover:bg-gray-50">
                    <td className="px-4 py-2 text-xs text-gray-700 font-medium max-w-[160px] truncate">
                      {t.campaignName || t.campaignId}
                    </td>
                    <td className="px-4 py-2 text-xs text-gray-500">{t.email}</td>
                    <td className="px-4 py-2 text-xs text-gray-400">{fmtDate(t.sentAt)}</td>
                    <td className="px-4 py-2 text-center">
                      {t.openedAt
                        ? <span className="text-emerald-600 font-semibold text-xs">✓ {fmtDate(t.openedAt)}</span>
                        : <span className="text-gray-300 text-xs">—</span>}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {t.clickedAt
                        ? <span className="text-indigo-600 font-semibold text-xs">✓ {fmtDate(t.clickedAt)}</span>
                        : <span className="text-gray-300 text-xs">—</span>}
                    </td>
                    <td className="px-4 py-2 text-center">
                      {t.bouncedAt
                        ? <span className="text-rose-500 font-semibold text-xs">✓</span>
                        : <span className="text-gray-300 text-xs">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Opt-out per campaign section */}
      <OptOutSection campaigns={campaigns} contacts={contacts} />

      {/* Bounces & Spam section */}
      <BouncesSection contacts={contacts} onSync={refresh} />

      {/* Bar chart (only when multiple campaigns, excluded ones omitted) */}
      {included.length > 1 && (
        <div className="card p-5">
          <div className="text-sm font-semibold text-gray-700 mb-4">Σύγκριση Καμπανιών</div>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={included.map(c => ({
                name:     c.name.length > 14 ? c.name.slice(0, 14) + '…' : c.name,
                'Open %': pct(c.stats?.opened,  c.stats?.sent),
                'Click %':pct(c.stats?.clicked, c.stats?.sent),
              }))}
              margin={{ top: 4, right: 8, left: -22, bottom: 4 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f3f4f6" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11 }} unit="%" axisLine={false} tickLine={false} />
              <Tooltip
                formatter={v => v + '%'}
                contentStyle={{ borderRadius: 10, border: 'none', boxShadow: '0 4px 20px rgba(0,0,0,.12)' }}
              />
              <Bar dataKey="Open %" fill="#34d399" radius={[4, 4, 0, 0]} maxBarSize={40} />
              <Bar dataKey="Click %" fill="#818cf8" radius={[4, 4, 0, 0]} maxBarSize={40} />
            </BarChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-4 justify-center mt-2 text-xs text-gray-500">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-emerald-400 shrink-0" />Open Rate
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded bg-indigo-400 shrink-0" />Click Rate
            </span>
            <span className="text-gray-400">
              Avg: Open {BENCHMARKS.open}% · Click {BENCHMARKS.click}%
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

// ─── Opt-out per campaign section ─────────────────────────────────────────────
function OptOutSection({ campaigns, contacts }) {
  const optOuts = contacts.filter(c => c.status === 'unsubscribed')

  const byCampaign = useMemo(() => {
    const map = {}
    for (const c of optOuts) {
      const key  = c.optOutCampaignId   || '__manual__'
      const name = c.optOutCampaignName || (c.optOutSource === 'manual' ? 'Χειροκίνητα' : '—')
      if (!map[key]) map[key] = { campaignId: key, campaignName: name, contacts: [] }
      map[key].contacts.push(c)
    }
    return Object.values(map).sort((a, b) => b.contacts.length - a.contacts.length)
  }, [optOuts])

  if (optOuts.length === 0) return null

  return (
    <div>
      <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3">🚫 Opt-outs ανά Καμπάνια</div>
      <div className="card overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-4 py-2 font-medium text-gray-500 text-xs">Καμπάνια</th>
              <th className="text-right px-4 py-2 font-medium text-gray-500 text-xs">Opt-outs</th>
              <th className="text-left px-4 py-2 font-medium text-gray-500 text-xs hidden md:table-cell">Επαφές</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {byCampaign.map(g => (
              <tr key={g.campaignId} className="hover:bg-gray-50">
                <td className="px-4 py-2.5">
                  <span className="text-sm font-medium text-gray-800">{g.campaignName}</span>
                  {g.campaignId === '__manual__' && (
                    <span className="ml-2 text-xs text-gray-400 italic">χειροκίνητη ενέργεια</span>
                  )}
                </td>
                <td className="px-4 py-2.5 text-right">
                  <span className="text-rose-600 font-bold text-sm">{g.contacts.length}</span>
                </td>
                <td className="px-4 py-2.5 hidden md:table-cell">
                  <div className="flex flex-wrap gap-1">
                    {g.contacts.slice(0, 6).map(c => (
                      <span key={c.id} className="text-xs bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded-full truncate max-w-[160px]">
                        {c.name || c.email}
                      </span>
                    ))}
                    {g.contacts.length > 6 && (
                      <span className="text-xs text-gray-400">+{g.contacts.length - 6} ακόμα</span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-gray-50 border-t border-gray-200">
            <tr>
              <td className="px-4 py-2 text-xs text-gray-400">Σύνολο</td>
              <td className="px-4 py-2 text-right text-xs font-bold text-rose-600">{optOuts.length}</td>
              <td className="hidden md:table-cell" />
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  )
}

// ─── Bounces & Spam section ────────────────────────────────────────────────────
function BouncesSection({ contacts, onSync }) {
  const [loading,  setLoading]  = useState(false)
  const [syncing,  setSyncing]  = useState(false)
  const [syncMsg,  setSyncMsg]  = useState(null)

  async function handleSync() {
    setSyncing(true)
    setSyncMsg(null)
    try {
      const res  = await fetch(`${WORKER_URL}/sync-bounces`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Σφάλμα')
      setSyncMsg({ ok: true, text: `✅ Ανανεώθηκαν ${data.updated} επαφές από ${data.total} bounced/complained` })
      onSync?.()
    } catch (e) {
      setSyncMsg({ ok: false, text: `❌ ${e.message}` })
    } finally {
      setSyncing(false)
      setTimeout(() => setSyncMsg(null), 6000)
    }
  }

  const bounced    = contacts.filter(c => c.status === 'bounced')
  const complained = contacts.filter(c => c.status === 'complained')

  // Sort newest first
  const sorted = [...contacts].sort((a, b) => {
    const ta = (a.bouncedAt || a.complainedAt || a.updatedAt || '')
    const tb = (b.bouncedAt || b.complainedAt || b.updatedAt || '')
    return tb > ta ? 1 : -1
  })

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="text-xs font-semibold text-gray-400 uppercase tracking-widest">↩️ Bounces & Spam Complaints</div>
        <div className="flex items-center gap-3">
          {syncMsg && (
            <span className={`text-xs font-medium ${syncMsg.ok ? 'text-emerald-600' : 'text-rose-500'}`}>
              {syncMsg.text}
            </span>
          )}
          <button
            onClick={handleSync}
            disabled={syncing}
            className="text-xs text-gray-400 hover:text-indigo-600 transition-colors flex items-center gap-1 font-medium"
            title="Διαβάζει όλα τα bounced/complained email_sends και ενημερώνει τις επαφές στη βάση"
          >
            <span className={syncing ? 'animate-spin inline-block' : ''}>↺</span>
            {syncing ? 'Συγχρονισμός…' : 'Sync → Contacts'}
          </button>
        </div>
      </div>

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="bg-rose-50 rounded-xl border border-rose-100 px-4 py-3 text-center">
          <div className="text-2xl font-bold text-rose-600">{loading ? '…' : bounced.length}</div>
          <div className="text-xs text-rose-500 font-medium mt-0.5">↩️ Hard Bounces</div>
          <div className="text-xs text-rose-400 mt-0.5">Λανθασμένα / ανύπαρκτα email</div>
        </div>
        <div className="bg-orange-50 rounded-xl border border-orange-100 px-4 py-3 text-center">
          <div className="text-2xl font-bold text-orange-600">{loading ? '…' : complained.length}</div>
          <div className="text-xs text-orange-500 font-medium mt-0.5">⚠️ Spam Complaints</div>
          <div className="text-xs text-orange-400 mt-0.5">Σημείωσαν ως ανεπιθύμητο</div>
        </div>
      </div>

      {loading ? (
        <div className="text-sm text-gray-400 text-center py-6 bg-gray-50 rounded-xl border border-dashed border-gray-200">
          Φόρτωση…
        </div>
      ) : contacts.length === 0 ? (
        <div className="text-sm text-gray-400 text-center py-6 bg-gray-50 rounded-xl border border-dashed border-gray-200">
          Δεν υπάρχουν bounced / complained επαφές ακόμα.
        </div>
      ) : (
        <div className="card overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left px-4 py-2 font-medium text-gray-500 text-xs">Email</th>
                <th className="text-left px-4 py-2 font-medium text-gray-500 text-xs">Τύπος</th>
                <th className="text-left px-4 py-2 font-medium text-gray-500 text-xs hidden md:table-cell">Ημερομηνία</th>
                <th className="text-left px-4 py-2 font-medium text-gray-500 text-xs hidden lg:table-cell">Πηγή</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {sorted.slice(0, 100).map(c => (
                <tr key={c.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2 text-xs font-medium text-gray-700 max-w-[200px] truncate">
                    {c.email}
                    {c.name && <span className="text-gray-400 ml-1.5 font-normal">{c.name}</span>}
                  </td>
                  <td className="px-4 py-2">
                    {c.status === 'bounced'
                      ? <span className="inline-flex items-center gap-1 text-xs bg-rose-100 text-rose-700 px-2 py-0.5 rounded-full font-medium">↩️ Bounce</span>
                      : <span className="inline-flex items-center gap-1 text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full font-medium">⚠️ Spam</span>
                    }
                  </td>
                  <td className="px-4 py-2 text-xs text-gray-400 hidden md:table-cell">
                    {fmtDate(c.bouncedAt || c.complainedAt || c.updatedAt)}
                  </td>
                  <td className="px-4 py-2 text-xs text-gray-400 hidden lg:table-cell">
                    {c.source === 'transactional_webhook'
                      ? <span className="bg-blue-50 text-blue-600 px-1.5 py-0.5 rounded text-xs">Transactional</span>
                      : <span className="bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded text-xs">Campaign</span>
                    }
                  </td>
                </tr>
              ))}
            </tbody>
            {sorted.length > 100 && (
              <tfoot className="bg-gray-50 border-t border-gray-200">
                <tr>
                  <td colSpan={4} className="px-4 py-2 text-xs text-gray-400 text-center">
                    +{sorted.length - 100} ακόμα
                  </td>
                </tr>
              </tfoot>
            )}
          </table>
        </div>
      )}
    </div>
  )
}

// ─── Campaign row ──────────────────────────────────────────────────────────────
function CampaignRow({ campaign: c, expanded, onToggle, onRebuild }) {
  const s              = c.stats || {}
  const pixelBlocked   = (s.opened || 0) === 0 && (s.clicked || 0) > 0
  const effectiveOpens = pixelBlocked ? (s.clicked || 0) : (s.opened || 0)
  const openPct        = pixelBlocked ? pct(effectiveOpens, s.sent) : pct(s.opened, s.sent)
  const clickPct       = pct(s.clicked,  s.sent)
  const ctorPct        = pct(s.clicked,  effectiveOpens)   // Click-to-Open Rate
  const bouncePct      = pct(s.bounced,  s.sent)
  const failPct        = pct(s.failed,   (s.sent || 0) + (s.failed || 0))

  const sentAt = c.sentAt?.toDate?.() || null
  const dateStr = sentAt
    ? sentAt.toLocaleDateString('el-GR', { day: '2-digit', month: 'short', year: 'numeric' })
    : '—'

  const STATUS_COLOR = {
    sent:    'bg-emerald-500',
    auto:    'bg-purple-500',
    partial: 'bg-orange-400',
  }
  const dotColor = STATUS_COLOR[c.status] || 'bg-gray-300'

  // Funnel data for expanded view (CSS-based, no recharts)
  const funnelSteps = [
    { label: 'Στάλθηκαν',  value: s.sent    || 0, max: s.sent || 1, color: 'bg-sky-400',     pctLabel: null },
    { label: 'Ανοίχθηκαν', value: s.opened  || 0, max: s.sent || 1, color: 'bg-emerald-400', pctLabel: openPct  + '%', benchmark: BENCHMARKS.open,  good: openPct  >= BENCHMARKS.open  },
    { label: 'Κλικ',       value: s.clicked || 0, max: s.sent || 1, color: 'bg-indigo-400',  pctLabel: clickPct + '%', benchmark: BENCHMARKS.click, good: clickPct >= BENCHMARKS.click },
  ]

  return (
    <div className="card overflow-hidden border border-gray-100">
      {/* Collapsed header — always visible */}
      <button
        className="w-full text-left px-5 py-4 hover:bg-gray-50/70 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <span className={`w-2 h-2 rounded-full shrink-0 ${dotColor}`} />
            <div className="min-w-0">
              <div className="font-semibold text-gray-900 truncate text-sm">{c.name}</div>
              <div className="text-xs text-gray-400 truncate mt-0.5">{c.subject}</div>
            </div>
          </div>
          <div className="flex items-center gap-5 shrink-0">
            <MiniStat label="Εστάλη"   value={fmt(s.sent)}       />
            <MiniStat label={pixelBlocked ? 'Open *' : 'Open'} value={openPct + '%'} color={openPct >= BENCHMARKS.open ? 'text-emerald-600' : 'text-gray-600'} />
            <MiniStat label="Click"    value={clickPct + '%'}  color={clickPct >= BENCHMARKS.click ? 'text-indigo-600'  : 'text-gray-600'} />
            <MiniStat label="Bounce"   value={bouncePct + '%'} color={bouncePct > 2 ? 'text-rose-500' : 'text-gray-400'} />
            <div className="text-gray-300 text-xs hidden sm:block">{dateStr}</div>
            <span className="text-gray-300">{expanded ? '▲' : '▼'}</span>
          </div>
        </div>

        {/* Inline rate bars */}
        <div className="mt-3 grid grid-cols-3 gap-2">
          <RateBar label="Open Rate"  p={openPct}   benchmark={BENCHMARKS.open}  color="bg-emerald-400" />
          <RateBar label="Click Rate" p={clickPct}  benchmark={BENCHMARKS.click} color="bg-indigo-400"  />
          <RateBar label="Deliver"    p={100 - failPct} color="bg-sky-400" />
        </div>
      </button>

      {/* Expanded drill-down */}
      {expanded && (
        <div className="border-t bg-gray-50/60 px-5 py-5 space-y-5">

          {/* CSS funnel */}
          <div>
            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Funnel</div>
            <div className="space-y-2">
              {funnelSteps.map(step => (
                <div key={step.label} className="space-y-1">
                  <div className="flex justify-between items-center text-xs">
                    <span className="text-gray-600 font-medium">{step.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-gray-800 font-bold">{fmt(step.value)}</span>
                      {step.pctLabel && (
                        <span className={`font-semibold ${step.good ? 'text-emerald-600' : 'text-gray-500'}`}>
                          {step.pctLabel}
                          {step.benchmark != null && (
                            <span className="font-normal text-gray-400"> vs {step.benchmark}%</span>
                          )}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${step.color}`}
                      style={{ width: `${Math.min(100, step.max > 0 ? (step.value / step.max) * 100 : 0)}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stat grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            <StatChip icon="📧" label="Εστάλη"      value={fmt(s.sent)}         color="sky"     />
            <StatChip icon="👁" label={pixelBlocked ? 'Ανοίχθηκαν *' : 'Ανοίχθηκαν'}
              value={`≥${fmt(effectiveOpens)} (${openPct}%)`}
              color="emerald"
              tooltip={pixelBlocked ? 'Εκτιμώμενο minimum — pixel μπλοκαρισμένο, βασίζεται στα clicks' : undefined}
            />
            <StatChip icon="🖱️" label="Κλικ"         value={`${fmt(s.clicked)} (${clickPct}%)`} color="indigo"  />
            <StatChip icon="🎯" label="CTOR"          value={s.opened > 0 ? ctorPct + '%' : '—'}
              color={s.opened > 0 ? (ctorPct >= 20 ? 'emerald' : 'indigo') : 'gray'}
              tooltip="Click-to-Open Rate: από όσους άνοιξαν, πόσοι έκαναν κλικ"
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <StatChip icon="🚫" label="Opt-out"    value={fmt(s.unsubscribed)}  color="orange"  />
            <StatChip icon="↩️" label="Bounce"     value={fmt(s.bounced)}       color={bouncePct > 2 ? 'rose' : 'gray'} />
            <StatChip icon="❌" label="Αποτυχίες"  value={fmt(s.failed)}        color={s.failed > 0 ? 'rose' : 'gray'} />
          </div>

          {/* Benchmark comparison */}
          <div className="bg-white rounded-xl border border-gray-200 px-4 py-3 space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Σύγκριση με Industry Avg</div>
            </div>
            <BenchmarkRow label="Open Rate"  actual={openPct}  benchmark={BENCHMARKS.open}  colorGood="bg-emerald-400" />
            <BenchmarkRow label="Click Rate" actual={clickPct} benchmark={BENCHMARKS.click} colorGood="bg-indigo-400"  />
            {s.opened > 0 && (
              <div className="flex justify-between text-xs pt-1 border-t border-gray-100">
                <span className="text-gray-600 font-medium">🎯 CTOR (Click-to-Open)</span>
                <span className={`font-bold ${ctorPct >= 20 ? 'text-emerald-600' : 'text-indigo-600'}`}>
                  {ctorPct}%
                  <span className="font-normal text-gray-400 ml-1">({fmt(s.clicked)} / {fmt(s.opened)})</span>
                </span>
              </div>
            )}
          </div>

        </div>
      )}
    </div>
  )
}

// ─── Sub-components ────────────────────────────────────────────────────────────

function Skeleton() {
  return (
    <div className="space-y-5 animate-pulse">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="card p-4 space-y-3">
            <div className="h-3 bg-gray-200 rounded-full w-3/4" />
            <div className="h-7 bg-gray-200 rounded-full w-1/2" />
            <div className="h-2 bg-gray-100 rounded-full w-2/3" />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        {[...Array(3)].map((_, i) => (
          <div key={i} className="card p-4 space-y-3">
            <div className="flex justify-between items-center">
              <div className="h-4 bg-gray-200 rounded-full w-1/3" />
              <div className="flex gap-4">
                {[...Array(4)].map((_, j) => <div key={j} className="h-4 bg-gray-100 rounded-full w-12" />)}
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[...Array(3)].map((_, j) => <div key={j} className="h-2 bg-gray-100 rounded-full" />)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function KpiCard({ icon, label, value, sub, color, badge, badgeGood }) {
  const bg = {
    sky:     'bg-sky-50     border-sky-100',
    emerald: 'bg-emerald-50 border-emerald-100',
    indigo:  'bg-indigo-50  border-indigo-100',
    amber:   'bg-amber-50   border-amber-100',
    rose:    'bg-rose-50    border-rose-100',
  }
  const text = {
    sky:     'text-sky-700',
    emerald: 'text-emerald-700',
    indigo:  'text-indigo-700',
    amber:   'text-amber-700',
    rose:    'text-rose-600',
  }
  return (
    <div className={`rounded-2xl border p-4 space-y-1.5 ${bg[color]}`}>
      <div className="flex items-center justify-between">
        <span className="text-base">{icon}</span>
        {badge && (
          <span className={`text-xs font-medium px-1.5 py-0.5 rounded-full ${badgeGood ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
            {badge}
          </span>
        )}
      </div>
      <div className={`text-2xl font-bold ${text[color]}`}>{value}</div>
      <div className="text-xs text-gray-500 font-medium">{label}</div>
      {sub && <div className="text-xs text-gray-400">{sub}</div>}
    </div>
  )
}

function MiniStat({ label, value, color = 'text-gray-700' }) {
  return (
    <div className="text-center">
      <div className={`text-sm font-bold leading-tight ${color}`}>{value}</div>
      <div className="text-xs text-gray-400 leading-tight">{label}</div>
    </div>
  )
}

function RateBar({ label, p, benchmark, color }) {
  const above = benchmark != null && p >= benchmark
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs text-gray-400">
        <span>{label}</span>
        <span className={`font-semibold ${above ? 'text-emerald-600' : 'text-gray-500'}`}>{p}%</span>
      </div>
      <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden relative">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${Math.min(p, 100)}%` }} />
        {benchmark != null && (
          <div
            className="absolute top-0 h-full w-px bg-gray-500 opacity-40"
            style={{ left: `${Math.min(benchmark, 100)}%` }}
          />
        )}
      </div>
    </div>
  )
}

function StatChip({ icon, label, value, color, tooltip }) {
  const text = { sky: 'text-sky-600', emerald: 'text-emerald-600', indigo: 'text-indigo-600', orange: 'text-orange-500', rose: 'text-rose-500', gray: 'text-gray-600' }
  return (
    <div className="bg-white rounded-xl border border-gray-100 px-3 py-2.5 text-center space-y-0.5" title={tooltip}>
      <div className="text-xs text-gray-400">{icon} {label}</div>
      <div className={`text-lg font-bold ${text[color] || text.gray}`}>{value}</div>
    </div>
  )
}

function RebuildButton({ campaignId, onDone }) {
  const [state, setState] = useState('idle')  // idle | loading | done | error

  async function rebuild() {
    setState('loading')
    try {
      const res = await fetch(`${WORKER_URL}/rebuild-stats`, {
        method:  'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ campaignId }),
      })
      if (!res.ok) throw new Error(await res.text())
      setState('done')
      setTimeout(() => { setState('idle'); onDone?.() }, 1500)
    } catch {
      setState('error')
      setTimeout(() => setState('idle'), 2000)
    }
  }

  const labels = { idle: '↺ Rebuild stats', loading: 'Ανανέωση…', done: '✓ Ανανεώθηκε!', error: '✕ Σφάλμα' }
  const cls    = { idle: 'text-gray-400 hover:text-indigo-600', loading: 'text-gray-300', done: 'text-emerald-600', error: 'text-rose-500' }
  return (
    <button onClick={rebuild} disabled={state === 'loading'}
      title="Ξαναμετράει opens/clicks/bounces από τα email_sends"
      className={`text-xs font-medium transition-colors ${cls[state]}`}>
      {labels[state]}
    </button>
  )
}

function BenchmarkRow({ label, actual, benchmark, colorGood }) {
  const above = actual >= benchmark
  const max   = Math.max(actual, benchmark, 1)
  return (
    <div className="space-y-1.5">
      <div className="flex justify-between text-xs">
        <span className="text-gray-600 font-medium">{label}</span>
        <span className={`font-semibold ${above ? 'text-emerald-600' : 'text-amber-600'}`}>
          {actual}% {above ? '▲' : '▼'} avg {benchmark}%
        </span>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        <div className="space-y-0.5">
          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div className={`h-full rounded-full ${colorGood}`} style={{ width: `${(actual / max) * 100}%` }} />
          </div>
          <div className="text-xs text-gray-400 text-center">Η καμπάνια σου</div>
        </div>
        <div className="space-y-0.5">
          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full rounded-full bg-gray-300" style={{ width: `${(benchmark / max) * 100}%` }} />
          </div>
          <div className="text-xs text-gray-400 text-center">Industry avg</div>
        </div>
      </div>
    </div>
  )
}
