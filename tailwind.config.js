/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: ["./*.html"],
  content: ["./pages/**/*.html", "./index.html", "./js/**/*.js"],
  theme: {
    // screens: {
    //   sm: '480px',
    //   md: '768px',
    //   lg: '976px',
    //   xl: '1440px',
    // },
    container: {
      padding: '10px',
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-primary':'linear-gradient(to right, rgb(217, 70, 239), rgb(220, 38, 38), rgb(251, 146, 60))',
        'gradient-sublime':'linear-gradient(to right, rgb(251, 113, 133), rgb(217, 70, 239), rgb(99, 102, 241))'
      },
      colors:{
        'darkBlue':'#001A34',
        'lightBlue':'#120CE8',
        'body':'#001A34',
        'lightDark':'#011D3F'
        
      }
    },
  },
  plugins: [],
}

