import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import { ReactComponent as BtnCodeSandbox } from "<assets>/svg/Btn-CodeSandbox.svg";
import { ReactComponent as BtnDownload } from "<assets>/svg/Btn-Download.svg";
import { ReactComponent as BtnExternalLink } from "<assets>/svg/Btn-ExternalLink.svg";
import { ReactComponent as BtnSend } from "<assets>/svg/Btn-Send.svg";
import { ReactComponent as IconApollo } from "<assets>/svg/Icon-Apollo.svg";
import { ReactComponent as IconGraphql } from "<assets>/svg/Icon-Graphql.svg";
import { ReactComponent as IconJavascript } from "<assets>/svg/Icon-Javascript.svg";
import { ReactComponent as IconNode } from "<assets>/svg/Icon-Node.svg";
import { ReactComponent as IconReact } from "<assets>/svg/Icon-React.svg";
import { ReactComponent as IconTypescript } from "<assets>/svg/Icon-Typescript.svg";
import { ReactComponent as IconWebpack } from "<assets>/svg/Icon-Webpack.svg";
import { ReactComponent as IconLogo } from "<assets>/svg/Icon-Logo.svg";
import { ReactComponent as IconCodeSandbox } from "<assets>/svg/Icon-CodeSandbox.svg";
import { ReactComponent as IconGitHub } from "<assets>/svg/Icon-GitHub.svg";
import { ReactComponent as IconLinkedIn } from "<assets>/svg/Icon-LinkedIn.svg";
import { ReactComponent as IconChrome } from "<assets>/svg/Icon-Chrome.svg";
import { ReactComponent as IconFirefox } from "<assets>/svg/Icon-Firefox.svg";
import { ReactComponent as IconIE } from "<assets>/svg/Icon-IE.svg";
import { ReactComponent as IconOpera } from "<assets>/svg/Icon-Opera.svg";
import { ReactComponent as IconSafari } from "<assets>/svg/Icon-Safari.svg";
import { ReactComponent as IconUnknown } from "<assets>/svg/Icon-Unknown.svg";

import {
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
  isBrowserIcon = false,
  shouldDisplayGlowAnimation = false,
  shouldGlowOnHover = false,
  width = "auto"
}: IconProps): JSX.Element {
  const iconComponents = {
    apollo: IconApollo,
    btnCodeSandbox: BtnCodeSandbox,
    btnDownload: BtnDownload,
    btnExternalLink: BtnExternalLink,
    btnSend: BtnSend,
    chrome: IconChrome,
    codeSandbox: IconCodeSandbox,
    firefox: IconFirefox,
    gitHub: IconGitHub,
    graphql: IconGraphql,
    ie: IconIE,
    javascript: IconJavascript,
    linkedIn: IconLinkedIn,
    logo: IconLogo,
    node: IconNode,
    opera: IconOpera,
    react: IconReact,
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
      isBrowserIcon={isBrowserIcon}
      shouldDisplayGlowAnimation={shouldDisplayGlowAnimation}
      shouldGlowOnHover={shouldGlowOnHover}
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
    isBrowserIcon,
    shouldDisplayGlowAnimation,
    shouldGlowOnHover,
    theme: {
      colorPalette: { blue300, white },
      easing,
      keyframes,
      spacing,
      transitionTimes
    },
    width
  }): FlattenSimpleInterpolation => css`
    height: ${(height in spacing && spacing[height]) || height};
    width: ${(width in spacing && spacing[width]) || width};

    ${isBrowserIcon && `
      svg {
        height: 100%;
        width: 100%;
      }
    `}

    & > * {
      ${shouldDisplayGlowAnimation && css`
        animation-delay: ${animationDelay};
        animation-duration: ${transitionTimes[animationTime]};
        animation-iteration-count: infinite;
        animation-name: ${keyframes.glow};
        animation-timing-function: ${easing.easeInOut};
      `}
  
      ${shouldGlowOnHover && `
        transition: all ${transitionTimes[animationTime]} ${easing.easeInOut} ${animationDelay};
  
        &:hover {
          filter: drop-shadow(0px 0px ${spacing.spacing4} ${transparentize(0.5, white)});
        }
      `}
    }

    ${isActive && `
      svg path {
        fill: ${blue300};
      }
    `}
  `}
`;

export default memo(Icon);