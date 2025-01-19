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
        50: '#f9fafb',
        100: '#f4f5f7',
        200: '#e5e7eb',
        300: '#d2d6dc',
        400: '#9fa6b2',
        500: '#6b7280',
        600: '#4b5563',
        700: '#374151',
        800: '#1f2937',
        900: '#111827',
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

