/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 2px 2px 0px rgba(184, 184, 184, 0.2), 0px 6px 20px 0px rgba(149, 149, 149, 0.2)'
      }
    },
  },
  plugins: [],
}
