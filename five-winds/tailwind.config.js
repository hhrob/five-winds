/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'media', // can be 'media' or 'class'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': '#A1C6F6', // for light mode matches logo
      'light-gray': '#B9C5D4', // matches logo
      'red': '#FF4C57', // for dark mode matches logo
      'dark-red': '#51181C', // for dark mode
      'light-blue': '#C9E1FF', // for light mode
      'white': '#FFFFFF',
      'black': '#242424',
      'gray': {
        50: '#bebebe',
        100: '#aeaeae',
        200: '#9e9e9e',
        300: '#8e8e8e',
        400: '#7e7e7e',
        500: '#6f6f6f',
        600: '#5f5f5f',
        700: '#4f4f4f',
        800: '#3f3f3f',
        900: '#2f2f2f',
      },
    },
    fontFamily: {
      sans: ['Eras Bold ITC', 'sans-serif'],
      serif: ['Times New Roman', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      scale: {
        '200': '2',
        '175': '1.75'
      },
    }
  },
  plugins: [],
}

