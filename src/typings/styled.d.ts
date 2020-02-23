import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
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
    };

    fontFamilies: {
      AnonymousPro: string;
      Exan: string;
    };

    fontSizes: {
      font20: string;
      font24: string;
      font28: string;
    };

    keyframes: {
      ripple: Keyframes;
    };

    spacing: {
      spacing0: string;
      spacing1: string;
      spacing4: string;
      spacing8: string;
      spacing12: string;
      spacing16: string;
      spacing24: string;
      spacing40: string;
      spacing48: string;
      spacing56: string;
      spacing96: string;
    };

    transitionTimes: {
      default: string;
      fast: string;
      slow: string;
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
    };
  }
}