/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        sf_primary: '#29B65C', // Define a custom color "primary"
        sf_primary_lighter: '#EBFFF2',
        primary_dark: '#22984D'
      },
    },
  },
  plugins: [],
}

