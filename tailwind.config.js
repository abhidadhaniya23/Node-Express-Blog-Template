const colors = require('tailwindcss/colors');

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Raleway']
      }
    },
    colors: {
      myOrange:{
        light: '#ff7700'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
