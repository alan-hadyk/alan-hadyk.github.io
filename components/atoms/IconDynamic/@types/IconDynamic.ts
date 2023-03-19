import { FunctionComponent, SVGProps } from "react";

import { IThemeClasses } from "types/theme";

export type SVGIcon = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string }
>;

export interface IIconDynamicProps {
  iconName:
    | "apollo"
    | "chrome"
    | "codeSandbox"
    | "download"
    | "externalLink"
    | "firefox"
    | "gitHub"
    | "graphql"
    | "ie"
    | "javaScript"
    | "linkedIn"
    | "nextJs"
    | "nodeJs"
    | "opera"
    | "react"
    | "reactLogo"
    | "safari"
    | "toptal"
    | "typeScript"
    | "unknown"
    | "warning"
    | "webpack";
  isActive?: boolean;
  isHeightResponsive?: boolean;
  isResponsive?: boolean;
  shouldDisplayGlowAnimation?: boolean;
  shouldGlow?: boolean;
  shouldGlowOnHover?: boolean;
  themeClasses?: Pick<
    IThemeClasses,
    "height" | "overflow" | "width" | "pseudoClasses"
  >;
}

export type TIconComponents = Record<IIconDynamicProps["iconName"], SVGIcon>;
