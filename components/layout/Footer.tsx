import Link from 'next/link'
import Image from 'next/image'

const CHROME_URL =
  'https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic'

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-[var(--b)] py-7 px-6">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <div className="w-5 h-5 rounded-[5px] overflow-hidden border border-[var(--ab)]">
            <Image
              src="https://raw.githubusercontent.com/anu-ship-it/TokenPulse/main/src/icons/icon128.png"
              alt="TokenPulse"
              width={20}
              height={20}
            />
          </div>
          <span className="text-[13px] font-semibold text-[var(--t)]">TokenPulse</span>
          <span className="mono text-[10px] text-[var(--t3)]">
            © 2026 · Built by Anoop Kumar & Mansi Rathore
          </span>
        </div>
        <div className="flex items-center gap-5 flex-wrap">
          {[
            { href: '/blog', label: 'Blog' },
            { href: '/support', label: 'Support' },
            { href: 'https://github.com/anu-ship-it/TokenPulse', label: 'GitHub', external: true },
            { href: CHROME_URL, label: 'Chrome Store', external: true },
            { href: 'mailto:anup17508@gmail.com', label: 'Contact' },
          ].map((l) => (
            <Link
              key={l.href}
              href={l.href}
              target={l.external ? '_blank' : undefined}
              rel={l.external ? 'noopener noreferrer' : undefined}
              className="text-[12px] text-[var(--t3)] hover:text-[var(--t2)] transition-colors no-underline"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
