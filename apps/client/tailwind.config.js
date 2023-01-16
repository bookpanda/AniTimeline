// @ts-check

/** @type {import("tailwindcss").Config} */
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,css,scss}",
    "../../packages/design/src/**/*.{js,ts,jsx,tsx,css,scss}",
  ],
  theme: {
    extend: {
      colors: {
        "white-pink": "#f9ecef",
        "pink-light": "#f8bad0",
        "pink-dark": "#e3859f",
        "yellow-light": "#f4d64f",
        "yellow-dark": "#b89c4b",
        "blue-light": "#6ac0ee",
        "blue-dark": "#4190d2",
      },
    },
  },
  darkMode: "class",
};

module.exports = config;
