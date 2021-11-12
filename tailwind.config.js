const colors = require("tailwindcss/colors");
module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1100px",
      },
    },
    extend: {
      colors: {
        primary: "#059669",
        "primary-100": "#D1FAE5",
        "primary-700": "#047857",
        "primary-dark": "#064E3B",
        secondary: "",
        ascent: "#DC2626",
        "ascent-2": "#B91C1C",
        "ascent-3": "#FCD34D",
      },
      backgroundImage: {
        cook1: `url('/images/cook1.jpg')`,
        cook2: `url('/images/cook2.jpg')`,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
