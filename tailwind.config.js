/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontPrimary: ["Plus Jakarta Sans", "sans-serif"],
      },
      colors: {
        colorPrimary: "#624DE3",
        colorGray: "#9E9E9E",
        colorLight: "#F7F6FE",
      },
    },
  },
  plugins: [],
};
