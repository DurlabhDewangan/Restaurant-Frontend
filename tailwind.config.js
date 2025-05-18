/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E74C3C',
        secondary: '#2C3E50',
        accent: '#F39C12',
        light: '#ECF0F1',
        dark: '#1A1A1A',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Prata', 'serif'],
      },
    },
  },
  plugins: [],
}