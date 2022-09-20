/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ['./src/**/*.{ts,tsx}'],
   theme: {
      colors: {
         primary: {
            beaver: '#9e7f66',
            codGray: '#111111',
         },
         secondary: {
            mirage: '#17192b',
            ebonyClay: '#242b37',
            shuttleGray: '#5c6779',
         },
         white: '#ffffff',
         transparent: 'transparent',
      },
      container: {
         center: true,
         screens: {
            lg: em(992),
            xl: em(1110),
         },
         padding: {
            DEFAULT: '1.5em',
            xl: '0',
         },
      },
      extend: {
         screens: {
            xs: em(360),
            sm: em(640),
            md: em(768),
            lg: em(1024),
            xl: em(1280),
            '2xl': em(1400),
            '3xl': em(1600),
         },
         backgroundImage: {
            divide: "url('/src/assets/patterns/pattern-divide.svg')",
          },
          boxShadow: {
            '3xl': '0px 75px 100px -50px rgba(56, 66, 85, 0.503223);',
          }
      },
   },
   plugins: [],
}

/**
 * @description Pixel to em
 * @param {number} px
 * @returns {string}
 */
function em(px) {
   return `${px / 16}em`
}
