/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#14b8a6',
        blacky: '#070F2B',
        primaryHov: '#119a8e',
      },
    },
  },
  plugins: [],
};
