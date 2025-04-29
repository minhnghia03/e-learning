/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}', './screens/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        bgPurple: '#5667FD',
        bgLightGray: '#EDEDED',
        bgLightGray2: '#E6E6E6',
        bgWhite: '#F4F5F9',
        lightGrayText: '#636D77',
        darkGrayText: '#364356',
        gold: '#FED430',
      },
    },
  },
  plugins: [],
};
