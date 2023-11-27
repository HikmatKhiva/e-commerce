/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Inter', 'sans-serif'],
        'inter': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
};
