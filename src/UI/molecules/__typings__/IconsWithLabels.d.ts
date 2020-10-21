import {
  ColorPalette,
  Spacing
} from "<styles>/variables/__typings__/variables.d.ts";

import { IconWithLabelProps } from "<molecules>/__typings__/IconWithLabel.d.ts";

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
