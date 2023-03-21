import { CSSProperties, FunctionComponent, SVGProps } from "react";

import { IThemeClasses } from "types/theme";

export type SVGImage = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string }
>;

export interface IImageDynamicProps {
  imageName:
    | "earth"
    | "hexagon"
    | "hexagonWithPattern"
    | "logo"
    | "logoShortcut";
  isActive?: boolean;
  isHeightResponsive?: boolean;
  isResponsive?: boolean;
  shouldGlow?: boolean;
  shouldGlowOnHover?: boolean;
  style?: CSSProperties;
  themeClasses?: Pick<
    IThemeClasses,
    "height" | "overflow" | "width" | "pseudoClasses"
  >;
}

export type TImageComponents = Record<
  IImageDynamicProps["imageName"],
  SVGImage
>;