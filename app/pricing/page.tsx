import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import Pricing from '@/components/sections/Pricing'
import Waitlist from '@/components/sections/Waitlist'
import { pageMetadata } from '@/lib/metadata'

export const metadata = pageMetadata({
  title: "Pricing — TokenPulse",
  description:
    "Free forever plan plus Pro and Team tiers. Join the waitlist to lock early access pricing.",
  path: "/pricing",
});

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
