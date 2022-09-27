import { FunctionComponent, SVGProps } from "react";

import {
  TAnimationNameValues,
  TColorValues,
  TTransitionDurationValues,
  IThemeClasses,
  TUtility
} from "types/theme";

export type SVGIcon = FunctionComponent<
  SVGProps<SVGSVGElement> & { title?: string }
>;

export interface IIconProps {
  className?: string;
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
    | "brandjQuery"
    | "brandJS"
    | "brandJenkins"
    | "brandLESS"
    | "brandNest"
    | "brandNext"
    | "brandNode"
    | "brandPhabricator"
    | "brandPhotoshop"
    | "brandPrestaShop"
    | "brandPrisma"
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
    | "link"
    | "linkedIn"
    | "logo"
    | "logoShortcut"
    | "nodeIcon"
    | "opera"
    | "react"
    | "reactLogo"
    | "safari"
    | "toptal"
    | "typescript"
    | "unknown"
    | "webpack";
  isActive?: boolean;
  isHeightResponsive?: boolean;
  isInlineSvg?: boolean;
  isResponsive?: boolean;
  shouldDisplayGlowAnimation?: boolean;
  shouldGlow?: boolean;
  shouldGlowOnHover?: boolean;
  themeClasses?: Pick<IThemeClasses, "height" | "overflow" | "width"> & {
    animation?: TUtility<"childrenSvg:animate", TAnimationNameValues>;
    fill?: TUtility<"childrenPath:fill", TColorValues>;
    glowAnimationTime?: TUtility<
      "childrenSvg:duration",
      TTransitionDurationValues
    >;
  };
}

export interface IconComponents {
  apollo: SVGIcon;
  brandNext: SVGIcon;
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
  link: SVGIcon;
  linkedIn: SVGIcon;
  logo: SVGIcon;
  logoShortcut: SVGIcon;
  nodeIcon: SVGIcon;
  opera: SVGIcon;
  react: SVGIcon;
  reactLogo: SVGIcon;
  safari: SVGIcon;
  toptal: SVGIcon;
  typescript: SVGIcon;
  unknown: SVGIcon;
  webpack: SVGIcon;
}
