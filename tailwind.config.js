/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        orbit: 'orbit 3s linear infinite',
        zoomInSpin: 'zoomInSpin 1s linear forwards',
        zoomIn: 'zoomIn 1s linear forwards',
        zoomIn1: 'zoomIn 1s linear forwards .5s',
        zoomIn2: 'zoomIn 1s linear forwards 1s',
        zoomIn3: 'zoomIn 1s linear forwards 1.5s',
        zoomIn4: 'zoomIn 1s linear forwards 2s',
        slideTL: 'slideTL .5s ease forwards 3.3s',
        scaleX: 'scaleX 1s ease-in-out forwards',
        scaleY: 'scaleY .5s ease forwards',
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
        zoomInSpin: {
          '0%': {transform: 'scale(0) rotate(150deg)', opacity: 0},
          '100%': {transform: 'scale(1) rotate(0deg)', opacity: 1},
        },
        slideTL: {
          '0%': {transform: 'translate(-30px)', opacity: 0},
          '80%': {transform: 'translate(10px)', opacity: .8},
          '100%': {transform: 'translate(0px)', opacity: 1},
        },
        scaleX: {
          '0%': {transform: 'scaleX(0)', opacity: 1},
          '70%': {transform: 'scaleX(1)', opacity: .7},
          '80%': {transform: 'scaleX(.8)', opacity: .8},
          '100%': {transform: 'scaleX(1)', opacity: 1},
        },
        scaleY: {
          '0%': {transform: 'scaleY(0)', opacity: 1},
          '100%': {transform: 'scaleY(1)', opacity: 1},
        },
      }
    },
  },
  plugins: [],
}
