/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'primary': '#F15859',
      'white': '#ffffff',
      'black': '#000000'
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          '0%': {
            opacity: "0"
          },
          '50%': {
            opacity: "1"
          },
        },
        entrance: {
          '0%': {
            transform: 'translateX(-30%)',
            opacity: "0"
          },
          '50%': {
            transform: 'translateX(0%)',
            opacity: "1"
          },
        },
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-in',
        entrance: 'entrance 2s ease-in',
        move: 'flex 0.7s ease-in',
      }
    },
    fontFamily: {
      Mont: ['Montserrat', ...defaultTheme.fontFamily.sans],
      Bebas: ['Bebas Neue', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [],
}
