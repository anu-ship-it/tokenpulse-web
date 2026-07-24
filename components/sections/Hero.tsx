import Button from "@/components/ui/Button";
import HeroVisual from "@/components/HeroVisual";

const STORE_URL =
  "https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic";

export default function Hero() {
  return (
    <section className="relative z-10 min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-[radial-gradient(circle,rgba(108,95,255,0.05)_0%,transparent_60%)]" />
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full border border-[rgba(108,95,255,0.06)]" />
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full border border-[rgba(108,95,255,0.03)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:pl-12 lg:pr-0 w-full py-20 flex flex-col lg:flex-row items-center gap-10">
        {/* Left */}
        <div className="flex-1 max-w-[520px] flex-shrink-0">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] shadow-[0_0_6px_rgba(0,229,160,0.5)] animate-pulse" />
            <span className="font-mono text-[11px] font-medium text-[#00E5A0] tracking-[0.8px] uppercase">
              Live · Claude · ChatGPT · Gemini · DeepSeek
            </span>
          </div>

          <h1 className="text-[clamp(38px,4.8vw,64px)] font-bold leading-[1.05] tracking-[-0.05em] mb-6">
            Never lose your flow
            <br />
            to an AI rate limit{" "}
            <em className="not-italic text-[#00E5A0]">again.</em>
          </h1>

          <p className="text-lg text-[#72728A] leading-relaxed mb-9 max-w-[460px]">
            TokenPulse puts a live token bar inside every AI tool you use. Know
            exactly how much runway you have{" "}
            <strong className="text-[#EDEEF2] font-semibold">
              before Claude cuts you off mid-prompt.
            </strong>
          </p>

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

          <div className="flex items-center gap-2">
            <div className="flex -space-x-1.5">
              {["#6C5FFF", "#00E5A0", "#F59E0B", "#EF4444"].map((color, i) => (
                <div
                  key={i}
                  className="w-6 h-6 rounded-full border-2 border-[#080809] flex items-center justify-center text-[9px] font-bold text-white"
                  style={{ background: color }}
                >
                  {["A", "D", "M", "S"][i]}
                </div>
              ))}
            </div>
            <span className="text-[13px] text-[#72728A]">
              <strong className="text-[#EDEEF2]">100+</strong> developers
              tracking their AI limits
            </span>
          </div>
        </div>

        {/* Right — visual, constrained size, shifted right */}
        <div className="flex-shrink-0 w-full lg:w-[440px] lg:translate-x-10">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
