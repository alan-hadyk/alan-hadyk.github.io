import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      breakpoint640: string;
      breakpoint641: string;
      breakpoint1280: string;
      breakpoint1281: string;
      breakpoint1680: string;
      breakpoint1681: string;
      breakpoint1920: string;
    };

    colorPalette: {
      black: string;
      blue100: string;
      blue200: string;
      blue300: string;
      blue400: string;
      blue500: string;
      blue600: string;
      blue700: string;
      white: string;
    };

    easing: {
      easeInOut: string;
      linear: string;
    };

    fontFamilies: {
      AnonymousPro: string;
      Exan: string;
    };

    fontSizes: {
      font8: string;
      font12: string;
      font16: string;
      font20: string;
      font24: string;
      font28: string;
      font32: string;
      font36: string;
      font48: string;
      font72: string;
    };

    fontWeights: {
      bold: string;
      normal: string;
    };

    keyframes: {
      blink: Keyframes;
      drop: Keyframes;
      glow: Keyframes;
      ripple: Keyframes;
    };

    spacing: {
      negativeSpacing16: string;
      spacing0: string;
      spacing2: string;
      spacing4: string;
      spacing8: string;
      spacing10: string;
      spacing12: string;
      spacing14: string;
      spacing16: string;
      spacing24: string;
      spacing28: string;
      spacing30: string;
      spacing32: string;
      spacing36: string;
      spacing40: string;
      spacing48: string;
      spacing52: string;
      spacing56: string;
      spacing64: string;
      spacing68: string;
      spacing72: string;
      spacing80: string;
      spacing88: string;
      spacing96: string;
      spacing248: string;
      spacing356: string;
      spacing1056: string;
    };

    transitionTimes: {
      default: string;
      fast: string;
      slow: string;
      verySlow: string;
    };

    zIndex: {
      layer1: string;
      layer2: string;
      layer3: string;
      layer4: string;
      layer5: string;
      layer6: string;
      layer7: string;
      layer8: string;
      layer9: string;
      layer10: string;
      layer11: string;
    };
  }
}
