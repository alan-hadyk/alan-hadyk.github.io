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
    "codeSandbox" |
    "earth" |
    "gitHub" |
    "graphql" |
    "javascript" |
    "linkedIn" |
    "logo" |
    "node" |
    "react" |
    "typescript" |
    "webpack";
  isResponsive?: boolean;
  shouldDisplayGlowAnimation?: boolean;
  shouldGlowOnHover?: boolean;
  width?: string | Spacing;
}

export interface IconComponents {
  apollo: SVGIcon;
  btnCodeSandbox: SVGIcon;
  btnDownload: SVGIcon;
  btnExternalLink: SVGIcon;
  btnSend: SVGIcon;
  codeSandbox: SVGIcon;
  earth: SVGIcon;
  gitHub: SVGIcon;
  graphql: SVGIcon;
  javascript: SVGIcon;
  linkedIn: SVGIcon;
  logo: SVGIcon;
  node: SVGIcon;
  react: SVGIcon;
  typescript: SVGIcon;
  webpack: SVGIcon;
}

type SVGIcon = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

export type IconContainerProps = Partial<IconProps>;
