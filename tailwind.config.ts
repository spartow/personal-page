import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        ink: {
          50: "#f7f7f6",
          100: "#ededeb",
          200: "#d9d9d5",
          300: "#b8b8b2",
          400: "#8a8a83",
          500: "#5f5f59",
          600: "#43433f",
          700: "#2e2e2b",
          800: "#1f1f1d",
          900: "#141413",
        },
        accent: {
          DEFAULT: "#7a2e2e",
          soft: "#a64b4b",
        },
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: "70ch",
          },
        },
      },
      maxWidth: {
        prose: "70ch",
      },
    },
  },
  plugins: [],
};

export default config;
