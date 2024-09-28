/** @type {import('tailwindcss').Config} */
import scrollbar from 'tailwind-scrollbar'; // Use import instead of require

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat", system-ui'],
      },
    },
  },
  plugins: [
    scrollbar, // Add the scrollbar plugin here
  ],
};
