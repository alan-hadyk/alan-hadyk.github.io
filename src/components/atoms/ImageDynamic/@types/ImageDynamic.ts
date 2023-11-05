import { CSSProperties, FunctionComponent, SVGProps } from "react";

import { IThemeClasses } from "@app/types/theme";

export type SVGImage = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string }
>;

export enum ImageDynamicVariant {
  Active,
  Glow,
  GlowAnimation,
  GlowOnHover,
  HeightResponsive,
  Responsive,
}

export enum ImageDynamicName {
  Download = "download",
  ExternalLink = "externalLink",
  GitHub = "gitHub",
  Hexagon = "hexagon",
  HexagonWithPattern = "hexagonWithPattern",
  LinkedIn = "linkedIn",
  Logo = "logo",
  LogoShortcut = "logoShortcut",
  Toptal = "toptal",
  Warning = "warning",
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
