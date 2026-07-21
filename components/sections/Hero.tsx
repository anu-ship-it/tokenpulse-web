import Image from "next/image";
import Button from "@/components/ui/Button";

const STORE_URL =
  "https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic";

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center pt-16">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(108,95,255,0.05)_0%,transparent_60%)]" />
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-[rgba(108,95,255,0.06)]" />
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full border border-[rgba(108,95,255,0.03)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-20 flex flex-col lg:flex-row items-center gap-16 lg:gap-16">
        {/* Left */}
        <div className="flex-1 max-w-[560px]">
          {/* Eyebrow */}
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] shadow-[0_0_6px_rgba(0,229,160,0.5)] animate-pulse" />
            <span className="font-mono text-[11px] font-medium text-[#00E5A0] tracking-[0.8px] uppercase">
              Live · Claude · ChatGPT · Gemini · DeepSeek
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-[clamp(38px,4.8vw,64px)] font-bold leading-[1.05] tracking-[-0.05em] mb-6">
            Never lose your flow
            <br />
            to an AI rate limit{" "}
            <em className="not-italic text-[#00E5A0]">again.</em>
          </h1>

          {/* Sub */}
          <p className="text-lg text-[#72728A] leading-relaxed mb-9 max-w-[480px]">
            TokenPulse puts a live token bar inside every AI tool you use. Know
            exactly how much runway you have{" "}
            <strong className="text-[#EDEEF2] font-semibold">
              before Claude cuts you off mid-prompt.
            </strong>
          </p>

          {/* CTAs */}
          <div className="flex items-center gap-4 mb-8 flex-wrap">
            <Button href={STORE_URL} external size="lg">
              Install for Chrome — Free
            </Button>
            <div className="font-mono text-[10px] text-[#32324A] leading-loose">
              No account · No API key
              <br />
              Works in 30 seconds
            </div>
          </div>

          {/* Platform pills */}
          <div className="flex flex-wrap gap-2 mb-6">
            {[
              { label: "Claude", href: "https://claude.ai" },
              { label: "ChatGPT", href: "https://chatgpt.com" },
              { label: "Gemini", href: "https://gemini.google.com" },
              { label: "DeepSeek", href: "https://chat.deepseek.com" },
              { label: "+ more coming", href: "/#roadmap" },
            ].map((p) => (
              <a
                key={p.label}
                href={p.href}
                target={p.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  p.href.startsWith("http") ? "noopener noreferrer" : undefined
                }
                className="flex items-center gap-1.5 bg-[#0E0E11] border border-white/8 rounded-full px-3.5 py-1.5 hover:border-[rgba(108,95,255,0.3)] hover:bg-[#141418] transition-all group"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] shadow-[0_0_4px_rgba(0,229,160,0.5)]" />
                <span className="font-mono text-[11px] font-semibold text-[#72728A] group-hover:text-[#EDEEF2] transition-colors">
                  {p.label}
                </span>
              </a>
            ))}
          </div>

          {/* Social proof */}
          <div className="flex items-center gap-6 flex-wrap">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {["#6C5FFF", "#00E5A0", "#F59E0B", "#EF4444"].map(
                  (color, i) => (
                    <div
                      key={i}
                      className="w-6 h-6 rounded-full border-2 border-[#080809] flex items-center justify-center text-[9px] font-bold text-white"
                      style={{ background: color }}
                    >
                      {["A", "D", "M", "S"][i]}
                    </div>
                  ),
                )}
              </div>
              <span className="text-[13px] text-[#72728A]">
                <strong className="text-[#EDEEF2]">500+</strong> developers
                tracking their AI limits
              </span>
            </div>
          </div>
        </div>

        {/* Right — GIF + Video */}
        <div className="flex-shrink-0 flex flex-col items-center gap-4 lg:translate-x-9">
          {/* GIF — always visible, loops automatically */}
          <div className="relative rounded-2xl overflow-hidden border border-white/8 shadow-[0_0_0_1px_rgba(108,95,255,0.1),0_24px_64px_rgba(0,0,0,0.6)]">
            <img
              src="/demo.gif"
              alt="TokenPulse live token bar updating in real time on Claude"
              width={560}
              height={315}
              className="block w-full max-w-[560px]"
            />
            {/* Live indicator */}
            <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-[#080809]/80 backdrop-blur-sm border border-white/10 rounded-full px-2.5 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] animate-pulse shadow-[0_0_4px_rgba(0,229,160,0.5)]" />
              <span className="font-mono text-[10px] font-semibold text-[#00E5A0]">
                Live
              </span>
            </div>
          </div>

          {/* Video CTA — watch full demo */}
          <a
            href="/demo.mp4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-[#0E0E11] border border-white/8 rounded-xl px-4 py-2.5 hover:border-[rgba(108,95,255,0.3)] transition-all group"
          >
            <div className="w-7 h-7 rounded-lg bg-[rgba(108,95,255,0.12)] border border-[rgba(108,95,255,0.22)] flex items-center justify-center flex-shrink-0">
              <svg width="10" height="12" viewBox="0 0 10 12" fill="#6C5FFF">
                <path d="M0 0l10 6-10 6V0z" />
              </svg>
            </div>
            <div>
              <div className="text-[12px] font-semibold text-[#EDEEF2] group-hover:text-white transition-colors">
                Watch full demo
              </div>
              <div className="font-mono text-[10px] text-[#32324A]">
                29 seconds · no sound needed
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
