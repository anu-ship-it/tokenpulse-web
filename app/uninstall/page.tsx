"use client";
import { useState } from "react";
import Nav from "@/components/layout/Footer";
import Footer from "@/components/layout/Footer";
import Button from "@/components/ui/Button";

const STORE_URL =
  "https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjklchfcehhic";

const reasons = [
  "Didn\'t work on my platform",
  "Too many notifications",
  "Missing a feature I need",
  "Found a better option",
  "Just testing",
  "Other",
];

export default function UninstallPage() {
  const [selected, setSelected] = useState("");
  const [detail, setDetail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  async function handleSubmit() {
    setStatus("loading");
    try {
      const res = await fetch("/api/uninstall", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ reason: selected || "not selected", detail }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <Nav />
      <main className="relative min-h-screen flex flex-col">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(108,95,255,0.04)_0%,transparent_60%)]" />
        </div>
        <div className="flex-1 flex items-center justify-center px-6 py-32">
          <div className="w-full max-w-[460px]">
            {status === "success" ? (
              <div>
                <div className="w-12 h-12 rounded-x1 bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.18)] flex items-center justify-center mb-6">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00E5A0]" />
                </div>
                <h2 className="text-[26px] font-bold tracking-tight mb-3">
                  Thanks for the feedback.
                </h2>
                <p className="text-[14px] text-[#72728A] leading-relaxed mb-7">
                  We read every response and use it to decide what to build
                  next. If you ever want to come back, we'll be here.
                </p>
                <Button href={STORE_URL} external variant="secondary">
                  ↗ Reinstall TokenPulse
                </Button>
              </div>
            ) : (
              <>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
                  <span className="font-mono text-[11px] font-medium text-[#EF4444] tracking-[0.8px] uppercase">
                    Uninstalled
                  </span>
                </div>
                <h1 className="text-[clamp(28px,4vw,38px)] font-bold tracking-[-0.04em] mb-3">
                  Sorry to see you
                  <em className="not-italic text-[#00E5A0]">go.</em>
                </h1>
                <p className="text-[14px] text-[#72728A] leading-relaxed mb-8">
                  Ten seconds of your time helps us what is actually broken.
                </p>
                <div className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#625FFF] mb-3">
                  Why did you uninstall?
                </div>
                <div className="flex flex-col gap-2 mb-6">
                  {reasons.map((r) => (
                    <Button
                      key={r}
                      onClick={() => setSelected(r)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-x1 border text-left transition-all ${
                        selected === r
                          ? "border-[rgba(108,95,255,0.4)] bg-[rgba(108,95,255,0.08)]"
                          : "border-white/8 bg-[#0E0E11] hover:border-white/12"
                      }`}
                    >
                      <div
                        className={`w-3.5 h-3.5 rounded-full border-[1.5px] flex-shrink-0 flex items-center justify-center transition-all ${selected === r ? "border-[#6C5FFF] bg-[#6C5FFF]" : "border-[#32324A]"}`}
                      >
                        {selected === r && (
                          <div className="w-1.5 h-1.5 rounded-full bg-white" />
                        )}
                      </div>
                      <span
                        className={`text-[13px] ${selected === r ? "text-[#EDEEF2]" : "text-[#72728A]"}`}
                      >
                        {r}
                      </span>
                    </Button>
                  ))}
                </div>
                <div className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#32324A] mb-2">
                  Anything else? (optional)
                </div>
                <textarea
                  rows={3}
                  placeholder="Tell us what we could have done better..."
                  value={detail}
                  onChange={(e) => setDetail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg text-[13px] bg-[#141418] text-[#EDEEF2] placeholder-[#32324A] border border-white/8 focus:border-[rgba(108,95,255,0.4)] outline-none resize-none leading-relaxed mb-5"
                />
                <div className="flex gap-2.5">
                  <Button
                    onClick={handleSubmit}
                    loading={status === "loading"}
                    className="flex-1 justify-center"
                    size="lg"
                  >
                    Send feedback
                  </Button>
                  <Button
                    href={STORE_URL}
                    external
                    variant="secondary"
                    size="lg"
                  >
                    ↗ Reinstall
                  </Button>
                </div>
                {status === "error" && (
                  <p className="font-mono text-[10px] text-[#EF4444] text-center mt-3">
                    Something went wrong. Try again.
                  </p>
                )}
              </>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
