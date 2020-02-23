import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import spacing from "<styles>/variables/spacing";

type SpacingKeys = keyof typeof spacing;

export interface LinkProps {
  children: JSX.Element | JSX.Element[] | string;
  display?: "block" | "inline";
  height?: typeof spacing[SpacingKeys] | "unset" | "50%" | "100%";
  href: string;
  isExternal?: boolean;
}

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