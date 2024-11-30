import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        light: "#FFFFFF",
        grey: "#F3F4F6",
        accent: "#0D99651A",
        button: "#0D9965",
        dark: "#000000"
      },
    },
  },
  plugins: [],
} satisfies Config;
