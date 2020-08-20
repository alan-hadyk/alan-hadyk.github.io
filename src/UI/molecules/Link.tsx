import React, { Fragment } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Line from "<atoms>/Line";

import PositionContainer from "<layout>/PositionContainer";

import {
  LinkProps
} from "<molecules>/__typings__/Link.d.ts";

const Link = ({
  children,
  display = "inline",
  height = "unset",
  href,
  isExternal = false,
  isHoverable = false,
  overflow
}: LinkProps): JSX.Element => (
  <Link.Container
    data-testid="Link"
    display={display}
    height={height}
    href={href}
    overflow={overflow}
    target={isExternal ? "_blank" : "_self"}
  >
    <Fragment>
      {children}

      {isHoverable && (
        <PositionContainer 
          position="relative"
        >
          <Line
            direction="left" 
          />
          <Line
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
    },
    overflow
  }): FlattenSimpleInterpolation => css`
    display: ${display};
    height: ${(height in spacing && spacing[height]) || height};
    line-height: 1;
    overflow: ${overflow};

    &:hover .line {
      opacity: 1;
      visibility: visible;
      width: 50%;
    }
  `}
`;
  
export default Link;