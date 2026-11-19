/** @type {import('tailwindcss').Config} */
// Design tokens: "the analyst's report"
// Ink #003135 (text) · Muted #3E6266 (secondary text) · Paper #F5F9F9 (page)
// Mist #CFE9ED (feature band) · Line #D3E3E6 (rules) · Clay #964734 (actions, focus)
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Schibsted Grotesk"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#003135',
          soft: '#024950',
        },
        muted: '#3E6266',
        paper: '#F5F9F9',
        surface: '#FFFFFF',
        mist: '#CFE9ED',
        line: '#D3E3E6',
        clay: {
          DEFAULT: '#964734',
          dark: '#7A3727',
          light: '#EEAD9A',
        },
        signal: '#08727A',
        // On-dark tones used inside the deep-teal project cards
        foam: {
          DEFAULT: '#D7F3F6',
          soft: '#BCEBF0',
        },
      },
      maxWidth: {
        prose: '62ch',
      },
    },
  },
  plugins: [],
}
