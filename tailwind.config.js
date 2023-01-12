/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        orbit: 'orbit 3s linear infinite',
        zoomIn: 'zoomIn 1s linear forwards',
        zoomIn1: 'zoomIn 1s linear forwards .5s',
        zoomIn2: 'zoomIn 1s linear forwards 1s',
        zoomIn3: 'zoomIn 1s linear forwards 1.5s',
        zoomIn4: 'zoomIn 1s linear forwards 2s',
        slideTL: 'slideTL .5s ease forwards 3.3s'
      },
      keyframes:{
        orbit: {
          '0%': {transform: 'rotate(0deg)'},
          '100%': {transform: 'rotate(360deg)'},
        },
        zoomIn: {
          '0%': {transform: 'scale(0)', opacity: 0},
          '100%': {transform: 'scale(1)', opacity: 1},
        },
        slideTL: {
          '0%': {transform: 'translate(-30px)', opacity: 0},
          '100%': {transform: 'translate(0px)', opacity: 1},
        },
      }
    },
  },
  plugins: [],
}
