import {
  ColorPalette,
  FontFamilies,
  FontSizes,
  Spacing
} from "<styles>/variables/__typings__/variables";

export interface TextProps {
  children: string | Element;
  color?: ColorPalette;
  fontFamily?: FontFamilies;
  fontSize?: FontSizes;
  lineHeight?: Spacing | "1";
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
  paddingTop?: Spacing;
  shouldShuffle?: boolean;
  shouldShuffleOnHover?: boolean;
  textAlign?: "left" | "center" | "right";
  textTransform?: "none" | "lowercase" | "uppercase" | "capitalize";
}

