"use client";
import { useState } from "react";

const faqs = [
  {
    q: "Does TokenPulse read my conversations?",
    a: "No. TokenPulse reads only token usage statistics — counts and percentages. It never reads, stores, or transmits your conversation content. All data stays in your browser.",
  },
  {
    q: "Does it work with the Claude API, not just claude.ai?",
    a: "TokenPulse works with claude.ai in your browser. It reads your existing browser session — no API key needed. If you use the Claude API directly in code, TokenPulse does not track that usage. API monitoring for developers is on the Pro roadmap.",
  },
  {
    q: "Will it slow down my browser?",
    a: "No measurably. TokenPulse polls Claude's usage endpoint every 5 minutes in the background and reads the DOM to estimate context usage. The performance impact is negligible — similar to any other lightweight extension.",
  },
  {
    q: "Does it work on Firefox?",
    a: "Not yet. TokenPulse is currently Chrome, Edge, Brave, and Arc only. Firefox support is on the roadmap and ships with Pro v1.",
  },
  {
    q: "How accurate are the token counts?",
    a: "Context window estimates use a ~4 characters per token approximation, which gives ±8% accuracy. Claude's rate limit percentages are pulled directly from Claude's internal API — those are exact, not estimated.",
  },
  {
    q: "What happens to my data if I uninstall?",
    a: "All TokenPulse data is stored locally in your browser. Uninstalling the extension permanently deletes all stored usage history and settings. Nothing is stored on our servers.",
  },
  {
    q: "Is the $4.99 Pro price locked if I join the waitlist now?",
    a: "Yes. Waitlist members get the early adopter price locked permanently — even after we raise it at launch. The lifetime $69 option is also locked at that price for the first 100 spots.",
  },
  {
    q: "Can I use it on multiple computers?",
    a: "The free tier works on one device — data stays local to that browser. Pro includes cross-device sync across Chrome, Edge, Brave, Arc, and VSCode so your history and settings follow you everywhere.",
  },
  {
    q: "Is TokenPulse affiliated with Anthropic, OpenAI, or Google?",
    a: "No. TokenPulse is an independent product built by Alpha. It is not affiliated with, endorsed by, or officially supported by Anthropic, OpenAI, Google, or DeepSeek.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="relative z-10 py-24 border-t border-white/5" id="faq">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left */}
          <div className="lg:col-span-1">
            <div className="font-mono text-[11px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-4">
              FAQ
            </div>
            <h2 className="text-[clamp(24px,3vw,36px)] font-bold leading-[1.1] tracking-[-0.04em] mb-4">
              Questions
              <br />
              <em className="not-italic text-[#00E5A0]">answered.</em>
            </h2>
            <p className="text-[14px] text-[#72728A] leading-relaxed mb-6">
              Anything else? Email us at{" "}
              <a
                href="mailto:support@token-pulse.in"
                className="text-[#6C5FFF] hover:underline"
              >
                support@token-pulse.in
              </a>
            </p>

            {/* Quick links */}
            <div className="flex flex-col gap-2">
              {[
                { label: "Privacy Policy", href: "/privacy" },
                { label: "Terms of Service", href: "/terms" },
                { label: "Contact", href: "/contact" },
                {
                  label: "GitHub",
                  href: "https://github.com/anu-ship-it/TokenPulse",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="font-mono text-[11px] text-[#32324A] hover:text-[#6C5FFF] transition-colors flex items-center gap-1.5"
                >
                  <span>→</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-2">
            <div className="flex flex-col divide-y divide-white/5">
              {faqs.map((faq, i) => (
                <div key={i}>
                  <button
                    onClick={() => setOpen(open === i ? null : i)}
                    className="w-full flex items-start justify-between gap-4 py-5 text-left group"
                  >
                    <span
                      className={`text-[15px] font-semibold leading-snug transition-colors ${
                        open === i
                          ? "text-[#EDEEF2]"
                          : "text-[#72728A] group-hover:text-[#EDEEF2]"
                      }`}
                    >
                      {faq.q}
                    </span>
                    <span
                      className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all mt-0.5 ${
                        open === i
                          ? "border-[#6C5FFF] bg-[rgba(108,95,255,0.12)] text-[#6C5FFF]"
                          : "border-white/10 text-[#32324A] group-hover:border-white/20"
                      }`}
                    >
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                      >
                        <path
                          d={open === i ? "M2 5h6" : "M5 2v6M2 5h6"}
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {open === i && (
                    <div className="pb-5">
                      <p className="text-[14px] text-[#72728A] leading-[1.8]">
                        {faq.a}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
