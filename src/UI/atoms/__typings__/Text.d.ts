import {
  ColorPalette,
  FontFamilies,
  FontSizes,
  Spacing
} from "<styles>/variables/__typings__/variables";

export interface TextProps {
  children: string;
  color?: ColorPalette;
  fontFamily?: FontFamilies;
  fontSize?: FontSizes;
  lineHeight?: Spacing | "1";
  shouldShuffleOnHover?: boolean;
  textAlign?: "left" | "center" | "right";
  textTransform?: "none" | "lowercase" | "uppercase" | "capitalize";
}

