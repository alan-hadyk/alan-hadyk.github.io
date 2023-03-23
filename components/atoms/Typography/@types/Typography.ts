import { IThemeClasses } from "types/theme";
import { TChildren } from "types/props";

export interface ITypographyProps {
  children: TChildren;
  ellipsis?: boolean;
  isHoverable?: boolean;
  shouldShuffle?: boolean;
  shouldShuffleOnHover?: boolean;
  shuffleDelay?: number;
  shuffleInterval?: number;
  themeClasses?: Pick<
    IThemeClasses,
    | "color"
    | "fontFamily"
    | "fontSize"
    | "fontWeight"
    | "groupHover"
    | "lineHeight"
    | "marginBottom"
    | "marginTop"
    | "maxHeight"
    | "overflow"
    | "padding"
    | "paddingX"
    | "paddingY"
    | "paddingBottom"
    | "paddingLeft"
    | "paddingRight"
    | "paddingTop"
    | "pseudoClasses"
    | "textAlign"
    | "textTransform"
    | "width"
  >;
}
