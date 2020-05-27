import { FunctionComponent, SVGProps } from "react";

import { Spacing, TransitionTimes } from "<styles>/variables/__typings__/variables.d.ts";

export interface IconProps {
  animationDelay?: string;
  animationTime?: TransitionTimes;
  dataTestId?: string;
  height?: string | Spacing;
  iconName:
    "apollo" |
    "brandAirbnb" |
    "brandApollo" |
    "brandCypress" |
    "brandDocker" |
    "brandEmber" |
    "brandExpress" |
    "brandGallery" |
    "brandGraphQL" |
    "brandJEST" |
    "brandJIRA" |
    "brandJS" |
    "brandJenkins" |
    "brandNode" |
    "brandQunit" |
    "brandREST" |
    "brandReact" |
    "brandRedux" |
    "brandSass" |
    "brandStyledComponents" |
    "brandTS" |
    "brandTestingLibrary" |
    "brandWebpack" |
    "brandZeplin" |
    "btnCodeSandbox" |
    "btnDownload" |
    "btnExternalLink" |
    "btnSend" |
    "calendar" |
    "chrome" |
    "codeSandbox" |
    "companyOmise" |
    "companyShiji" |
    "earth" |
    "firefox" |
    "gitHub" |
    "graphql" |
    "hexagon" |
    "hexagonWithPattern" |
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
  isHeightResponsive?: boolean;
  isResponsive?: boolean;
  overflow?: "hidden" | "visible";
  shouldDisplayGlowAnimation?: boolean;
  shouldGlow?: boolean;
  shouldGlowOnHover?: boolean;
  shouldRotate?: boolean;
  width?: string | Spacing;
}

export interface IconComponents {
  apollo: SVGIcon;
  brandAirbnb: SVGIcon;
  brandApollo: SVGIcon;
  brandCypress: SVGIcon;
  brandDocker: SVGIcon;
  brandEmber: SVGIcon;
  brandExpress: SVGIcon;
  brandGallery: SVGIcon;
  brandGraphQL: SVGIcon;
  brandJEST: SVGIcon;
  brandJIRA: SVGIcon;
  brandJS: SVGIcon;
  brandJenkins: SVGIcon;
  brandNode: SVGIcon;
  brandQunit: SVGIcon;
  brandREST: SVGIcon;
  brandReact: SVGIcon;
  brandRedux: SVGIcon;
  brandSass: SVGIcon;
  brandStyledComponents: SVGIcon;
  brandTS: SVGIcon;
  brandTestingLibrary: SVGIcon;
  brandWebpack: SVGIcon;
  brandZeplin: SVGIcon;
  btnCodeSandbox: SVGIcon;
  btnDownload: SVGIcon;
  btnExternalLink: SVGIcon;
  btnSend: SVGIcon;
  calendar: SVGIcon;
  chrome: SVGIcon;
  codeSandbox: SVGIcon;
  companyOmise: SVGIcon;
  companyShiji: SVGIcon;
  earth: SVGIcon;
  firefox: SVGIcon;
  gitHub: SVGIcon;
  graphql: SVGIcon;
  hexagon: SVGIcon;
  hexagonWithPattern: SVGIcon;
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
