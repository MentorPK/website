import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      transitionProperty: {
        header: 'height, opacity',
        textLink: 'text-decoration-line, color'
      },
      colors: {
        primary: '#00E0D5',
        primaryMaybe: '#00F5E9',
        //BG
        secondary: '#021627',
        secondary95: '#0F2232',
        //Dark secondary BG for header and footer
        richBlack: '#010B13',
        tertiary: '#F7ECCA',
        errorRed: '#ED254E',
        successGreen: '#CAFE48'
      },
      boxShadow: {
        box: '0 2px 2.5em 0 rgba(1,1,2,.28)'
      },
      keyframes: {
        'spinner-grow': {
          '0%': {
            transform: 'scale(0)'
          },
          '50%': {
            transform: 'none',
            opacity: '1'
          }
        },
        'rotate-3d': {
          '0%': {
            transform: 'rotateZ(0deg)'
          },
          '100%': {
            transform: 'rotateZ(360deg)'
          }
        },
        pop: {
          '25%': {
            transform: 'scale(0.7)'
          },
          '75%': {
            transform: 'scale(1.1)'
          }
        },
        shake: {
          '0%': {
            transform: 'scale3d(1, 1, 1)'
          },
          '10%, 20%': {
            transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -2deg)'
          },
          '30%, 50%, 70%, 90%': {
            transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 2deg)'
          },
          '40%, 60%, 80%': {
            transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -2deg)'
          },
          '100%': {
            transform: 'scale3d(1, 1, 1)'
          }
        },
        'zoom-in': {
          '0%': {
            opacity: '0',
            transform: 'scale3d(0.3, 0.3, 0.3)'
          },
          '50%': {
            opacity: '1'
          }
        }
      }
    },
    container: {
      center: true
    },
    screens: {
      xxs: '325px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px'
    }
  },
  plugins: []
} satisfies Config;
