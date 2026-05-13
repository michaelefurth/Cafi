import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        forest: {
          DEFAULT: "#1F3A2E",
          deep: "#162A22",
          dark: "#0F1F18",
          mid: "#1A4D2E"
        },
        gold: {
          DEFAULT: "#B8860B",
          warm: "#C8A14A",
          soft: "#D4B26A"
        },
        cream: {
          DEFAULT: "#F5F0E6",
          warm: "#FAF6EC",
          deep: "#EBE2CE"
        },
        ink: "#1A1A1A"
      },
      fontFamily: {
        serif: ['"Source Serif 4"', '"Source Serif Pro"', "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        wider: "0.08em",
        widest: "0.18em"
      },
      maxWidth: {
        content: "1280px",
        prose: "68ch"
      }
    }
  },
  plugins: []
};

export default config;
