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
        <div className="flex-1 max-w-[580px]">
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
          <div className="flex items-center gap-4 mb-10 flex-wrap">
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
          <div className="flex flex-wrap gap-2">
            {["Claude", "ChatGPT", "Gemini", "DeepSeek", "+ more coming"].map(
              (p) => (
                <div
                  key={p}
                  className="flex items-center gap-1.5 bg-[#0E0E11] border border-white/8 rounded-full px-3.5 py-1.5"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] shadow-[0_0_4px_rgba(0,229,160,0.5)]" />
                  <span className="font-mono text-[11px] font-semibold text-[#72728A]">
                    {p}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>

        {/* Right — popup mockup cropped */}
        <div className="flex-shrink-0 relative h-[460px] overflow-hidden lg:translate-x-9">
          {/* fade */}
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#080809] to-transparent z-20 pointer-events-none" />
          {/* hint */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 font-mono text-[10px] font-semibold text-[#6C5FFF] bg-[#0E0E11] border border-[rgba(108,95,255,0.22)] px-3 py-1.5 rounded-full whitespace-nowrap">
            ↓ Install to see everything
          </div>
          {/* no-api badge */}
          <div className="absolute top-3 right-0 z-10 flex items-center gap-1.5 bg-[#0E0E11] border border-[rgba(0,229,160,0.18)] rounded-xl px-3 py-2 shadow-lg">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] shadow-[0_0_5px_rgba(0,229,160,0.5)] animate-pulse" />
            <span className="font-mono text-[10px] font-semibold text-[#00E5A0] whitespace-nowrap">
              No API key required
            </span>
          </div>

          {/* Popup */}
          <PopupMockup />
        </div>
      </div>
    </section>
  );
}

function PopupMockup() {
  return (
    <div
      className="w-[300px] bg-[#080808] border border-[#1e1e1e] rounded-2xl overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.03),0_24px_64px_rgba(0,0,0,0.75),0_0_40px_rgba(108,95,255,0.07)] hover:-translate-y-1 transition-transform duration-300"
      style={{
        fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif',
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3.5 pt-3 pb-2.5 border-b border-[#131313]">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-md overflow-hidden border border-[rgba(108,95,255,0.3)]">
            <Image
              src="https://raw.githubusercontent.com/anu-ship-it/TokenPulse/main/src/icons/icon128.png"
              alt=""
              width={20}
              height={20}
            />
          </div>
          <span className="text-[12px] font-semibold text-[#c0c0c0]">
            TokenPulse
          </span>
        </div>
        <div className="flex items-center gap-1.5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] shadow-[0_0_5px_rgba(0,229,160,0.5)] animate-pulse" />
          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-[rgba(232,137,74,0.15)] text-[#e8894a]">
            Claude
          </span>
          <span className="text-[12px] text-[#555] px-1">💡</span>
          <span className="text-[12px] text-[#555] px-1">↻</span>
          <span className="text-[12px] text-[#555] px-1">⚙</span>
        </div>
      </div>
      {/* Context */}
      <div className="px-3.5 pt-3 pb-2.5 border-b border-[#0f0f0f]">
        <div className="text-[8px] font-bold tracking-widest text-[#888] uppercase mb-2">
          Context Window
        </div>
        <div className="text-[8px] text-[#aaa] tracking-widest uppercase mb-1">
          TOKENS USED
        </div>
        <div className="flex items-end justify-between mb-1">
          <span className="text-[28px] font-black text-[#06b6d4] leading-none tracking-tighter">
            ~10k
          </span>
          <span className="text-[10px] text-[#333] pb-1">200k limit</span>
        </div>
        <div className="flex justify-between mb-2">
          <span className="text-[10px] font-semibold text-[#e0e0e0]">
            ~190k remaining
          </span>
          <span className="text-[10px] text-[#888]">5% used</span>
        </div>
        <div className="h-[3px] bg-[#333] rounded-full overflow-hidden mb-1">
          <div className="h-full w-[5%] bg-[#06b6d4] rounded-full" />
        </div>
        <div className="flex justify-between">
          <span className="text-[8px] text-[#555]">0</span>
          <span className="text-[8px] font-black tracking-widest text-[#06b6d4]">
            HEALTHY
          </span>
          <span className="text-[8px] text-[#555]">200k</span>
        </div>
      </div>
      {/* Cost */}
      <div className="px-3.5 pt-3 pb-2.5 border-b border-[#0f0f0f]">
        <div className="text-[8px] font-bold tracking-widest text-[#888] uppercase mb-2">
          Estimated Cost · Sonnet 4
        </div>
        <div className="bg-[#0d0d0d] border border-[#161616] rounded-lg overflow-hidden">
          {[
            ["This conversation", "Input tokens only", "$0.031"],
            ["Today", "Peak usage · all chats", "$0.046"],
            ["This week", "Last 7 days", "$0.114"],
          ].map(([name, sub, val]) => (
            <div
              key={name}
              className="flex items-center justify-between px-3 py-2 border-b border-[#131313] last:border-0"
            >
              <div>
                <div className="text-[11px] font-semibold text-[#aaa]">
                  {name}
                </div>
                <div className="text-[9px] text-[#555]">{sub}</div>
              </div>
              <span className="text-[13px] font-black text-[#06b6d4]">
                {val}
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* Rate limits */}
      <div className="px-3.5 pt-3 pb-2.5">
        <div className="text-[8px] font-bold tracking-widest text-[#888] uppercase mb-2">
          Rate Limits
        </div>
        <div className="bg-[#0d0d0d] border border-[#161616] rounded-lg overflow-hidden">
          {[
            ["5-Hour Session", "—", "0%", 0],
            ["7-Day Weekly", "Resets in 88h 46m", "10%", 10],
          ].map(([name, sub, pct, w]) => (
            <div
              key={name as string}
              className="flex items-center justify-between px-3 py-2 border-b border-[#131313] last:border-0"
            >
              <div>
                <div className="text-[11px] font-semibold text-[#aaa]">
                  {name}
                </div>
                <div className="text-[9px] text-[#555]">{sub}</div>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-[13px] font-black text-[#06b6d4]">
                  {pct}
                </span>
                <div className="w-[70px] h-[2px] bg-[#2a2a2a] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#06b6d4] rounded-full"
                    style={{ width: `${w}%` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Footer */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-t border-[#131313]">
        <div className="flex items-center gap-1">
          <button className="text-[9px] text-[#4a9ba5]">⭐ review</button>
          <span className="text-[9px] text-[#222]">·</span>
          <button className="text-[9px] text-[#4a9ba5]">help</button>
        </div>
        <button className="text-[9px] font-bold px-3 py-1 rounded-md bg-[rgba(34,197,94,0.08)] text-[#06b6d4] border border-[rgba(34,197,94,0.2)]">
          + New chat
        </button>
      </div>
    </div>
  );
}
