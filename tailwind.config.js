/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./*.{html,js}" ],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        "custom-black": "#1f1f1f",
        "custom-gray": "#b6bac0",
        "custom-gray-2": "#334155",
        "custom-blue": "#38bdf8",
        "custom-blue-2": "#38bdf81a",
      }
    },
  },
  plugins: [],
}

