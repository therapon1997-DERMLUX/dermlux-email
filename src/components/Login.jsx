import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

// DermLux brand palette — the bouncing emblem cycles through these on each wall hit
const PALETTE = ['#9D835E', '#B392A4', '#C9B4C0', '#EEECE0', '#7E88BC']

export default function Login() {
  const { login } = useAuth()
  const navigate   = useNavigate()
  const [email, setEmail]       = useState('')
  const [password, setPassword] = useState('')
  const [error, setError]       = useState('')
  const [loading, setLoading]   = useState(false)

  const stageRef  = useRef(null)
  const emblemRef = useRef(null)

  // Classic Windows-XP DVD-screensaver bounce: the emblem drifts and
  // ricochets off the edges, switching to the next palette colour on each hit.
  useEffect(() => {
    const stage  = stageRef.current
    const emblem = emblemRef.current
    if (!stage || !emblem) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const SIZE = emblem.offsetWidth || 110
    let x = Math.random() * (stage.clientWidth  - SIZE)
    let y = Math.random() * (stage.clientHeight - SIZE)
    let vx = 95, vy = 80          // px/sec
    let ci = 0
    let raf = 0, prev = performance.now()

    const applyColor = () => { emblem.style.backgroundColor = PALETTE[ci % PALETTE.length] }
    applyColor()

    const loop = (now) => {
      raf = requestAnimationFrame(loop)
      const dt = Math.min((now - prev) / 1000, 0.05)
      prev = now
      const W = stage.clientWidth - SIZE
      const H = stage.clientHeight - SIZE
      x += vx * dt; y += vy * dt
      let hit = false
      if (x <= 0)      { x = 0; vx = Math.abs(vx); hit = true }
      else if (x >= W) { x = W; vx = -Math.abs(vx); hit = true }
      if (y <= 0)      { y = 0; vy = Math.abs(vy); hit = true }
      else if (y >= H) { y = H; vy = -Math.abs(vy); hit = true }
      if (hit) { ci++; applyColor() }
      emblem.style.transform = `translate(${x}px, ${y}px)`
    }
    raf = requestAnimationFrame(loop)
    return () => cancelAnimationFrame(raf)
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      navigate('/')
    } catch {
      setError('Λάθος email ή κωδικός.')
    } finally {
      setLoading(false)
    }
  }

  const maskUrl = `${import.meta.env.BASE_URL}brand/emblem-motif.png`

  return (
    <div
      ref={stageRef}
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-4"
      style={{
        background:
          'radial-gradient(1200px 800px at 50% -10%, #221e18 0%, transparent 60%),' +
          'radial-gradient(1000px 700px at 85% 110%, rgba(38,40,61,0.85) 0%, transparent 60%),' +
          '#100f0d',
      }}
    >
      {/* Bouncing emblem (XP screensaver style) — behind the card */}
      <div
        ref={emblemRef}
        aria-hidden="true"
        className="absolute top-0 left-0 pointer-events-none will-change-transform"
        style={{
          width: 110, height: 110,
          WebkitMaskImage: `url(${maskUrl})`,
          maskImage: `url(${maskUrl})`,
          WebkitMaskRepeat: 'no-repeat', maskRepeat: 'no-repeat',
          WebkitMaskSize: 'contain', maskSize: 'contain',
          WebkitMaskPosition: 'center', maskPosition: 'center',
          backgroundColor: PALETTE[0],
          transition: 'background-color 0.4s ease',
          filter: 'drop-shadow(0 0 14px rgba(201,180,192,0.35))',
          opacity: 0.85,
        }}
      />

      {/* Login card */}
      <div
        className="relative z-10 w-full max-w-md rounded-2xl p-8 backdrop-blur-md"
        style={{
          background: 'rgba(238,236,224,0.06)',
          border: '1px solid rgba(238,236,224,0.14)',
          boxShadow: '0 24px 60px rgba(0,0,0,0.45)',
        }}
      >
        <div className="text-center mb-8">
          <div style={{ fontFamily: "'Prata', Georgia, serif", color: '#EEECE0' }}
               className="text-4xl tracking-wide">DermLux</div>
          <div className="mt-2 text-[11px] font-bold uppercase tracking-[0.35em]" style={{ color: '#9D835E' }}>
            Medical Aesthetics
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="rounded-lg px-4 py-3 text-sm"
                 style={{ background: 'rgba(220,60,60,0.12)', border: '1px solid rgba(220,60,60,0.35)', color: '#f3b4b4' }}>
              {error}
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: '#C9B4C0' }}>Email</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              autoFocus
              className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2"
              style={{ background: 'rgba(238,236,224,0.07)', border: '1px solid rgba(238,236,224,0.18)', color: '#EEECE0' }}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1" style={{ color: '#C9B4C0' }}>Κωδικός</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className="w-full rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2"
              style={{ background: 'rgba(238,236,224,0.07)', border: '1px solid rgba(238,236,224,0.18)', color: '#EEECE0' }}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-2 py-2.5 rounded-lg text-sm font-semibold transition-all disabled:opacity-60"
            style={{ background: 'linear-gradient(135deg, #9D835E, #B392A4)', color: '#100f0d' }}
          >
            {loading ? 'Σύνδεση…' : 'Σύνδεση'}
          </button>
        </form>
      </div>
    </div>
  )
}
