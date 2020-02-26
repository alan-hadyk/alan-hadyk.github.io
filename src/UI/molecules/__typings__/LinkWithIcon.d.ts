import { FunctionComponent, SVGProps } from "react";
import { StyledComponentBase, DefaultTheme } from "styled-components";

export interface LinkWithIconProps {
  href: string;
  iconName: "logo" | "codeSandbox" | "gitHub" | "linkedIn";
  isExternal?: boolean;
}

export type SVGIcon = FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

export interface MapIconNameToIcon {
  codeSandbox: SVGIcon;
  gitHub: SVGIcon;
  linkedIn: SVGIcon;
  logo: SVGIcon;
}


type LinkIconType = string & StyledComponentBase<SVGIcon, DefaultTheme, {}, never>;
