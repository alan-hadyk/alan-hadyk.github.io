import { FunctionComponent, SVGProps } from "react";
import { StyledComponentBase, DefaultTheme } from "styled-components";

import spacing from "<styles>/variables/spacing";

type SpacingKeys = keyof typeof spacing;

export interface IconProps {
  height: typeof spacing[SpacingKeys];
  iconName: "codeSandbox" | "download" | "externalLink" | "send";
}

type SVGIcon = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

export interface IconContainerProps {
  iconheight: typeof spacing[SpacingKeys];
}

export type IconContainerType = string & StyledComponentBase<SVGIcon, DefaultTheme, IconContainerProps, never>;

