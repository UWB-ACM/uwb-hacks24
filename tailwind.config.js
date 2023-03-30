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
      'purple': '#9370d8',
      'light-purple': '#ac82ff',
      'yellow': '#ffd801',
      'orange': '#ff7f50',
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
}
