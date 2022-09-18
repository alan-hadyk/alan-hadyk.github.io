import { IIconProps } from "components/atoms/@types/Icon";
import { ITextProps } from "components/atoms/@types/Text";
import { ILinkProps } from "components/molecules/@types/Link";

export interface IIconWithLabelProps {
  href?: ILinkProps["href"];
  iconName: IIconProps["iconName"];
  isExternal?: ILinkProps["isExternal"];
  label: string;
  labelColor?: ITextProps["color"];
  size?: "small" | "medium" | "large" | null | undefined;
}

export interface IMapSizeToIconHeight {
  large: IIconProps["height"];
  medium: IIconProps["height"];
  small: IIconProps["height"];
}

export interface IMapSizeToTextFontSize {
  large: ITextProps["fontSize"];
  medium: ITextProps["fontSize"];
  small: ITextProps["fontSize"];
}
