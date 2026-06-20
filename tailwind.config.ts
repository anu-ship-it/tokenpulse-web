import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#080808",
        bg2: "#111111",
        bg3: "#161616",
        border: "#1e1e1e",
        border2: "#1a1a1a",
        teal: "#06b6d4",
        "teal-light": "#67e8f9",
        "teal-dim": "#4a9ba5",
        "text-muted": "#333333",
      },
    },
  },
  plugins: [],
};

export default config;
