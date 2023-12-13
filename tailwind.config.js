/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  theme: {
    extend: {
      boxShadow: {
        "t-sm": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
        "t-md":
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        "t-lg":
          "0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "t-xl":
          "0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        "t-2xl": "0 -25px 50px -12px rgba(0, 0, 0, 0.25)",
        "t-3xl": "0 -35px 60px -15px rgba(0, 0, 0, 0.3)",
      },

      screens: {
        se: "375px",
        y7: "450px",
        y9: "540px",
        x: "1515px",
        xs: "1340px",
      },
      colors: {
        //MOVIE APP
        screenDark: "#0f0f0f",
        sideBarDark: "#161616",
        prameryColorDark: "#161616",
        secondColorDark: "#1d1d1d",
        btn: "#1e74f1",
        textDark: "#ffffff",
        textPDark: "#555561",
        screenLight: "#f9f9f9",
        sideBarLight: "#f1f1f5",
        prameryColorLight: "#ffffff",
        textLight: "#121212",
        textPlight: "#a7a7ad",
        border: "#2f2f3c",
      },
    },
  },
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
    // "./node_modules/tailwind-datepicker-react/dist/**/*.js"
  ],
  // theme: {
  //   extend: {},
  // },
  plugins: [require("tailwind-scrollbar")],
});
// --primaryColor: #6d28d9;
// --secondaryColor: #ede9fe;
// --mainWhite: #fff;border:"#2f2f3c"
// --mainBlack: #222;
// --mainGrey: #7c7c7c;
// --mainSpacing: 0.1rem;
// --mainTransition: all 0.3s linear;
// --mainRed: #db2777;
// --bodyColor: #f6f6f6;
