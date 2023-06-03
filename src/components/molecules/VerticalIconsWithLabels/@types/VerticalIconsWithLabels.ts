import { IIconWithLabelProps } from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "@app/types/theme";

export enum VerticalIconsWithLabelsSize {
  ExtraSmall,
  Large,
  Medium,
  Small,
}

export enum VerticalIconsWithLabelsVariant {
  Blue,
  Dark,
  White,
}

export interface IVerticalIconsWithLabelsProps {
  iconsWithLabels: Pick<
    IIconWithLabelProps,
    "href" | "iconName" | "isExternal" | "label"
  >[];
  size?: VerticalIconsWithLabelsSize;
  themeClasses?: {
    label?: Pick<IThemeClasses, "color">;
    wrapper?: IThemeClasses;
  };
  variant?: VerticalIconsWithLabelsVariant;
}
