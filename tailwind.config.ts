import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#080809',
        s1: '#0E0E11',
        s2: '#141418',
        s3: '#1C1C22',
        live: '#00E5A0',
        acc: '#6C5FFF',
        warn: '#F59E0B',
        danger: '#EF4444',
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.08em',
        tighter: '-0.05em',
        tight: '-0.03em',
      },
    },
  },
  plugins: [],
}

export default config
