import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    breakpoints: {
      breakpoint1920: string;
    },

    colorPalette: {
      blue100: string;
      blue200: string;
      blue300: string;
      blue400: string;
      blue500: string;
      blue600: string;
      blue700: string;
      black: string;
      white: string;
    },

    fontFamily: {
      AnonymousPro: string;
      Exan: string;
    },

    spacing: {
      spacing4: string;
      spacing8: string;
      spacing48: string;
      spacing96: string;
    },

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
    }
  }
}