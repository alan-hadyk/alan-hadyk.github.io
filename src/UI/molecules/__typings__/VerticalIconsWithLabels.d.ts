import {
  ColorPalette
} from "<styles>/variables/__typings__/variables.d.ts";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

export interface VerticalIconsWithLabelsProps {
  iconsWithLabels: IconWithLabelProps[];
  labelColor?: ColorPalette;
  size?: "small" | "medium" | "large";
}
