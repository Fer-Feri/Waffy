/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'sans-normal': 'sans',
        'sans-medium': 'sansMedium',
        'sans-bold': 'sansBold',
        'b-ziba': 'ziba',
        'lalezar': 'lalezar-regular',
      },
    },
  },
  plugins: [],
}

