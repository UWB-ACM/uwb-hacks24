/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    colors: {
      'purple': '#9370d8',
      'purple2': '#ac82ff',
      'yellow': '#ffd801',
      'orange': '#ff7f50',
    },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
}
