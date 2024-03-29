const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      backgroundImage: {
        'grain-texture': "url('/images/grain-texture.webp')",
      },
      colors: {
        'primary-black': '#141414',
        'primary-blue': '#0E57FF',
        'secondary-black': '#101010',
        'secondary-blue': '#003BC3',
        'secondary-white': '#F5F5F5',
      },
      fontFamily: {
        sans: ['var(--font-inter)', ...fontFamily.sans],
        serif: ['var(--font-eb-garamond)', ...fontFamily.serif],
        title: ['var(--font-pp-neue-world)', ...fontFamily.serif],
      },
      screens: {
        md: '744px',
        '3xl': '1800px',
      },
    },
  },
};
