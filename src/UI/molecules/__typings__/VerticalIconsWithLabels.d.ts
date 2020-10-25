import { ColorPalette } from "styles/variables/__typings__/variables";

import { IconWithLabelProps } from "UI/molecules/__typings__/IconWithLabel";

export interface VerticalIconsWithLabelsProps {
  iconsWithLabels: IconWithLabelProps[];
  labelColor?: ColorPalette;
  size?: "small" | "medium" | "large";
}
