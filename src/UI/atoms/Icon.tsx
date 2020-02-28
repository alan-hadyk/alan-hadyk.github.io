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
  IconContainerProps,
  IconContainerType,
  IconProps
} from "<atoms>/__typings__/Icon.d.ts";

// TODO: UPDATE TESTS FOR THIS COMPONENT!

function Icon({
  height,
  iconName,
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
    const IconContainer: IconContainerType = styled(iconComponents[iconName])<IconContainerProps>`
      ${({ iconheight, iconwidth, theme: { colorPalette, spacing, easing, transitionTimes } }): FlattenSimpleInterpolation => css`
          height: ${iconheight in spacing && spacing[iconheight]};
          width: ${iconwidth};

          ${shouldGlowOnHover && `
            transition: all ${transitionTimes.fast} ${easing.easeInOut};

            &:hover {
              filter: drop-shadow(0px 0px ${spacing.spacing4} ${transparentize(0.5, colorPalette.white)});
            }
          `}
      `}
    `;

    return (
      <IconContainer 
        iconheight={height}
        iconwidth={width} 
      />
    );
  }
}

export default memo(Icon);