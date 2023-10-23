/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'baby-blue': '#89CFF0',
      }
    }
  },
  variants: {},
  plugins: [],
}

