import { FunctionComponent, SVGProps } from "react";
import { StyledComponentBase, DefaultTheme } from "styled-components";

import { Spacing }from "<styles>/variables/__typings__/variables";

export interface IconProps {
  height: Spacing;
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
  shouldGlowOnHover?: boolean;
  width?: string;
}

type SVGIcon = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

export interface IconContainerProps {
  iconheight: Spacing;
  iconwidth: string;
}

export type IconContainerType = string & StyledComponentBase<SVGIcon, DefaultTheme, IconContainerProps, never>;

