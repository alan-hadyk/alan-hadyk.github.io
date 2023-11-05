import { IIconStaticProps } from "@app/components/atoms/IconStatic/@types/IconStatic";
import { IThemeClasses } from "@app/types/theme";

export enum IconWithLabelContentVariant {
  LightBlue,
  DarkBlue,
  White,
}

export enum IconWithLabelContentSize {
  ExtraSmall,
  Small,
  Medium,
  Large,
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
