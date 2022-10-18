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
         gray: '#4C4C4C',
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
            DEFAULT: '1.5rem',
            md: '2.5rem',
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
         spacing: {
            18: '4.5rem',
            22: '5.5rem',
            30: '7.5rem',
            31: '7.75rem',
            unset: 'unset',
         },
         maxWidth: {
            unset: 'unset',
         },
         backgroundImage: {
            'pattern-divide': "url('/src/assets/patterns/pattern-divide.svg')",
            'pattern-lines': "url('/src/assets/patterns/pattern-lines.svg')",
            'ready-mobile': "url('/src/assets/homepage/ready-bg-mobile.jpg')",
            'ready-tablet': "url('/src/assets/homepage/ready-bg-tablet.jpg')",
            'ready-desktop': "url('/src/assets/homepage/ready-bg-desktop.jpg')",
         },
         boxShadow: {
            '3xl': '0px 75px 100px -50px rgba(56, 66, 85, 0.503223);',
         },
         letterSpacing: {
            tighter: '-0.03125em',
            tight: '-0.0.015625em',
            widest: '0.125em',
         },
         opacity: {
            15: '.15',
         },
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
