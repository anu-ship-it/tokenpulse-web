"use client";

const TP_LOGO =
  "https://raw.githubusercontent.com/anu-ship-it/TokenPulse/main/src/icons/icon128.png";

const platforms = [
  {
    id: "claude",
    x: 50,
    y: 16,
    label: "Claude",
    color: "#CC785C",
    bg: "#1a0f08",
    logo: "https://www.google.com/s2/favicons?domain=claude.ai&sz=64",
  },
  {
    id: "chatgpt",
    x: 82,
    y: 24,
    label: "ChatGPT",
    color: "#10A37F",
    bg: "#071a15",
    logo: "https://www.google.com/s2/favicons?domain=chatgpt.com&sz=64",
  },
  {
    id: "gemini",
    x: 90,
    y: 54,
    label: "Gemini",
    color: "#4285F4",
    bg: "#080e1a",
    logo: "https://upload.wikimedia.org/wikipedia/commons/1/1d/Google_Gemini_icon_2025.svg",
  },
  {
    id: "deepseek",
    x: 72,
    y: 86,
    label: "DeepSeek",
    color: "#4D6BFE",
    bg: "#08091a",
    logo: "https://www.google.com/s2/favicons?domain=deepseek.com&sz=64",
  },
  {
    id: "grok",
    x: 38,
    y: 90,
    label: "Grok",
    color: "#EDEEF2",
    bg: "#111111",
    logo: "https://www.google.com/s2/favicons?domain=x.ai&sz=64",
  },
  {
    id: "perplexity",
    x: 10,
    y: 68,
    label: "Perplexity",
    color: "#20B2AA",
    bg: "#071515",
    logo: "https://www.google.com/s2/favicons?domain=perplexity.ai&sz=64",
  },
  {
    id: "cursor",
    x: 10,
    y: 36,
    label: "Cursor",
    color: "#9B8FFF",
    bg: "#0d0b1a",
    logo: "https://www.google.com/s2/favicons?domain=cursor.com&sz=64",
  },
  {
    id: "mistral",
    x: 22,
    y: 18,
    label: "Mistral",
    color: "#FF7000",
    bg: "#1a0d00",
    logo: "https://www.google.com/s2/favicons?domain=mistral.ai&sz=64",
  },
];

const CX = 50;
const CY = 50;

export default function HeroVisual() {
  return (
    <div
      className="relative w-full select-none"
      style={{ maxWidth: 520, aspectRatio: "1/1" }}
    >
      <style>{`
        @keyframes floatA { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes floatB { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-3px)} }
        @keyframes travelDot {
          0%   { offset-distance:0%;   opacity:0 }
          8%   { opacity:1 }
          92%  { opacity:1 }
          100% { offset-distance:100%; opacity:0 }
        }
        .fa { animation: floatA 5s ease-in-out infinite }
        .fb { animation: floatB 7s ease-in-out infinite 1.5s }
        .fc { animation: floatA 6s ease-in-out infinite 2s }
        .fd { animation: floatB 8s ease-in-out infinite 3s }
      `}</style>

      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 w-full h-full"
        style={{ overflow: "visible" }}
      >
        <defs>
          {platforms.map((p) => (
            <linearGradient
              key={p.id}
              id={`lg-${p.id}`}
              gradientUnits="userSpaceOnUse"
              x1={CX}
              y1={CY}
              x2={p.x}
              y2={p.y}
            >
              <stop offset="0%" stopColor="#00E5A0" stopOpacity="0.6" />
              <stop offset="100%" stopColor={p.color} stopOpacity="0.1" />
            </linearGradient>
          ))}
          {/* Clip paths for platform icons */}
          {platforms.map((p) => (
            <clipPath key={`cp-${p.id}`} id={`cp-${p.id}`}>
              <rect x={p.x - 3} y={p.y - 3} width="6" height="6" rx="1.4" />
            </clipPath>
          ))}
          {/* Clip for TokenPulse logo */}
          <clipPath id="cp-tp">
            <rect x="34.8" y="35.5" width="3.5" height="3.5" rx="0.8" />
          </clipPath>
          <radialGradient id="cg" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00E5A0" stopOpacity="0.06" />
            <stop offset="100%" stopColor="#00E5A0" stopOpacity="0" />
          </radialGradient>
          <pattern
            id="grid"
            x="0"
            y="0"
            width="8"
            height="8"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M8 0H0V8"
              fill="none"
              stroke="rgba(255,255,255,0.025)"
              strokeWidth="0.25"
            />
          </pattern>
        </defs>

        <rect width="100" height="100" fill="url(#grid)" />
        <circle cx={CX} cy={CY} r="18" fill="url(#cg)" />
        <circle
          cx={CX}
          cy={CY}
          r="14"
          fill="none"
          stroke="#00E5A0"
          strokeWidth="0.25"
          strokeOpacity="0.12"
        />
        <circle
          cx={CX}
          cy={CY}
          r="20"
          fill="none"
          stroke="#00E5A0"
          strokeWidth="0.15"
          strokeOpacity="0.07"
        />

        {/* Lines + travelling dots */}
        {platforms.map((p, i) => {
          const d = `M ${CX} ${CY} L ${p.x} ${p.y}`;
          return (
            <g key={p.id}>
              <line
                x1={CX}
                y1={CY}
                x2={p.x}
                y2={p.y}
                stroke={`url(#lg-${p.id})`}
                strokeWidth="0.3"
                strokeDasharray="1.2 2.2"
              />
              <circle
                r="0.65"
                fill="#00E5A0"
                opacity="0.9"
                style={{
                  offsetPath: `path("${d}")`,
                  animation: `travelDot ${2.2 + i * 0.22}s linear ${i * 0.3}s infinite`,
                }}
              />
            </g>
          );
        })}

        {/* Platform icons — bg rect + real logo via SVG image */}
        {platforms.map((p) => (
          <g key={p.id}>
            <rect
              x={p.x - 4.5}
              y={p.y - 4.5}
              width="9"
              height="9"
              rx="2.2"
              fill={p.bg}
              stroke={p.color}
              strokeWidth="0.3"
              strokeOpacity="0.5"
            />
            {/* Real logo — clipped to icon bounds */}
            <image
              href={p.logo}
              x={p.x - 3}
              y={p.y - 3}
              width="6"
              height="6"
              clipPath={`url(#cp-${p.id})`}
              preserveAspectRatio="xMidYMid meet"
            />
            <text
              x={p.x}
              y={p.y + 6.8}
              textAnchor="middle"
              fontSize="1.9"
              fill="rgba(255,255,255,0.28)"
              fontFamily="monospace"
            >
              {p.label}
            </text>
          </g>
        ))}

        {/* ── CENTER CARD — everything inside one <g> so it all floats together ── */}
        <g className="fa">
          {/* Card body */}
          <rect
            x="33"
            y="34"
            width="34"
            height="32"
            rx="3.5"
            fill="#080809"
            stroke="rgba(0,229,160,0.28)"
            strokeWidth="0.45"
          />
          {/* Header strip */}
          <rect x="33" y="34" width="34" height="7" rx="3.5" fill="#0E0E11" />
          <rect x="33" y="37.5" width="34" height="3.5" fill="#0E0E11" />

          {/* TokenPulse logo — nested svg keeps clip relative to this g */}
          <rect
            x="34.8"
            y="35.5"
            width="3.5"
            height="3.5"
            rx="0.8"
            fill="#141418"
            stroke="rgba(108,95,255,0.3)"
            strokeWidth="0.3"
          />
          <svg
            x="34.8"
            y="35.5"
            width="3.5"
            height="3.5"
            viewBox="0 0 1 1"
            preserveAspectRatio="xMidYMid meet"
            style={{ borderRadius: "0.8px", overflow: "hidden" }}
          >
            <image
              href={TP_LOGO}
              x="0"
              y="0"
              width="1"
              height="1"
              preserveAspectRatio="xMidYMid meet"
            />
          </svg>

          {/* Brand label */}
          <text
            x="40"
            y="38.5"
            fontSize="2.7"
            fill="#EDEEF2"
            fontWeight="700"
            fontFamily="'Space Grotesk',sans-serif"
          >
            TokenPulse
          </text>
          <line
            x1="33"
            y1="41"
            x2="67"
            y2="41"
            stroke="rgba(255,255,255,0.05)"
            strokeWidth="0.3"
          />

          {/* Rate limit ring */}
          <text
            x="37.5"
            y="44.5"
            fontSize="1.7"
            fill="#32324A"
            fontFamily="monospace"
          >
            CLAUDE · 5-HR
          </text>
          <circle
            cx="41"
            cy="52"
            r="6"
            fill="none"
            stroke="#1C1C22"
            strokeWidth="1.8"
          />
          <circle
            cx="41"
            cy="52"
            r="6"
            fill="none"
            stroke="#00E5A0"
            strokeWidth="1.8"
            strokeDasharray="37.7"
            strokeDashoffset="6.79"
            strokeLinecap="round"
            transform="rotate(-90 41 52)"
          />
          <circle cx="41" cy="52" r="4" fill="rgba(0,229,160,0.04)" />
          <text
            x="41"
            y="52.9"
            textAnchor="middle"
            fontSize="3.5"
            fill="#00E5A0"
            fontWeight="800"
            fontFamily="monospace"
          >
            82%
          </text>
          <text
            x="41"
            y="55.5"
            textAnchor="middle"
            fontSize="1.5"
            fill="#32324A"
            fontFamily="monospace"
          >
            5-HOUR
          </text>
          <text
            x="41"
            y="60"
            textAnchor="middle"
            fontSize="1.5"
            fill="#32324A"
            fontFamily="monospace"
          >
            resets in
          </text>
          <text
            x="41"
            y="63"
            textAnchor="middle"
            fontSize="2.5"
            fill="#F59E0B"
            fontWeight="700"
            fontFamily="monospace"
          >
            2h 17m
          </text>

          {/* Cost */}
          <rect
            x="50"
            y="42"
            width="14"
            height="11"
            rx="1.5"
            fill="#0E0E11"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.25"
          />
          <text
            x="57"
            y="45.5"
            textAnchor="middle"
            fontSize="1.5"
            fill="#32324A"
            fontFamily="monospace"
          >
            TODAY
          </text>
          <text
            x="57"
            y="49.5"
            textAnchor="middle"
            fontSize="3.8"
            fill="#EDEEF2"
            fontWeight="800"
            fontFamily="monospace"
          >
            $0.05
          </text>

          {/* 7-day */}
          <rect
            x="50"
            y="55"
            width="14"
            height="8"
            rx="1.5"
            fill="#0E0E11"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="0.25"
          />
          <text
            x="57"
            y="58.5"
            textAnchor="middle"
            fontSize="1.5"
            fill="#32324A"
            fontFamily="monospace"
          >
            7-DAY
          </text>
          <text
            x="57"
            y="62"
            textAnchor="middle"
            fontSize="2.5"
            fill="#6C5FFF"
            fontWeight="700"
            fontFamily="monospace"
          >
            34%
          </text>

          {/* Context bar */}
          <text
            x="35"
            y="66.5"
            fontSize="1.6"
            fill="#32324A"
            fontFamily="monospace"
          >
            CONTEXT · 28%
          </text>
          <rect
            x="34"
            y="67.5"
            width="30"
            height="1.4"
            rx="0.7"
            fill="#1C1C22"
          />
          <rect
            x="34"
            y="67.5"
            width="8.4"
            height="1.4"
            rx="0.7"
            fill="#6C5FFF"
          />
        </g>

        {/* Floating badges */}
        <g className="fb">
          <rect
            x="66"
            y="22"
            width="19"
            height="7"
            rx="1.8"
            fill="#0E0E11"
            stroke="rgba(0,229,160,0.25)"
            strokeWidth="0.35"
          />
          <circle cx="69" cy="25.5" r="1.1" fill="#00E5A0" />
          <circle cx="69" cy="25.5" r="1.1" fill="#00E5A0" opacity="0.3">
            <animate
              attributeName="r"
              values="1.1;1.9;1.1"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.3;0;0.3"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
          <text
            x="71"
            y="26.5"
            fontSize="1.9"
            fill="#EDEEF2"
            fontWeight="600"
            fontFamily="sans-serif"
          >
            No API key
          </text>
        </g>
        <g className="fc">
          <rect
            x="2"
            y="50"
            width="15"
            height="7"
            rx="1.8"
            fill="#0E0E11"
            stroke="rgba(108,95,255,0.25)"
            strokeWidth="0.35"
          />
          <text
            x="9.5"
            y="54"
            textAnchor="middle"
            fontSize="1.8"
            fill="#6C5FFF"
            fontWeight="600"
            fontFamily="monospace"
          >
            Free forever
          </text>
          <text
            x="9.5"
            y="56.5"
            textAnchor="middle"
            fontSize="1.5"
            fill="#32324A"
            fontFamily="monospace"
          >
            no account
          </text>
        </g>
        <g className="fd">
          <rect
            x="58"
            y="77"
            width="21"
            height="7"
            rx="1.8"
            fill="#0E0E11"
            stroke="rgba(245,158,11,0.25)"
            strokeWidth="0.35"
          />
          <text
            x="68.5"
            y="81"
            textAnchor="middle"
            fontSize="1.8"
            fill="#F59E0B"
            fontWeight="600"
            fontFamily="monospace"
          >
            100+ installs
          </text>
          <text
            x="68.5"
            y="83.5"
            textAnchor="middle"
            fontSize="1.4"
            fill="#32324A"
            fontFamily="monospace"
          >
            Chrome Web Store
          </text>
        </g>
      </svg>
    </div>
  );
}
