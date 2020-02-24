import React, { memo, FunctionComponent, SVGProps } from "react";
import styled, { css, FlattenSimpleInterpolation, StyledComponentBase, DefaultTheme } from "styled-components";
import { transparentize } from "polished";

import Link from "<atoms>/Link";

import { ReactComponent as Logo } from "<assets>/svg/Logo.svg";
import { ReactComponent as CodeSandbox } from "<assets>/svg/CodeSandbox.svg";
// import { ReactComponent as GitHub } from "<assets>/svg/GitHub.svg";
import { ReactComponent as LinkedIn } from "<assets>/svg/LinkedIn.svg";

export interface LinkWithIconProps {
  href: string;
  iconName: "logo" | "codeSandbox" | "gitHub" | "linkedIn";
  isExternal?: boolean;
}

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
    let icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;

    switch (iconName) {
    case "logo":
      icon = Logo;
      break;

    case "codeSandbox":
      icon = CodeSandbox;
      break;

      // case "gitHub":
      //   icon = GitHub;
      //   break;

    case "linkedIn":
      icon = LinkedIn;
      break;
    }

    type LinkIconType = string & StyledComponentBase<FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>, DefaultTheme, {}, never>;

    const LinkIcon: LinkIconType = styled(icon)`
      ${({
    // eslint-disable-next-line indent
        theme: {
      // eslint-disable-next-line indent
          colorPalette: { white },
      // eslint-disable-next-line indent
          easing: { easeInOut },
      // eslint-disable-next-line indent
          spacing: { spacing4, spacing48 },
      // eslint-disable-next-line indent
          transitionTimes
      // eslint-disable-next-line indent
        }
    // eslint-disable-next-line indent
      }): FlattenSimpleInterpolation => css`
        height: ${spacing48};
        transition: all ${transitionTimes.fast} ${easeInOut};
        width: auto;

        &:hover {
          filter: drop-shadow(0px 0px ${spacing4} ${transparentize(0.5, white)});
        }
      `}
    `;

    return (
      <LinkIcon />
    );
  }
}

  
export default memo(LinkWithIcon);