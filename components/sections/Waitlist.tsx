'use client'

import { useState } from 'react'

export function Waitlist({ id = 'waitlist' }: { id?: string }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  async function submit() {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error')
      return
    }
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, plan: 'pro' }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id={id} className="relative z-10 border-t border-b border-[var(--b)] bg-[var(--s1)] py-14 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-10 flex-wrap">
        <div className="max-w-lg">
          <p className="mono text-[10px] font-semibold tracking-widest uppercase text-[var(--acc)] mb-2">
            Pro Waitlist · Early Access
          </p>
          <h2 className="text-xl font-bold text-[var(--t)] tracking-tight mb-2">
            Be first. Lock the lowest price.
          </h2>
          <p className="text-[13.5px] text-[var(--t2)] leading-relaxed">
            Pro is in development. Waitlist members get{' '}
            <strong className="text-[var(--live)] font-semibold">first access</strong> and the
            early adopter price locked permanently — even after we raise it at launch.
          </p>
        </div>

        <div className="flex-shrink-0 w-full sm:w-auto">
          {status === 'success' ? (
            <p className="mono text-sm text-[var(--live)]">
              ✓ You&apos;re on the list. We&apos;ll email you first when Pro ships.
            </p>
          ) : (
            <div className="flex gap-2 flex-col sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
                onKeyDown={(e) => e.key === 'Enter' && submit()}
                placeholder="you@example.com"
                className="px-4 py-3 rounded-[9px] bg-[var(--s2)] text-[var(--t)] border border-[var(--bm)] outline-none text-[13px] placeholder:text-[var(--t3)] focus:border-[var(--ab)] transition-colors w-full sm:w-60"
                style={status === 'error' ? { borderColor: 'var(--red)' } : {}}
              />
              <button
                onClick={submit}
                disabled={status === 'loading'}
                className="px-5 py-3 rounded-[9px] bg-[var(--acc)] text-white text-[13px] font-semibold hover:bg-[#7D71FF] hover:-translate-y-px transition-all disabled:opacity-60 disabled:cursor-not-allowed whitespace-nowrap"
              >
                {status === 'loading' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </div>
          )}
          {status === 'error' && (
            <p className="mono text-[11px] text-[var(--red)] mt-2">
              Enter a valid email to continue.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
