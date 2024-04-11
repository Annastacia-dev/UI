/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4a0236',
      },
      fontFamily: {
        coolvetica: ['coolvetica', 'sans-serif'],
        infostory: ['infostory', 'sans-serif'],
      },
    },
  },
  plugins: [],
};