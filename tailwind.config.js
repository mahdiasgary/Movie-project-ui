/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  theme: {
    extend: {
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
    "./node_modules/tailwind-datepicker-react/dist/**/*.js"
  ],
  // theme: {
  //   extend: {},
  // },
  plugins: [require("tailwind-scrollbar")],
};
// --primaryColor: #6d28d9;
// --secondaryColor: #ede9fe;
// --mainWhite: #fff;border:"#2f2f3c"
// --mainBlack: #222;
// --mainGrey: #7c7c7c;
// --mainSpacing: 0.1rem;
// --mainTransition: all 0.3s linear;
// --mainRed: #db2777;
// --bodyColor: #f6f6f6;
