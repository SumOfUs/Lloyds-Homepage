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
      },
      maxHeight: {
        0: 0,
        275: 275,
        350: 350,
        425: 425,
        400: 400,
        500: 500,
        625: 625,
        800: 800,
        1000: 1000,
      },
    },
  },
  variants: {},
  plugins: [],
};
