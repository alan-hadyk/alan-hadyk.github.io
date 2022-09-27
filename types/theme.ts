import tailwindConfig from "tailwind.config";

const theme = tailwindConfig.theme;

export type TAnimationNameValues = keyof typeof theme.animation;
export type TBorderRadiusValues = keyof typeof theme.borderRadius;
export type TBorderWidthValues = keyof typeof theme.borderWidth;
export type TBoxShadowValues = keyof typeof theme.boxShadow;
export type TColorValues = keyof typeof theme.colors;
export type TDropShadowValues = keyof typeof theme.dropShadow;
export type TFontFamilyValues = keyof typeof theme.fontFamily;
export type TFontSizeValues = keyof typeof theme.fontSize;
export type TFontWeightValues = keyof typeof theme.fontWeight;
export type TKeyframesValues = keyof typeof theme.keyframes;
export type TLineHeightValues = keyof typeof theme.lineHeight;
export type TScreensValues = keyof typeof theme.screens;
export type TSpacingValues = keyof typeof theme.spacing;
export type TTransitionDurationValues = keyof typeof theme.transitionDuration;
export type TTransitionTimingValues =
  keyof typeof theme.transitionTimingFunction;
export type TZIndexValues = keyof typeof theme.zIndex;

export type TThemeValue =
  | TAnimationNameValues
  | TBorderRadiusValues
  | TBorderWidthValues
  | TBoxShadowValues
  | TColorValues
  | TDropShadowValues
  | TFontFamilyValues
  | TFontSizeValues
  | TFontWeightValues
  | TKeyframesValues
  | TLineHeightValues
  | TScreensValues
  | TSpacingValues
  | TTransitionDurationValues
  | TTransitionTimingValues
  | TZIndexValues;

export type TUtility<
  TPrefix extends string,
  TSuffix
> = `${TPrefix}-${TSuffix extends string | number ? TSuffix : never}`;

export type TUtilityWithArbitraryValues<TPrefix extends string, TSuffix> =
  | TUtility<TPrefix, TSuffix>
  | `${TPrefix}-[${string | number}]`;

export type TTextFontSize = TUtilityWithArbitraryValues<
  "text",
  TFontSizeValues
>;
export type TLeading = TUtilityWithArbitraryValues<
  "leading",
  TLineHeightValues
>;

export type TBottom = TUtilityWithArbitraryValues<"bottom", TSpacingValues>;
export type TLeft = TUtilityWithArbitraryValues<"left", TSpacingValues>;
export type TRight = TUtilityWithArbitraryValues<"right", TSpacingValues>;
export type TTop = TUtilityWithArbitraryValues<"top", TSpacingValues>;

export type THeight = TUtilityWithArbitraryValues<"h", TSpacingValues>;
export type TWidth = TUtilityWithArbitraryValues<"w", TSpacingValues>;

export type TOverflow = "overflow-hidden" | "overflow-visible";

export interface IThemeClasses {
  fontSize?: TTextFontSize;
  height?: THeight | `${number}%` | `${number}px` | `${number}rem`;
  lineHeight?: TLeading;
  overflow?: TOverflow;
  width?: TWidth | `${number}%` | `${number}px` | `${number}rem`;
}
