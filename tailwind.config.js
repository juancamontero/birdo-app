/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        birdo: {
          accent: {
            700: "#A43323",
            500: "#e5614e",
            100: "#fce7e4",
          },
          50: "#eefcf4",
          100: "#d3f8e3",
          200: "#a9efcd",
          300: "#76e0b7",
          400: "#57d1aa",
          500: "#1aad88",
          600: "#0d8c73",
          700: "#0b6f62",
          800: "#0b5b53",
          900: "#0a4845",
          950: "#04292a",
        },
      },
      spacing: {
        28: "7rem",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      lineHeight: {
        tight: "1.2",
      },
      fontSize: {
        "2xl": "1.5rem",
        "3xl": "2rem",
        "4xl": "2.5rem",
        "5xl": "2.5rem",
        "6xl": "2.75rem",
        "7xl": "4.5rem",
        "8xl": "6.25rem",
      },
      boxShadow: {
        sm: "0 5px 10px rgba(0, 0, 0, 0.32)",
        md: "0 8px 30px rgba(0, 0, 0, 0.32)",
      },
    },
  },
  plugins: ['@tailwindcss/forms'],
}
