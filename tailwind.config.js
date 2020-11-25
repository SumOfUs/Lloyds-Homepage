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
          200: "#f9f9f9",
          800: "#6c7e8e",
          900: "#303030",
          1000: "#252525",
          1100: "#f8f8f8",
          1200: "#f2f2f2",
          1300: "#101113",
          1400: "#131519",
          1500: "#161616",
          1600: "#05060c",
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
        0: 0,
        200: 200,
        400: 400,
        800: 800,
      },
      minHeight: {
        135: 135,
      },
      maxWidth: {
        400: 400,
        600: 600,
        1440: 1440,
      },
      height: {
        250: 250,
        280: 280,
        300: 300,
        350: 350,
        400: 400,
        500: 500,
        800: 800,
      },
      width: {
        400: 400,
      },
      margin: {
        100: "100px",
      },
      inset: {
        30: "30%",
        40: "40%",
        60: "60%",
        "-9": "-3rem",
        1: "1rem",
        3: "3rem",
        5: "5rem",
      },
      screens: {
        biglg: "1100px",
        "2xl": "1440px",
        "3xl": "1536px",
      },
      spacing: {
        15: "3.75rem",
      },
    },
  },
  variants: {
    backgroundColor: ["responsive", "hover", "focus", "active", "disabled"],
    opacity: ["hover"],
  },
  plugins: [],
};
