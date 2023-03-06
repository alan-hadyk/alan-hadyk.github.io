import { IIconProps } from "components/atoms/@types/Icon";
import { ITypographyProps } from "components/atoms/@types/Typography";
import { ILinkProps } from "components/molecules/@types/Link";
import { IThemeClasses } from "types/theme";

export interface IIconWithLabelProps {
  href?: ILinkProps["href"];
  iconName: IIconProps["iconName"];
  isExternal?: ILinkProps["isExternal"];
  isStaticImg?: IIconProps["isStaticImg"];
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
