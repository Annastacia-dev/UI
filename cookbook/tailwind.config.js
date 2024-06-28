/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#023244',
        secondary: '#ABCACF',
        tertiary: '#D9D9D9',
        bg: '#C3C4C5',
      },
    },
  },
  plugins: [],
};
