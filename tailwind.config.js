/** @type {import('tailwindcss').Config} */
// Link for Material Tailwind :]
// https://www.material-tailwind.com

const withMT = require("@material-tailwind/react/utils/withMT");
 
module.exports = withMT({
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    colors: {
      "green": "#d9f99d",
      "green-tupper": "#22c55e",
      "violet": "#4c1d95"
    },
    extend: {},
  },
  plugins: [],
});
