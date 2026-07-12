import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Pricing from '@/components/sections/Pricing'
import Waitlist from '@/components/sections/Waitlist'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata(
  'Pricing — TokenPulse',
  'Free forever plan plus Pro and Team tiers. Join the waitlist to lock early access pricing.',
  '/pricing'
)

export default function PricingPage() {
  return (
    <>
      <Nav />
      <main className="pt-16">
        <Pricing />
        <Waitlist />
      </main>
      <Footer />
    </>
  )
}
