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
         silver: '#8E8E8E',
         white: '#ffffff',
         error: '#B54949',
         transparent: 'transparent',
      },
      container: {
         center: true,
         screens: {
            md: em(768),
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
            15: '3.75rem',
            18: '4.5rem',
            22: '5.5rem',
            26: '6.5rem',
            30: '7.5rem',
            31: '7.75rem',
            33: '8.25rem',
            unset: 'unset',
         },
         maxWidth: {
            unset: 'unset',
         },
         fontSize: {
            xxs: '0.625rem',
         },
         backgroundImage: {
            'pattern-divide': "url('/src/assets/patterns/pattern-divide.svg')",
            'pattern-lines': "url('/src/assets/patterns/pattern-lines.svg')",
            'ready-mobile': "url('/src/assets/homepage/ready-bg-mobile.jpg')",
            'ready-tablet': "url('/src/assets/homepage/ready-bg-tablet.jpg')",
            'ready-desktop': "url('/src/assets/homepage/ready-bg-desktop.jpg')",
            booking: "url('/src/assets/booking/hero-bg-desktop.jpg')",
            'icon-plus': "url('/src/assets/icons/icon-plus.svg')",
            'icon-minus': "url('/src/assets/icons/icon-minus.svg')",
            'icon-arrow': "url('/src/assets/icons/icon-arrow.svg')",
            'icon-check': "url('/src/assets/icons/icon-check.svg')",
         },
         boxShadow: {
            '2xl': '0px 15px 25px rgba(56, 66, 85, 0.24623)',
            '3xl': '0px 75px 100px -50px rgba(56, 66, 85, 0.503223)',
            autofill: 'inset 0 0 0 100px white!important',
         },
         letterSpacing: {
            tighter: '-0.03125em',
            tight: '-0.015625em',
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
