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
          1000: "#252525",
        },
        blue: {
          ...colors.blue,
          900: "#0f62fe",
        },
      },
      maxHeight: {
        800: 800,
      },
      height: {
        800: 800,
      },
      inset: {
        40: "40%",
        60: "60%",
      },
    },
  },
  variants: {},
  plugins: [],
};
