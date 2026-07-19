"use client";
import { useState } from "react";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setError("Enter a valid email address.");
      return;
    }
    setError("");
    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      className="relative z-10 border-t border-white/5 bg-[#0E0E11]"
      id="waitlist"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <div className="max-w-[520px]">
          <div className="font-mono text-[10px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-3">
            Pro waitlist · Early access
          </div>
          <h2 className="text-[22px] font-bold text-[#EDEEF2] tracking-tight mb-3">
            Be first. Lock the lowest price.
          </h2>
          <p className="text-[14px] text-[#72728A] leading-relaxed">
            Pro is in development. Waitlist members get{" "}
            <strong className="text-[#00E5A0] font-semibold">
              first access
            </strong>{" "}
            and the early adopter price locked permanently — even after we raise
            it at launch. Firefox support, 90-day history, predictions, VSCode
            extension, and more.
          </p>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto">
          {status === "success" ? (
            <div className="flex items-center gap-3 bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.18)] rounded-xl px-5 py-4">
              <div className="w-2 h-2 rounded-full bg-[#00E5A0] shadow-[0_0_6px_rgba(0,229,160,0.5)]" />
              <div>
                <p className="text-[13px] font-semibold text-[#00E5A0]">
                  You&apos;re on the list.
                </p>
                <p className="font-mono text-[10px] text-[#72728A] mt-0.5">
                  We&apos;ll email you first when Pro ships.
                </p>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-2.5 w-full md:w-auto"
            >
              <div className="flex flex-col gap-1.5">
                <Input
                  id="waitlist-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError("");
                  }}
                  error={!!error}
                  className="w-full sm:w-[260px]"
                  disabled={status === "loading"}
                />
                {error && (
                  <p className="font-mono text-[10px] text-[#EF4444]">
                    {error}
                  </p>
                )}
              </div>
              <Button
                type="submit"
                loading={status === "loading"}
                size="md"
                className="whitespace-nowrap h-[46px]"
              >
                Join Waitlist
              </Button>
            </form>
          )}
          {status === "error" && (
            <p className="font-mono text-[10px] text-[#EF4444] mt-2">
              Something went wrong. Email us at{" "}
              <a href="mailto:tokenpulse10@gmail.comulse.in" className="underline">
                tokenpulse10@gmail.comulse.in
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
