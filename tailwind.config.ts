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
        "surface": "#0b0f1a",
        "surface-2": "#111827",
        "accent": "#60a5fa",
        "accent-2": "#22d3ee"
      }
    }
  },
  plugins: []
};

export default config;
