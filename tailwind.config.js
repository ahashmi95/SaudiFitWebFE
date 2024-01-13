/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./public/*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        sf_bg_LightGray: "#F4F7FD",
        sf_primary: "#29B65C",
        sf_primary_light:"#4DC277",
        sf_primary_lighter:"#6CE9A6",
        sf_primary_dark:"#039855",
        sf_primary_darker:"#027A48",
        sf_gray: "#475467",
      }
    },
  },
  darkMode: "class",
  plugins: [require('@tailwindcss/forms')]
}