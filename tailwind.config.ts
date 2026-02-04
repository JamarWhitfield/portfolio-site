import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "surface": "#0b0b0c",
        "surface-2": "#111113",
        "accent": "#e5e7eb",
        "accent-2": "#cbd5f5"
      }
    }
  },
  plugins: []
};

export default config;
