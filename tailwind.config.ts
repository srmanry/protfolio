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
        ink: "var(--text)",
        "ink-muted": "var(--text-muted)",
        "ink-faint": "var(--text-faint)",
        line: "var(--line)",
        surface: "var(--surface)",
        "surface-soft": "var(--surface-soft)",
        accent: "var(--accent)",
        "blue-bright": "var(--accent-text)"
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Inter", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
