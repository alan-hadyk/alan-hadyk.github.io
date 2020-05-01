import {
  ColorPalette,
  FontSizes,
  Spacing
} from "<styles>/variables/__typings__/variables.d.ts";

import {
  IconProps
} from "<atoms>/__typings__/Icon.d.ts";

export interface IconWithLabelProps {
  iconName: IconProps["iconName"];
  label: string;
  labelColor?: ColorPalette;
  size?: "small" | "medium" | "large";
}

export interface MapSizeToIconHeight {
  large: Spacing;
  medium: Spacing;
  small: Spacing;
}

export interface MapSizeToTextFontSize {
  large: FontSizes;
  medium: FontSizes;
  small: FontSizes;
}
