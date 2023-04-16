import { IIconStaticProps } from "components/atoms/IconStatic/@types/IconStatic";
import { IThemeClasses } from "types/theme";

export enum IconWithLabelContentVariant {
  Blue,
  Dark,
  White
}

export enum IconWithLabelContentSize {
  ExtraSmall,
  Large,
  Medium,
  Small
}

export interface IIconWithLabelContentProps {
  iconName: IIconStaticProps["iconName"];
  isHoverable?: boolean;
  label: string;
  size?: IconWithLabelContentSize;
  themeClasses?: {
    label?: Pick<IThemeClasses, "groupHover" | "color">;
    wrapper?: IThemeClasses;
  };
  variant?: IconWithLabelContentVariant;
}

export type TMapSizeToIconHeight = Record<
  IconWithLabelContentSize,
  IThemeClasses["height"]
>;

export type TMapSizeToTextFontSize = Record<
  IconWithLabelContentSize,
  IThemeClasses["fontSize"]
>;
