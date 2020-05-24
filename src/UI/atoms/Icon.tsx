import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import { ReactComponent as BrandApollo } from "<assets>/svg/Brand-Apollo.svg";
import { ReactComponent as BrandCypress } from "<assets>/svg/Brand-Cypress.svg";
import { ReactComponent as BrandDocker } from "<assets>/svg/Brand-Docker.svg";
import { ReactComponent as BrandExpress } from "<assets>/svg/Brand-Express.svg";
import { ReactComponent as BrandGallery } from "<assets>/svg/Brand-Gallery.svg";
import { ReactComponent as BrandGraphQL } from "<assets>/svg/Brand-GraphQL.svg";
import { ReactComponent as BrandJEST } from "<assets>/svg/Brand-JEST.svg";
import { ReactComponent as BrandJS } from "<assets>/svg/Brand-JS.svg";
import { ReactComponent as BrandJenkins } from "<assets>/svg/Brand-Jenkins.svg";
import { ReactComponent as BrandNode } from "<assets>/svg/Brand-Node.svg";
import { ReactComponent as BrandReact } from "<assets>/svg/Brand-React.svg";
import { ReactComponent as BrandStyledComponents } from "<assets>/svg/Brand-StyledComponents.svg";
import { ReactComponent as BrandTestingLibrary } from "<assets>/svg/Brand-TestingLibrary.svg";
import { ReactComponent as BrandWebpack } from "<assets>/svg/Brand-Webpack.svg";
import { ReactComponent as BtnCodeSandbox } from "<assets>/svg/Btn-CodeSandbox.svg";
import { ReactComponent as BtnDownload } from "<assets>/svg/Btn-Download.svg";
import { ReactComponent as BtnExternalLink } from "<assets>/svg/Btn-ExternalLink.svg";
import { ReactComponent as BtnSend } from "<assets>/svg/Btn-Send.svg";
import { ReactComponent as CompanyOmise } from "<assets>/svg/Company-Omise.svg";
import { ReactComponent as Hexagon } from "<assets>/svg/Hexagon.svg";
import { ReactComponent as HexagonWithPattern } from "<assets>/svg/Hexagon-With-Pattern.svg";
import { ReactComponent as IconApollo } from "<assets>/svg/Icon-Apollo.svg";
import { ReactComponent as IconCalendar } from "<assets>/svg/Icon-Calendar.svg";
import { ReactComponent as IconCodeSandbox } from "<assets>/svg/Icon-CodeSandbox.svg";
import { ReactComponent as IconEarth } from "<assets>/svg/Icon-Earth.svg";
import { ReactComponent as IconChrome } from "<assets>/svg/Icon-Chrome.svg";
import { ReactComponent as IconFirefox } from "<assets>/svg/Icon-Firefox.svg";
import { ReactComponent as IconGitHub } from "<assets>/svg/Icon-GitHub.svg";
import { ReactComponent as IconGraphql } from "<assets>/svg/Icon-Graphql.svg";
import { ReactComponent as IconIE } from "<assets>/svg/Icon-IE.svg";
import { ReactComponent as IconJavascript } from "<assets>/svg/Icon-Javascript.svg";
import { ReactComponent as IconLinkedIn } from "<assets>/svg/Icon-LinkedIn.svg";
import { ReactComponent as IconLogo } from "<assets>/svg/Icon-Logo.svg";
import { ReactComponent as IconNode } from "<assets>/svg/Icon-Node.svg";
import { ReactComponent as IconReact } from "<assets>/svg/Icon-React.svg";
import { ReactComponent as IconReactLogo } from "<assets>/svg/Icon-ReactLogo.svg";
import { ReactComponent as IconTypescript } from "<assets>/svg/Icon-Typescript.svg";
import { ReactComponent as IconWebpack } from "<assets>/svg/Icon-Webpack.svg";
import { ReactComponent as IconOpera } from "<assets>/svg/Icon-Opera.svg";
import { ReactComponent as IconSafari } from "<assets>/svg/Icon-Safari.svg";
import { ReactComponent as IconUnknown } from "<assets>/svg/Icon-Unknown.svg";

import {
  IconComponents,
  IconContainerProps,
  IconProps,
  SVGIcon
} from "<atoms>/__typings__/Icon.d.ts";

function Icon({
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
  shouldRotate = false,
  width = "auto"
}: IconProps): JSX.Element {
  const iconComponents: IconComponents = {
    apollo: IconApollo,
    brandApollo: BrandApollo,
    brandCypress: BrandCypress,
    brandDocker: BrandDocker,
    brandExpress: BrandExpress,
    brandGallery: BrandGallery,
    brandGraphQL: BrandGraphQL,
    brandJEST: BrandJEST,
    brandJS: BrandJS,
    brandJenkins: BrandJenkins,
    brandNode: BrandNode,
    brandReact: BrandReact,
    brandStyledComponents: BrandStyledComponents,
    brandTestingLibrary: BrandTestingLibrary,
    brandWebpack: BrandWebpack,
    btnCodeSandbox: BtnCodeSandbox,
    btnDownload: BtnDownload,
    btnExternalLink: BtnExternalLink,
    btnSend: BtnSend,
    calendar: IconCalendar,
    chrome: IconChrome,
    codeSandbox: IconCodeSandbox,
    companyOmise: CompanyOmise,
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
    node: IconNode,
    opera: IconOpera,
    react: IconReact,
    reactLogo: IconReactLogo,
    safari: IconSafari,
    typescript: IconTypescript,
    unknown: IconUnknown,
    webpack: IconWebpack
  };

  const IconComponent: SVGIcon = iconComponents[iconName];

  return (
    <Icon.Container
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
      shouldRotate={shouldRotate}
      width={width}
    >
      <IconComponent />
    </Icon.Container>
  );
}

Icon.Container = styled.div<IconContainerProps>`
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
    shouldRotate,
    theme: {
      colorPalette: {
        blue300,
        white
      },
      easing: {
        easeInOut,
        linear
      },
      keyframes: {
        glow,
        rotate
      },
      spacing,
      transitionTimes
    },
    width
  }): FlattenSimpleInterpolation => css`
    height: ${(height in spacing && spacing[height]) || height};
    overflow: ${overflow};
    width: ${(width in spacing && spacing[width]) || width};

    ${shouldRotate && css`
      animation-duration: ${transitionTimes.verySlow};
      animation-iteration-count: infinite;
      animation-name: ${rotate};
      animation-timing-function: ${linear};
    `}

    svg {
      height: ${isResponsive || isHeightResponsive ? "100%" : "auto"};
      width: ${(isResponsive && !isHeightResponsive) ? "100%" : "auto"};

      ${isActive && css`
        path {
          fill: ${blue300};
        }
      `}

      ${shouldDisplayGlowAnimation && css`
        animation-delay: ${animationDelay};
        animation-duration: ${transitionTimes[animationTime]};
        animation-iteration-count: infinite;
        animation-name: ${glow};
        animation-timing-function: ${easeInOut};
      `}
    
      ${shouldGlow && `
        filter: drop-shadow(0px 0px ${spacing.spacing4} ${transparentize(0.5, white)});
      `}

      ${shouldGlowOnHover && `
        transition: all ${transitionTimes[animationTime]} ${easeInOut} ${animationDelay};
  
        &:hover {
          filter: drop-shadow(0px 0px ${spacing.spacing4} ${transparentize(0.5, white)});
        }
      `}
    }
  `}
`;

export default memo(Icon);