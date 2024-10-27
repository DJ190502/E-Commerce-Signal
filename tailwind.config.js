/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      borderWidth:{
        'custom': '10px'
      },
      letterSpacing:{
        'custom': '0.08em'
      },
      borderRadius:{
        'custom': '70px',
        '50%': '50%'
      }
    },
  },
  plugins: [],
}

