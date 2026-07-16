'use client'
import { useState } from 'react'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

const topics = [
  { value: 'support', label: 'Bug report or support' },
  { value: 'feature', label: 'Feature request' },
  { value: 'pro', label: 'Pro / Team waitlist question' },
  { value: 'press', label: 'Press or media' },
  { value: 'partnership', label: 'Partnership' },
  { value: 'other', label: 'Something else' },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', topic: 'support', message: '' })
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle')
  const [errors, setErrors] = useState<Record<string,string>>({})

  function validate() {
    const e: Record<string,string> = {}
    if (!form.name.trim()) e.name = 'Name is required.'
    if (!form.email || !form.email.includes('@')) e.email = 'Enter a valid email.'
    if (!form.message.trim()) e.message = 'Message is required.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('loading')
    try {
      const res = await fetch('/api/support', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: form.email, type: form.topic, message: `From: ${form.name}\n\n${form.message}` }),
      })
      setStatus(res.ok ? 'success' : 'error')
    } catch { setStatus('error') }
  }

  return (
    <>
      <Nav />
      <main className="relative min-h-screen">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(108,95,255,0.04)_0%,transparent_60%)]"/>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left */}
            <div>
              <div className="font-mono text-[11px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-4">
                Contact
              </div>
              <h1 className="text-[clamp(32px,4vw,48px)] font-bold tracking-[-0.05em] leading-[1.07] mb-5">
                Let&aposs;s <em className="not-italic text-[#00E5A0]">talk.</em>
              </h1>
              <p className="text-[15px] text-[#72728A] leading-relaxed mb-10">
                Whether it&aposs;s a bug, a feature idea, a Pro question, or something else — we read every message and reply within 24 hours.
              </p>

              {/* Contact methods */}
              <div className="flex flex-col gap-3">
                {[
                  { label: 'General & Support', value: 'tokenpulse10@gmail.com', href: 'mailto:tokenpulse10@gmail.com' },
                  { label: 'GitHub', value: 'github.com/anu-ship-it/TokenPulse', href: 'https://github.com/anu-ship-it/TokenPulse' },
                ].map(item => (
                  <div key={item.label} className="bg-[#0E0E11] border border-white/8 rounded-xl p-5">
                    <div className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#32324A] mb-1.5">
                      {item.label}
                    </div>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-[14px] font-semibold text-[#6C5FFF] hover:text-[#9B8FFF] transition-colors"
                    >
                      {item.value}
                    </a>
                  </div>
                ))}

                {/* Response time */}
                <div className="bg-[rgba(0,229,160,0.06)] border border-[rgba(0,229,160,0.15)] rounded-xl p-5 flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] shadow-[0_0_5px_rgba(0,229,160,0.5)] animate-pulse flex-shrink-0"/>
                  <div>
                    <div className="text-[13px] font-semibold text-[#EDEEF2] mb-0.5">Usually reply within 24 hours</div>
                    <div className="font-mono text-[10px] text-[#32324A]">We read every message personally</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {status === 'success' ? (
                <div className="bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.18)] rounded-2xl p-10 text-center">
                  <div className="w-12 h-12 rounded-xl bg-[rgba(0,229,160,0.12)] border border-[rgba(0,229,160,0.22)] flex items-center justify-center mx-auto mb-5">
                    <div className="w-3 h-3 rounded-full bg-[#00E5A0] shadow-[0_0_8px_rgba(0,229,160,0.5)]"/>
                  </div>
                  <h2 className="text-[20px] font-bold text-[#EDEEF2] mb-2">Message sent.</h2>
                  <p className="text-[13px] text-[#72728A] leading-relaxed">
                    We will get back to you at <strong className="text-[#EDEEF2]">{form.email}</strong> within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-[#0E0E11] border border-white/8 rounded-2xl p-8 flex flex-col gap-5">
                  <div>
                    <label className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#32324A] block mb-2">Name</label>
                    <Input
                      type="text" placeholder="Your name"
                      value={form.name} onChange={e => setForm(f => ({...f, name: e.target.value}))}
                      error={!!errors.name}
                    />
                    {errors.name && <p className="font-mono text-[10px] text-[#EF4444] mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#32324A] block mb-2">Email</label>
                    <Input
                      type="email" placeholder="you@example.com"
                      value={form.email} onChange={e => setForm(f => ({...f, email: e.target.value}))}
                      error={!!errors.email}
                    />
                    {errors.email && <p className="font-mono text-[10px] text-[#EF4444] mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#32324A] block mb-2">Topic</label>
                    <select
                      value={form.topic}
                      onChange={e => setForm(f => ({...f, topic: e.target.value}))}
                      className="w-full px-4 py-3 rounded-lg text-sm bg-[#141418] text-[#EDEEF2] border border-white/8 focus:border-[rgba(108,95,255,0.4)] outline-none cursor-pointer"
                    >
                      {topics.map(t => (
                        <option key={t.value} value={t.value}>{t.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] font-semibold uppercase tracking-widest text-[#32324A] block mb-2">Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us what is on your mind..."
                      value={form.message}
                      onChange={e => setForm(f => ({...f, message: e.target.value}))}
                      className={`w-full px-4 py-3 rounded-lg text-sm bg-[#141418] text-[#EDEEF2] placeholder-[#32324A] border outline-none resize-none leading-relaxed transition-colors ${
                        errors.message ? 'border-[#EF4444]' : 'border-white/8 focus:border-[rgba(108,95,255,0.4)]'
                      }`}
                    />
                    {errors.message && <p className="font-mono text-[10px] text-[#EF4444] mt-1">{errors.message}</p>}
                  </div>

                  <Button type="submit" loading={status === 'loading'} size="lg" className="w-full justify-center">
                    Send message →
                  </Button>

                  {status === 'error' && (
                    <p className="font-mono text-[10px] text-[#EF4444] text-center">
                      Something went wrong. Email{' '}
                      <a href="mailto:tokenpulse10@gmail.com" className="underline">tokenpulse10@gmail.com.</a> directly.
                    </p>
                  )}
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
