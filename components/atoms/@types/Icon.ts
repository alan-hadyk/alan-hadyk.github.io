import { FunctionComponent, SVGProps } from "react";

import { TAnimationName, TDuration, TSpacing } from "types/props";

export type SVGIcon = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string }
>;

export interface IIconProps {
  animation?: `childrenSvg:animate-${TAnimationName}`;
  dataTestId?: string;
  glowAnimationTime?: `childrenSvg:duration-${TDuration}`;
  height?: `h-${TSpacing}` | `h-[${string}]` | `${number}px`;
  iconName:
    | "apollo"
    | "brandAfterEffects"
    | "brandAirbnb"
    | "brandApollo"
    | "brandAuth0"
    | "brandBasecamp"
    | "brandBamboo"
    | "brandBuildkite"
    | "brandChakra"
    | "brandCSS"
    | "brandCSSModules"
    | "brandCoffeeScript"
    | "brandCorel"
    | "brandCypress"
    | "brandDocker"
    | "brandDocpad"
    | "brandEmber"
    | "brandExpress"
    | "brandFigma"
    | "brandGallery"
    | "brandGithub"
    | "brandGitlab"
    | "brandGraphQL"
    | "brandGrunt"
    | "brandGulp"
    | "brandHTML"
    | "brandJEST"
    | "brandJIRA"
    | "brandJQuery"
    | "brandJS"
    | "brandJenkins"
    | "brandLESS"
    | "brandNest"
    | "brandNext"
    | "brandNode"
    | "brandPhabricator"
    | "brandPhotoshop"
    | "brandPrestaShop"
    | "brandQuire"
    | "brandQunit"
    | "brandRails"
    | "brandREST"
    | "brandReact"
    | "brandRedmine"
    | "brandRedux"
    | "brandRuby"
    | "brandSass"
    | "brandSinatra"
    | "brandSketch"
    | "brandStash"
    | "brandStyledComponents"
    | "brandTailwind"
    | "brandTS"
    | "brandTaskade"
    | "brandTestingLibrary"
    | "brandTrello"
    | "brandWebpack"
    | "brandWebsocket"
    | "brandZeplin"
    | "btnCodeSandbox"
    | "btnDownload"
    | "btnExternalLink"
    | "calendar"
    | "chrome"
    | "codeSandbox"
    | "companyDIH"
    | "companyOmise"
    | "companySAP"
    | "companyShiji"
    | "companyTribe"
    | "earth"
    | "firefox"
    | "gitHub"
    | "graphql"
    | "hexagon"
    | "hexagonWithPattern"
    | "ie"
    | "javascript"
    | "linkedIn"
    | "logo"
    | "logoShortcut"
    | "nodeIcon"
    | "opera"
    | "react"
    | "reactLogo"
    | "safari"
    | "typescript"
    | "unknown"
    | "webpack";
  isActive?: boolean;
  isHeightResponsive?: boolean;
  isResponsive?: boolean;
  overflow?: "overflow-hidden" | "overflow-visible";
  shouldDisplayGlowAnimation?: boolean;
  shouldGlow?: boolean;
  shouldGlowOnHover?: boolean;
  width?: `w-${TSpacing}` | string | `w-[${string}]` | `${number}px`;
}

export interface IconComponents {
  apollo: SVGIcon;
  btnCodeSandbox: SVGIcon;
  btnDownload: SVGIcon;
  btnExternalLink: SVGIcon;
  calendar: SVGIcon;
  chrome: SVGIcon;
  codeSandbox: SVGIcon;
  companyDIH: SVGIcon;
  companyOmise: SVGIcon;
  companySAP: SVGIcon;
  companyShiji: SVGIcon;
  companyTribe: SVGIcon;
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
  logoShortcut: SVGIcon;
  nodeIcon: SVGIcon;
  opera: SVGIcon;
  react: SVGIcon;
  reactLogo: SVGIcon;
  safari: SVGIcon;
  typescript: SVGIcon;
  unknown: SVGIcon;
  webpack: SVGIcon;
}
