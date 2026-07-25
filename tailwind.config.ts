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
        gold: "0 10px 25px -5px rgba(200, 163, 77, 0.25)",
        navy: "0 12px 35px -5px rgba(15, 23, 42, 0.35)",
        ambient: "0 10px 25px -5px rgba(15, 23, 42, 0.05)",
        card: "0 10px 30px -5px rgba(15, 23, 42, 0.06), 0 4px 12px -2px rgba(15, 23, 42, 0.03)",
        "card-hover": "0 20px 40px -10px rgba(15, 23, 42, 0.12), 0 8px 16px -4px rgba(200, 163, 77, 0.2)",
        "gold-glow": "0 10px 30px -5px rgba(200, 163, 77, 0.3)",
        "navy-glow": "0 15px 35px -5px rgba(15, 23, 42, 0.4)",
      },
      maxWidth: {
        "container-max": "1280px",
      },
    },
  },
  plugins: [],
};

export default config;
