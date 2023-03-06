import { ITypographyProps } from "components/atoms/@types/Typography";
import { ILinkProps } from "components/molecules/@types/Link";
import { IThemeClasses } from "types/theme";
import { IIconStaticProps } from "components/atoms/IconStatic/@types/IconStatic";

export interface IIconWithLabelProps {
  href?: ILinkProps["href"];
  iconName: IIconStaticProps["iconName"];
  isExternal?: ILinkProps["isExternal"];
  label: string;
  labelColor?: ITypographyProps["color"];
  size?: "small" | "medium" | "large" | null | undefined;
}

export interface IMapSizeToIconHeight {
  large: IThemeClasses["height"];
  medium: IThemeClasses["height"];
  small: IThemeClasses["height"];
}

export interface IMapSizeToTextFontSize {
  large: ITypographyProps["fontSize"];
  medium: ITypographyProps["fontSize"];
  small: ITypographyProps["fontSize"];
}
