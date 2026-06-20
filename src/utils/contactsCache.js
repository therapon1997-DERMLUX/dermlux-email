// Local cache for email contacts (IndexedDB).
// Why: loading 15,000+ contacts from Firestore on every /email visit costs
// ~15k reads against the 50k/day free quota and several MB of download.
// The cache makes the page open instantly and costs zero reads;
// a fresh fetch happens only on demand (Ανανέωση) or when the cache is stale.

const DB_NAME    = 'dermlux-cache'
const STORE      = 'kv'
const KEY        = 'email_contacts'
export const STALE_MS = 24 * 60 * 60 * 1000 // refresh automatically after 24h

function openDb() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, 1)
    req.onupgradeneeded = () => req.result.createObjectStore(STORE)
    req.onsuccess = () => resolve(req.result)
    req.onerror   = () => reject(req.error)
  })
}

// Firestore Timestamps don't survive structured clone across sessions in a
// useful way — flatten them to millis so the UI date formatting keeps working.
function plain(value) {
  if (value && typeof value.toDate === 'function') return value.toDate().getTime()
  return value
}

function serializeContact(c) {
  const out = {}
  for (const k of Object.keys(c)) out[k] = plain(c[k])
  return out
}

export async function saveContactsCache(contacts) {
  try {
    const db = await openDb()
    await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite')
      tx.objectStore(STORE).put(
        { savedAt: Date.now(), contacts: contacts.map(serializeContact) },
        KEY
      )
      tx.oncomplete = resolve
      tx.onerror    = () => reject(tx.error)
    })
    db.close()
  } catch (err) {
    console.warn('contactsCache save failed (non-fatal):', err)
  }
}

export async function loadContactsCache() {
  try {
    const db = await openDb()
    const entry = await new Promise((resolve, reject) => {
      const tx  = db.transaction(STORE, 'readonly')
      const req = tx.objectStore(STORE).get(KEY)
      req.onsuccess = () => resolve(req.result)
      req.onerror   = () => reject(req.error)
    })
    db.close()
    return entry || null // { savedAt, contacts } | null
  } catch (err) {
    console.warn('contactsCache load failed (non-fatal):', err)
    return null
  }
}

export async function clearContactsCache() {
  try {
    const db = await openDb()
    await new Promise((resolve, reject) => {
      const tx = db.transaction(STORE, 'readwrite')
      tx.objectStore(STORE).delete(KEY)
      tx.oncomplete = resolve
      tx.onerror    = () => reject(tx.error)
    })
    db.close()
  } catch { /* non-fatal */ }
}
