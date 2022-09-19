import {
  TChildren,
  TColor,
  TFontFamily,
  TFontSize,
  TFontWeight,
  TSpacing
} from "types/props";

export interface ITextProps {
  children: TChildren;
  className?: string;
  color?: `text-${TColor}`;
  dataCy?: string;
  ellipsis?: boolean;
  fontFamily?: `font-${TFontFamily}`;
  fontSize?: `text-${TFontSize}`;
  fontWeight?: `font-${TFontWeight}`;
  isHoverable?: boolean;
  lineHeight?: `leading-${TSpacing}` | "leading-1";
  maxHeight?: `max-h-${TSpacing}`;
  overflow?: "overflow-visible" | "overflow-hidden";
  paddingBottom?: `pb-${TSpacing}`;
  paddingLeft?: `pl-${TSpacing}`;
  paddingRight?: `pr-${TSpacing}`;
  paddingTop?: `pt-${TSpacing}`;
  shouldShuffle?: boolean;
  shouldShuffleOnHover?: boolean;
  shuffleDelay?: number;
  shuffleInterval?: number;
  textAlign?: "text-left" | "text-center" | "text-right";
  textTransform?: "normal-case" | "lowercase" | "uppercase" | "capitalize";
  width?: `w-${TSpacing}`;
}
