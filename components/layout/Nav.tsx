'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { cn } from '@/lib/utils'

const LINKS = [
  { href: '/#features', label: 'Features' },
  { href: '/#platforms', label: 'Platforms' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#roadmap', label: 'Roadmap' },
  { href: '/blog', label: 'Blog' },
]

const CHROME_URL =
  'https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic'

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--b)] bg-[rgba(8,8,9,0.90)] backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-[58px]">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 no-underline">
          <div className="w-7 h-7 rounded-[7px] bg-[var(--s2)] border border-[var(--ab)] overflow-hidden flex items-center justify-center">
            <Image
              src="https://raw.githubusercontent.com/anu-ship-it/TokenPulse/main/src/icons/icon128.png"
              alt="TokenPulse"
              width={22}
              height={22}
            />
          </div>
          <span className="text-sm font-bold text-[var(--t)] tracking-tight">TokenPulse</span>
          <span className="mono text-[9px] font-semibold text-[var(--acc)] bg-[var(--ad)] border border-[var(--ab)] px-1.5 py-0.5 rounded">
            alpha
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="text-[13px] text-[var(--t2)] hover:text-[var(--t)] transition-colors no-underline">
              {l.label}
            </Link>
          ))}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-2.5">
          <Link
            href="/#waitlist"
            className="text-[13px] font-semibold text-[var(--t2)] px-4 py-2 rounded-lg border border-[var(--bm)] hover:text-[var(--t)] hover:border-[var(--ab)] transition-all no-underline"
          >
            Pro Waitlist
          </Link>
          <Link
            href={CHROME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-semibold bg-[var(--acc)] text-white px-4 py-2 rounded-lg hover:bg-[#7D71FF] hover:-translate-y-px transition-all no-underline"
          >
            Install Free
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[var(--t2)] hover:text-[var(--t)] p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div className={cn('md:hidden border-t border-[var(--b)] bg-[var(--s1)] overflow-hidden transition-all', open ? 'max-h-96' : 'max-h-0')}>
        <div className="px-6 py-4 flex flex-col gap-4">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-sm text-[var(--t2)] hover:text-[var(--t)] no-underline">
              {l.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2 border-t border-[var(--b)]">
            <Link href="/#waitlist" onClick={() => setOpen(false)} className="flex-1 text-center text-sm font-semibold text-[var(--t2)] px-4 py-2.5 rounded-lg border border-[var(--bm)] no-underline">
              Pro Waitlist
            </Link>
            <Link href={CHROME_URL} target="_blank" rel="noopener noreferrer" className="flex-1 text-center text-sm font-semibold bg-[var(--acc)] text-white px-4 py-2.5 rounded-lg no-underline">
              Install Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
