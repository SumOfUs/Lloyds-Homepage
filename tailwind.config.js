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
          900: "#303030",
          1000: "#252525",
        },
        blue: {
          ...colors.blue,
          900: "#0f62fe",
          1000: "#015dff",
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
      },
      screens: {
        "2xl": "1440px",
      },
    },
  },
  variants: {},
  plugins: [],
};
