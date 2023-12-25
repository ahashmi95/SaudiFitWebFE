/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./public/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [require('@tailwindcss/forms')]
}