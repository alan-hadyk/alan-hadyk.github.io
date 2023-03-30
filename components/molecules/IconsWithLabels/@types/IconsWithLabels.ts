import {
  IconWithLabelSize,
  IconWithLabelVariant,
  IIconWithLabelProps
} from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "types/theme";

export enum IconsWithLabelsPosition {
  Horizontal,
  Vertical
}

export interface IIconsWithLabelsProps {
  iconsWithLabels: Pick<
    IIconWithLabelProps,
    "href" | "iconName" | "isExternal" | "label"
  >[];
  position?: IconsWithLabelsPosition;
  size?: IIconWithLabelProps["size"];
  themeClasses?: {
    iconWithLabel?: IIconWithLabelProps["themeClasses"];
    wrapper?: IThemeClasses;
  };
  variant?: IconWithLabelVariant;
}

export type TMapSizeToFlexContainerGap = Record<
  IconsWithLabelsPosition,
  Record<IconWithLabelSize, IThemeClasses["gap"]>
>;
