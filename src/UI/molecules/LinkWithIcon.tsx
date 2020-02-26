import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import Link from "<atoms>/Link";

import { ReactComponent as Logo } from "<assets>/svg/Icon-Logo.svg";
import { ReactComponent as CodeSandbox } from "<assets>/svg/Icon-CodeSandbox.svg";
import { ReactComponent as GitHub } from "<assets>/svg/Icon-GitHub.svg";
import { ReactComponent as LinkedIn } from "<assets>/svg/Icon-LinkedIn.svg";

import {
  LinkWithIconProps,
  MapIconNameToIcon,
  LinkIconType
} from "<molecules>/__typings__/LinkWithIcon";

function LinkWithIcon({
  href,
  iconName,
  isExternal = false
}: LinkWithIconProps): JSX.Element {
  return (
    <Link 
      display="block"
      height="spacing48"
      href={href}
      isExternal={isExternal}
    >
      {renderIcon()}
    </Link>
  );

  function renderIcon(): JSX.Element {
    const mapIconNameToIcon: MapIconNameToIcon = {
      codeSandbox: CodeSandbox,
      gitHub: GitHub,
      linkedIn: LinkedIn,
      logo: Logo
    };

    const LinkIcon: LinkIconType = styled(mapIconNameToIcon[iconName])`
      ${({ theme: { colorPalette, easing, spacing, transitionTimes } }): FlattenSimpleInterpolation => css`
        height: ${spacing.spacing48};
        transition: all ${transitionTimes.fast} ${easing.easeInOut};
        width: auto;

        &:hover {
          filter: drop-shadow(0px 0px ${spacing.spacing4} ${transparentize(0.5, colorPalette.white)});
        }
      `}
    `;

    return (
      <LinkIcon />
    );
  }
}

  
export default memo(LinkWithIcon);