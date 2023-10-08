/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sabagreen: {
          50: "#257053",
          100 : "#1a513b"
        }
      },
      screens: {
        'mb': {'max': '639px'}
      },
    },
  },
  plugins: [],
});