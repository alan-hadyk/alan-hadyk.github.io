import { ILinkProps } from "components/molecules/Link/@types/Link";
import { IIconStaticProps } from "components/atoms/IconStatic/@types/IconStatic";
import { IThemeClasses } from "types/theme";

export enum IconWithLabelSize {
  Large,
  Medium,
  Small
}

export interface IIconWithLabelProps {
  href?: ILinkProps["href"];
  iconName: IIconStaticProps["iconName"];
  isExternal?: ILinkProps["isExternal"];
  label: string;
  size?: IconWithLabelSize;
  themeClasses?: {
    iconWithLabelContent?: {
      label?: Pick<IThemeClasses, "groupHover" | "color">;
    };
  };
}

export type TMapSizeToIconHeight = Record<
  IconWithLabelSize,
  IThemeClasses["height"]
>;

export type TMapSizeToTextFontSize = Record<
  IconWithLabelSize,
  IThemeClasses["fontSize"]
>;
