import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";
import { TTextColor } from "types/theme";

export interface IVerticalIconsWithLabelsProps {
  iconsWithLabels: Pick<IIconWithLabelProps, "iconName" | "label">[];
  labelColor?: TTextColor;
  size?: "small" | "medium" | "large";
}
