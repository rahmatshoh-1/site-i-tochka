/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    // screens:{
    //     'xl': { 'max': '1200px'},
    //     'lg': { 'max': '1024px'},
    //     "md": { 'max': '768px'},
    //     'sm': { 'max': '375px'}
    // },
    container: {
      padding: '10px',
      center: true,
    },
    extend: {
      colors:{
        'darkBlue':'#001A34',
        'lightBlue':'#120CE8'
      }
    },
  },
  plugins: [],
}

