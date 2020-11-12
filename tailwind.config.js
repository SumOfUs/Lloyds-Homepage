const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        gray: {
          ...colors.gray,
          800: "#6c7e8e",
          900: "#303030",
          1000: "#252525",
          1100: "#f8f8f8",
        },
        blue: {
          ...colors.blue,
          900: "#0f62fe",
          1000: "#015dff",
          1200: "#6fe6ff",
        },
        yellow: {
          ...colors.yellow,
          lemon: "#fff929ff",
        },
      },
      maxHeight: {
        800: 800,
      },
      maxWidth: {
        400: 400,
        600: 600,
        1440: 1440,
      },
      height: {
        800: 800,
      },
      inset: {
        40: "40%",
        60: "60%",
        "-9": "-3rem",
        1: "1rem",
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active", "disabled"],
    opacity: ["hover"],
  },
  plugins: [],
};
