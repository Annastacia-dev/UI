/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
      },
      colors: {
        tan: '#d2b48c',
        khaki: '#c19a6b',
        rosyBrown: '#bc8f8f',
        darkGold: '#b8860b',
        sienna: '#a0522d',
        saddleBrown: '#8b4513',
      },
    },
  },
  plugins: [],
};
