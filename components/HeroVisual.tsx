'use client'
import { useEffect, useRef } from 'react'

// Platform icons as simple SVG shapes with brand colors
const platforms = [
  // Claude
  { id: 'claude', x: 52, y: 22, color: '#CC785C', bg: '#1a1008', label: 'Claude',
    icon: `<path d="M12 4C7.6 4 4 7.6 4 12s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm0 10.5c-2.5 0-4.7-1.3-6-3.2.1-2 4-3 6-3s5.9 1 6 3c-1.3 1.9-3.5 3.2-6 3.2z" fill="#CC785C"/>` },
  // ChatGPT
  { id: 'chatgpt', x: 78, y: 15, color: '#10A37F', bg: '#071a15', label: 'ChatGPT',
    icon: `<circle cx="12" cy="12" r="8" fill="none" stroke="#10A37F" stroke-width="1.5"/><path d="M8 12a4 4 0 018 0" stroke="#10A37F" stroke-width="1.5" fill="none"/><circle cx="12" cy="10" r="1.5" fill="#10A37F"/>` },
  // Gemini
  { id: 'gemini', x: 68, y: 65, color: '#4285F4', bg: '#080e1a', label: 'Gemini',
    icon: `<path d="M12 3L14.5 10H21L15.5 14L17.5 21L12 17L6.5 21L8.5 14L3 10H9.5L12 3Z" fill="#4285F4"/>` },
  // DeepSeek
  { id: 'deepseek', x: 22, y: 68, color: '#4D6BFE', bg: '#08091a', label: 'DeepSeek',
    icon: `<path d="M12 4l2 5h5l-4 3 1.5 5L12 14l-4.5 3L9 12 5 9h5z" fill="#4D6BFE"/>` },
  // Grok
  { id: 'grok', x: 88, y: 42, color: '#EDEEF2', bg: '#111111', label: 'Grok',
    icon: `<text x="12" y="16" text-anchor="middle" font-size="11" font-weight="800" fill="#EDEEF2" font-family="sans-serif">X</text>` },
  // Cursor
  { id: 'cursor', x: 12, y: 35, color: '#9B8FFF', bg: '#0d0b1a', label: 'Cursor',
    icon: `<path d="M6 6l12 6-6 2-2 6z" fill="#9B8FFF"/>` },
  // Perplexity
  { id: 'perplexity', x: 35, y: 10, color: '#20B2AA', bg: '#071515', label: 'Perplexity',
    icon: `<circle cx="12" cy="12" r="3" fill="#20B2AA"/><path d="M12 4v2M12 18v2M4 12h2M18 12h2" stroke="#20B2AA" stroke-width="1.5" stroke-linecap="round"/>` },
  // Mistral
  { id: 'mistral', x: 82, y: 78, color: '#FF7000', bg: '#1a0d00', label: 'Mistral',
    icon: `<rect x="6" y="6" width="4" height="4" fill="#FF7000"/><rect x="14" y="6" width="4" height="4" fill="#FF7000"/><rect x="10" y="10" width="4" height="4" fill="#FF7000"/><rect x="6" y="14" width="4" height="4" fill="#FF7000"/><rect x="14" y="14" width="4" height="4" fill="#FF7000"/>` },
  // OpenRouter
  { id: 'openrouter', x: 55, y: 82, color: '#6C5FFF', bg: '#0d0b1a', label: 'OpenRouter',
    icon: `<circle cx="12" cy="12" r="3" fill="none" stroke="#6C5FFF" stroke-width="1.5"/><path d="M12 4v3M12 17v3M4 12h3M17 12h3" stroke="#6C5FFF" stroke-width="1.5" stroke-linecap="round"/>` },
]

// Connection lines from center (50,50) to each platform
const lines = platforms.map(p => ({
  id: p.id,
  x1: 50, y1: 50,
  x2: p.x, y2: p.y,
  color: p.color,
}))

export default function HeroVisual() {
  const canvasRef = useRef<SVGSVGElement>(null)

  return (
    <div className="relative w-full max-w-[580px] aspect-[4/3] select-none">
      {/* Ambient glow */}
      <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(0,229,160,0.04)_0%,transparent_70%)] pointer-events-none"/>

      <svg
        ref={canvasRef}
        viewBox="0 0 100 100"
        className="w-full h-full"
        style={{ overflow: 'visible' }}
      >
        <defs>
          {/* Animated gradient for connection lines */}
          {platforms.map(p => (
            <linearGradient
              key={p.id}
              id={`grad-${p.id}`}
              x1={`${50}%`} y1={`${50}%`}
              x2={`${p.x}%`} y2={`${p.y}%`}
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0%" stopColor="#00E5A0" stopOpacity="0.6"/>
              <stop offset="100%" stopColor={p.color} stopOpacity="0.2"/>
            </linearGradient>
          ))}

          {/* Pulse animation for dots on lines */}
          <style>{`
            @keyframes dash {
              to { stroke-dashoffset: -20; }
            }
            @keyframes pulse-dot {
              0%, 100% { opacity: 0; }
              50% { opacity: 1; }
            }
            @keyframes float-card {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-2px); }
            }
            @keyframes spin-ring {
              from { stroke-dashoffset: 0; }
              to { stroke-dashoffset: -100; }
            }
            .line-animated {
              stroke-dasharray: 2 3;
              animation: dash 3s linear infinite;
            }
            .float-card {
              animation: float-card 4s ease-in-out infinite;
            }
            .float-card-2 {
              animation: float-card 5s ease-in-out infinite 1s;
            }
          `}</style>
        </defs>

        {/* Grid background — subtle */}
        <pattern id="grid" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
          <path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.3"/>
        </pattern>
        <rect width="100" height="100" fill="url(#grid)"/>

        {/* Connection lines */}
        {lines.map((line, i) => (
          <g key={line.id}>
            <line
              x1={line.x1} y1={line.y1}
              x2={line.x2} y2={line.y2}
              stroke={`url(#grad-${line.id})`}
              strokeWidth="0.4"
              className="line-animated"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
            {/* Moving dot on line */}
            <circle r="0.6" fill="#00E5A0" opacity="0.8">
              <animateMotion
                dur={`${2.5 + i * 0.4}s`}
                repeatCount="indefinite"
                path={`M${line.x1},${line.y1} L${line.x2},${line.y2}`}
              />
            </circle>
          </g>
        ))}

        {/* Platform icons */}
        {platforms.map((p, i) => (
          <g key={p.id} style={{ animationDelay: `${i * 0.5}s` }}>
            {/* Icon background */}
            <rect
              x={p.x - 5} y={p.y - 5}
              width="10" height="10"
              rx="2.5"
              fill={p.bg}
              stroke={p.color}
              strokeWidth="0.4"
              strokeOpacity="0.4"
            />
            {/* Icon SVG scaled to fit */}
            <g transform={`translate(${p.x - 3.5}, ${p.y - 3.5}) scale(0.29)`}
              dangerouslySetInnerHTML={{ __html: p.icon }}
            />
            {/* Label */}
            <text
              x={p.x} y={p.y + 7.5}
              textAnchor="middle"
              fontSize="2.2"
              fill="rgba(255,255,255,0.35)"
              fontFamily="monospace"
            >
              {p.label}
            </text>
          </g>
        ))}

        {/* Center — TokenPulse hub */}
        <g className="float-card">
          {/* Outer glow ring */}
          <circle cx="50" cy="50" r="12" fill="none" stroke="rgba(0,229,160,0.08)" strokeWidth="3"/>
          <circle cx="50" cy="50" r="9" fill="none" stroke="rgba(0,229,160,0.12)" strokeWidth="2"/>

          {/* Main card */}
          <rect x="34" y="36" width="32" height="28" rx="3" fill="#0A0A0C" stroke="rgba(0,229,160,0.25)" strokeWidth="0.5"/>

          {/* Card header */}
          <rect x="34" y="36" width="32" height="7" rx="3" fill="#0E0E11"/>
          <rect x="34" y="39" width="32" height="4" fill="#0E0E11"/>

          {/* Logo dot */}
          <circle cx="38" cy="39.5" r="1.5" fill="#00E5A0"/>
          <circle cx="38" cy="39.5" r="1.5" fill="#00E5A0" opacity="0.4">
            <animate attributeName="r" values="1.5;2.5;1.5" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.4;0;0.4" dur="2s" repeatCount="indefinite"/>
          </circle>

          {/* TokenPulse label */}
          <text x="41" y="40.5" fontSize="2.8" fill="#EDEEF2" fontWeight="700" fontFamily="sans-serif">TokenPulse</text>
          <text x="54" y="40.5" fontSize="1.8" fill="#6C5FFF" fontFamily="monospace"> alpha</text>

          {/* Rate limit ring — Claude */}
          <text x="37" y="47.5" fontSize="2" fill="#72728A" fontFamily="monospace">CLAUDE · 5-HR</text>

          {/* Circular progress — 82% */}
          <circle cx="43" cy="54" r="5.5" fill="none" stroke="#1C1C22" strokeWidth="1.5"/>
          <circle cx="43" cy="54" r="5.5" fill="none" stroke="#00E5A0" strokeWidth="1.5"
            strokeDasharray="28.27" strokeDashoffset="5.08"
            strokeLinecap="round"
            transform="rotate(-90 43 54)"
          />
          <text x="43" y="54.8" textAnchor="middle" fontSize="3" fill="#00E5A0" fontWeight="800" fontFamily="monospace">82%</text>
          <text x="43" y="57.5" textAnchor="middle" fontSize="1.6" fill="#32324A" fontFamily="monospace">5-HOUR</text>

          {/* Cost card */}
          <rect x="51" y="46" width="13" height="16" rx="1.5" fill="#0E0E11" stroke="rgba(255,255,255,0.06)" strokeWidth="0.3"/>
          <text x="57.5" y="49.5" textAnchor="middle" fontSize="1.6" fill="#32324A" fontFamily="monospace">TODAY</text>
          <text x="57.5" y="53" textAnchor="middle" fontSize="3.2" fill="#EDEEF2" fontWeight="800" fontFamily="monospace">$0.046</text>
          <text x="57.5" y="55.5" textAnchor="middle" fontSize="1.5" fill="#32324A" fontFamily="monospace">estimated</text>

          {/* Divider */}
          <line x1="51" y1="57.5" x2="64" y2="57.5" stroke="rgba(255,255,255,0.05)" strokeWidth="0.3"/>

          <text x="57.5" y="60" textAnchor="middle" fontSize="1.6" fill="#32324A" fontFamily="monospace">RESETS IN</text>
          <text x="57.5" y="62.5" textAnchor="middle" fontSize="2.4" fill="#F59E0B" fontWeight="700" fontFamily="monospace">2h 17m</text>

          {/* Bottom bar — context window */}
          <text x="37" y="66.5" fontSize="1.8" fill="#32324A" fontFamily="monospace">CONTEXT · 34%</text>
          <rect x="36" y="67.5" width="28" height="1.5" rx="0.75" fill="#1C1C22"/>
          <rect x="36" y="67.5" width="9.5" height="1.5" rx="0.75" fill="#6C5FFF"/>
        </g>

        {/* Floating mini badge — top right */}
        <g className="float-card-2">
          <rect x="70" y="28" width="18" height="8" rx="2" fill="#0E0E11" stroke="rgba(0,229,160,0.2)" strokeWidth="0.4"/>
          <circle cx="73.5" cy="32" r="1.2" fill="#00E5A0"/>
          <circle cx="73.5" cy="32" r="1.2" fill="#00E5A0" opacity="0.3">
            <animate attributeName="r" values="1.2;2;1.2" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite"/>
          </circle>
          <text x="75.5" y="33" fontSize="2" fill="#EDEEF2" fontWeight="600" fontFamily="sans-serif">No API key</text>
        </g>

        {/* Floating mini badge — bottom left */}
        <g style={{ animation: 'float-card 6s ease-in-out infinite 2s' }}>
          <rect x="8" y="55" width="16" height="8" rx="2" fill="#0E0E11" stroke="rgba(108,95,255,0.2)" strokeWidth="0.4"/>
          <text x="16" y="59.5" textAnchor="middle" fontSize="2" fill="#6C5FFF" fontWeight="600" fontFamily="monospace">Free forever</text>
          <text x="16" y="62" textAnchor="middle" fontSize="1.6" fill="#32324A" fontFamily="monospace">no account</text>
        </g>
      </svg>
    </div>
  )
}
