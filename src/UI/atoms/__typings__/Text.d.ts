import {
  ColorPalette,
  FontFamilies,
  FontSizes,
  Spacing,
  TransitionTimes
} from "<styles>/variables/__typings__/variables.d.ts";

export interface TextProps {
  children: string;
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
  shuffleDelay?: number;
  shuffleInterval?: number;
  textAlign?: "left" | "center" | "right";
  textTransform?: "none" | "lowercase" | "uppercase" | "capitalize";
}