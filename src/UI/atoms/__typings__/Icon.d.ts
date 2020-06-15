import { FunctionComponent, SVGProps } from "react";

import { Spacing, TransitionTimes } from "<styles>/variables/__typings__/variables.d.ts";

export interface IconProps {
  animationDelay?: string;
  animationTime?: TransitionTimes;
  dataTestId?: string;
  height?: string | Spacing;
  iconName:
    "apollo" |
    "brandAfterEffects" |
    "brandAirbnb" |
    "brandApollo" |
    "brandBasecamp" |
    "brandBamboo" |
    "brandBuildkite" |
    "brandCSS" |
    "brandCSSModules" |
    "brandCoffeeScript" |
    "brandCorel" |
    "brandCypress" |
    "brandDocker" |
    "brandDocpad" |
    "brandEmber" |
    "brandExpress" |
    "brandFigma" |
    "brandGallery" |
    "brandGithub" |
    "brandGitlab" |
    "brandGraphQL" |
    "brandGrunt" |
    "brandGulp" |
    "brandHTML" |
    "brandJEST" |
    "brandJIRA" |
    "brandJQuery" |
    "brandJS" |
    "brandJenkins" |
    "brandLESS" |
    "brandNode" |
    "brandPhotoshop" |
    "brandPrestaShop" |
    "brandQunit" |
    "brandREST" |
    "brandReact" |
    "brandRedmine" |
    "brandRedux" |
    "brandSass" |
    "brandSketch" |
    "brandStash" |
    "brandStyledComponents" |
    "brandTS" |
    "brandTestingLibrary" |
    "brandTrello" |
    "brandWebpack" |
    "brandWebsocket" |
    "brandZeplin" |
    "btnCodeSandbox" |
    "btnDownload" |
    "btnExternalLink" |
    "btnSend" |
    "calendar" |
    "chrome" |
    "codeSandbox" |
    "companyDIH" |
    "companyOmise" |
    "companySAP" |
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
  brandAfterEffects: SVGIcon;
  brandAirbnb: SVGIcon;
  brandApollo: SVGIcon;
  brandBamboo: SVGIcon;
  brandBasecamp: SVGIcon;
  brandBuildkite: SVGIcon;
  brandCSS: SVGIcon;
  brandCSSModules: SVGIcon;
  brandCoffeeScript: SVGIcon;
  brandCorel: SVGIcon;
  brandCypress: SVGIcon;
  brandDocker: SVGIcon;
  brandDocpad: SVGIcon;
  brandEmber: SVGIcon;
  brandExpress: SVGIcon;
  brandFigma: SVGIcon;
  brandGallery: SVGIcon;
  brandGithub: SVGIcon;
  brandGitlab: SVGIcon;
  brandGraphQL: SVGIcon;
  brandGrunt: SVGIcon;
  brandGulp: SVGIcon;
  brandHTML: SVGIcon;
  brandJEST: SVGIcon;
  brandJIRA: SVGIcon;
  brandJQuery: SVGIcon;
  brandJS: SVGIcon;
  brandJenkins: SVGIcon;
  brandLESS: SVGIcon;
  brandNode: SVGIcon;
  brandPhotoshop: SVGIcon;
  brandPrestaShop: SVGIcon;
  brandQunit: SVGIcon;
  brandREST: SVGIcon;
  brandReact: SVGIcon;
  brandRedmine: SVGIcon;
  brandRedux: SVGIcon;
  brandSass: SVGIcon;
  brandSketch: SVGIcon;
  brandStash: SVGIcon;
  brandStyledComponents: SVGIcon;
  brandTS: SVGIcon;
  brandTestingLibrary: SVGIcon;
  brandTrello: SVGIcon;
  brandWebpack: SVGIcon;
  brandWebsocket: SVGIcon;
  brandZeplin: SVGIcon;
  btnCodeSandbox: SVGIcon;
  btnDownload: SVGIcon;
  btnExternalLink: SVGIcon;
  btnSend: SVGIcon;
  calendar: SVGIcon;
  chrome: SVGIcon;
  codeSandbox: SVGIcon;
  companyDIH: SVGIcon;
  companyOmise: SVGIcon;
  companySAP: SVGIcon;
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
