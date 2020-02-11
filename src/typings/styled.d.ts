import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
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
    }
  }
}