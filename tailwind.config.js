/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      borderRadius:{
        'custom': '70px'
      }
    },
  },
  plugins: [],
}

