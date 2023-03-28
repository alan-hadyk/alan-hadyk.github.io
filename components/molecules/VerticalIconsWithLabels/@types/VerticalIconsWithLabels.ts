import {
  IconWithLabelSize,
  IconWithLabelVariant,
  IIconWithLabelProps
} from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "types/theme";

export interface IVerticalIconsWithLabelsProps {
  iconsWithLabels: Pick<
    IIconWithLabelProps,
    "href" | "iconName" | "isExternal" | "label"
  >[];
  size?: IconWithLabelSize;
  themeClasses?: {
    label?: Pick<IThemeClasses, "color">;
  };
  variant?: IconWithLabelVariant;
}
