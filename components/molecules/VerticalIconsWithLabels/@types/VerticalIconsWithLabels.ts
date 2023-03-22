import {
  IconWithLabelSize,
  IIconWithLabelProps
} from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { IThemeClasses } from "types/theme";

export interface IVerticalIconsWithLabelsProps {
  iconsWithLabels: Pick<IIconWithLabelProps, "iconName" | "label">[];
  size?: IconWithLabelSize;
  themeClasses?: {
    label?: Pick<IThemeClasses, "color">;
  };
}
