/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      heading: ['Outfit', 'sans-serif'],
      body: ['Outfit', 'sans-serif'],
      sans: ['Outfit', 'sans-serif'],
    },
    colors: {
      'slate': {
        850: '#1e293b',
        900: '#0f172a',
        950: '#020617',
      },
      'accent': '#0ea5e9', // sky-500
    },
  },
  plugins: [],
}