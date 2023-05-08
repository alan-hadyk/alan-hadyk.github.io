import { CSSProperties, FunctionComponent, SVGProps } from "react";

import { IThemeClasses } from "@app/types/theme";

export type SVGIcon = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string }
>;

export enum IconDynamicName {
  Apollo = "apollo",
  Chrome = "chrome",
  CodeSandbox = "codeSandbox",
  Download = "download",
  ExternalLink = "externalLink",
  Firefox = "firefox",
  GitHub = "gitHub",
  GraphQL = "graphQL",
  IE = "ie",
  JavaScript = "javaScript",
  LinkedIn = "linkedIn",
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

export interface IIconDynamicProps {
  iconName: IconDynamicName;
  isActive?: boolean;
  isHeightResponsive?: boolean;
  isResponsive?: boolean;
  shouldDisplayGlowAnimation?: boolean;
  shouldGlow?: boolean;
  shouldGlowOnHover?: boolean;
  style?: CSSProperties;
  themeClasses?: Pick<
    IThemeClasses,
    "height" | "overflow" | "width" | "pseudoClasses"
  >;
}

export type TIconComponents = Record<IIconDynamicProps["iconName"], SVGIcon>;
