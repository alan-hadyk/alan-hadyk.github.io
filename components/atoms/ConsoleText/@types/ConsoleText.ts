export enum ConsoleTextVariant {
  Mobile,
  Pdf,
  TvDesktopAndTablet
}

export interface IConsoleTextProps {
  variant: ConsoleTextVariant;
}
