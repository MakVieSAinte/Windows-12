/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#151515",
        secondary: "#CAD4E7",
        bordure: "#757575",
        accent: {
          DEFAULT: "#005FB8",
          secondary: "#60CDFF",
        },
      },
    },
  },
  plugins: [],
}

