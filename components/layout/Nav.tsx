"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const STORE_URL =
  "https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080809]/95 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-[#141418] border border-[rgba(108,95,255,0.22)] overflow-hidden flex items-center justify-center">
            <Image
              src="https://raw.githubusercontent.com/anu-ship-it/TokenPulse/main/src/icons/icon128.png"
              alt="TokenPulse"
              width={22}
              height={22}
              className="rounded-sm"
            />
          </div>
          <span className="text-sm font-bold text-[#EDEEF2] tracking-tight">
            TokenPulse
          </span>
          <span className="font-mono text-[9px] font-semibold text-[#6C5FFF] bg-[rgba(108,95,255,0.10)] border border-[rgba(108,95,255,0.22)] px-1.5 py-0.5 rounded">
            alpha
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-7">
          {["Features", "Platforms", "Pricing", "Blog", "FAQ", "About"].map(
            (item) => (
              <Link
                key={item}
                href={item === "Blog" ? "/blog" : `/#${item.toLowerCase()}`}
                className="text-sm text-[#72728A] hover:text-[#EDEEF2] transition-colors"
              >
                {item}
              </Link>
            ),
          )}
        </div>

        {/* CTAs */}
        <div className="hidden md:flex items-center gap-2.5">
          <Link
            href="/#pricing"
            className="text-sm font-semibold text-[#72728A] px-4 py-2 rounded-lg border border-white/8 hover:text-[#EDEEF2] hover:border-[rgba(108,95,255,0.22)] transition-all"
          >
            Join Pro Waitlist
          </Link>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-bold text-white bg-[#6C5FFF] px-4 py-2 rounded-lg hover:bg-[#7D71FF] transition-all hover:-translate-y-0.5"
          >
            Install Free
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#72728A] hover:text-[#EDEEF2]"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <svg
            width="20"
            height="20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            {open ? (
              <>
                <path d="M4 4l12 12M16 4L4 16" />
              </>
            ) : (
              <>
                <path d="M3 6h14M3 12h14M3 18h14" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0E0E11] border-t border-white/5 px-6 py-4 flex flex-col gap-3">
          {["Features", "Platforms", "Pricing", "Blog", "FAQ", "About"].map((item) => (
            <Link
              key={item}
              href={item === "Blog" ? "/blog" : `/#${item.toLowerCase()}`}
              className="text-sm text-[#72728A] hover:text-[#EDEEF2] py-1"
              onClick={() => setOpen(false)}
            >
              {item}
            </Link>
          ))}
          <div className="flex flex-col gap-2 pt-2 border-t border-white/5">
            <Link
              href="/#pricing"
              className="text-sm font-semibold text-center text-[#EDEEF2] py-2.5 rounded-lg border border-white/8"
              onClick={() => setOpen(false)}
            >
              Join Pro Waitlist
            </Link>
            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-center text-white bg-[#6C5FFF] py-2.5 rounded-lg"
            >
              Install Free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
