import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { LinkProps } from "<atoms>/__typings__/Link";

const Link = ({
  children,
  display = "inline",
  height = "unset",
  href,
  isExternal = false
}: LinkProps): JSX.Element => (
  <Link.Container
    data-testid="Link"
    display={display}
    height={height}
    href={href}
    target={isExternal ? "_blank" : "_self"}
  >
    {children}
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
  `}
`;
  
export default Link;