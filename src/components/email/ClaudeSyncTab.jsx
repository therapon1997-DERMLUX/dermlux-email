import { useState, useEffect } from 'react'

const STORAGE_KEY = 'dermlux_claude_sync_config'

// ─── Dermlux Design System — permanent reference ───────────────────────────
const DS_COLORS = [
  { hex: '#161616', name: 'Charcoal Black', role: 'Primary background / dominant' },
  { hex: '#eeebe0', name: 'Ivory Cream',    role: 'Light background / text on dark' },
  { hex: '#9d845f', name: 'Warm Gold',      role: 'Brand accent / gold' },
  { hex: '#25283d', name: 'Deep Navy',      role: 'Secondary dark / depth' },
  { hex: '#b392a4', name: 'Dusty Mauve',    role: 'Soft accent / feminine touch' },
]

const DS_FONT = {
  family:  'Ivy Presto Display',
  weights: ['Regular', 'Semi Bold'],
  usage:   'Headlines, hero statements, refined brand messaging',
  role:    'Elegance · Authority · Editorial sophistication',
}
// ───────────────────────────────────────────────────────────────────────────

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : { dsPath: '' }
  } catch {
    return { dsPath: '' }
  }
}

function isLight(hex) {
  const r = parseInt(hex.slice(1, 3), 16)
  const g = parseInt(hex.slice(3, 5), 16)
  const b = parseInt(hex.slice(5, 7), 16)
  return (r * 299 + g * 587 + b * 114) / 1000 > 128
}

export default function ClaudeSyncTab() {
  const [config, setConfig] = useState(load)
  const [saved, setSaved]   = useState(false)
  const [editing, setEditing] = useState(false)
  const [draft, setDraft]   = useState('')

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config))
  }, [config])

  function startEdit() {
    setDraft(config.dsPath)
    setEditing(true)
    setSaved(false)
  }

  function handleSave(e) {
    e.preventDefault()
    const trimmed = draft.trim()
    setConfig({ dsPath: trimmed })
    setEditing(false)
    setSaved(true)
    setTimeout(() => setSaved(false), 3000)
  }

  function handleClear() {
    setConfig({ dsPath: '' })
    setEditing(false)
    setSaved(false)
  }

  return (
    <div className="space-y-6 max-w-2xl">
      {/* Header */}
      <div>
        <h2 className="text-lg font-bold text-gray-900">🤖 Claude Sync</h2>
        <p className="text-sm text-gray-500 mt-0.5">
          Ρύθμιση σύνδεσης design system με το claude.ai/design — για να χτίζει ο AI agent με τα πραγματικά components της Dermlux.
        </p>
      </div>

      {/* ── Design System Reference ── */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm space-y-5">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Design System — Dermlux</p>

        {/* Color palette */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-gray-700">Χρωματική Παλέτα</p>
          <div className="flex flex-wrap gap-3">
            {DS_COLORS.map(c => (
              <div key={c.hex} className="flex flex-col items-center gap-1.5 w-[88px]">
                <div
                  className="w-full h-12 rounded-lg border border-black/10 flex items-end justify-center pb-1"
                  style={{ backgroundColor: c.hex }}
                >
                  <span
                    className="text-[10px] font-mono font-semibold"
                    style={{ color: isLight(c.hex) ? '#161616' : '#eeebe0' }}
                  >
                    {c.hex}
                  </span>
                </div>
                <span className="text-[11px] font-semibold text-gray-800 text-center leading-tight">{c.name}</span>
                <span className="text-[10px] text-gray-400 text-center leading-tight">{c.role}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Typography */}
        <div className="space-y-2">
          <p className="text-xs font-medium text-gray-700">Γραμματοσειρά</p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 space-y-1.5">
            <p className="text-base font-semibold text-gray-900">{DS_FONT.family}</p>
            <p className="text-xs text-gray-500">
              <span className="font-medium text-gray-700">Βάρη: </span>
              {DS_FONT.weights.join(' · ')}
            </p>
            <p className="text-xs text-gray-500">
              <span className="font-medium text-gray-700">Χρήση: </span>
              {DS_FONT.usage}
            </p>
            <p className="text-xs text-gray-500">
              <span className="font-medium text-gray-700">Brand role: </span>
              {DS_FONT.role}
            </p>
          </div>
        </div>
      </div>

      {/* Info card */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-sm text-blue-800 space-y-1">
        <p className="font-semibold">Τι κάνει το /design-sync;</p>
        <p>Μετατρέπει τη βιβλιοθήκη UI components σε format που καταλαβαίνει ο Claude Design Agent — κάθε design που φτιάχνει θα χρησιμοποιεί τα πραγματικά components, χρώματα και fonts της Dermlux.</p>
      </div>

      {/* Path config */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 space-y-4 shadow-sm">
        <div className="flex items-center justify-between gap-2">
          <div>
            <p className="text-sm font-semibold text-gray-800">Διαδρομή Design System</p>
            <p className="text-xs text-gray-500 mt-0.5">Τοπικό μονοπάτι στον φάκελο του component library project</p>
          </div>
          {config.dsPath && !editing && (
            <button
              onClick={handleClear}
              className="text-xs text-gray-400 hover:text-red-500 transition-colors"
            >
              Εκκαθάριση
            </button>
          )}
        </div>

        {editing ? (
          <form onSubmit={handleSave} className="space-y-3">
            <input
              type="text"
              value={draft}
              onChange={e => setDraft(e.target.value)}
              placeholder="π.χ. C:\Users\user\projects\dermlux-ui"
              autoFocus
              className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex gap-2">
              <button
                type="submit"
                className="px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                Αποθήκευση
              </button>
              <button
                type="button"
                onClick={() => setEditing(false)}
                className="px-4 py-2 rounded-lg text-sm font-semibold bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
              >
                Ακύρωση
              </button>
            </div>
          </form>
        ) : config.dsPath ? (
          <div className="flex items-center justify-between gap-3 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2.5">
            <code className="text-sm text-gray-800 font-mono break-all">{config.dsPath}</code>
            <button
              onClick={startEdit}
              className="shrink-0 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              Αλλαγή
            </button>
          </div>
        ) : (
          <button
            onClick={startEdit}
            className="w-full border-2 border-dashed border-gray-300 rounded-lg px-4 py-4 text-sm text-gray-400 hover:border-blue-400 hover:text-blue-600 transition-colors text-center"
          >
            + Ορισμός διαδρομής design system
          </button>
        )}

        {saved && (
          <p className="text-xs text-emerald-600 font-medium">✓ Αποθηκεύτηκε</p>
        )}
      </div>

      {/* How to use */}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 space-y-3">
        <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide">Πώς χρησιμοποιείται</p>
        <ol className="text-sm text-gray-600 space-y-2 list-decimal list-inside">
          <li>Ορίζεις εδώ τη διαδρομή στον τοπικό φάκελο με το component library.</li>
          <li>Ανοίγεις Claude Code στο terminal από εκείνο τον φάκελο.</li>
          <li>Πληκτρολογείς <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs font-mono">/design-sync</code> και ακολουθείς τις οδηγίες.</li>
          <li>Τα components εμφανίζονται αυτόματα στο claude.ai/design.</li>
        </ol>
      </div>
    </div>
  )
}
