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
    safelist: [
      'animate-[fade-in_1s_ease-in-out]', 
      'animate-[fade-in-down_1s_ease-in-out]'
    ],
    extend: {
      colors: {
        'rose': ['#C37DA1']
      }
    },
  },
  plugins: [],
}

