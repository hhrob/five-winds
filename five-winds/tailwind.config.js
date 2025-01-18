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
      'blue': '#A1C6F6',
      'gray-light': '#B9C5D4',
      'red': '#FF4C57',
      'dark-red': '#51181C',
      'light-blue': '#C9E1FF'
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
      }
    }
  },
  plugins: [],
}

