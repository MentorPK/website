import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      transitionProperty: {
        header: 'height, opacity',
        textLink: 'text-decoration-line, color',
      },
      colors: {
        primary: '#00E0D5',
        primaryMaybe: '#00F5E9',
        //BG
        secondary: '#021627',
        //Dark secondary BG for header and footer
        richBlack: '#010B13',
        tertiary: '#F7ECCA',
        errorRed: '#ED254E',
        successGreen: '#CAFE48',
      },
      boxShadow: {
        box: '0 2px 2.5em 0 rgba(1,1,2,.28)',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
} satisfies Config;
