import {
  ColorPalette,
  Spacing
} from "<styles>/variables/__typings__/variables.d.ts";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

export interface IconsWithLabelsProps {
  color?: ColorPalette;
  iconsWithLabels: IconWithLabelProps[];
  position: "vertical" | "horizontal";
  size?: "small" | "medium" | "large";
}

export interface MapSizeToFlexContainerGap {
  large: Spacing;
  medium: Spacing;
  small: Spacing;
}