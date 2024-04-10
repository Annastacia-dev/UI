/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF6363',
      },
      fontFamily: {
        coolvetica: ['coolvetica', 'sans-serif'],
      },
    },
  },
  plugins: [],
};