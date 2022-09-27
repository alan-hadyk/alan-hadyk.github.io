import { TFontFamilyValues, TFontSizeValues } from "types/theme";

export interface IButtonTextProps {
  buttonText: string;
  fontFamily?: `font-${TFontFamilyValues}`;
  hasMargin?: boolean;
  size: "small" | "medium" | "large";
  textTransform?: "normal-case" | "lowercase" | "uppercase" | "capitalize";
}

export interface ITextProps {
  fontSize: `text-${TFontSizeValues}`;
}

export interface IMapSizeToButtonTextProps {
  large: ITextProps;
  medium: ITextProps;
  small: ITextProps;
}
