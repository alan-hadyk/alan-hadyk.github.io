import {
  ColorPalette,
  FontFamilies,
  FontSizes,
  FontWeights,
  Spacing
} from "styles/variables/__typings__/variables";

export interface TextProps {
  children: string | number | JSX.Element;
  color?: ColorPalette;
  dataCy?: string;
  dataTestId?: string;
  ellipsis?: boolean;
  fontFamily?: FontFamilies;
  fontSize?: FontSizes;
  fontWeight?: FontWeights;
  isHoverable?: boolean;
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
