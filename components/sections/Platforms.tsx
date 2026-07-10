import { features } from "node:process";

const platforms = [
    {
        name: 'Claude',
        features: [
            { label: 'Live token bar', live: true },
            { label: 'Context window %', live: true },
            { label: '5-hr + 7-day limits', live: true },
            { label: 'Reset countdowns', live: true },
            { label: 'Smart notifications', live: true },
            { label: 'Cost tracking', live: true },
            { label: 'Daily history', live: true },
        ],
        fill: 100,
        note: null,
    },
    {
        name: 'ChatGPT',
        features: [
            { label: 'Live token bar', live: true },
            { label: 'Context window %', live: true },
            { label: 'Rate limits', live: false },
            { label: 'Reset countdowns', live: true },
            { label: 'Smart notifications', live: true },
            { label: 'Cost tracking', live: true },
            { label: 'Daily history', live: true }, 
        ],
        fill: 72,
        note: null,
    },
    {
        name: 'Gemini',
        features: [
            { label: 'Live token bar', live: true },
            { label: 'Context window %', live: true },
            { label: 'Rate limits', live: false },
            { label: 'Reset countdowns', live: false },
            { label: 'Smart notifications', live: true },
            { label: 'Cost tracking', live: true },
            { label: 'Daily history', live: true },
        ],
        fill: 72,
        note: null,
    },
    {
        name: 'DeepSeek',
        features: [
            { label: 'Live token bar', live: true },
            { label: 'Context window %', live: true },
            { label: 'Rate limits', live: false },
            { label: 'Reset countdowns', live: false },
            { label: 'Smart notifications', live: true },
            { label: 'Cost tracking', live: true },
            { label: 'Daily history', live: true },   
        ],
        fill: 72,
        note: '+ Grok, Perplexity, Cursor coming with Pro',
    },
]

export default function Platforms() {
    return (
        <section className="relative z-10 py-24 border-t borber-white/5" id="platforms">
            <div className="max-w-7x1 mx-auto px-6 lg:px-12">
                <div className="font-mono text-[11px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-4">
                    Platform support
                </div>
                <h2 className="text-[clamp(28px,3.5vw,44px)] font-bold leading-[1.1] tracking-[-0.04em] mb-4">
                    Four platforms today.<br/>
                    <em className="not-italic text-[#000EA0]">More on the way.</em>
                </h2>
                <p className="text-[15px] text-[#72728A] leading-relaxed max-w-[480px] mb-14">
                    Claude gets the deepest integration because it exposes rate limit data. Every other platform gets the full baseline.
                </p>

                
            </div>
        </section>
    )
}