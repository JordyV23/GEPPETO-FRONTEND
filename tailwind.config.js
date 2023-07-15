/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  darkMode: "class",
  theme: {
    colors: {
      "main-light": "#D9D9D9",
      "light-accent": "#D33232",
      "light-accent-2":"#b82725",
      "txt-light": "#FFFFFF",
      "main-dark": "#443C68",
      "dark-accent": "#18122B",
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
