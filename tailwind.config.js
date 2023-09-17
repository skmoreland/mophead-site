/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      gluten: ['Gluten'],
      gloria: ['Gloria Hallelujah'],
      noto: ['Noto Serif'], 
      marker: ['Barrio'],
      mooli: ['Mooli'],
      title: ['Barrio'],
      body: ['Mooli']
    },
    extend: {
      colors: {
        'rose': ['#C37DA1']
      }
    },
  },
  plugins: [],
}

