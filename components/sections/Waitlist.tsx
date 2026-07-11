'use client'
import { useState } from "react"
import Input from '@/components/ui/Input'
import Button from '@/components/ui/Button'

export default function Waitlist() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>
  ('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setEmail('Enter a valid email address.')
      return
    }
    setError('')
    setStatus('loading')
    try {
      const res = await fetch('/api/waitlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      if (res.ok) {
        setStatus('success')
      } else {
        setStatus('error')
      }
        } catch {
          setStatus('error')
        }
  }

  return (
    <section className="relative z-10 border-t border-white/5 bg-[#0E0E11]" id="waitlist">
      <div className="max-w-7x1 mx-auto px-6 lg:px-12 py-16 flex flex-col md:fleex-row items-start md:items-center justify-between gap-10">
        <div className="max-w-[520px]">
          <div className="font-mono text-[10px] font-semibold tracking-[1px] uppercase text-[#6C5FFF] mb-3">
            Pro waitlist . Early access
          </div>
          <p className="text-[14px] text-[#72728A] leading-relaxed">
            Pro is in development. Waitlist members get{' '}
            <strong className="text-[#00E5A0] font-semibold">first access</strong>{''}
            and the early adopter price locked permanently - even after we raise it at launch. Firefox support, 90-day history, predictions, VSCode extension, and more.
          </p>
        </div>

        <div className="flex-shrink-0 w-full md:w-auto">
          {status === 'success' ? (
            
          )}
        </div>
      </div>
    </section>
  )
}