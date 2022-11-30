/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        'primary-black': '#141414',
        'primary-blue': '#0E57FF',
        'secondary-black': '#101010',
        'secondary-blue': '#003BC3',
        'secondary-white': '#F5F5F5',
      },
    },
  },
};
