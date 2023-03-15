import { ILinkProps } from "components/molecules/Link/@types/Link";
import { IThemeClasses, TTextColor, TTextFontSize } from "types/theme";
import { IIconStaticProps } from "components/atoms/IconStatic/@types/IconStatic";

export interface IIconWithLabelProps {
  href?: ILinkProps["href"];
  iconName: IIconStaticProps["iconName"];
  isExternal?: ILinkProps["isExternal"];
  label: string;
  labelColor?: TTextColor;
  size?: "small" | "medium" | "large" | null | undefined;
}

export interface IMapSizeToIconHeight {
  large: IThemeClasses["height"];
  medium: IThemeClasses["height"];
  small: IThemeClasses["height"];
}

export interface IMapSizeToTextFontSize {
  large: TTextFontSize;
  medium: TTextFontSize;
  small: TTextFontSize;
}
