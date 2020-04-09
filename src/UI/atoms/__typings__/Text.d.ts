import {
  ColorPalette,
  FontFamilies,
  FontSizes,
  FontWeights,
  Spacing
} from "<styles>/variables/__typings__/variables.d.ts";

export interface TextProps {
  children: string;
  color?: ColorPalette;
  ellipsis?: boolean;
  fontFamily?: FontFamilies;
  fontSize?: FontSizes;
  fontWeight?: FontWeights;
  lineHeight?: Spacing | "1";
  maxHeight?: Spacing;
  overflow?: "visible" | "hidden";
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  paddingRight?: Spacing;
  paddingTop?: Spacing;
  shouldShuffle?: boolean;
  shouldShuffleOnHover?: boolean;
  shuffleDelay?: number;
  shuffleInterval?: number;
  textAlign?: "left" | "center" | "right";
  textTransform?: "none" | "lowercase" | "uppercase" | "capitalize";
}
