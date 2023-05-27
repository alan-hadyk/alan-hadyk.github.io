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
  Apollo = "apollo",
  Chrome = "chrome",
  CodeSandbox = "codeSandbox",
  Download = "download",
  Earth = "earth",
  ExternalLink = "externalLink",
  Firefox = "firefox",
  Flux = "flux",
  GitHub = "gitHub",
  GraphQL = "graphQL",
  Hexagon = "hexagon",
  HexagonWithPattern = "hexagonWithPattern",
  IE = "ie",
  JavaScript = "javaScript",
  LinkedIn = "linkedIn",
  Logo = "logo",
  LogoShortcut = "logoShortcut",
  NextJS = "nextJS",
  NodeJS = "nodeJS",
  Opera = "opera",
  React = "react",
  ReactLogo = "reactLogo",
  Safari = "safari",
  Toptal = "toptal",
  TypeScript = "typeScript",
  Unknown = "unknown",
  Warning = "warning",
  Webpack = "webpack",
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
