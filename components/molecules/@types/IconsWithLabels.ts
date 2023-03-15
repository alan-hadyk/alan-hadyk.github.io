import { IIconWithLabelProps } from "components/molecules/@types/IconWithLabel";
import { TPseudoClasses, TTextColor } from "types/theme";

export interface IIconsWithLabelsProps {
  iconsWithLabels: Pick<IIconWithLabelProps, "iconName" | "label">[];
  labelColor?: TTextColor;
  position?: "vertical" | "horizontal";
  size?: IIconWithLabelProps["size"];
}
export interface IMapSizeToFlexContainerGap {
  horizontal: {
    large: TPseudoClasses;
    medium: TPseudoClasses;
    small: TPseudoClasses;
  };
  vertical: {
    large: TPseudoClasses;
    medium: TPseudoClasses;
    small: TPseudoClasses;
  };
}
