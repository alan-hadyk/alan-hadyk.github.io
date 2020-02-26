import colorPalette from "<styles>/variables/colorPalette";
import fontSizes from "<styles>/variables/fontSizes";
import fontFamilies from "<styles>/variables/fontFamilies";
import spacing from "<styles>/variables/spacing";

type ColorPaletteKeys = keyof typeof colorPalette;
type FontSizesKeys = keyof typeof fontSizes;
type FontFamilyKeys = keyof typeof fontFamilies;
type SpacingKeys = keyof typeof spacing;

export interface TextProps {
  children: string;
  color?: typeof colorPalette[ColorPaletteKeys];
  fontFamily?: typeof fontFamilies[FontFamilyKeys];
  fontSize?: typeof fontSizes[FontSizesKeys];
  lineHeight?: typeof spacing[SpacingKeys] | "1";
  shouldShuffleOnHover?: boolean;
  textAlign?: "left" | "center" | "right";
  textTransform?: "none" | "lowercase" | "uppercase" | "capitalize";
}

