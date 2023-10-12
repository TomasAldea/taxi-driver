/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        sabagreen: {
          1: "#b6e5d347",
          50: "#257053",
          100 : "#1a513b"
        },
        sabablue: {
          1: "#f0f8ff",
        }
      },
      screens: {
        'mb': {'max': '639px'}
      },
    },
  },
  plugins: [],
});