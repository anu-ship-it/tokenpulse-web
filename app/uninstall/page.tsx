'use client'
import { useState } from "react"
import Link from 'next/link'
import Nav from '@/components/layout/Footer'
import Footer from "@/components/layout/Footer"
import Button from "@/components/ui/Button"

const STORE_URL = 'https://chromewebstore.google.com/detail/tokenpulse-%E2%80%94-chatgpt-clau/oimclhdbljodjklchfcehhic'

const reasons = [
    "Didn't work on my platform",
    'Too many notifications',
    'Missing a feature I need',
    'Found a better option',
    'Just testing',
    'Other',
]

export default function UninstallPage() {
    const [selected, setSelected] = useState('')
    const [detail, setDetail] = useState('')
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>
    ('idle')

    async function handleSubmit() {
        setStatus('loading')
        try {
            const res = await fetch('/api/uninstall', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ reason: selected || 'not selected', detail }),
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
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-[-300px] left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(108,95,255,0.04)_0%,transparent_60%)]"/>
            </div>
            <div className="flex-1 flex items-center justify-center px-6 py-32">
                <div className="w-full max-w-[460px]">
                    {status === 'success' ? (
                        <div className="text-left">
                            <div className="w-12 h-12 rounded-x1 bg-[rgba(0,229,160,0.08)] border border-[rgba(0,229,160,0.18)] flex items-center justify-center mb-6">
                                <div className="w-2.5 h-2.5 rounded-full bg-[#00E5A0] shadow"
                    )}
                </div>
            </div>
         </main>
        </>
    )
}