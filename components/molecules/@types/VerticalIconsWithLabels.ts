import {
  IconWithLabelSize,
  IIconWithLabelProps
} from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { TTextColor } from "types/theme";

export interface IVerticalIconsWithLabelsProps {
  iconsWithLabels: Pick<IIconWithLabelProps, "iconName" | "label">[];
  labelColor?: TTextColor;
  size?: IconWithLabelSize;
}
