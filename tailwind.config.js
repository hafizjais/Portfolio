/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Croissant One', 'cursive'], // Keeping user's choice
        body: ['Outfit', 'sans-serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        // Mapping "Golden Taupe" palette to existing structure to prevent breakage
        // Palette: Gold #D4AF37, Taupe #BDB76B, Cream #FDFBD4, Bronze #CE8946

        'slate': {
          50: '#FDFBD4', // Cream (Lightest)
          100: '#F7F5CC',
          200: '#EBE9C0',
          300: '#DMDAB0',
          400: '#CE8946', // Bronze (Medium)
          500: '#BDB76B', // Taupe
          600: '#8A824B', // Darker Taupe
          700: '#5C5432',
          800: '#2E2A19', // Very Dark Taupe
          900: '#1F1C11', // Almost Black/Gold
          950: '#12100A', // Deepest Background
        },
        'sky': {
          50: '#FBF8E0',
          100: '#F5EEC1',
          200: '#ECDFA0',
          300: '#E3CF7E',
          400: '#DBC060',
          500: '#D4AF37', // Gold (Primary Accent)
          600: '#AA8C2C',
          700: '#806921',
          800: '#554616',
          900: '#2B230B',
          950: '#151105',
        },
        'accent': '#D4AF37', // Gold
        'dark-bg': '#0a0a0a',   // Preserving user's custom keys
        'teal-accent': '#14b8a6'
      }
    },
  },
  plugins: [],
}