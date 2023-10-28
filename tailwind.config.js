module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "6rem",
        "2xl": "10rem",
      },
    },
    extend: {
      colors: {
        lightBlue: "#274068",
        mainBlue: "#1C2F4D",
        darkBlue: "#0A1228",
        mainCreme: "#BBBBAF",
        mainRed: "#902428",
        mainText: "#e7e9ea",
      },
    },
  },

  plugins: [],
};
