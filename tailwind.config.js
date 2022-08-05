/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [ 'Noto Sans KR', 'sans-serif', ],
      },
      screens: {
        xs: { max: '479px', },
        sm: { min: '480px', max: '767px', },
        md: { min: '768px', max: '1023px', },
        lg: { min: '1024px', },
      },
      colors: {
        'pale-sky': {
          50: '#CDD0D5',
          100: '#C2C5CC',
          200: '#ACB0BA',
          300: '#969BA7',
          400: '#7F8694',
          500: '#6B7280',
          600: '#515761',
          700: '#383C43',
          800: '#1E2024',
          900: '#050506',
        },
        lime: {
          50: '#ffffdb',
          100: '#fdfec9',
          200: '#f8fd99',
          300: '#eff85e',
          400: '#e0ee2d',
          500: '#c2d40e',
          600: '#98aa06',
          700: '#72810a',
          800: '#59650f',
          900: '#4b5611',
        },
        blue: {
          50: '#eff8ff',
          100: '#daeeff',
          200: '#b3deff',
          300: '#91d2ff',
          400: '#5eb8fc',
          500: '#3898f9',
          600: '#227bee',
          700: '#1a64db',
          800: '#1c51b1',
          900: '#1c478c',
        },
        black: {
          50: '#f7f7f7',
          100: '#e3e3e3',
          200: '#c8c8c8',
          300: '#a4a4a4',
          400: '#818181',
          500: '#666666',
          600: '#515151',
          700: '#434343',
          800: '#383838',
          900: '#000000',
        },
      },
    },
  },
  plugins: [],
};