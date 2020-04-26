import { FunctionComponent, SVGProps } from "react";

import { Spacing, TransitionTimes } from "<styles>/variables/__typings__/variables.d.ts";

export interface IconProps {
  animationDelay?: string;
  animationTime?: TransitionTimes;
  height?: string | Spacing;
  iconName:
  "apollo" |
  "btnCodeSandbox" |
  "btnDownload" |
  "btnExternalLink" |
  "btnSend" |
  "chrome" |
  "codeSandbox" |
  "earth" |
  "firefox" |
  "gitHub" |
  "graphql" |
  "ie" |
  "javascript" |
  "linkedIn" |
  "logo" |
  "node" |
  "opera" |
  "react" |
  "reactLogo" |
  "safari" |
  "typescript" |
  "unknown" |
  "webpack";
  isActive?: boolean;
  isResponsive?: boolean;
  overflow?: "hidden" | "visible";
  shouldDisplayGlowAnimation?: boolean;
  shouldGlowOnHover?: boolean;
  shouldRotate?: boolean;
  width?: string | Spacing;
}

export interface IconComponents {
  apollo: SVGIcon;
  btnCodeSandbox: SVGIcon;
  btnDownload: SVGIcon;
  btnExternalLink: SVGIcon;
  btnSend: SVGIcon;
  chrome: SVGIcon;
  codeSandbox: SVGIcon;
  earth: SVGIcon;
  firefox: SVGIcon;
  gitHub: SVGIcon;
  graphql: SVGIcon;
  ie: SVGIcon;
  javascript: SVGIcon;
  linkedIn: SVGIcon;
  logo: SVGIcon;
  node: SVGIcon;
  opera: SVGIcon;
  react: SVGIcon;
  reactLogo: SVGIcon;
  safari: SVGIcon;
  typescript: SVGIcon;
  unknown: SVGIcon;
  webpack: SVGIcon;
}

type SVGIcon = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

export type IconContainerProps = Partial<IconProps>;
