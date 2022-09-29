/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      '3xl': '1800px'
    },
    extend: {
      fontSize: {
        '10xl': ['9.75rem', 1]
      },
      colors: {
        brand: {
          gray: {
            400: `#CCCCCC`,
            600: `#D2D7D2`,
            700: `#DDDDDD`,
          },
          orange: {
            500: `#f36f44`,
            700: `#FF5B2B`,
            800: `#FF9966`,
          },
          yellow: {
            500: `#FFCC33`,
          },
          blue: {
            400: `#3C78FF`,
            500: `#3366FF`,
          },
          green: {
            500: `#33CC66`,
          },
          red: {
            500: `#FF0033`,
          },
          purple: {
            500: `#CC33FF`,
          },
        }
      }
    },
  },
  plugins: [],
}
