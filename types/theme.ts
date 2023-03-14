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
  TSuffix,
  TSign extends string = "-"
> = `${TPrefix}${TSign}${TSuffix extends string | number ? TSuffix : never}`;

export type TUtilityWithArbitraryValues<
  TPrefix extends string,
  TSuffix,
  TSign extends string = "-"
> =
  | TUtility<TPrefix, TSuffix, TSign>
  | `${TPrefix}${TSign}[${string | number}]`;

export type TUtilityWithTransparency<TPrefix extends string, TSuffix> =
  | TUtility<TPrefix, TSuffix>
  | TUtility<
      TPrefix,
      TSuffix extends string | number
        ? `${TSuffix}/${number | `[${number}]`}`
        : string
    >;

export type TAnimate = TUtility<"animate", TAnimationNameValues>;

export type TBgColor = TUtilityWithArbitraryValues<
  "bg",
  | TColorValues
  | `${TColorValues}/${number}`
  | `[${string}]`
  | `gradient-to-${string}`
>;

export type TBg = TUtilityWithArbitraryValues<
  "bg",
  `[url(${string})]` | "center" | "repeat-space" | `[length:${string}]`
>;

export type TFill = TUtility<"fill", TColorValues>;

export type TTextColor = TUtility<"text", TColorValues>;
export type TTextFontSize = TUtilityWithArbitraryValues<
  "text",
  TFontSizeValues
>;
export type TTextFontFamily = TUtility<"font", TFontFamilyValues>;
export type TTextFontWeight = TUtility<"font", TFontWeightValues>;
export type TTextAlign =
  | "text-left"
  | "text-center"
  | "text-right"
  | "text-justify"
  | "text-start"
  | "text-end";
export type TTextTransform =
  | "uppercase"
  | "lowercase"
  | "capitalize"
  | "normal-case";
export type TTextOverflow = TUtility<"text", "ellipsis" | "clip">;

export type TWhitespace = TUtility<
  "whitespace",
  "normal" | "nowrap" | "pre" | "pre-line" | "pre-wrap"
>;

export type TLeading = TUtilityWithArbitraryValues<
  "leading",
  TLineHeightValues
>;
export type TTracking = TUtilityWithArbitraryValues<"tracking", TSpacingValues>;

export type TMarginBottom = TUtilityWithArbitraryValues<"mb", TSpacingValues>;
export type TMarginLeft = TUtilityWithArbitraryValues<"ml", TSpacingValues>;
export type TMarginRight = TUtilityWithArbitraryValues<"mr", TSpacingValues>;
export type TMarginTop = TUtilityWithArbitraryValues<"mt", TSpacingValues>;
export type TMarginX = TUtilityWithArbitraryValues<"mx", TSpacingValues>;
export type TMarginY = TUtilityWithArbitraryValues<"my", TSpacingValues>;

export type TPaddingBottom = TUtilityWithArbitraryValues<"pb", TSpacingValues>;
export type TPaddingLeft = TUtilityWithArbitraryValues<"pl", TSpacingValues>;
export type TPaddingRight = TUtilityWithArbitraryValues<"pr", TSpacingValues>;
export type TPaddingTop = TUtilityWithArbitraryValues<"pt", TSpacingValues>;
export type TPaddingX = TUtilityWithArbitraryValues<"px", TSpacingValues>;
export type TPaddingY = TUtilityWithArbitraryValues<"py", TSpacingValues>;

export type TPadding = TUtilityWithArbitraryValues<"p", TSpacingValues>;

export type TBottom = TUtilityWithArbitraryValues<"bottom", TSpacingValues>;
export type TLeft = TUtilityWithArbitraryValues<"left", TSpacingValues>;
export type TRight = TUtilityWithArbitraryValues<"right", TSpacingValues>;
export type TTop = TUtilityWithArbitraryValues<"top", TSpacingValues>;

export type THeight = TUtilityWithArbitraryValues<"h", TSpacingValues>;
export type TMinHeight = TUtilityWithArbitraryValues<"min-h", TSpacingValues>;
export type TMaxHeight = TUtilityWithArbitraryValues<"max-h", TSpacingValues>;
export type TWidth = TUtilityWithArbitraryValues<"w", TSpacingValues>;
export type TMinWidth = TUtilityWithArbitraryValues<"min-w", TSpacingValues>;
export type TMaxWidth = TUtilityWithArbitraryValues<"max-w", TSpacingValues>;

export type TBoxShadow = TUtility<"shadow", TBoxShadowValues>;
export type TDropShadow = TUtility<"drop-shadow", TDropShadowValues>;

export type TBorderWidth = TUtilityWithArbitraryValues<
  "border" | "border-l" | "border-r" | "border-t" | "border-b",
  TBorderWidthValues
>;
export type TBorderColor =
  | TUtilityWithArbitraryValues<"border", TColorValues>
  | TUtilityWithTransparency<"border", TColorValues>;
export type TBorderLeftColor = TUtilityWithArbitraryValues<
  "border-l",
  TColorValues
>;
export type TBorderRightColor = TUtilityWithArbitraryValues<
  "border-r",
  TColorValues
>;
export type TBorderBottomColor = TUtilityWithArbitraryValues<
  "border-b",
  TColorValues
>;
export type TBorderTopColor = TUtilityWithArbitraryValues<
  "border-t",
  TColorValues
>;
export type TBorderRadius = TUtilityWithArbitraryValues<
  "rounded",
  TSpacingValues
>;

export type TBorderStyle = TUtility<
  "border",
  "solid" | "dashed" | "dotted" | "double" | "none"
>;

export type TZIndex = TUtilityWithArbitraryValues<"z", TZIndexValues>;

export type TDisplay =
  | "block"
  | "inline-block"
  | "inline"
  | "flex"
  | "inline-flex"
  | "table"
  | "inline-table"
  | "table-caption"
  | "table-cell"
  | "table-column"
  | "table-column-group"
  | "table-footer-group"
  | "table-header-group"
  | "table-row-group"
  | "table-row"
  | "flow-root"
  | "grid"
  | "inline-grid"
  | "contents"
  | "list-item"
  | "hidden";

export type TFlex =
  | `flex-[${number}_${number}_${number}%]`
  | `flex-[${number}_${number}_${number}rem]`
  | `flex-[${number}_${number}_${number}px]`
  | `flex-[${number}_${number}_${string}]`;

export type TFlexGrow = TUtility<"flex", "grow" | "grow-0">;

export type TFlexFlow =
  | "flex-row flex-wrap"
  | "flex-row-reverse flex-wrap"
  | "flex-col flex-wrap"
  | "flex-col-reverse flex-wrap"
  | "flex-row flex-wrap-reverse"
  | "flex-row-reverse flex-wrap-reverse"
  | "flex-col flex-wrap-reverse"
  | "flex-col-reverse flex-wrap-reverse"
  | "flex-row flex-nowrap"
  | "flex-row-reverse flex-nowrap"
  | "flex-col flex-nowrap"
  | "flex-col-reverse flex-nowrap";

export type TAlignItems = TUtility<
  "items",
  "start" | "end" | "center" | "stretch" | "baseline"
>;

export type TAlignSelf = TUtility<
  "self",
  "auto" | "start" | "end" | "center" | "stretch"
>;

export type TJustifyContent = TUtility<
  "justify",
  "start" | "end" | "center" | "between" | "around" | "evenly"
>;

export type TJustifyItems = TUtility<
  "justify-items",
  "auto" | "start" | "end" | "center" | "stretch"
>;

export type TOrder =
  | `-order-${number}`
  | `order-${number}`
  | "order-first"
  | "order-last"
  | "order-none";

export type TGap = TUtilityWithArbitraryValues<"gap", TSpacingValues>;

export type TOverflow = TUtility<
  "overflow",
  | "auto"
  | "hidden"
  | "visible"
  | "scroll"
  | "x-auto"
  | "x-hidden"
  | "x-visible"
  | "x-scroll"
  | "y-auto"
  | "y-hidden"
  | "y-visible"
  | "y-scroll"
>;

export type TPosition = "static" | "relative" | "absolute" | "fixed" | "sticky";

export type TTransition =
  | "default"
  | "transition-all"
  | "transition-colors"
  | "transition-opacity"
  | "transition-shadow"
  | "transition-shadow"
  | "transition-transform"
  | "transition-none";
export type TTransitionDuration = TUtility<
  "duration",
  TTransitionDurationValues
>;
export type TTransitionTiming = TUtility<
  "ease",
  "linear" | "in" | "out" | "in-out"
>;

export type TColorProperties =
  | TBgColor
  | TBorderBottomColor
  | TBorderColor
  | TBorderLeftColor
  | TBorderRightColor
  | TBorderTopColor
  | TTextColor
  | TFill;

export type TGroupHover = TUtility<"group-hover", TColorProperties, ":">;
export type THover = TUtility<
  "hover",
  TColorProperties | TBoxShadow | TDropShadow,
  ":"
>;

export type TTransform = "transform" | "transform-gpu" | "transform-none";
export type TRotate =
  | `rotate-${number}`
  | `-rotate-${number}`
  | `rotate-[${number}deg]`;

export type TCursor = TUtility<
  "cursor",
  | "auto"
  | "default"
  | "pointer"
  | "wait"
  | "text"
  | "move"
  | "help"
  | "not-allowed"
>;

export type TFlexFlowValues =
  | "flex-row-wrap"
  | "flex-row-reverse-wrap"
  | "flex-col-wrap"
  | "flex-col-reverse-wrap"
  | "flex-row-wrap-reverse"
  | "flex-row-reverse-wrap-reverse"
  | "flex-col-wrap-reverse"
  | "flex-col-reverse-wrap-reverse"
  | "flex-row-nowrap"
  | "flex-row-reverse-nowrap"
  | "flex-col-nowrap"
  | "flex-col-reverse-nowrap";

export type TMediaQuery = TUtilityWithArbitraryValues<
  TScreensValues,
  string,
  ":"
>;

export type TAfter = TUtilityWithArbitraryValues<"after", string, ":">;
export type TPseudoClasses = `${string}:${string}`[];

export type TContent = `content-[${string}]`;

export type TOpacity = `opacity-${number}`;

export type TClassStyleUtility = `${string}-${string}` | string;

export interface IBasicThemeClasses {
  alignItems?: TAlignItems;
  alignSelf?: TAlignSelf;
  animate?: TAnimate;
  background?: TBg | TBg[];
  backgroundColor?: TBgColor;
  borderBottomColor?: TBorderBottomColor;
  borderColor?: TBorderColor;
  borderLeftColor?: TBorderLeftColor;
  borderRadius?: TBorderRadius;
  borderRightColor?: TBorderRightColor;
  borderStyle?: TBorderStyle;
  borderTopColor?: TBorderTopColor;
  borderWidth?: TBorderWidth | TBorderWidth[];
  bottom?: TBottom;
  boxShadow?: TBoxShadow;
  color?: TTextColor;
  cursor?: TCursor;
  display?: TDisplay;
  dropShadow?: TDropShadow;
  fill?: TFill;
  flex?: TFlex;
  flexFlow?: TFlexFlowValues;
  flexGrow?: TFlexGrow;
  fontFamily?: TTextFontFamily;
  fontSize?: TTextFontSize;
  fontWeight?: TTextFontWeight;
  gap?: TGap;
  group?: "group";
  groupHover?: TGroupHover | TGroupHover[];
  height?:
    | THeight
    | `${number}%`
    | `${number}px`
    | `${number}rem`
    | `${number}vh`
    | `${number}vw`;
  hover?: THover;
  justifyContent?: TJustifyContent;
  justifyItems?: TJustifyItems;
  left?: TLeft;
  letterSpacing?: TTracking;
  lineHeight?: TLeading;
  marginBottom?: TMarginBottom;
  marginLeft?: TMarginLeft;
  marginRight?: TMarginRight;
  marginTop?: TMarginTop;
  marginX?: TMarginX;
  marginY?: TMarginY;
  maxHeight?: TMaxHeight;
  maxWidth?: TMaxWidth;
  minHeight?: TMinHeight;
  minWidth?: TMinWidth;
  opacity?: TOpacity;
  order?: TOrder;
  overflow?: TOverflow;
  padding?: TPadding;
  paddingBottom?: TPaddingBottom;
  paddingLeft?: TPaddingLeft;
  paddingRight?: TPaddingRight;
  paddingTop?: TPaddingTop;
  paddingX?: TPaddingX;
  paddingY?: TPaddingY;
  position?: TPosition;
  pseudoClasses?: TPseudoClasses;
  right?: TRight;
  rotate?: TRotate;
  textAlign?: TTextAlign;
  textOverflow?: TTextOverflow;
  textTransform?: TTextTransform;
  top?: TTop;
  transform?: TTransform;
  transition?: TTransition;
  transitionDuration?: TTransitionDuration;
  transitionTiming?: TTransitionTiming;
  whitespace?: TWhitespace;
  width?:
    | TWidth
    | `${number}%`
    | `${number}px`
    | `${number}rem`
    | `${number}vh`
    | `${number}vw`;
  zIndex?: TZIndex;
}

export interface IThemeClasses extends IBasicThemeClasses {
  after?: TAfter | TAfter[];
  mediaQuery?: TMediaQuery | TMediaQuery[];
}
