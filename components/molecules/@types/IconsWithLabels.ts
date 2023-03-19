import {
  IconWithLabelSize,
  IIconWithLabelProps
} from "components/molecules/IconWithLabel/@types/IconWithLabel";
import { TPseudoClasses, TTextColor } from "types/theme";

export interface IIconsWithLabelsProps {
  iconsWithLabels: Pick<IIconWithLabelProps, "iconName" | "label">[];
  labelColor?: TTextColor;
  position?: "vertical" | "horizontal";
  size?: IIconWithLabelProps["size"];
}
export interface IMapSizeToFlexContainerGap {
  horizontal: Record<IconWithLabelSize, TPseudoClasses>;
  vertical: Record<IconWithLabelSize, TPseudoClasses>;
}
