import { useState, useEffect } from 'react'
import { collection, doc, addDoc, updateDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useAuth } from '../../contexts/AuthContext'

const DEFAULT_FROM_NAME  = 'Dermlux'
const DEFAULT_FROM_EMAIL = 'noreply@dermluxclinics.com'

export default function CreateCampaignModal({ campaign, onClose }) {
  const { currentUser } = useAuth()
  const isEdit = !!campaign?.id

  const [name, setName]         = useState(campaign?.name || '')
  const [subject, setSubject]   = useState(campaign?.subject || '')
  const [fromName, setFromName] = useState(campaign?.fromName || DEFAULT_FROM_NAME)
  const [fromEmail, setFromEmail] = useState(campaign?.fromEmail || DEFAULT_FROM_EMAIL)
  const [htmlBody, setHtmlBody] = useState(campaign?.htmlBody || '')
  const [previewMode, setPreviewMode] = useState(false)
  const [saving, setSaving]     = useState(false)
  const [error, setError]       = useState('')

  async function handleSave() {
    if (!name.trim() || !subject.trim() || !htmlBody.trim()) {
      setError('Συμπλήρωσε: Όνομα, Θέμα, και HTML template.')
      return
    }
    setSaving(true)
    setError('')
    try {
      const data = {
        name:      name.trim(),
        subject:   subject.trim(),
        fromName:  fromName.trim(),
        fromEmail: fromEmail.trim(),
        htmlBody,
        updatedAt: serverTimestamp(),
      }
      if (isEdit) {
        await updateDoc(doc(db, 'email_campaigns', campaign.id), data)
      } else {
        await addDoc(collection(db, 'email_campaigns'), {
          ...data,
          status:    'draft',
          stats: { total: 0, sent: 0, failed: 0, opened: 0, clicked: 0, bounced: 0, unsubscribed: 0 },
          createdAt: serverTimestamp(),
          createdBy: currentUser.uid,
          sentAt: null,
        })
      }
      onClose()
    } catch (e) {
      setError(e.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-start justify-center z-50 p-4 overflow-y-auto">
      <div className="card w-full max-w-4xl p-6 mt-4 mb-4 space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{isEdit ? 'Επεξεργασία Καμπάνιας' : 'Νέα Καμπάνια'}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl">✕</button>
        </div>

        {/* Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2">
            <label className="label">Όνομα Καμπάνιας *</label>
            <input className="input" placeholder="π.χ. Προσφορά Ιουνίου 2026"
              value={name} onChange={e => setName(e.target.value)} />
          </div>
          <div className="sm:col-span-2">
            <label className="label">Θέμα Email (Subject) *</label>
            <input className="input" placeholder="π.χ. Αποκλειστική προσφορά για εσάς 🎁"
              value={subject} onChange={e => setSubject(e.target.value)} />
          </div>
          <div>
            <label className="label">Από (Όνομα)</label>
            <input className="input" value={fromName} onChange={e => setFromName(e.target.value)} />
          </div>
          <div>
            <label className="label">Από (Email)</label>
            <input className="input" type="email" value={fromEmail} onChange={e => setFromEmail(e.target.value)} />
          </div>
        </div>

        {/* HTML Editor + Preview toggle */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label className="label mb-0">HTML Template *</label>
            <div className="flex gap-1 bg-gray-100 rounded-lg p-0.5">
              <button
                onClick={() => setPreviewMode(false)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${!previewMode ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'}`}>
                ✏️ Επεξεργασία
              </button>
              <button
                onClick={() => setPreviewMode(true)}
                className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${previewMode ? 'bg-white shadow-sm text-gray-800' : 'text-gray-500'}`}>
                👁 Preview
              </button>
            </div>
          </div>

          {/* Placeholder hint */}
          <div className="text-xs text-gray-400 bg-gray-50 rounded-lg px-3 py-2 border">
            <span className="font-medium text-gray-500">Placeholders:</span>
            {' '}<code className="bg-white px-1 rounded border text-xs">{'{{name}}'}</code> — όνομα πελάτη,
            {' '}<code className="bg-white px-1 rounded border text-xs">{'{{unsubscribe_url}}'}</code> — link διαγραφής (να το βάζεις πάντα στο footer)
          </div>

          {!previewMode ? (
            <textarea
              className="input resize-none font-mono text-xs"
              rows={16}
              value={htmlBody}
              onChange={e => setHtmlBody(e.target.value)}
              placeholder={'<!DOCTYPE html>\n<html>\n<body>\n  <h1>Γεια σου {{name}}!</h1>\n  <p>...</p>\n  <p><a href="{{unsubscribe_url}}">Διαγραφή από λίστα</a></p>\n</body>\n</html>'}
            />
          ) : (
            <div className="border rounded-xl overflow-hidden bg-white" style={{ height: '420px' }}>
              {htmlBody.trim() ? (
                <iframe
                  srcDoc={htmlBody}
                  className="w-full h-full border-0"
                  sandbox="allow-same-origin"
                  title="Email Preview"
                />
              ) : (
                <div className="h-full flex items-center justify-center text-gray-400">
                  Γράψε HTML για να δεις preview
                </div>
              )}
            </div>
          )}
        </div>

        {error && (
          <div className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            ⚠️ {error}
          </div>
        )}

        <div className="flex gap-3 pt-1">
          <button className="btn-secondary flex-1" onClick={onClose} disabled={saving}>Ακύρωση</button>
          <button className="btn-primary flex-1" onClick={handleSave} disabled={saving}>
            {saving ? 'Αποθήκευση…' : 'Αποθήκευση Draft'}
          </button>
        </div>
      </div>
    </div>
  )
}
