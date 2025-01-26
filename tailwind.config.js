/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'maingreen': '#ace62e',
        'secondarycyan': '#4be3dc'
      },
    },
  },
  plugins: [],
}

