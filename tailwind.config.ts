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
        bg: "#f7f4ef",
        paper: "#fffdf8",
        ink: "#1b1b1a",
        accent: "#0f766e",
        accentSoft: "#ccfbf1"
      },
      boxShadow: {
        card: "0 20px 45px -25px rgba(0, 0, 0, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
