import { useState, useRef } from 'react'
import JSZip from 'jszip'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { storage, db } from '../../firebase/config'

const ROLES = ['logo', 'hero', 'facial', 'laser', 'injectable', 'clinic', 'promo', 'skip']
const ROLE_LABELS = {
  logo: '🏷 Logo',
  hero: '🖼 Hero',
  facial: '💆 Facial photo',
  laser: '🔦 Laser photo',
  injectable: '💉 Injectable photo',
  clinic: '🏥 Clinic photo',
  promo: '🎁 Promo banner',
  skip: '✕ Skip',
}

function autoDetect(images) {
  // images: [{id, blob, url, w, h, type}]
  const roles = {}
  const used = new Set()

  // Logo: PNG with alpha, small
  const logos = images.filter(i => i.mime === 'image/png' && i.w < 400)
  if (logos.length) { roles[logos[0].id] = 'logo'; used.add(logos[0].id) }

  // Remaining JPEGs sorted by area
  const jpegs = images.filter(i => i.mime !== 'image/png' && !used.has(i.id))

  // Landscape large → hero or clinic
  const landscape = jpegs.filter(i => i.w > i.h * 1.2).sort((a,b) => b.w*b.h - a.w*a.h)
  if (landscape[0]) { roles[landscape[0].id] = 'hero'; used.add(landscape[0].id) }
  if (landscape[1]) { roles[landscape[1].id] = 'clinic'; used.add(landscape[1].id) }

  // Portraits → treatment photos
  const portraits = jpegs.filter(i => i.h > i.w * 1.1 && !used.has(i.id)).sort((a,b) => b.w*b.h - a.w*a.h)
  const treatmentRoles = ['facial', 'laser', 'injectable']
  portraits.forEach((img, idx) => {
    if (idx < 3) { roles[img.id] = treatmentRoles[idx]; used.add(img.id) }
  })

  // Wide short images → promo
  const wide = jpegs.filter(i => i.w > i.h * 3 && !used.has(i.id))
  if (wide[0]) { roles[wide[0].id] = 'promo'; used.add(wide[0].id) }

  // Everything else → skip
  images.forEach(i => { if (!roles[i.id]) roles[i.id] = 'skip' })

  return roles
}

function buildHtml(urls) {
  const imgBase = 'https://therapon1997-dermlux.github.io/dermlux-waitlist/email-images'
  const logo    = urls.logo        || `${imgBase}/logo-full.png`
  const hero    = urls.hero        || `${imgBase}/hero-gradient.jpeg`
  const facial  = urls.facial      || `${imgBase}/facial-overlay.jpeg`
  const laser   = urls.laser       || `${imgBase}/laser-overlay.jpeg`
  const inj     = urls.injectable  || `${imgBase}/injectable-overlay.jpeg`
  const clinic  = urls.clinic      || `${imgBase}/clinic.jpeg`
  const promo   = urls.promo       || `${imgBase}/promo-preglow.png`

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DermLux</title>
</head>
<body style="margin:0;padding:0;background-color:#f0ece4;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f0ece4;">
<tr><td align="center" style="padding:0;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;width:100%;">

<!-- HEADER -->
<tr>
  <td style="background-color:#161616;padding:24px 40px 22px;text-align:center;">
    <img src="${logo}" alt="DermLux" width="120" height="109" style="display:block;margin:0 auto;width:120px;height:109px;">
  </td>
</tr>

<!-- HERO -->
<tr>
  <td style="padding:0;line-height:0;">
    <img src="${hero}" alt="DermLux" width="600" height="476" style="display:block;width:100%;max-width:600px;">
  </td>
</tr>

<!-- GREETING -->
<tr>
  <td style="background-color:#ffffff;padding:44px 44px 16px;">
    <p style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:16px;font-weight:700;color:#161616;">Hi {{name}},</p>
    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:13px;line-height:1.9;color:#555555;">From a single glow-boosting facial to long-term laser plans and doctor-led injectables, DermLux brings it all together across our five clinics in Cyprus.</p>
  </td>
</tr>
<tr><td style="background-color:#ffffff;height:36px;"></td></tr>

<!-- SERVICE TABS -->
<tr>
  <td style="padding:0;line-height:0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td width="200" style="padding:0;line-height:0;"><img src="${imgBase}/tab-facials.png" alt="01 Facials &amp; Skin Glow" width="200" style="display:block;width:200px;"></td>
        <td width="200" style="padding:0;line-height:0;"><img src="${imgBase}/tab-laser.png" alt="02 Laser Hair Removal" width="200" style="display:block;width:200px;"></td>
        <td width="200" style="padding:0;line-height:0;"><img src="${imgBase}/tab-injectables.png" alt="03 Injectables" width="200" style="display:block;width:200px;"></td>
      </tr>
    </table>
  </td>
</tr>

<!-- TREATMENT PHOTOS -->
<tr>
  <td style="padding:0;line-height:0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td width="200" style="padding:0;line-height:0;"><img src="${facial}" alt="Facials" width="200" height="300" style="display:block;width:200px;height:300px;"></td>
        <td width="200" style="padding:0;line-height:0;"><img src="${laser}" alt="Laser" width="200" height="300" style="display:block;width:200px;height:300px;"></td>
        <td width="200" style="padding:0;line-height:0;"><img src="${inj}" alt="Injectables" width="200" height="300" style="display:block;width:200px;height:300px;"></td>
      </tr>
    </table>
  </td>
</tr>

<!-- TREATMENT CONTENT -->
<tr>
  <td style="padding:0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr valign="top">
        <td width="200" style="background-color:#F7F1F5;padding:28px 18px 32px;vertical-align:top;">
          <div style="font-family:Arial,Helvetica,sans-serif;font-size:6.5px;font-weight:700;color:#B392A4;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:16px;">Popular Treatments</div>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#333333;padding:5px 0;">&#8250;&nbsp;&nbsp;Premium Deep Cleansing</td></tr>
            <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#333333;padding:5px 0;">&#8250;&nbsp;&nbsp;Hydration Facial</td></tr>
            <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#333333;padding:5px 0;">&#8250;&nbsp;&nbsp;Vampire Facial</td></tr>
            <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#333333;padding:5px 0;">&#8250;&nbsp;&nbsp;Advanced Diamond Facial</td></tr>
          </table>
          <div style="margin-top:24px;"><a href="https://dermluxclinics.com/EmailPublicBookingForm" style="display:block;background-color:#161616;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:8px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:13px 6px;text-align:center;">BOOK A FACIAL &rarr;</a></div>
        </td>
        <td width="200" style="background-color:#F5F5F5;padding:28px 18px 32px;vertical-align:top;">
          <div style="font-family:Arial,Helvetica,sans-serif;font-size:6.5px;font-weight:700;color:#B392A4;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:16px;">What We Offer</div>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#333333;padding:5px 0;">&#8250;&nbsp;&nbsp;All areas, face and body</td></tr>
            <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#333333;padding:5px 0;">&#8250;&nbsp;&nbsp;6+ session bundles, better value</td></tr>
            <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#333333;padding:5px 0;">&#8250;&nbsp;&nbsp;Suitable for all skin types</td></tr>
            <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#333333;padding:5px 0;">&#8250;&nbsp;&nbsp;Women's &amp; men's treatments</td></tr>
          </table>
          <div style="margin-top:24px;"><a href="https://dermluxclinics.com/EmailPublicBookingForm" style="display:block;background-color:#161616;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:8px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:13px 6px;text-align:center;">EXPLORE LASER PLANS &rarr;</a></div>
        </td>
        <td width="200" style="background-color:#EDEDF0;padding:28px 18px 32px;vertical-align:top;">
          <div style="font-family:Arial,Helvetica,sans-serif;font-size:6.5px;font-weight:700;color:#B392A4;letter-spacing:2.5px;text-transform:uppercase;margin-bottom:16px;">Treatments</div>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
            <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#333333;padding:5px 0;">&#8250;&nbsp;&nbsp;Botox</td></tr>
            <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#333333;padding:5px 0;">&#8250;&nbsp;&nbsp;Dermal Fillers</td></tr>
            <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#333333;padding:5px 0;">&#8250;&nbsp;&nbsp;Skin Boosters</td></tr>
            <tr><td style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#333333;padding:5px 0;">&#8250;&nbsp;&nbsp;Polynucleotides</td></tr>
          </table>
          <div style="margin-top:24px;"><a href="https://dermluxclinics.com/EmailPublicBookingForm" style="display:block;background-color:#161616;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:8px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:13px 6px;text-align:center;">BOOK INJECTABLES &rarr;</a></div>
        </td>
      </tr>
    </table>
  </td>
</tr>

<!-- PROMO BANNER -->
<tr>
  <td style="padding:0;line-height:0;">
    <a href="https://dermluxclinics.com/EmailPublicBookingForm" style="display:block;line-height:0;">
      <img src="${promo}" alt="Promo" width="600" style="display:block;width:100%;max-width:600px;">
    </a>
  </td>
</tr>

<!-- CONSULTATION -->
<tr>
  <td style="padding:0;line-height:0;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td width="300" style="padding:0;line-height:0;vertical-align:middle;"><img src="${clinic}" alt="DermLux Clinic" width="300" height="220" style="display:block;width:300px;height:220px;object-fit:cover;"></td>
        <td width="300" style="background-color:#f0ece4;padding:32px 26px;vertical-align:middle;line-height:normal;">
          <div style="font-family:Georgia,'Times New Roman',serif;font-size:17px;font-style:italic;color:#161616;line-height:1.5;margin-bottom:16px;">Not sure where to start? That's what we're here for.</div>
          <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#c4874a;line-height:1.85;">Book a full redeemable consultation and we'll guide you to the right treatment.</div>
        </td>
      </tr>
    </table>
  </td>
</tr>

<!-- CTA -->
<tr>
  <td style="background-color:#161616;padding:42px 40px 46px;text-align:center;">
    <div style="font-family:Arial,Helvetica,sans-serif;font-size:7.5px;color:#888888;letter-spacing:3.5px;text-transform:uppercase;margin-bottom:24px;">Book or ask us anything</div>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center">
      <tr>
        <td style="padding-right:8px;"><a href="https://dermluxclinics.com/EmailPublicBookingForm" style="display:inline-block;background-color:#EEEBE0;color:#161616;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:16px 26px;">FILL IN A FORM</a></td>
        <td style="padding-left:8px;"><a href="https://wa.me/35797718967" style="display:inline-block;background-color:#25D366;color:#ffffff;text-decoration:none;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:700;letter-spacing:2px;text-transform:uppercase;padding:16px 26px;">&#10003; WHATSAPP US</a></td>
      </tr>
    </table>
  </td>
</tr>

<!-- FOOTER -->
<tr>
  <td style="background-color:#111111;padding:26px 40px;text-align:center;">
    <p style="margin:0 0 8px;font-family:Arial,Helvetica,sans-serif;font-size:10.5px;color:#888888;line-height:1.7;">5 clinics across Cyprus, medical expertise, visible results.</p>
    <p style="margin:0 0 16px;font-family:Arial,Helvetica,sans-serif;font-size:9.5px;color:#444444;line-height:1.6;">You've been subscribed to DermLux updates.</p>
    <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:9.5px;">
      <a href="{{unsubscribe_url}}" style="color:#555555;text-decoration:underline;">Unsubscribe</a>
      <span style="color:#333333;margin:0 10px;">|</span>
      <a href="https://dermluxclinics.com" style="color:#555555;text-decoration:underline;">View in browser</a>
    </p>
  </td>
</tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

// ─── Main component ────────────────────────────────────────────────────────────
export default function FigImporter({ onClose, onSaved }) {
  const [step,      setStep]      = useState('upload')  // upload | assign | name | saving | done
  const [images,    setImages]    = useState([])
  const [roles,     setRoles]     = useState({})
  const [tplName,   setTplName]   = useState('')
  const [error,     setError]     = useState('')
  const [progress,  setProgress]  = useState('')
  const inputRef = useRef()

  async function handleFile(file) {
    if (!file?.name.endsWith('.fig')) { setError('Παρακαλώ επιλέξτε αρχείο .fig'); return }
    setError('')
    setStep('loading')
    try {
      const zip  = await JSZip.loadAsync(file)
      const imgs = []

      for (const [path, entry] of Object.entries(zip.files)) {
        if (!path.startsWith('images/') || entry.dir) continue
        const blob = await entry.async('blob')
        const url  = URL.createObjectURL(blob)
        // Detect dimensions
        const { w, h } = await new Promise(res => {
          const img = new Image()
          img.onload = () => res({ w: img.naturalWidth, h: img.naturalHeight })
          img.src = url
        })
        const mime = blob.type || (path.endsWith('.png') ? 'image/png' : 'image/jpeg')
        imgs.push({ id: path.split('/').pop(), blob, url, w, h, mime })
      }

      if (!imgs.length) { setError('Δεν βρέθηκαν εικόνες στο αρχείο.'); setStep('upload'); return }

      setImages(imgs)
      setRoles(autoDetect(imgs))
      setStep('assign')
    } catch (e) {
      setError('Σφάλμα ανάγνωσης αρχείου: ' + e.message)
      setStep('upload')
    }
  }

  async function handleSave() {
    if (!tplName.trim()) return
    setStep('saving')
    const urls = {}
    try {
      const toUpload = images.filter(i => roles[i.id] && roles[i.id] !== 'skip')
      for (let i = 0; i < toUpload.length; i++) {
        const img  = toUpload[i]
        const role = roles[img.id]
        setProgress(`Μεταφόρτωση ${i + 1}/${toUpload.length}…`)
        const ext  = img.mime === 'image/png' ? 'png' : 'jpg'
        const path = `email-templates/${Date.now()}_${role}.${ext}`
        const snap = await uploadBytes(ref(storage, path), img.blob, { contentType: img.mime })
        urls[role] = await getDownloadURL(snap.ref)
      }

      setProgress('Αποθήκευση template…')
      const html = buildHtml(urls)
      await addDoc(collection(db, 'email_templates'), {
        name:      tplName.trim(),
        htmlBody:  html,
        thumbUrl:  urls.hero || urls.logo || '',
        imageUrls: urls,
        createdAt: serverTimestamp(),
      })

      setStep('done')
      setTimeout(() => { onSaved?.(); onClose() }, 1500)
    } catch (e) {
      setError('Σφάλμα: ' + e.message)
      setStep('name')
    }
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b">
          <div className="font-semibold text-gray-900">📁 Import από .fig αρχείο</div>
          <button className="text-gray-400 hover:text-gray-600 text-xl" onClick={onClose}>&times;</button>
        </div>

        <div className="flex-1 overflow-y-auto p-6">

          {/* STEP: upload */}
          {(step === 'upload' || step === 'loading') && (
            <div className="flex flex-col items-center justify-center py-16 gap-4">
              <div className="text-5xl">📐</div>
              <div className="text-lg font-semibold text-gray-800">Επιλέξτε αρχείο .fig</div>
              <div className="text-sm text-gray-500 text-center max-w-sm">
                Ο designer εξάγει το αρχείο από Figma → File → Save local copy. Μετά ανεβάστε το εδώ και το σύστημα εξάγει αυτόματα logo, photos κ.λπ.
              </div>
              {error && <div className="text-sm text-red-500">{error}</div>}
              {step === 'loading'
                ? <div className="text-blue-600 text-sm">Εξαγωγή εικόνων…</div>
                : <button className="btn-primary" onClick={() => inputRef.current.click()}>
                    Επιλογή αρχείου .fig
                  </button>
              }
              <input ref={inputRef} type="file" accept=".fig" className="hidden"
                onChange={e => handleFile(e.target.files[0])} />
            </div>
          )}

          {/* STEP: assign */}
          {step === 'assign' && (
            <div className="space-y-4">
              <div className="text-sm text-gray-600">
                Βρέθηκαν <strong>{images.length}</strong> εικόνες. Το σύστημα τις αναγνώρισε αυτόματα — ελέγξτε και διορθώστε αν χρειάζεται.
              </div>
              <div className="grid grid-cols-3 gap-3">
                {images.map(img => (
                  <div key={img.id} className="border rounded-xl overflow-hidden">
                    <img src={img.url} alt="" className="w-full h-32 object-cover" />
                    <div className="p-2">
                      <div className="text-xs text-gray-400 mb-1">{img.w}×{img.h}</div>
                      <select
                        className="w-full text-xs border rounded px-1 py-1"
                        value={roles[img.id] || 'skip'}
                        onChange={e => setRoles(r => ({ ...r, [img.id]: e.target.value }))}
                      >
                        {ROLES.map(r => <option key={r} value={r}>{ROLE_LABELS[r]}</option>)}
                      </select>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button className="btn-secondary" onClick={() => setStep('upload')}>Πίσω</button>
                <button className="btn-primary" onClick={() => setStep('name')}>Επόμενο →</button>
              </div>
            </div>
          )}

          {/* STEP: name */}
          {step === 'name' && (
            <div className="space-y-6 max-w-md mx-auto py-8">
              <div className="text-lg font-semibold text-gray-800">Όνομα Template</div>
              <input
                className="input w-full"
                placeholder="π.χ. DermLux Summer 2026"
                value={tplName}
                onChange={e => setTplName(e.target.value)}
                autoFocus
              />
              {error && <div className="text-sm text-red-500">{error}</div>}
              <div className="flex gap-2">
                <button className="btn-secondary flex-1" onClick={() => setStep('assign')}>Πίσω</button>
                <button className="btn-primary flex-1" disabled={!tplName.trim()} onClick={handleSave}>
                  Αποθήκευση &amp; Δημιουργία
                </button>
              </div>
            </div>
          )}

          {/* STEP: saving */}
          {step === 'saving' && (
            <div className="flex flex-col items-center justify-center py-20 gap-4">
              <div className="text-4xl animate-spin">⏳</div>
              <div className="text-blue-600 text-sm">{progress}</div>
            </div>
          )}

          {/* STEP: done */}
          {step === 'done' && (
            <div className="flex flex-col items-center justify-center py-20 gap-3">
              <div className="text-5xl">✅</div>
              <div className="font-semibold text-gray-800">Template αποθηκεύτηκε!</div>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}
