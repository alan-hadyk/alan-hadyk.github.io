import {
  IconWithLabelSize,
  IconWithLabelVariant,
  IIconWithLabelProps,
} from "@app/components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses, TGap } from "@app/types/theme";

export interface IIconsWithLabelsProps {
  iconsWithLabels: Pick<
    IIconWithLabelProps,
    "href" | "iconName" | "isExternal" | "label"
  >[];
  size?: IIconWithLabelProps["size"];
  themeClasses?: {
    iconWithLabel?: IIconWithLabelProps["themeClasses"];
    wrapper?: IThemeClasses;
  };
  variant?: IconWithLabelVariant;
}

export type TMapSizeToFlexContainerGap = Record<IconWithLabelSize, TGap>;
