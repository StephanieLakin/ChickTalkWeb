/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        // primary: "#131711",
        primary: "#131711",
        secondary: "#688d15",
        tertiary: "#36371f" ,
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimBlue: "rgba(9, 151, 124, 0.1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
    // screens: {
    //   xs: "480px",
    //   ss: "620px",
    //   sm: "768px",
    //   md: "1060px",
    //   lg: "1200px",
    //   xl: "1700px",
    // },
    screens: {
      xs: "480px",
      ss: "640px",
      sm: "768px",
      md: "1024px",
      lg: "1440px",
      xl: "1536px",
     xxl: "2560px"
    },
  },
  plugins: [],
};
