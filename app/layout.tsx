import type { Metadata } from 'next'
import { spaceGrotesk, jetbrainsMono } from '@/lib/fonts'
import { defaultMetadata } from '@/lib/metadata'
import JsonLd from "@/components/JsonLd";
import './globals.css'

export const metadata: Metadata = defaultMetadata

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  )
}
