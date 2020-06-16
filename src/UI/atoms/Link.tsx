import React, { Fragment } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import PositionContainer from "<layout>/PositionContainer";

import {
  LinkProps,
  LinkLineProps
} from "<atoms>/__typings__/Link.d.ts";

const Link = ({
  children,
  display = "inline",
  height = "unset",
  href,
  isExternal = false,
  isHovered = false
}: LinkProps): JSX.Element => (
  <Link.Container
    data-testid="Link"
    display={display}
    height={height}
    href={href}
    target={isExternal ? "_blank" : "_self"}
  >
    <Fragment>
      {children}

      {isHovered && (
        <PositionContainer 
          position="relative"
        >
          <Link.Line 
            direction="left" 
          />
          <Link.Line 
            direction="right" 
          />
        </PositionContainer>
      )}
    </Fragment>
  </Link.Container>
);

Link.Container = styled.a<LinkProps>`
  ${({
    display,
    height,
    theme: {
      spacing
    }
  }): FlattenSimpleInterpolation => css`
    display: ${display};
    height: ${(height in spacing && spacing[height]) || height};
    line-height: 1;

    &:hover span {
      opacity: 1;
      visibility: visible;
      width: 50%;
    }
  `}
`;

Link.Line = styled.span<LinkLineProps>`
  ${({
    direction,
    theme: {
      colorPalette: { blue100, white },
      easing: { easeInOut },
      spacing: { spacing4 },
      transitionTimes,
      zIndex
    }
  }): FlattenSimpleInterpolation => css`
    background-color: ${white};
    bottom: -10px;
    box-shadow: 0px 0px ${spacing4} 0px ${blue100};
    display: block;
    height: 1px;
    opacity: 0;
    position: absolute;
    transition: all ${transitionTimes.fast} ${easeInOut};
    visibility: hidden;
    width: 0;
    z-index: ${zIndex.layer1};

    ${direction === "left" && "left: 50%;"}
    ${direction === "right" && "right: 50%;"}
  `}
`;
  
export default Link;