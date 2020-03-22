import { FunctionComponent, SVGProps } from "react";

import { Spacing, TransitionTimes } from "<styles>/variables/__typings__/variables.d.ts";

export interface IconProps {
  animationDelay?: string;
  animationTime?: TransitionTimes;
  height?: string | Spacing;
  iconName:
    "btnCodeSandbox" |
    "btnDownload" |
    "btnExternalLink" | 
    "btnSend" | 
    "apollo" |
    "graphql" |
    "javascript" |
    "node" |
    "react" |
    "typescript" |
    "webpack" |
    "logo" |
    "codeSandbox" |
    "gitHub" |
    "linkedIn" |
    "warning";
  shouldDisplayGlowAnimation?: boolean;
  shouldGlowOnHover?: boolean;
  width?: string | Spacing;
}

type SVGIcon = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

export type IconContainerProps = Partial<IconProps>;
