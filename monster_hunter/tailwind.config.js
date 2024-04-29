/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'caveat': ['Caveat', 'cursive'],
      'newFont': ["'Jersey 15'", "sans-serif"]
    },
    extend: {},
  },
  plugins: [],
}