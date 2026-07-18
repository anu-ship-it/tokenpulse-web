import Link from 'next/link'
import Image from 'next/image'

const links = {
  Product: [
    { label: 'Features', href: '/#features' },
    { label: 'Platforms', href: '/#platforms' },
    { label: 'Pricing', href: '/#pricing' },
    { label: 'Roadmap', href: '/#roadmap' },
  ],
  Resources: [
    { label: 'Blog', href: '/blog' },
    { label: 'Support', href: '/support' },
    { label: 'GitHub', href: 'https://github.com/anu-ship-it/TokenPulse', external: true },
    { label: 'Changelog', href: '/changelog' },
    { label: 'Twitter / X', href: 'https://x.com/tokenpulseapp', external: true },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
    { label: 'Contact', href: '/contact' },
  ],
}

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 bg-[#080809]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-7 h-7 rounded-lg bg-[#141418] border border-[rgba(108,95,255,0.22)] overflow-hidden flex items-center justify-center">
                <Image
                  src="https://raw.githubusercontent.com/anu-ship-it/TokenPulse/main/src/icons/icon128.png"
                  alt="TokenPulse"
                  width={22}
                  height={22}
                  className="rounded-sm"
                />
              </div>
              <span className="text-sm font-bold text-[#EDEEF2]">TokenPulse</span>
            </Link>
            <p className="text-xs text-[#32324A] leading-relaxed mb-4">
              Live token tracking for developers who use AI tools daily.
            </p>
            <p className="font-mono text-[10px] text-[#32324A]">
              Built by Anoop Kumar & Mansi Rathore
            </p>
          </div>

          {/* Link groups */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <div className="font-mono text-[10px] font-semibold text-[#32324A] uppercase tracking-widest mb-4">
                {group}
              </div>
              <ul className="flex flex-col gap-2.5">
                {items.map(item => (
                  <li key={item.label}>
                    {'external' in item && item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-[#72728A] hover:text-[#EDEEF2] transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        className="text-sm text-[#72728A] hover:text-[#EDEEF2] transition-colors"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="font-mono text-[10px] text-[#32324A]">
            © 2026 TokenPulse · Alpha · All rights reserved
          </p>
          <p className="font-mono text-[10px] text-[#32324A]">
            token-pulse.in
          </p>
        </div>
      </div>
    </footer>
  )
}
