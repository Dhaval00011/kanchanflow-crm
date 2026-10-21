import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          950: "#0B0D10",
          900: "#12151A",
          800: "#1A1E26",
          700: "#262C36",
          600: "#37404E",
        },
        kanchan: {
          50: "#FFFBEB",
          100: "#FEF3C7",
          200: "#FDE68A",
          300: "#FCD34D",
          400: "#F5B041",
          500: "#D99B26",
          600: "#B87D14",
          700: "#925F0E",
        },
        steel: {
          50: "#F7F8FA",
          100: "#EDF0F5",
          200: "#DCE1EB",
          300: "#C2CADB",
          400: "#94A0B8",
          500: "#68758E",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      boxShadow: {
        industrial: "0 1px 0 0 rgba(255, 255, 255, 0.08) inset, 0 12px 32px -8px rgba(0, 0, 0, 0.5)",
        "gold-glow": "0 0 0 1px rgba(217, 155, 38, 0.4), 0 8px 24px -4px rgba(217, 155, 38, 0.22)",
      },
    },
  },
  plugins: [],
};

export default config;
