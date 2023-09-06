/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#00ecf8',
        secondary: '#061819',
        accent: '#c0322a',
        wall: '#072021',
        words: '#def6f8'
      }
    },
  },
  plugins: [],
}

