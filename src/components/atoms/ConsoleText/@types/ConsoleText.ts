export enum ConsoleTextVariant {
  Mobile,
  TvDesktopAndTablet,
}

export interface IConsoleTextProps {
  children: string;
  variant: ConsoleTextVariant;
}
