import type { Config } from 'tailwindcss'

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend:{
      boxShadow: {
        "box": "0 2px 2.5em 0 rgba(1,1,2,.28)"
      }
    },
      container: {
        center: true,
      },
  },
  plugins: [],
} satisfies Config

