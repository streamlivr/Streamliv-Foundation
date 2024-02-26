/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./assets/**/*.{html,js}',
  "./views/*.ejs", "./views/**/*.ejs", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        comfortaa: ['"Comfortaa"', 'sans-serif']
      }
    }
  },
  plugins: [
    require('flowbite/plugin')
]
}

