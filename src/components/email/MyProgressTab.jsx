import { useState, useEffect } from 'react'

const STORAGE_KEY = 'dermlux_my_progress'

const CATEGORIES = {
  setup:    { label: 'Setup',     emoji: '⚙️', color: 'bg-gray-500' },
  template: { label: 'Template',  emoji: '🎨', color: 'bg-pink-500' },
  feature:  { label: 'Feature',   emoji: '✨', color: 'bg-blue-500' },
  campaign: { label: 'Καμπάνια',  emoji: '📧', color: 'bg-emerald-500' },
  learning: { label: 'Μάθηση',    emoji: '📚', color: 'bg-amber-500' },
  milestone:{ label: 'Milestone', emoji: '🏁', color: 'bg-purple-600' },
}

const SEED = [
  {
    id: 'seed-1',
    date: new Date().toISOString().slice(0, 10),
    category: 'setup',
    title: 'Σύνδεση GitHub, Firebase & τοπικό dev setup',
    description: 'Έγινε accept της πρόσκλησης GitHub, στήθηκε το .env, και έτρεξε το app τοπικά με επιτυχημένο login.',
  },
  {
    id: 'seed-2',
    date: new Date().toISOString().slice(0, 10),
    category: 'milestone',
    title: 'Δημιουργία tab "My Progress"',
    description: 'Νέο tab για να καταγράφουμε ό,τι φτιάχνουμε/μαθαίνουμε στο project, με timeline view.',
  },
]

function load() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return SEED
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) && parsed.length ? parsed : SEED
  } catch {
    return SEED
  }
}

function fmtDate(d) {
  return new Date(d).toLocaleDateString('el-GR', { day: '2-digit', month: 'short', year: 'numeric' })
}

export default function MyProgressTab() {
  const [entries, setEntries]   = useState(load)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({
    date: new Date().toISOString().slice(0, 10),
    category: 'feature',
    title: '',
    description: '',
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries))
  }, [entries])

  const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date))

  function addEntry(e) {
    e.preventDefault()
    if (!form.title.trim()) return
    setEntries(prev => [...prev, { id: crypto.randomUUID(), ...form, title: form.title.trim() }])
    setForm({ date: new Date().toISOString().slice(0, 10), category: 'feature', title: '', description: '' })
    setShowForm(false)
  }

  function removeEntry(id) {
    setEntries(prev => prev.filter(e => e.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Header / add button */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-lg font-bold text-gray-900">🚀 My Progress</h2>
          <p className="text-sm text-gray-500">Η πορεία μου σε αυτό το project — τι φτιάξαμε, τι μάθαμε, βήμα-βήμα.</p>
        </div>
        <button
          onClick={() => setShowForm(s => !s)}
          className="px-4 py-2 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors"
        >
          {showForm ? '✕ Κλείσιμο' : '+ Νέο entry'}
        </button>
      </div>

      {/* Add form */}
      {showForm && (
        <form onSubmit={addEntry} className="bg-white border border-gray-200 rounded-xl p-4 space-y-3 shadow-sm">
          <div className="flex gap-3 flex-wrap">
            <div className="flex-1 min-w-[160px]">
              <label className="block text-xs font-medium text-gray-500 mb-1">Ημερομηνία</label>
              <input type="date" value={form.date}
                onChange={e => setForm(f => ({ ...f, date: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
            </div>
            <div className="flex-1 min-w-[160px]">
              <label className="block text-xs font-medium text-gray-500 mb-1">Κατηγορία</label>
              <select value={form.category}
                onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                {Object.entries(CATEGORIES).map(([key, c]) => (
                  <option key={key} value={key}>{c.emoji} {c.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Τίτλος</label>
            <input type="text" value={form.title}
              onChange={e => setForm(f => ({ ...f, title: e.target.value }))}
              placeholder="π.χ. Φτιάξαμε το template για το καλοκαιρινό offer"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-500 mb-1">Περιγραφή (προαιρετικό)</label>
            <textarea value={form.description}
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
              rows={2}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm" />
          </div>
          <button type="submit" className="px-4 py-2 rounded-lg text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700">
            Αποθήκευση
          </button>
        </form>
      )}

      {/* Timeline */}
      {sorted.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-10">Δεν υπάρχουν entries ακόμα — πάτησε "+ Νέο entry".</p>
      ) : (
        <div className="relative pl-6">
          <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-gray-200" />
          <ul className="space-y-6">
            {sorted.map(entry => {
              const cat = CATEGORIES[entry.category] || CATEGORIES.feature
              return (
                <li key={entry.id} className="relative">
                  <span className={`absolute -left-6 top-1 w-4 h-4 rounded-full ring-4 ring-white ${cat.color}`} />
                  <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between gap-2 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full text-white ${cat.color}`}>
                          {cat.emoji} {cat.label}
                        </span>
                        <span className="text-xs text-gray-400">{fmtDate(entry.date)}</span>
                      </div>
                      <button onClick={() => removeEntry(entry.id)}
                        className="text-xs text-gray-400 hover:text-red-600 transition-colors">
                        Διαγραφή
                      </button>
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900 mt-2">{entry.title}</h3>
                    {entry.description && (
                      <p className="text-sm text-gray-600 mt-1">{entry.description}</p>
                    )}
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
