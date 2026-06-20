"use client";

import Link from "next/link";
import { useState } from "react";

const STORE_URL =
  "https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic";

function LogoMark() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <circle cx="9" cy="9" r="7" stroke="#222" strokeWidth="2" />
      <path
        d="M9 2 a7 7 0 0 1 6.06 3.5"
        stroke="#06b6d4"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="9" cy="9" r="4" stroke="#1a1a1a" strokeWidth="1.5" />
      <path
        d="M9 5 a4 4 0 0 1 3.46 2 a4 4 0 0 1 0 4"
        stroke="#67e8f9"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <text
        x="9"
        y="12.5"
        textAnchor="middle"
        fontFamily="-apple-system,sans-serif"
        fontSize="7"
        fontWeight="800"
        fill="white"
      >
        T
      </text>
    </svg>
  );
}

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#compare", label: "Compare" },
  { href: "/tips", label: "Tips" },
  { href: "/pricing", label: "Pricing" },
  { href: "/changelog", label: "Changelog" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-10 py-4 bg-bg/85 backdrop-blur-md border-b border-border2">
      <Link href="/" className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-[9px] bg-bg2 border border-border flex items-center justify-center">
          <LogoMark />
        </div>
        <span className="text-[15px] font-bold text-teal-light tracking-tight">
          TokenPulse
        </span>
      </Link>

      <ul className="hidden md:flex items-center gap-7">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              className="text-[13px] text-teal-dim hover:text-teal-light transition-colors"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>

      <a
        href={STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex text-xs font-bold px-[18px] py-2 rounded-lg bg-teal/10 text-teal border border-teal/25 hover:bg-teal/20 transition-colors whitespace-nowrap"
      >
        Add to Chrome — Free
      </a>

      <button
        className="md:hidden text-teal-dim text-2xl"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? "✕" : "☰"}
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-bg border-b border-border2 md:hidden flex flex-col px-6 py-4 gap-4">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-sm text-teal-dim hover:text-teal-light"
            >
              {l.label}
            </Link>
          ))}
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold px-4 py-2.5 rounded-lg bg-teal/10 text-teal border border-teal/25 text-center"
          >
            Add to Chrome — Free
          </a>
        </div>
      )}
    </nav>
  );
}
