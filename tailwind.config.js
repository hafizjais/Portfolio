/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Outfit', 'sans-serif'], // User likes clean font
        body: ['Outfit', 'sans-serif'],
        sans: ['Outfit', 'sans-serif'],
      },
      colors: {
        // "Cool and Collected" Theme
        // Palette: Deepest Teal #003135, Dark Teal #024950, Burnt Orange #964734, Bright Teal #0FA4AF, Light Blue #AFDDE5

        'slate': {
          50: '#003135',  // Text (Darkest Teal)
          100: '#024950', // Headings
          200: '#065d66',
          300: '#0a717d',
          400: '#0e8693',
          500: '#0FA4AF', // Bright Teal (Borders/Secondary)
          600: '#3fcfd9',
          700: '#7adce3',
          800: '#bcebf0', // Card BG (Very Light Teal)
          900: '#d7f3f6', // Secondary BG
          950: '#AFDDE5', // Main BG (Light Sky Blue)
        },
        'sky': {
          50: '#26120d',
          100: '#4d241a',
          200: '#733527',
          300: '#964734', // Burnt Orange
          400: '#bf5b43',
          500: '#964734', // Primary Accent (Orange) - High Contrast on Blue
          600: '#d97b62',
          700: '#eead9a',
          800: '#f5d6cd',
          900: '#faebe6',
          950: '#ffffff',
        },
        'accent': '#964734', // Burnt Orange
        'dark-bg': '#AFDDE5', // Light Blue BG
      }
    },
  },
  plugins: [],
}