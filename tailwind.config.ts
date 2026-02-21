import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: "#2391d0",
        accent: "#f5cb21",
        secondary: "#0f172a",
        orange: "#d27317",
        text: {
          main: "#0d131c",
          light: "#475569",
        },
        surface: "#f1f5f9",
        background: {
          light: "#ffffff",
          dark: "#0a0a0a",
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
      },
      boxShadow: {
        hard: "4px 4px 0px rgba(0, 0, 0, 0.1)",
        "hard-hover": "2px 2px 0px rgba(0, 0, 0, 0.05)",
      },
      animation: {
        reveal: "reveal 0.6s ease-out forwards",
        ticker: "ticker 30s linear infinite",
      },
      keyframes: {
        reveal: {
          "0%": { width: "0%", opacity: "0" },
          "100%": { width: "100%", opacity: "1" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
