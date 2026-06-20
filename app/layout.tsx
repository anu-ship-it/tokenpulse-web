import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "TokenPulse — Token & Rate Limit Tracker for Claude & ChatGPT",
  description:
    "TokenPulse tracks your token usage and rate limits in real time on Claude and ChatGPT. Live token bar, smart notifications, daily history. Free Chrome extension — no waitlist, no account.",
  metadataBase: new URL("https://tokenpulse.app"),
  openGraph: {
    title: "TokenPulse — Token & Rate Limit Tracker",
    description:
      "Never get cut off mid-conversation again. Live token tracking for Claude and ChatGPT.",
    type: "website",
    url: "https://tokenpulse.app",
  },
  twitter: {
    card: "summary_large_image",
    title: "TokenPulse — Token & Rate Limit Tracker",
    description: "Live token tracking for Claude and ChatGPT. Free, no account needed.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-bg text-white antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}