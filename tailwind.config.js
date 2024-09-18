/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.tsx", "./src/*.tsx"],
  theme: {
    extend: {
      colors: {
        iris_purple: "#5A4FCF",
        iris_yellow: "#fff100",
      },
    },
  },
  plugins: [],
};
