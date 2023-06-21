/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'primary':'#090909',
        'secondary': '#936eff',
        'dark':'#212121'
      }
    },
  },
  plugins: [],
}