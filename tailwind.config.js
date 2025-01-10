/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./*.{html,js}" ],
  theme: {
    extend: {
      colors: {
        "custom-black": "#1f1f1f",
        "custom-gray": "#b6bac0",
        "custom-blue": "#0ea5e9",
        "custom-blue-2": "#5263ff",
      }
    },
  },
  plugins: [],
}

