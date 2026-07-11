'use client'
import { useState } from "react"
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"

export default function SupportPage() {
    const [form, setForm] = useState({ email: '', type: 'bug', message: '' })
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>
    ('idle')
    const [errors, setErrors] = useState<Record<string, string>>({})

    function validate() {
        const e: Record<string, string> = {}
        if (!form.message.trim()) e.message = 'Message is required.'
        if (form.email && !form.email.includes('@')) e.email = 'Enter a valid email.'
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
                body: JSON.stringify(form),
            })
            setStatus(res.ok ? 'success' : 'error')
        } catch {
            setStatus('error')
        }
    }

    return (
        <>
         <Nav />
         <main className="relative min-h-screen flex flex-col">
            <div className="absolute insert-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(108,95,255,0.04)_0%,transparent_60%)]"/>
                </div>
                <div className="flex-1 flex items-center justify-center px-6 py-32">
                  <div className="w-full max-w-[520px]">
                    <div className="flex items-center gap-2 mb-5">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00E5A0] shadow-[0_0_6px_rgba(0,229,160,0.5)] animate-pulse"/>
                        <span className="font-mono text-[11px] font-medium text-[#00E5A0] tracking-[0.8px] uppercase">Support</span>
                    </div>
                    <h1 className="text-[clamp(28px,4vw,40px)] font-bold tracking-[-0.04em] mb-3">
                        Need a <em className="not-italic text-[#00E5A0]">hand?</em>
                    </h1>
                    <p></p>
                  </div>
            </div>
         </main>
        </>
    )
}