import React, { ForwardedRef, forwardRef } from "react";

import BrandNext from "public/images/svg/brandNext.svg";
import BtnCodeSandbox from "public/images/svg/Btn-CodeSandbox.svg";
import BtnDownload from "public/images/svg/Btn-Download.svg";
import BtnExternalLink from "public/images/svg/Btn-ExternalLink.svg";
import CompanyDIH from "public/images/svg/Company-DiH.svg";
import CompanyOmise from "public/images/svg/Company-Omise.svg";
import CompanySAP from "public/images/svg/Company-SAP.svg";
import CompanyShiji from "public/images/svg/Company-Shiji.svg";
import CompanyTribe from "public/images/svg/Company-Tribe.svg";
import Hexagon from "public/images/svg/Hexagon.svg";
import HexagonWithPattern from "public/images/svg/Hexagon-With-Pattern.svg";
import IconApollo from "public/images/svg/Icon-Apollo.svg";
import IconCalendar from "public/images/svg/Icon-Calendar.svg";
import IconCodeSandbox from "public/images/svg/Icon-CodeSandbox.svg";
import IconEarth from "public/images/svg/Icon-Earth.svg";
import IconChrome from "public/images/svg/Icon-Chrome.svg";
import IconFirefox from "public/images/svg/Icon-Firefox.svg";
import IconGitHub from "public/images/svg/Icon-GitHub.svg";
import IconGraphql from "public/images/svg/Icon-Graphql.svg";
import IconIE from "public/images/svg/Icon-IE.svg";
import IconJavascript from "public/images/svg/Icon-Javascript.svg";
import IconLinkedIn from "public/images/svg/Icon-LinkedIn.svg";
import IconLink from "public/images/svg/Icon-Link.svg";
import IconLogo from "public/images/svg/Icon-Logo.svg";
import IconLogoShortcut from "public/images/svg/Icon-Logo-Shortcut.svg";
import IconNode from "public/images/svg/Icon-Node.svg";
import IconReact from "public/images/svg/Icon-React.svg";
import IconReactLogo from "public/images/svg/Icon-ReactLogo.svg";
import IconToptal from "public/images/svg/Icon-Toptal.svg";
import IconTypescript from "public/images/svg/Icon-Typescript.svg";
import IconWebpack from "public/images/svg/Icon-Webpack.svg";
import IconOpera from "public/images/svg/Icon-Opera.svg";
import IconSafari from "public/images/svg/Icon-Safari.svg";
import IconUnknown from "public/images/svg/Icon-Unknown.svg";

import {
  IconComponents,
  IIconProps,
  SVGIcon
} from "components/atoms/@types/Icon";
import { trimTemplateLiteral } from "helpers/strings/trimTemplateLiteral";

const iconComponents: IconComponents = {
  apollo: IconApollo,
  brandNext: BrandNext,
  btnCodeSandbox: BtnCodeSandbox,
  btnDownload: BtnDownload,
  btnExternalLink: BtnExternalLink,
  calendar: IconCalendar,
  chrome: IconChrome,
  codeSandbox: IconCodeSandbox,
  companyDIH: CompanyDIH,
  companyOmise: CompanyOmise,
  companySAP: CompanySAP,
  companyShiji: CompanyShiji,
  companyTribe: CompanyTribe,
  earth: IconEarth,
  firefox: IconFirefox,
  gitHub: IconGitHub,
  graphql: IconGraphql,
  hexagon: Hexagon,
  hexagonWithPattern: HexagonWithPattern,
  ie: IconIE,
  javascript: IconJavascript,
  link: IconLink,
  linkedIn: IconLinkedIn,
  logo: IconLogo,
  logoShortcut: IconLogoShortcut,
  nodeIcon: IconNode,
  opera: IconOpera,
  react: IconReact,
  reactLogo: IconReactLogo,
  safari: IconSafari,
  toptal: IconToptal,
  typescript: IconTypescript,
  unknown: IconUnknown,
  webpack: IconWebpack
};

const iconNames: IIconProps["iconName"][] = [
  "apollo",
  "brandAfterEffects",
  "brandAirbnb",
  "brandApollo",
  "brandAuth0",
  "brandBasecamp",
  "brandBamboo",
  "brandBuildkite",
  "brandChakra",
  "brandCSS",
  "brandCSSModules",
  "brandCoffeeScript",
  "brandCorel",
  "brandCypress",
  "brandDocker",
  "brandDocpad",
  "brandEmber",
  "brandExpress",
  "brandFigma",
  "brandGallery",
  "brandGithub",
  "brandGitlab",
  "brandGraphQL",
  "brandGrunt",
  "brandGulp",
  "brandHTML",
  "brandJEST",
  "brandJIRA",
  "brandjQuery",
  "brandJS",
  "brandJenkins",
  "brandLESS",
  "brandNest",
  "brandNext",
  "brandNode",
  "brandPhabricator",
  "brandPhotoshop",
  "brandPrestaShop",
  "brandPrisma",
  "brandQuire",
  "brandQunit",
  "brandRails",
  "brandREST",
  "brandReact",
  "brandRedmine",
  "brandRedux",
  "brandRuby",
  "brandSass",
  "brandSinatra",
  "brandSketch",
  "brandStash",
  "brandStyledComponents",
  "brandTailwind",
  "brandTS",
  "brandTaskade",
  "brandTestingLibrary",
  "brandTrello",
  "brandWebpack",
  "brandWebsocket",
  "brandZeplin",
  "btnCodeSandbox",
  "btnDownload",
  "btnExternalLink",
  "calendar",
  "chrome",
  "codeSandbox",
  "companyDIH",
  "companyOmise",
  "companySAP",
  "companyShiji",
  "companyTribe",
  "earth",
  "firefox",
  "gitHub",
  "graphql",
  "hexagon",
  "hexagonWithPattern",
  "ie",
  "javascript",
  "link",
  "linkedIn",
  "logo",
  "logoShortcut",
  "nodeIcon",
  "opera",
  "react",
  "reactLogo",
  "safari",
  "toptal",
  "typescript",
  "unknown",
  "webpack"
];

const _Icon: React.ForwardRefRenderFunction<
  HTMLDivElement | HTMLImageElement,
  IIconProps
> = (
  {
    animation = "childrenSvg:animate-glow-slow",
    className,
    dataTestId,
    fill,
    glowAnimationTime = "childrenSvg:duration-slow",
    height = "h-auto",
    iconName,
    isActive = false,
    isHeightResponsive = false,
    isInlineSvg = false,
    isResponsive = false,
    overflow = "overflow-visible",
    shouldDisplayGlowAnimation = false,
    shouldGlow = false,
    shouldGlowOnHover = false,
    width = "w-auto"
  },
  ref
) => {
  const commonClasses = trimTemplateLiteral(`
    ${height.includes("h-") ? height : ""} 
    ${width.includes("w-") ? width : ""} 
    ${overflow}
    ${className || ""}
  `);

  if (iconName.includes("brand") && !isInlineSvg) {
    return (
      <picture
        className={trimTemplateLiteral(`
          ${commonClasses}
          relative
          my-0 mx-auto
        `)}
      >
        <img
          alt={iconName}
          className={commonClasses}
          data-cy={iconName}
          data-testid={dataTestId || "IconImage"}
          ref={ref as ForwardedRef<HTMLImageElement>}
          src={`/images/svg/${iconName}.svg`}
          style={{
            height: !height.includes("h-") ? height : undefined,
            width: !width.includes("w-") ? width : undefined
          }}
        />
      </picture>
    );
  }

  const IconComponent: SVGIcon =
    iconComponents[iconName as keyof IconComponents];

  return (
    <div
      className={trimTemplateLiteral(`
        ${commonClasses}
        ${
          isResponsive || isHeightResponsive
            ? "childrenSvg:h-full"
            : "childrenSvg:h-auto"
        }
        ${
          isResponsive && !isHeightResponsive
            ? "childrenSvg:w-full"
            : "childrenSvg:w-auto"
        }
        ${isActive && "childrenMask:fill-blue300 childrenPath:fill-blue300"}
        ${shouldDisplayGlowAnimation && animation}
        ${shouldGlow && "childrenSvg:drop-shadow-lg"}
        ${
          shouldGlowOnHover &&
          `
          childrenSvg:transition-all 
          childrenSvg:ease-in-out
          ${glowAnimationTime}

          childrenSvg:hover:drop-shadow-lg 
          childrenSvg:focus:drop-shadow-lg       
          childrenSvg:active:drop-shadow-lg       
        `
        }
      `)}
      data-cy={iconName}
      data-testid={dataTestId || "IconContainer"}
      ref={ref as ForwardedRef<HTMLDivElement>}
      style={{
        height: !height.includes("h-") ? height : undefined,
        width: !width.includes("w-") ? width : undefined
      }}
    >
      <IconComponent className={fill || ""} />
    </div>
  );
};

const Icon = forwardRef(_Icon);

export { Icon, iconComponents, iconNames };
