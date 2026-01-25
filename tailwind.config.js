/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from business card
        primary: {
          900: '#0a0a0a',
          800: '#0d0d0f',
          700: '#121215',
          600: '#1a1a1e',
          500: '#252529',
        },
        accent: {
          gold: '#c9a227',
          silver: '#c0c0c0',
        }
      },
      fontFamily: {
        'blackletter': ['"Cloister Black"', '"Old English Text MT"', 'serif'],
        'display': ['Cinzel', 'serif'],
        'body': ['"EB Garamond"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
