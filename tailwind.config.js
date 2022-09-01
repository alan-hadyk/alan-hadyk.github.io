const spacing = {
  0: "0",
  2: "0.125rem",
  4: "0.25rem",
  8: "0.5rem",
  10: "0.625rem",
  12: "0.75rem",
  14: "0.875rem",
  16: "1rem",
  24: "1.5rem",
  28: "1.75rem",
  30: "1.875rem",
  32: "2rem",
  36: "2.25rem",
  40: "2.5rem",
  48: "3rem",
  52: "3.25rem",
  56: "3.5rem",
  64: "4rem",
  68: "4.25rem",
  72: "4.5rem",
  80: "5rem",
  88: "5.5rem",
  96: "6rem",
  248: "15.5rem",
  356: "22.25rem",
  1056: "66rem",
  auto: "auto",
  full: "100%",
  inherit: "inherit",
  negative16: "-1rem",
  "negative100%": "-100%"
};

module.exports = {
  content: [
    "./components/**/*.tsx",
    "./containers/**/*.tsx",
    "./layouts/**/*.tsx",
    "./pages/**/*.tsx"
  ],
  theme: {
    borderRadius: {
      full: "50%"
    },
    borderWidth: {
      0: "0",
      1: "1px",
      2: "2px",
      thin: "thin"
    },
    boxShadow: {
      activeButton: "inset 0px 0px 1rem 0px rgba(103,210,223,0.5)",
      console: "0px 0px .5rem 0px #bcd8db",
      line: "0px 0px .25rem 0px #bcd8db"
    },
    colors: {
      // Black
      black: "#000",

      // Blue
      blue100: "#bcd8db",
      blue200: "#67d2df",
      blue300: "#78b0b5",
      blue400: "#526065",
      blue500: "#2b595e",
      blue600: "#22272a",
      blue700: "#1e2224",

      // White
      white: "#FFFFFF"
    },
    dropShadow: {
      lg: "0px 0px .25rem rgba(255,255,255,0.5)",
      md: "0px 0px .125rem rgba(255,255,255,0.9)"
    },
    extend: {},
    fontFamily: {
      anonymousPro: ["'Anonymous Pro'", "monospace", "sans-serif"],
      exan: ["'ExanModifiedRegular'", "monospace", "sans-serif"]
    },
    fontSize: {
      8: "0.5rem",
      12: "0.75rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      28: "1.75rem",
      32: "2rem",
      36: "2.25rem",
      48: "3rem",
      72: "4.5rem"
    },
    fontWeight: {
      bold: 700,
      normal: 400
    },
    keyframes: {
      blink: {
        "0%": { opacity: 1 },
        "50%": { opacity: 0 },
        "100%": { opacity: 1 }
      },
      drop: {
        "10%": { opacity: 0.5 },
        "20%": { opacity: 1, transform: "translateY(200%) rotateX(-360deg)" },
        "80%": { opacity: 1, transform: "translateY(200%) rotateX(-360deg)" },
        "90%": { opacity: 0.5 },
        "100%": { opacity: 0, transform: "translateY(400%)" }
      },
      glow: {
        "0%": { filter: "drop-shadow(0px 0px 0px #bcd8db)", opacity: 0.99 },
        "16%": { filter: "drop-shadow(0px 0px 0.25rem #bcd8db)" },
        "32%": { filter: "drop-shadow(0px 0px 0px #bcd8db)" },
        "100%": { filter: "drop-shadow(0px 0px 0px #bcd8db)", opacity: 1 }
      },
      ripple: {
        from: { opacity: 1, transform: "scale(0)" },
        to: { opacity: 0, transform: "scale(0)" }
      },
      rotation: {
        "0%": { transform: "rotate(0deg)" },
        "100%": { transform: "rotate(360deg)" }
      }
    },
    lineHeight: spacing,
    margin: spacing,
    maxWidth: spacing,
    screens: {
      screenLg: "1680px",
      screenLgXl: {
        raw: "(min-width: 1681px) and (max-width: 1920px)"
      },
      screenMaxSm: {
        raw: "(max-width: 640px)"
      },
      screenMd: "1280px",
      screenMdLg: {
        raw: "(min-width: 1281px) and (max-width: 1680px)"
      },
      screenSm: "640px",
      screenSmLg: {
        raw: "(min-width: 641px) and (max-width: 1680px)"
      },
      screenSmMd: {
        raw: "(min-width: 641px) and (max-width: 1280px)"
      },
      screenXl: "1920px"
    },
    spacing,
    transitionDuration: {
      default: "300ms",
      fast: "150ms",
      slow: "900ms",
      verySlow: "3600ms"
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
