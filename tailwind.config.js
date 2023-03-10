const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        beige: '#f3e9dd',
        skin: '#fdf6ec'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
}
