# DermLux Email Marketing

Standalone email-marketing app for DermLux. Manage contacts, build templates, send
campaigns, and track metrics. This repo contains **only** the email tool — it shares
the production backend with the main DermLux app but is fully isolated.

## Tech Stack
- **Frontend:** React (Vite) + Tailwind CSS, hosted on GitHub Pages
- **Database:** Firebase Firestore (shared project `dermlux-waitlist`)
- **Sending:** Cloudflare Worker (`empty-hall-968f`) + Resend API
- **Auth:** Firebase Auth (email/password)

## How it connects (shared backend, scoped access)
- Firestore collections used: `email_contacts`, `email_campaigns`, `email_sends`,
  `email_templates` (+ reads own `users` doc for the role).
- This app's logins use the **`marketer`** role. Firestore security rules let a
  marketer touch **only** the `email_*` collections — everything else in the
  database (bookkeeping, clinical, etc.) returns "permission denied". So you can
  build freely here without any risk of reaching other data.
- Campaign sending / unsubscribe / metrics call the Worker endpoints
  (`/send-campaign`, `/unsubscribe`, `/sync-bounces`, `/rebuild-stats`,
  `/trigger-auto`). The Worker holds the Resend key and does the actual sending.

## Environment (set as GitHub repo secrets, injected at build)
`VITE_FIREBASE_API_KEY`, `VITE_FIREBASE_AUTH_DOMAIN`, `VITE_FIREBASE_PROJECT_ID`,
`VITE_FIREBASE_STORAGE_BUCKET`, `VITE_FIREBASE_MESSAGING_SENDER_ID`,
`VITE_FIREBASE_APP_ID`, `VITE_WORKER_URL`.
For local dev, put the same values in a `.env` file (gitignored).

## Deploy
Push to `main` → GitHub Actions builds and deploys to GitHub Pages automatically (~2 min).
```
git add . && git commit -m "..." && git push
```

## Template merge tags (replaced by the Worker at send time)
- `{{name}}` → contact's name (falls back to "Πελάτη")
- `{{unsubscribe_url}}` (or `*|UNSUB|*`) → per-recipient unsubscribe link
Footer should always include an unsubscribe link + a physical/contact line.

## Project layout
- `src/components/email/` — the whole tool (Contacts, Campaigns, Templates, Metrics tabs)
- `email-templates/*.html` — built-in templates (email-safe table HTML, inline CSS)
- `public/email-images/` — hosted images referenced by templates (absolute URLs)
- `src/App.jsx` — routes: `/email`, `/unsubscribe` (public), `/login`

## Do / Don't
- ✅ Add new templates, improve the UI, add campaign features.
- ✅ Test template rendering across clients; keep images hosted (never embedded).
- ⚠️ Don't email the same address twice — the Worker dedupes, but keep it in mind.
- ⚠️ Real customer contact data lives here — keep it inside the system, never export
  it to third-party tools.
