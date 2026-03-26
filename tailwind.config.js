/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          light: '#8d6350',
          DEFAULT: '#704c3a',
          dark: '#5a3c2d',
        },
        rose: {
          antique: '#704c3a',
          light: '#8d6350',
          dark: '#5a3c2d',
        },
        cream: {
          DEFAULT: '#f6f6f0',
          dark: '#ede9e3',
        },
        blush: {
          DEFAULT: '#ece7e0',
          dark: '#e0d9d0',
        },
        nude: {
          DEFAULT: '#D4B9A6',
        },
        ink: {
          light: '#555555',
          DEFAULT: '#242424',
          dark: '#242424',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"PP Neue Montreal"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      letterSpacing: {
        ultra: '0.25em',
      },
    },
  },
  plugins: [],
}
