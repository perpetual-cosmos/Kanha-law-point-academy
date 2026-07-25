import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070E20",
          900: "#0F172A",
          800: "#1E293B",
          700: "#334155",
          600: "#475569",
        },
        gold: {
          600: "#B8860B",
          500: "#C8A34D",
          400: "#D4AF37",
          300: "#E5C365",
          100: "#FAF0D1",
          50: "#FFF9EB",
        },
        surface: {
          DEFAULT: "#F6FAFE",
          dim: "#D6DADE",
          bright: "#F6FAFE",
          low: "#F1F5F9",
          lowest: "#FFFFFF",
        },
        parchment: "#FDFBF7",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        gold: "0 8px 20px -4px rgba(200, 163, 77, 0.22), 0 2px 6px -1px rgba(200, 163, 77, 0.12)",
        navy: "0 14px 36px -6px rgba(15, 23, 42, 0.28), 0 4px 12px -2px rgba(15, 23, 42, 0.12)",
        ambient: "0 6px 20px -4px rgba(15, 23, 42, 0.04), 0 2px 6px -1px rgba(15, 23, 42, 0.02)",
        card: "0 1px 3px 0 rgba(15, 23, 42, 0.03), 0 8px 24px -4px rgba(15, 23, 42, 0.05)",
        "card-hover": "0 16px 36px -8px rgba(15, 23, 42, 0.09), 0 4px 12px -2px rgba(200, 163, 77, 0.14)",
        "gold-glow": "0 8px 28px -4px rgba(200, 163, 77, 0.25), 0 2px 8px -2px rgba(200, 163, 77, 0.15)",
        "navy-glow": "0 16px 36px -6px rgba(7, 14, 32, 0.35), 0 4px 12px -2px rgba(15, 23, 42, 0.2)",
        subtle: "0 1px 2px 0 rgba(15, 23, 42, 0.04)",
        elevated: "0 20px 40px -12px rgba(7, 14, 32, 0.22)",
      },
      maxWidth: {
        "container-max": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
