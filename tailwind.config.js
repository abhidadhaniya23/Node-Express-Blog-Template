module.exports = {
  mode:'jit',
  purge: [
    './public/**/*.html',
    './views/**/*.ejs',
    './views/partials/**/*.ejs'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Raleway']
      },
      colors: {
        green: {
          DEFAULT: '#00b28b'
        },
        orange: {
          DEFAULT: '#ff4400'
        }
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
