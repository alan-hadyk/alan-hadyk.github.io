import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import { ReactComponent as BrandJS } from "<assets>/svg/Brand-JS.svg";
import { ReactComponent as BrandReact } from "<assets>/svg/Brand-React.svg";
import { ReactComponent as BrandWebpack } from "<assets>/svg/Brand-Webpack.svg";
import { ReactComponent as BtnCodeSandbox } from "<assets>/svg/Btn-CodeSandbox.svg";
import { ReactComponent as BtnDownload } from "<assets>/svg/Btn-Download.svg";
import { ReactComponent as BtnExternalLink } from "<assets>/svg/Btn-ExternalLink.svg";
import { ReactComponent as BtnSend } from "<assets>/svg/Btn-Send.svg";
import { ReactComponent as Hexagon } from "<assets>/svg/Hexagon-Vector.svg";
import { ReactComponent as IconApollo } from "<assets>/svg/Icon-Apollo.svg";
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
  height = "auto",
  iconName,
  isActive = false,
  isHeightResponsive = false,
  isResponsive = false,
  overflow = "visible",
  shouldDisplayGlowAnimation = false,
  shouldGlowOnHover = false,
  shouldRotate = false,
  width = "auto"
}: IconProps): JSX.Element {
  const iconComponents: IconComponents = {
    apollo: IconApollo,
    brandJS: BrandJS,
    brandReact: BrandReact,
    brandWebpack: BrandWebpack,
    btnCodeSandbox: BtnCodeSandbox,
    btnDownload: BtnDownload,
    btnExternalLink: BtnExternalLink,
    btnSend: BtnSend,
    chrome: IconChrome,
    codeSandbox: IconCodeSandbox,
    earth: IconEarth,
    firefox: IconFirefox,
    gitHub: IconGitHub,
    graphql: IconGraphql,
    hexagon: Hexagon,
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
      data-testid="IconContainer"
      animationDelay={animationDelay}
      animationTime={animationTime}
      height={height}
      isActive={isActive}
      isHeightResponsive={isHeightResponsive}
      isResponsive={isResponsive}
      overflow={overflow}
      shouldDisplayGlowAnimation={shouldDisplayGlowAnimation}
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
    shouldGlowOnHover,
    shouldRotate,
    theme: {
      colorPalette: { blue300, white },
      easing: { easeInOut, linear },
      keyframes: { glow, rotate },
      spacing,
      transitionTimes
    },
    width
  }): FlattenSimpleInterpolation => css`
    height: ${(height in spacing && spacing[height]) || height};
    overflow: ${overflow};
    width: ${(width in spacing && spacing[width]) || width};

    ${isActive && css`
      svg path {
        fill: ${blue300};
      }
    `}

    svg {
      height: ${isResponsive || isHeightResponsive  ? "100%" : "auto"};
      width: ${(isResponsive && !isHeightResponsive)  ? "100%" : "auto"};
    }

    ${shouldRotate && css`
      animation-duration: ${transitionTimes.verySlow};
      animation-iteration-count: infinite;
      animation-name: ${rotate};
      animation-timing-function: ${linear};
    `}

    & > * {
      ${shouldDisplayGlowAnimation && css`
        animation-delay: ${animationDelay};
        animation-duration: ${transitionTimes[animationTime]};
        animation-iteration-count: infinite;
        animation-name: ${glow};
        animation-timing-function: ${easeInOut};
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

export default Icon;