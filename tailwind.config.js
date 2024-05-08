/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans"],
        grace: ["Covered By Your Grace", "cursive"],
      },
      colors: {
        "#2DA950": "#2DA950",
        "#828282": "#828282",
        "#002E18": "#002E18",
        "#F5F5F5": " #F5F5F5",
        "#E8EEE7": " #E8EEE7",
        "#9E9D9D": "#9E9D9D",
        "#4E4E4E": "#4E4E4E",
        "#EAEAEA": "#EAEAEA",
        "#454444": "#454444",
      },
    },
  },
  plugins: [],
};
