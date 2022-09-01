/* eslint-disable @typescript-eslint/no-var-requires */
const plugin = require("tailwindcss/plugin");

const spacing = {
  0: "0",
  1: ".0625rem",
  2: "0.125rem",
  4: "0.25rem",
  6: "0.375rem",
  8: "0.5rem",
  12: "0.75rem",
  16: "1rem",
  18: "1.125rem",
  20: "1.25rem",
  22: "1.375rem",
  24: "1.5rem",
  26: "1.675rem",
  28: "1.75rem",
  32: "2rem",
  36: "2.25rem",
  40: "2.5rem",
  44: "2.75rem",
  48: "3rem",
  56: "3.5rem",
  64: "4rem",
  68: "4.25rem",
  72: "4.5rem",
  84: "5.25rem",
  96: "6rem",
  128: "8rem",
  248: "15.5rem",
  320: "20rem",
  400: "25rem",
  500: "31.25rem",
  540: "33.75rem",
  544: "34rem",
  640: "40rem",
  960: "60rem",
  1280: "80rem",
  1440: "90rem",
  auto: "auto",
  full: "100%",
  inherit: "inherit",
  negative1: "-.0625rem",
  negative2: "-.125rem",
  negative12: "-0.75rem",
  "negative100%": "-100%"
};

module.exports = {
  content: [
    "./components/**/*.tsx",
    "./containers/**/*.tsx",
    "./layouts/**/*.tsx",
    "./pages/**/*.tsx"
  ],
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("childrenButtonSvg", "& button svg");
      addVariant("childrenButton", "& button");
      addVariant("childrenPath", "& path");
      addVariant("childrenSvg", "& svg");
      addVariant("directChildrenFirstChild", "& > *:first-child");
      addVariant("lastItemDirectChildren", "&:last-child > *");
    })
  ],
  theme: {
    borderRadius: {
      full: "50%"
    },
    borderWidth: {
      0: "0",
      2: "2px",
      thin: "thin"
    },
    boxShadow: {
      activeButton: "inset 0px 0px 1rem 0px #003C47",
      activeButtonDanger: "inset 0px 0px 1rem 0px rgba(68, 14, 22, 0.75)",
      activeButtonPrimary: "inset 0px 0px 1rem 0px rgba(0, 202, 235, 0.75)",
      activeButtonSecondary: "inset 0px 0px 1rem 0px rgba(0, 202, 235, 0.75)",
      basic: "inset 0px 0px 0.75rem #00CAEB",
      buttonDanger: "inset 0px 0px 1rem 0px #440e16",
      buttonPrimary: "inset 0px 0px 1rem 0px #00CAEB",
      buttonSecondary: "inset 0px 0px 1rem 0px #00CAEB",
      loader: "inset 0 0 0.25rem #00CAEB",
      sidebar: "0px 0px 1.5rem #006869"
    },
    colors: {
      // Black
      black400: "#1E2224",
      black500: "#000000",

      //Blue
      blue400: "#00CAEB",

      // Gray
      gray400: "#9F9F9F",

      // Green
      green300: "#A4EB0C",
      green400: "#006869",
      green500: "#003C47",

      // Red
      red400: "#CB2A41",
      red500: "#440e16",

      transparent: "transparent",

      // White
      white: "#FFFFFF",

      // Yellow
      yellow: "#EBA50C"
    },
    dropShadow: {
      sm: "0px 0px 0.5rem rgba(255, 255, 255, 0.75)"
    },
    extend: {},
    fontFamily: {
      mono: ["'Fira Code'", "monospace", "sans-serif"]
    },
    fontSize: {
      10: "0.625rem",
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      20: "1.25rem",
      28: "1.75rem",
      32: "2rem",
      36: "2.25rem"
    },
    fontWeight: {
      light: 300,
      medium: 500,
      regular: 400
    },
    keyframes: {
      rotate: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" }
      },
      slideIn: {
        "0%, 50%": { opacity: 0, transform: "translateX(200%)" },
        "100%": { opacity: 1, transform: "translateX(0)" }
      },
      slideOut: {
        "0%": { opacity: 1, transform: "translateX(0)" },
        "50%, 100%": { opacity: 0, transform: "translateX(200%)" }
      }
    },
    lineHeight: spacing,
    margin: spacing,
    maxWidth: spacing,
    screens: {
      screenLg: "1280px",
      screenLgXl: {
        raw: "(min-width: 1281px) and (max-width: 1680px)"
      },
      screenMaxSm: {
        raw: "(max-width: 640px)"
      },
      screenMd: "800px",
      screenMdLg: {
        raw: "(min-width: 801px) and (max-width: 1280px)"
      },
      screenMinXSm: {
        raw: "(min-width: 341px)"
      },
      screenMinXSmSm: {
        raw: "(min-width: 341px) and (max-width: 640px)"
      },
      screenSm: "640px",
      screenSmLg: {
        raw: "(min-width: 641px) and (max-width: 1280px)"
      },
      screenSmMd: {
        raw: "(min-width: 641px) and (max-width: 800px)"
      },
      screenXSm: {
        raw: "(max-width: 340px)"
      },
      screenXl: "1680px"
    },
    spacing,
    transitionDuration: {
      default: "300ms",
      fast: "150ms",
      slow: "600ms",
      veryFast: "75ms"
    },
    transitionTimingFunction: {
      "in-out": "ease-in-out",
      linear: "linear"
    },
    zIndex: {
      0: "0",
      100: "100",
      200: "200",
      300: "300",
      400: "400",
      500: "500",
      600: "600",
      700: "700",
      800: "800",
      900: "900",
      1000: "1000",
      1100: "1100"
    }
  }
};
