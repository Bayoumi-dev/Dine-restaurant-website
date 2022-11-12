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
            13: '3.25rem',
            15: '3.75rem',
            18: '4.5rem',
            19: '4.75rem',
            22: '5.5rem',
            25: '6.25rem',
            26: '6.5rem',
            29: '7.25rem',
            30: '7.5rem',
            31: '7.75rem',
            33: '8.25rem',
            40: '10rem',
            50: '12.5rem',
            59: '14.75rem',
            70: '17.5rem',
            76: '19rem',
            88: '22rem',
            90: '22.5rem',
            100: '25rem',
            135: '33.75rem',
            150: '37.5rem',
            180: '45rem',
            187: '46.75rem',
            205: '51.25rem',
            248: '62rem',
            360: '90rem',
            unset: 'unset',
         },
         maxWidth: {
            '8xl': '90rem',
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
         backgroundSize: {
            '2/1': '200% 100%',
         },
         content: {
            'done-icon': 'url("/src/assets/icons/icon-done.svg")',
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
         animation: {
            'fade-in': 'fadeIn 1s',
            'slide-up': 'slideUp 1s',
            'slide-right': 'slideRight 1s',
            'slide-left': 'slideLeft 1s',
            'zoom-in': 'zoomIn 1s',
            'zoom-out': 'zoomOut 1s',
         },
         keyframes: {
            fadeIn: {
               from: {
                  opacity: '0',
               },
               to: {
                  opacity: '1',
               },
            },
            slideUp: {
               from: {
                  opacity: '0',
                  transform: 'translateY(4.375rem)',
               },
               to: {
                  opacity: '1',
                  transform: 'translate(0)',
               },
            },
            slideRight: {
               from: {
                  opacity: '0',
                  transform: 'translateX(-4.375rem)',
               },
               to: {
                  opacity: '1',
                  transform: 'translate(0)',
               },
            },
            slideLeft: {
               from: {
                  opacity: '0',
                  transform: 'translateX(4.375rem)',
               },
               to: {
                  opacity: '1',
                  transform: 'translate(0)',
               },
            },
            zoomIn: {
               from: {
                  opacity: '0',
                  transform: 'scale(0.5)',
               },
               to: {
                  opacity: '1',
                  transform: 'scale(1)',
               },
            },
            zoomOut: {
               from: {
                  opacity: '0',
                  transform: 'scale(1.4)',
               },
               to: {
                  opacity: '1',
                  transform: 'scale(1)',
               },
            },
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
