/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainBlue: "#274068",
      },
    },
    container: {
      center: true,
    },
    padding: {
      DEFAULT: "1rem",
      sm: "2rem",
      lg: "4rem",
      xl: "6rem",
      "2xl": "6rem",
    },
  },
  plugins: [],
};
