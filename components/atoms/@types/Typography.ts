import {
  TColorValues,
  TFontFamilyValues,
  TFontSizeValues,
  TFontWeightValues,
  TSpacingValues
} from "types/theme";
import { TChildren } from "types/props";

export interface ITypographyProps {
  children: TChildren;
  className?: string;
  color?: `text-${TColorValues}`;
  ellipsis?: boolean;
  fontFamily?: `font-${TFontFamilyValues}`;
  fontSize?: `text-${TFontSizeValues}`;
  fontWeight?: `font-${TFontWeightValues}`;
  isHoverable?: boolean;
  lineHeight?: `leading-${TSpacingValues}` | "leading-1";
  maxHeight?: `max-h-${TSpacingValues}`;
  overflow?: "overflow-visible" | "overflow-hidden";
  paddingBottom?: `pb-${TSpacingValues}`;
  paddingLeft?: `pl-${TSpacingValues}`;
  paddingRight?: `pr-${TSpacingValues}`;
  paddingTop?: `pt-${TSpacingValues}`;
  shouldShuffle?: boolean;
  shouldShuffleOnHover?: boolean;
  shuffleDelay?: number;
  shuffleInterval?: number;
  textAlign?: "text-left" | "text-center" | "text-right";
  textTransform?: "normal-case" | "lowercase" | "uppercase" | "capitalize";
  width?: `w-${TSpacingValues}`;
}
