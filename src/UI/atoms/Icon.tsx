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

import {
  IconContainerType,
  IconProps
} from "<atoms>/__typings__/Icon";

function Icon({
  animationDelay = "0ms",
  animationTime = "slow",
  height,
  iconName,
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
    codeSandbox: IconCodeSandbox,
    gitHub: IconGitHub,
    graphql: IconGraphql,
    javascript: IconJavascript,
    linkedIn: IconLinkedIn,
    logo: IconLogo,
    node: IconNode,
    react: IconReact,
    typescript: IconTypescript,
    webpack: IconWebpack
  };
  
  return (
    renderIcon()
  );

  function renderIcon(): JSX.Element {
    const IconContainer: IconContainerType = styled(iconComponents[iconName])`
      ${({ theme: { colorPalette, easing, keyframes, spacing, transitionTimes } }): FlattenSimpleInterpolation => css`
        height: ${height in spacing && spacing[height]};
        width: ${(width in spacing && spacing[width]) || width};

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
            filter: drop-shadow(0px 0px ${spacing.spacing4} ${transparentize(0.5, colorPalette.white)});
          }
        `}
      `}
    `;

    return (
      <IconContainer />
    );
  }
}

export default memo(Icon);