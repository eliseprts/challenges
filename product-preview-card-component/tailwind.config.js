/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        'aquamarine': '#3c8067',
        'darkAquamarine': '#2f6350',
        'albaster': '#f2ebe3',
        'gunMetal': '#1c232b',
        'lightGrey': '#6c7289',

      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif']
      }
    },
  },
  plugins: [],
}
