import { ColorPalette, Spacing } from "styles/variables/__typings__/variables";

import { IconWithLabelProps } from "UI/molecules/__typings__/IconWithLabel";

export interface IconsWithLabelsProps {
  iconsWithLabels: IconWithLabelProps[];
  labelColor?: ColorPalette;
  position?: "vertical" | "horizontal";
  size?: IconWithLabelProps["size"];
}

export interface MapSizeToFlexContainerGap {
  large: Spacing;
  medium: Spacing;
  small: Spacing;
}
