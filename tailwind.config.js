/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate': {
          870: 'rgb(19 27 48)',
        },
      },
      fontFamily: {
        'sans': ['Inter var', 'ui-sans-serif', 'system-ui']
      },
      screens: {
        's23': {'raw': '(max-height: 740px)'}
      },
    },
  },
  plugins: [],
}