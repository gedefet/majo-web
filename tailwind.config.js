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
          light: '#a0a0a0',
          DEFAULT: '#8C8C8C',
          dark: '#707070',
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
