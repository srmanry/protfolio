import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0B1220",
        "navy-deep": "#070B14",
        blue: "#2563EB",
        "blue-bright": "#38BDF8",
        ink: "#FFFFFF",
        "ink-muted": "#CBD5E1",
        "ink-faint": "#94A3B8"
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Inter", "sans-serif"]
      },
      boxShadow: {
        card: "0 20px 45px -25px rgba(0, 0, 0, 0.6)",
        glow: "0 0 0 1px rgba(37, 99, 235, 0.4), 0 12px 40px -8px rgba(37, 99, 235, 0.45)"
      }
    }
  },
  plugins: []
};

export default config;
