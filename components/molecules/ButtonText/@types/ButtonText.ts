import { IThemeClasses } from "types/theme";

export interface IButtonTextProps {
  children: string;
  hasMargin?: boolean;
  size: "small" | "medium" | "large";
  themeClasses?: Pick<IThemeClasses, "fontFamily" | "textTransform">;
}

export interface ITextProps {
  fontSize: IThemeClasses["fontSize"];
}

export interface IMapSizeToButtonTextProps {
  large: ITextProps;
  medium: ITextProps;
  small: ITextProps;
}
