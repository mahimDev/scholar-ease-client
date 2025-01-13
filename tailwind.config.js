/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        background: "#F9FAFB",
        text: "#1F2937",
        primary: "#2563EB",
        secondary: "#10B981",
      },
    },
  },
  plugins: [],
};
