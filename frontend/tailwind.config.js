/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "red-rose": ['"Red Rose"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
      },
      colors: {
        "student-bg": "rgba(247, 144, 9, 0.1)",
        "preceptor-bg": "rgba(18, 183, 106, 0.1)",
      },
      boxShadow: {
        "custom": "0 0 10px rgba(0, 0, 0, 0.2)",
        "drop-custom": "0 4px 6px rgba(0, 0, 0, 0.1)",
      },
      lineHeight: {
        '1': '1',
        '1.55': '1.55',
      },
    },
  },
  plugins: [],
};
