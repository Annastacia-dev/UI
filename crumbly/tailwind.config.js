/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#f3a446',
        secondary: '#a06235',
        darkgrey: '#1d1d1d',
        lightgrey: '#efefef',
      },
      fontFamily: {
        coolvetica: ['coolvetica', 'sans-serif'],
        infostory: ['infostory', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
