import { FunctionComponent, SVGProps } from "react";
import { StyledComponentBase, DefaultTheme } from "styled-components";

import { Spacing, TransitionTimes } from "<styles>/variables/__typings__/variables";

export interface IconProps {
  animationDelay?: string;
  animationTime?: TransitionTimes;
  height: Spacing | "auto";
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
    "linkedIn";
  shouldDisplayGlowAnimation?: boolean;
  shouldGlowOnHover?: boolean;
  width?: "auto" | "100%" | Spacing;
}

type SVGIcon = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

export type IconContainerType = string & StyledComponentBase<SVGIcon, DefaultTheme, IconContainerProps, never>;
