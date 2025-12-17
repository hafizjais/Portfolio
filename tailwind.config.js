/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Croissant One', 'cursive'],
        body: ['Outfit', 'sans-serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#0a0a0a',
        'teal-accent': '#14b8a6', // teal-500 equivalent
      }
    },
  },
  plugins: [],
}