import { CSSProperties, FunctionComponent, SVGProps } from "react";

import { IThemeClasses } from "@app/types/theme";

export type SVGImage = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string }
>;

export enum ImageDynamicVariant {
  Active,
  Glow,
  GlowOnHover,
  HeightResponsive,
  Responsive,
}

export enum ImageDynamicName {
  Earth = "earth",
  Flux = "flux",
  Hexagon = "hexagon",
  HexagonWithPattern = "hexagonWithPattern",
  Logo = "logo",
  LogoShortcut = "logoShortcut",
}

export interface IImageDynamicProps {
  imageName: ImageDynamicName;
  style?: CSSProperties;
  themeClasses?: IThemeClasses;
  variants?: ImageDynamicVariant[];
}

export type TImageDynamicComponents = Record<
  IImageDynamicProps["imageName"],
  SVGImage
>;
