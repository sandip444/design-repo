/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { fontFamily: {
      'red-rose': ['"Red Rose"', 'sans-serif'],
      'inter': ['"Inter"', 'sans-serif'],
    },
    boxShadow: {
      'custom': '0 0 10px rgba(0, 0, 0, 0.2)',
    }},
  },
  plugins: [],
}