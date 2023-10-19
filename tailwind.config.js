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
        "primary-100": "#0085ff",
        "primary-200": "#69b4ff",
        "primary-300": "#e0ffff",
        "accent-100": "#006fff",
        "accent-200": "#e1ffff",
        "text-100": "#FFFFFF",
        "text-200": "#9e9e9e",
        "bg-100": "#1E1E1E",
        "bg-200": "#2d2d2d",
        "bg-300": "#454545",
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
  plugins: [],
}
