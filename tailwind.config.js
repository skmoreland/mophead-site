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
      title: ['synthemesc'],
      body: ['Mooli']
    },
    safelist: [
      'animate-[fade-in_1s_ease-in-out]', 
      'animate-[fade-in-down_1s_ease-in-out]',
      'animate-[fade-in_1s_ease-in-out]'
    ],
    extend: {
      colors: {
        'hotpink': "#FF00CC",
        'darkteal': "#009999",
        'neonlime': "#99FF33"
      }
    },
  },
  plugins: [],
}

