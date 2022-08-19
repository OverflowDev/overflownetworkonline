/** @type {import('tailwindcss').Config} */ 
const defaultColors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  darkMode: 'class',
  
  theme: {
    extend: {
      colors: {
        ...defaultColors,
        'body': 'hsl(240, 15%, 11%)',
        'nav': '#404053',
        'badge': '#3F3F51',
        'veryDarkBlue': "hsl(234, 17%, 12%)",

      },
      fontFamily: {
        rubik: ["Rubik Maze", ...defaultTheme.fontFamily.sans],
        orbitron: ["Orbitron", ...defaultTheme.fontFamily.sans],
        serif: [...defaultTheme.fontFamily.serif],
        mono: [...defaultTheme.fontFamily.mono],
      }
    },
  },
  plugins: [],
}