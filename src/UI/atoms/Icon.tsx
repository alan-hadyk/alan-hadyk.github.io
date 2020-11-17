import React, { forwardRef, Ref } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import transparentize from "polished/lib/color/transparentize";

import { ReactComponent as BtnCodeSandbox } from "assets/svg/Btn-CodeSandbox.svg";
import { ReactComponent as BtnDownload } from "assets/svg/Btn-Download.svg";
import { ReactComponent as BtnExternalLink } from "assets/svg/Btn-ExternalLink.svg";
import { ReactComponent as CompanyDIH } from "assets/svg/Company-DiH.svg";
import { ReactComponent as CompanyOmise } from "assets/svg/Company-Omise.svg";
import { ReactComponent as CompanySAP } from "assets/svg/Company-SAP.svg";
import { ReactComponent as CompanyShiji } from "assets/svg/Company-Shiji.svg";
import { ReactComponent as Hexagon } from "assets/svg/Hexagon.svg";
import { ReactComponent as HexagonWithPattern } from "assets/svg/Hexagon-With-Pattern.svg";
import { ReactComponent as IconApollo } from "assets/svg/Icon-Apollo.svg";
import { ReactComponent as IconCalendar } from "assets/svg/Icon-Calendar.svg";
import { ReactComponent as IconCodeSandbox } from "assets/svg/Icon-CodeSandbox.svg";
import { ReactComponent as IconEarth } from "assets/svg/Icon-Earth.svg";
import { ReactComponent as IconChrome } from "assets/svg/Icon-Chrome.svg";
import { ReactComponent as IconFirefox } from "assets/svg/Icon-Firefox.svg";
import { ReactComponent as IconGitHub } from "assets/svg/Icon-GitHub.svg";
import { ReactComponent as IconGraphql } from "assets/svg/Icon-Graphql.svg";
import { ReactComponent as IconIE } from "assets/svg/Icon-IE.svg";
import { ReactComponent as IconJavascript } from "assets/svg/Icon-Javascript.svg";
import { ReactComponent as IconLinkedIn } from "assets/svg/Icon-LinkedIn.svg";
import { ReactComponent as IconLogo } from "assets/svg/Icon-Logo.svg";
import { ReactComponent as IconLogoShortcut } from "assets/svg/Icon-Logo-Shortcut.svg";
import { ReactComponent as IconNode } from "assets/svg/Icon-Node.svg";
import { ReactComponent as IconReact } from "assets/svg/Icon-React.svg";
import { ReactComponent as IconReactLogo } from "assets/svg/Icon-ReactLogo.svg";
import { ReactComponent as IconTypescript } from "assets/svg/Icon-Typescript.svg";
import { ReactComponent as IconWebpack } from "assets/svg/Icon-Webpack.svg";
import { ReactComponent as IconOpera } from "assets/svg/Icon-Opera.svg";
import { ReactComponent as IconSafari } from "assets/svg/Icon-Safari.svg";
import { ReactComponent as IconUnknown } from "assets/svg/Icon-Unknown.svg";

import spacing from "styles/variables/spacing";

import {
  IconComponents,
  IconContainerProps,
  IconImageAdditionalProps,
  IconImageProps,
  IconProps,
  SVGIcon
} from "UI/atoms/__typings__/Icon";

export const iconComponents: IconComponents = {
  apollo: IconApollo,
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
  earth: IconEarth,
  firefox: IconFirefox,
  gitHub: IconGitHub,
  graphql: IconGraphql,
  hexagon: Hexagon,
  hexagonWithPattern: HexagonWithPattern,
  ie: IconIE,
  javascript: IconJavascript,
  linkedIn: IconLinkedIn,
  logo: IconLogo,
  logoShortcut: IconLogoShortcut,
  node: IconNode,
  opera: IconOpera,
  react: IconReact,
  reactLogo: IconReactLogo,
  safari: IconSafari,
  typescript: IconTypescript,
  unknown: IconUnknown,
  webpack: IconWebpack
};

export const iconNames: IconProps["iconName"][] = [
  "apollo",
  "brandAfterEffects",
  "brandAirbnb",
  "brandApollo",
  "brandBasecamp",
  "brandBamboo",
  "brandBuildkite",
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
  "brandJQuery",
  "brandJS",
  "brandJenkins",
  "brandLESS",
  "brandNode",
  "brandPhabricator",
  "brandPhotoshop",
  "brandPrestaShop",
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
  "earth",
  "firefox",
  "gitHub",
  "graphql",
  "hexagon",
  "hexagonWithPattern",
  "ie",
  "javascript",
  "linkedIn",
  "logo",
  "logoShortcut",
  "node",
  "opera",
  "react",
  "reactLogo",
  "safari",
  "typescript",
  "unknown",
  "webpack"
];

const IconContainer = styled.div<IconContainerProps>`
  ${({
    animationDelay,
    animationTime,
    height,
    isActive,
    isHeightResponsive,
    isResponsive,
    overflow,
    shouldDisplayGlowAnimation,
    shouldGlow,
    shouldGlowOnHover,
    theme: {
      colorPalette: { blue300, white },
      easing: { easeInOut },
      keyframes: { glow },
      spacing,
      transitionTimes
    },
    width
  }): FlattenSimpleInterpolation => css`
    height: ${(height in spacing && spacing[height]) || height};
    overflow: ${overflow};
    width: ${(width in spacing && spacing[width]) || width};

    svg {
      height: ${isResponsive || isHeightResponsive ? "100%" : "auto"};
      width: ${isResponsive && !isHeightResponsive ? "100%" : "auto"};

      ${isActive &&
      css`
        mask {
          fill: ${blue300};
        }
        path {
          fill: ${blue300};
        }
      `}

      ${shouldDisplayGlowAnimation &&
      css`
        animation-delay: ${animationDelay};
        animation-duration: ${transitionTimes[animationTime]};
        animation-iteration-count: infinite;
        animation-name: ${glow};
        animation-timing-function: ${easeInOut};
      `}
    
      ${shouldGlow &&
      `
        filter: drop-shadow(0px 0px ${spacing.spacing4} ${transparentize(
  0.5,
  white
)});
      `}

      ${shouldGlowOnHover &&
      `
        transition: all ${
  transitionTimes[animationTime]
} ${easeInOut} ${animationDelay};
  
        &:hover, &:focus, &:active {
          filter: drop-shadow(0px 0px ${spacing.spacing4} ${transparentize(
  0.5,
  white
)});
        }
      `}
    }
  `};
`;

const IconImage = styled.img<IconImageProps>`
  ${({ heightValue, overflow, widthValue }): FlattenSimpleInterpolation => css`
    height: ${heightValue};
    margin: 0 auto;
    overflow: ${overflow};
    width: ${widthValue};
  `};
`;

function Icon(
  {
    animationDelay = "0ms",
    animationTime = "slow",
    dataTestId,
    height = "auto",
    iconName,
    isActive = false,
    isHeightResponsive = false,
    isResponsive = false,
    overflow = "visible",
    shouldDisplayGlowAnimation = false,
    shouldGlow = false,
    shouldGlowOnHover = false,
    width = "auto"
  }: IconProps,
  ref: Ref<SVGSVGElement>
): JSX.Element {
  if (iconName.includes("brand")) {
    const iconImageAdditionalProps: IconImageAdditionalProps = {
      ...(height in spacing && {
        height: parseInt(height.replace("spacing", ""))
      }),
      ...(width in spacing && {
        width: parseInt(width.replace("spacing", ""))
      })
    };

    return (
      <IconImage
        alt={iconName}
        data-cy={iconName}
        data-testid={dataTestId || "IconImage"}
        heightValue={(height in spacing && spacing[height]) || height}
        overflow={overflow}
        src={`/images/svg/${iconName}.svg`}
        widthValue={(width in spacing && spacing[width]) || width}
        {...iconImageAdditionalProps}
      />
    );
  }
  const IconComponent: SVGIcon = iconComponents[iconName];

  return (
    <IconContainer
      data-cy={iconName}
      data-testid={dataTestId || "IconContainer"}
      animationDelay={animationDelay}
      animationTime={animationTime}
      height={height}
      isActive={isActive}
      isHeightResponsive={isHeightResponsive}
      isResponsive={isResponsive}
      overflow={overflow}
      shouldDisplayGlowAnimation={shouldDisplayGlowAnimation}
      shouldGlow={shouldGlow}
      shouldGlowOnHover={shouldGlowOnHover}
      width={width}
    >
      <IconComponent ref={ref} />
    </IconContainer>
  );
}

export default forwardRef(Icon);
