import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{mdx,md}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8B1C1C",
        },
        accent: {
          DEFAULT: "#F2B705",
        },
        secondary: {
          DEFAULT: "#1F3B7A",
        },
        charcoal: "#1C1C1C",
        offwhite: "#FAFAF7",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        soft: "0 10px 30px -12px rgba(0,0,0,0.25)",
      },
      backgroundImage: {
        phulkari: "url('/images/patterns/phulkari.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;


