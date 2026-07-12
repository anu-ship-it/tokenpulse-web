const steps = [
  {
    num: "01",
    title: "Install the extension",
    body: "One click from the Chrome Web Store. No permissions beyond what's needed to read your existing session data.",
    tag: "30 seconds",
  },
  {
    num: "02",
    title: "Open any AI tool",
    body: "TokenPulse automatically injects a live token bar above the input box on Claude, ChatGPT, Gemini, and DeepSeek.",
    tag: "Automatic",
  },
  {
    num: "03",
    title: "Click the icon for depth",
    body: "The popup shows rate limits, reset countdowns, cost estimates, and daily history. Click once, see everything.",
    tag: "Always live",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative z-10 py-24 border-t border-white/5" id="how">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="font-mono text-[11px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-4">
          How it works
        </div>
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.04em] mb-4">
          30 seconds from install
          <br />
          to <em className="not-italic text-[#00E5A0]">full visibility.</em>
        </h2>
        <p className="text-[15px] text-[#72728A] leading-relaxed max-w-[480px] mb-14">
          No API key. No account. No configuration. Install and open any
          supported AI tool.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
          {/* connector line */}
          <div className="hidden md:block absolute top-5 left-[calc(16.66%+16px)] right-[calc(16.66%+16px)] h-px bg-gradient-to-r from-[#6C5FFF] via-transparent to-[#6C5FFF] opacity-20" />

          {steps.map((step) => (
            <div key={step.num} className="flex flex-col gap-4">
              <div className="w-10 h-10 rounded-xl bg-[rgba(108,95,255,0.10)] border border-[rgba(108,95,255,0.22)] flex items-center justify-center font-mono text-[13px] font-semibold text-[#6C5FFF]">
                {step.num}
              </div>
              <div>
                <h3 className="text-[16px] font-bold text-[#EDEEF2] tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] text-[#72728A] leading-relaxed mb-3">
                  {step.body}
                </p>
                <span className="font-mono text-[10px] font-semibold text-[#00E5A0] bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.18)] px-2 py-0.5 rounded">
                  {step.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
