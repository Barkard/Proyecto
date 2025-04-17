/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'verdigris': {
          DEFAULT: '#5D5737',
          50: '#978D59',
          100: '#908755',
          200: '#837B4E',
          300: '#776F46',
          400: '#6A633F',
          500: '#5D5737',
          600: '#4D482E',
          700: '#3D3924',
          800: '#2D2A1B',
          900: '#1D1B11',
          950: '#15140C'
        },
      },
    colors: {
      'great-blue': {
        DEFAULT: '#2A669F',
        50: '#AEE9E7',
        100: '#9CE4E5',
        200: '#78CEDB',
        300: '#53B2D1',
        400: '#348FC3',
        500: '#2A669F',
        600: '#1E4072',
        700: '#132146',
        800: '#070A1A',
        900: '#000000'
      },
    },
    },
  },
  plugins: [],
}