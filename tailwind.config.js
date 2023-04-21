/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    fontFamily: {
      'SecularOne': ['"Secular One"', 'sans-serif']
    },
    colors: {
      'white': '#ffffff',
      'purple': '#9370d8',
      'light-purple': '#ac82ff',
      'yellow': '#ffd801',
      'orange': '#ff7f50',
      'light-gray': '#fefefe',
      'gray': '#96a1a7',
      'black': '#000000',
      'googray': '#5F6368',

      
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
}
