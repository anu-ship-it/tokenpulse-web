"use client";
import { useState } from "react";
import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SupportPage() {
  const [form, setForm] = useState({ email: "", type: "bug", message: "" });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  function validate() {
    const e: Record<string, string> = {};
    if (!form.message.trim()) e.message = "Message is required.";
    if (form.email && !form.email.includes("@"))
      e.email = "Enter a valid email.";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/support", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
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
          <div className="w-full max-w-[520px]">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] shadow-[0_0_6px_rgba(0,229,160,0.5)] animate-pulse" />
              <span className="font-mono text-[11px] font-medium text-[#00E5A0] tracking-[0.8px] uppercase">
                Support
              </span>
            </div>
            <h1 className="text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.04em] mb-3">
              Need a <em className="not-italic text-[#00E5A0]">hand?</em>
            </h1>
            <p className="text-[14px] text-[#72728A] leading-relaxed mb-10">
              Bug, feature request, anything TokenPulse-related. We read every
              message and usually reply within 24 hours.
            </p>

            {status === "success" ? (
              <div className="bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.18)] rounded-2xl p-8 text-center">
                <div className="w-10 h-10 rounded-xl bg-[rgba(0,229,160,0.12)] border border-[rgba(0,229,160,0.22)] flex items-center justify-center mx-auto mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#00E5A0]" />
                </div>
                <h2 className="text-[18px] font-bold text-[#EDEEF2] mb-2">
                  Thanks — message sent.
                </h2>
                <p className="text-[13px] text-[#72728A]">
                  We usually reply within 24 hours.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-[#0E0E11] border border-white/8 rounded-2xl p-8 flex flex-col gap-5"
              >
                <div>
                  <label className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#32324A] block mb-2">
                    Your email (optional)
                  </label>
                  <Input
                    type="email"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    error={!!errors.email}
                  />
                  {errors.email && (
                    <p className="font-mono text-[10px] text-[#EF4444] mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#32324A] block mb-2">
                    Type
                  </label>
                  <select
                    value={form.type}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, type: e.target.value }))
                    }
                    className="w-full px-4 py-3 rounded-lg text-sm bg-[#141418] text-[#EDEEF2] border border-white/8 focus:border-[rgba(108,95,255,0.4)] outline-none cursor-pointer"
                  >
                    <option value="bug">Bug report</option>
                    <option value="feature">Feature request</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div>
                  <label className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#32324A] block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="What happened? If reporting a bug, include what you expected vs what you saw."
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className={`w-full px-4 py-3 rounded-lg text-sm bg-[#141418] text-[#EDEEF2] placeholder-[#32324A] border outline-none resize-none leading-relaxed transition-colors ${
                      errors.message
                        ? "border-[#EF4444]"
                        : "border-white/8 focus:border-[rgba(108,95,255,0.4)]"
                    }`}
                  />
                  {errors.message && (
                    <p className="font-mono text-[10px] text-[#EF4444] mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <Button
                  type="submit"
                  loading={status === "loading"}
                  size="lg"
                  className="w-full justify-center"
                >
                  Send feedback →
                </Button>
                {status === "error" && (
                  <p className="font-mono text-[10px] text-[#EF4444] text-center">
                    Something went wrong. Email{" "}
                    <a
                      href="mailto:tokenpulse10@gmail.comulse.in"
                      className="underline"
                    >
                      tokenpulse10@gmail.comulse.in
                    </a>{" "}
                    directly.
                  </p>
                )}
              </form>
            )}
            <p className="font-mono text-[11px] text-[#32324A] text-center mt-5">
              Or email{" "}
              <a
                href="mailto:tokenpulse10@gmail.comulse.in"
                className="text-[#6C5FFF] hover:underline"
              >
                tokenpulse10@gmail.comulse.in
              </a>{" "}
              directly
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
