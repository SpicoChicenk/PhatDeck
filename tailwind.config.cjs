/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      text: "#000000",
      background: "#ffdc84",
      primary: "#7fceec",
      secondary: "#ff9984",
      accent: "#333333",
      light: "#ffffff",
      dropdown: "#6c6c6c",
    },
    fontFamily: {
      display: ["Love Ya Like A Sister"],
      body: ["Darumadrop One"],
    },

    extend: {},
  },
  plugins: [],
};
