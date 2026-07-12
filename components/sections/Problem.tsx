const problems = [
  {
    pain: '"Claude stopped mid-response. I don\'t know if I hit the context limit or the rate limit. I have to start over."',
    fix: "See your 5-hour session and 7-day weekly limits in real time. Know 20 minutes before you hit the wall.",
  },
  {
    pain: '"I use Claude, GPT, and Cursor simultaneously. I have no idea where my AI budget is going each month."',
    fix: "Cost tracking across every session on every platform. See today, this week, this month — in one popup.",
  },
  {
    pain: '"I was 2 hours into a debugging session and hit the context limit. Lost the entire conversation thread."',
    fix: "A live bar above every input box shows your context window filling up. You see it before it overflows.",
  },
];

export default function Problem() {
  return (
    <section
      className="relative z-10 py-24 border-t border-white/5 bg-[#0E0E11]"
      id="problem"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="font-mono text-[11px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-4">
          The problem
        </div>
        <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.04em] mb-4">
          Three ways AI limits
          <br />
          <em className="not-italic text-[#00E5A0]">kill developer flow.</em>
        </h2>
        <p className="text-[15px] text-[#72728A] leading-relaxed max-w-[480px] mb-14">
          You don't know you're about to hit a limit until you're already in the
          middle of something that matters.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8 rounded-2xl overflow-hidden border border-white/8">
          {problems.map((p, i) => (
            <div
              key={i}
              className="bg-[#080809] p-8 hover:bg-[#0E0E11] transition-colors"
            >
              <div className="flex items-center gap-1.5 mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                <span className="font-mono text-[10px] font-semibold text-[#EF4444] uppercase tracking-wide">
                  The pain
                </span>
              </div>
              <p className="text-[15px] text-[#72728A] leading-relaxed italic mb-6">
                {p.pain}
              </p>
              <div className="flex items-center gap-1.5 mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0]" />
                <span className="font-mono text-[10px] font-semibold text-[#00E5A0] uppercase tracking-wide">
                  TokenPulse fix
                </span>
              </div>
              <p className="text-[14px] font-semibold text-[#EDEEF2] leading-relaxed">
                {p.fix}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
