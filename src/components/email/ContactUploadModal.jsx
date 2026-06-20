import { useState, useRef } from 'react'
import { writeBatch, doc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { isValidEmail, isFakeEmail, normalizeEmail, contactDocId } from '../../utils/emailValidation'

// Detect which column in the headers corresponds to email, name, phone
function detectColumns(headers) {
  const find = (keywords) => headers.findIndex(h =>
    keywords.some(k => h.toLowerCase().includes(k))
  )
  return {
    email: find(['email', 'e-mail', 'mail']),
    name:  find(['name', 'όνομα', 'ονοματ', 'full']),
    phone: find(['phone', 'τηλ', 'mobile', 'κινητ', 'tel']),
  }
}

function classifyRow(row, cols, existingIds) {
  const email = normalizeEmail(row[cols.email] || '')
  const name  = (row[cols.name] || '').toString().trim()
  const phone = cols.phone >= 0 ? (row[cols.phone] || '').toString().trim() : ''

  if (!email) return null // skip completely empty email
  if (!isValidEmail(email)) return { email, name, phone, flag: 'invalid',   reason: 'Άκυρη μορφή email' }
  if (isFakeEmail(email))   return { email, name, phone, flag: 'fake',      reason: 'Πιθανώς fake / disposable' }

  const id = contactDocId(email)
  if (existingIds.has(id))  return { email, name, phone, flag: 'duplicate', reason: 'Υπάρχει ήδη' }

  return { email, name, phone, flag: 'new', reason: '' }
}

const FLAG_STYLE = {
  new:       'bg-green-50 border-green-200',
  duplicate: 'bg-yellow-50 border-yellow-200',
  fake:      'bg-orange-50 border-orange-200',
  invalid:   'bg-red-50 border-red-200',
}
const FLAG_BADGE = {
  new:       'bg-green-100 text-green-700',
  duplicate: 'bg-yellow-100 text-yellow-700',
  fake:      'bg-orange-100 text-orange-700',
  invalid:   'bg-red-100 text-red-600',
}
const FLAG_LABEL = {
  new:       'Νέος',
  duplicate: 'Duplicate',
  fake:      'Fake',
  invalid:   'Άκυρο',
}

export default function ContactUploadModal({ onClose, existingContacts }) {
  const [rows, setRows]       = useState(null) // classified rows
  const [selected, setSelected] = useState(new Set()) // indices of rows to import
  const [saving, setSaving]   = useState(false)
  const [progress, setProgress] = useState(0)
  const [done, setDone]       = useState(false)
  const [error, setError]     = useState('')
  const fileRef = useRef()

  const existingIds = new Set(existingContacts.map(c => c.id))

  async function handleFile(file) {
    setError('')
    try {
      const { read, utils } = await import('xlsx')
      const data = await file.arrayBuffer()
      const wb   = read(data, { type: 'array' })
      const ws   = wb.Sheets[wb.SheetNames[0]]
      const raw  = utils.sheet_to_json(ws, { header: 1, defval: '' })

      if (raw.length < 2) { setError('Το αρχείο φαίνεται άδειο.'); return }

      const headers = raw[0].map(h => h.toString())
      const cols    = detectColumns(headers)

      if (cols.email < 0) {
        setError('Δεν βρέθηκε στήλη email. Βεβαιωθείτε ότι υπάρχει επικεφαλίδα "Email".')
        return
      }

      const classified = raw.slice(1)
        .map(r => classifyRow(r, cols, existingIds))
        .filter(Boolean)

      setRows(classified)
      // Pre-select all "new" rows
      setSelected(new Set(classified.reduce((acc, r, i) => {
        if (r.flag === 'new') acc.push(i)
        return acc
      }, [])))
    } catch (e) {
      setError('Σφάλμα ανάγνωσης αρχείου: ' + e.message)
    }
  }

  function toggleAll() {
    const newRows = (rows || []).filter(r => r.flag === 'new')
    if (selected.size === newRows.length) {
      setSelected(new Set())
    } else {
      setSelected(new Set(rows.reduce((acc, r, i) => { if (r.flag === 'new') acc.push(i); return acc }, [])))
    }
  }

  function toggleRow(i) {
    const next = new Set(selected)
    next.has(i) ? next.delete(i) : next.add(i)
    setSelected(next)
  }

  async function handleImport() {
    if (!rows || selected.size === 0) return
    setSaving(true)
    setError('')

    const toImport = [...selected].map(i => rows[i])
    const BATCH_SIZE = 500

    try {
      for (let offset = 0; offset < toImport.length; offset += BATCH_SIZE) {
        const chunk = toImport.slice(offset, offset + BATCH_SIZE)
        const batch = writeBatch(db)
        chunk.forEach(r => {
          const id = contactDocId(r.email)
          batch.set(doc(db, 'email_contacts', id), {
            email:       r.email,
            name:        r.name,
            phone:       r.phone,
            tags:        [],
            source:      'csv_import',
            status:      'active',
            sendCount:   0,
            lastSentAt:  null,
            unsubscribedAt: null,
            bouncedAt:   null,
            importedAt:  serverTimestamp(),
            updatedAt:   serverTimestamp(),
          })
        })
        await batch.commit()
        setProgress(Math.round(((offset + chunk.length) / toImport.length) * 100))
      }
      setDone(true)
    } catch (e) {
      setError('Σφάλμα αποθήκευσης: ' + e.message)
    } finally {
      setSaving(false)
    }
  }

  const newCount  = rows?.filter(r => r.flag === 'new').length ?? 0
  const dupCount  = rows?.filter(r => r.flag === 'duplicate').length ?? 0
  const badCount  = rows?.filter(r => r.flag === 'invalid' || r.flag === 'fake').length ?? 0

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto">
      <div className="card w-full max-w-3xl p-6 mt-4 mb-4 space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Εισαγωγή Επαφών</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>

        {done ? (
          <div className="text-center py-10 space-y-3">
            <div className="text-5xl">✅</div>
            <div className="text-lg font-semibold text-green-700">
              {selected.size} επαφές εισήχθησαν επιτυχώς!
            </div>
            <button className="btn-primary" onClick={onClose}>Κλείσιμο</button>
          </div>
        ) : !rows ? (
          /* Drop zone */
          <div
            className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition-colors"
            onClick={() => fileRef.current.click()}
            onDragOver={e => e.preventDefault()}
            onDrop={e => { e.preventDefault(); handleFile(e.dataTransfer.files[0]) }}>
            <div className="text-4xl mb-3">📂</div>
            <div className="font-medium text-gray-700">Σύρετε αρχείο εδώ ή κάντε κλικ για επιλογή</div>
            <div className="text-sm text-gray-400 mt-1">Αποδεκτά: CSV, XLS, XLSX</div>
            <input ref={fileRef} type="file" accept=".csv,.xls,.xlsx" className="hidden"
              onChange={e => e.target.files[0] && handleFile(e.target.files[0])} />
          </div>
        ) : (
          <>
            {/* Summary */}
            <div className="flex gap-3 flex-wrap">
              <StatPill label="Νέοι" count={newCount} color="green" />
              <StatPill label="Duplicates" count={dupCount} color="yellow" />
              <StatPill label="Άκυρα/Fake" count={badCount} color="red" />
            </div>

            {/* Row list */}
            <div className="border rounded-xl overflow-hidden max-h-96 overflow-y-auto">
              <table className="w-full text-xs">
                <thead className="bg-gray-50 border-b sticky top-0">
                  <tr>
                    <th className="px-3 py-2 text-left w-8">
                      <input type="checkbox"
                        checked={selected.size === newCount && newCount > 0}
                        onChange={toggleAll}
                        className="accent-blue-600" />
                    </th>
                    <th className="px-3 py-2 text-left text-gray-500 font-medium">Email</th>
                    <th className="px-3 py-2 text-left text-gray-500 font-medium">Όνομα</th>
                    <th className="px-3 py-2 text-left text-gray-500 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {rows.map((r, i) => (
                    <tr key={i} className={`${FLAG_STYLE[r.flag]} border-l-2`}>
                      <td className="px-3 py-2">
                        {r.flag === 'new' && (
                          <input type="checkbox"
                            checked={selected.has(i)}
                            onChange={() => toggleRow(i)}
                            className="accent-blue-600" />
                        )}
                      </td>
                      <td className="px-3 py-2 text-gray-700">{r.email}</td>
                      <td className="px-3 py-2 text-gray-600">{r.name || '—'}</td>
                      <td className="px-3 py-2">
                        <span className={`badge text-xs ${FLAG_BADGE[r.flag]}`}>
                          {FLAG_LABEL[r.flag]}
                          {r.reason && <span className="ml-1 opacity-70">— {r.reason}</span>}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {error && (
              <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                ⚠️ {error}
              </div>
            )}

            {saving && (
              <div className="space-y-1">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Αποθήκευση…</span>
                  <span>{progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full transition-all" style={{ width: `${progress}%` }} />
                </div>
              </div>
            )}

            <div className="flex gap-3 pt-1">
              <button className="btn-secondary flex-1" onClick={onClose} disabled={saving}>Ακύρωση</button>
              <button
                className="btn-primary flex-1"
                onClick={handleImport}
                disabled={selected.size === 0 || saving}>
                {saving ? 'Αποθήκευση…' : `Εισαγωγή ${selected.size} επαφών`}
              </button>
            </div>
          </>
        )}

        {error && !rows && (
          <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            ⚠️ {error}
          </div>
        )}
      </div>
    </div>
  )
}

function StatPill({ label, count, color }) {
  const cls = { green: 'bg-green-100 text-green-700', yellow: 'bg-yellow-100 text-yellow-700', red: 'bg-red-100 text-red-600' }
  return (
    <div className={`px-3 py-1.5 rounded-full text-sm font-medium ${cls[color]}`}>
      {label}: <span className="font-bold">{count}</span>
    </div>
  )
}
