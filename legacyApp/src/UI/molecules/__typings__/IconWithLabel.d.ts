import {
  ColorPalette,
  FontSizes,
  Spacing
} from "styles/variables/__typings__/variables";

import { IconProps } from "UI/atoms/__typings__/Icon";

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
