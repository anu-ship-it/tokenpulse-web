"use client";

import { useState } from "react";

const STORE_URL =
  "https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjkankcnalklchfcehhic";

type Tip = {
  title: string;
  body: string;
  prompt?: string;
};

const CLAUDE_TIPS: Tip[] = [
  {
    title: "Start a new chat when topic changes",
    body: "Every message adds to the context. When you shift topics, start fresh — don't drag old context into a new task.",
  },
  {
    title: "Ask for compact answers first",
    body: "Tell Claude to give the shortest useful answer first, then expand only if needed. Saves tokens on both sides.",
    prompt:
      "Give me the shortest useful answer first. Ask if I want more detail.",
  },
  {
    title: "Summarize before a long session",
    body: "If a conversation is getting long, ask Claude to summarize the key decisions so far. Then start a new chat with just that summary.",
    prompt:
      "Summarize the key decisions from this conversation in under 200 words.",
  },
  {
    title: "Use Projects for recurring work",
    body: "Put stable instructions and files in a Claude Project instead of pasting them every session. Claude remembers so you don't have to repeat.",
  },
  {
    title: "Use faster models for simple tasks",
    body: "Don't use Claude Opus for formatting a list or rewriting a short paragraph. Save your premium quota for analysis and deep work.",
  },
  {
    title: "Watch your 5-hour session limit",
    body: "Claude's 5-hour rolling window resets independently of the 7-day limit. Check your session usage before starting a heavy session.",
  },
  {
    title: "Paste only the relevant code",
    body: "When debugging, paste just the function or section that matters. Reference the filename instead of pasting hundreds of unrelated lines.",
  },
  {
    title: "Ask for edits, not rewrites",
    body: "When Claude generates code in an artifact, ask for edits instead of asking for the whole file again. Edits cost far fewer tokens.",
    prompt: "Just show me the diff, don't repeat the whole file.",
  },
];

const CHATGPT_TIPS: Tip[] = [
  {
    title: "Use Custom Instructions for stable context",
    body: "Put your tone, format preferences, and recurring context in Custom Instructions. Stop re-briefing ChatGPT on every new chat.",
  },
  {
    title: "One job per chat",
    body: "ChatGPT works best when each conversation has a single clear purpose. Mixing research, drafting, and editing in one chat burns context fast.",
  },
  {
    title: "Skip Thinking mode for simple tasks",
    body: "Thinking models use more tokens and quota. Use them for hard decisions or complex debugging — not for rewriting emails.",
    prompt: "Give me a direct answer. No need for deep reasoning on this one.",
  },
  {
    title: "Use Projects for recurring clients",
    body: "ChatGPT Projects keep context scoped. One project per client, one per research area. Keeps conversations focused and context lean.",
  },
  {
    title: "Split research from writing",
    body: "Do your research in one chat, then start a fresh chat for the final output. Don't carry the full research thread into the writing session.",
  },
  {
    title: "Watch TokenPulse during coding sessions",
    body: "Code and logs consume tokens fast. When the bar hits 70%, start wrapping up or summarize the session state before continuing in a new chat.",
  },
  {
    title: "Free tier? Know your daily GPT-4o cap",
    body: "Free accounts get a limited number of GPT-4o messages per day before falling back to GPT-4o mini. Save your quota for tasks that actually need it.",
  },
  {
    title: "Avoid pasting full files repeatedly",
    body: "Instead of re-pasting an entire file for each edit, reference line numbers or function names. Tell ChatGPT exactly what to change and where.",
  },
];

function TipCard({ tip, index }: { tip: Tip; index: number }) {
  const [copied, setCopied] = useState(false);

  return (
    <div className="bg-bg2 border border-border rounded-xl p-6 hover:border-teal/30 hover:shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-200">
      <div className="text-[10px] font-extrabold tracking-widest text-[#3a3a3a] mb-3">
        {String(index + 1).padStart(2, "0")}
      </div>
      <div className="text-[14px] font-bold text-teal-light mb-2">
        {tip.title}
      </div>
      <div className="text-[13px] text-[#8aa8ac] leading-relaxed">
        {tip.body}
      </div>
      {tip.prompt && (
        <div className="relative mt-4">
          <div className="text-[11px] text-teal bg-bg3 border border-border2 rounded-lg px-3 py-3 pr-20 leading-relaxed font-mono">
            {tip.prompt}
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(tip.prompt!);
              setCopied(true);
              setTimeout(() => setCopied(false), 1500);
            }}
            className="absolute top-1/2 -translate-y-1/2 right-2.5 text-[10px] font-bold px-2.5 py-1.5 rounded-md bg-teal/10 text-teal border border-teal/20 hover:bg-teal/20 transition-colors whitespace-nowrap"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}

export default function TipsPage() {
  const [tab, setTab] = useState<"claude" | "chatgpt">("claude");
  const tips = tab === "claude" ? CLAUDE_TIPS : CHATGPT_TIPS;

  return (
    <section className="pt-36 pb-24">
      <div className="max-w-[1100px] mx-auto w-full px-6 md:px-10">
        <div className="text-[10px] font-bold tracking-[0.14em] text-teal uppercase mb-3">
          Token Tips
        </div>
        <h1 className="text-[32px] md:text-[44px] font-extrabold leading-tight tracking-tight mb-4">
          Use less. <span className="text-teal">Get more</span>
          <br />
          from every session.
        </h1>
        <p className="text-[15px] text-[#8aa8ac] max-w-[560px] leading-relaxed mb-12">
          16 practical tips to stretch your context window and avoid hitting
          limits mid-conversation — for both Claude and ChatGPT. Same tips built
          right into the extension.
        </p>

        <div className="flex gap-2 mb-10">
          {(["claude", "chatgpt"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-5 py-2.5 rounded-full text-[13px] font-semibold border transition-colors ${
                tab === t
                  ? "bg-teal/10 border-teal/30 text-teal"
                  : "bg-bg2 border-border text-[#8aa8ac] hover:text-teal-light"
              }`}
            >
              {t === "claude" ? "Claude" : "ChatGPT"}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {tips.map((tip, i) => (
            <TipCard key={tip.title} tip={tip} index={i} />
          ))}
        </div>

        <div className="bg-gradient-to-br from-teal/[0.08] to-teal-light/[0.04] border border-teal/20 rounded-2xl px-8 py-10 text-center shadow-[0_8px_32px_rgba(0,0,0,0.3)]">
          <h2 className="text-lg font-bold mb-2">
            See these tips live in your browser
          </h2>
          <p className="text-[13px] text-[#8aa8ac] mb-6 max-w-[400px] mx-auto">
            TokenPulse shows rotating tips like these directly in the extension
            popup — plus live token tracking on every chat.
          </p>
          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal text-bg text-sm font-bold hover:opacity-90 transition-opacity shadow-[0_8px_24px_rgba(6,182,212,0.2)]"
          >
            Add to Chrome — it&apos;s free
          </a>
        </div>
      </div>
    </section>
  );
}
