import { TFontFamily, TFontSize } from "types/props";

export interface IButtonTextProps {
  buttonText: string;
  fontFamily?: `font-${TFontFamily}`;
  hasMargin?: boolean;
  size: "small" | "medium" | "large";
  textTransform?: "normal-case" | "lowercase" | "uppercase" | "capitalize";
}

export interface ITextProps {
  fontSize: `text-${TFontSize}`;
}

export interface IMapSizeToButtonTextProps {
  large: ITextProps;
  medium: ITextProps;
  small: ITextProps;
}
