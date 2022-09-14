import { IIconProps } from "components/atoms/@types/Icon";
import { ITextProps } from "components/atoms/@types/Text";

export interface IIconWithLabelProps {
  iconName: IIconProps["iconName"];
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
