import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import spacing from "<styles>/variables/spacing";

type SpacingKeys = keyof typeof spacing;

export interface LinkProps {
  children: JSX.Element | JSX.Element[] | string;
  height?: typeof spacing[SpacingKeys] | "unset" | "50%" | "100%";
  href?: string;
  onClick?: VoidFunction;
  isExternal?: boolean;
}

const Link = ({
  children,
  height = "unset",
  href,
  onClick,
  isExternal = false
}: LinkProps): JSX.Element => (
  <Link.Container
    height={height}
    href={!onClick && href}
    onClick={onClick}
    target={isExternal ? "_blank" : "_self"}
  >
    {children}
  </Link.Container>
);

Link.Container = styled.a<LinkProps>`
  ${({
    height,
    theme: {
      spacing
    }
  }): FlattenSimpleInterpolation => css`
    height: ${(height in spacing && spacing[height]) || height};
    line-height: 1;
  `}
`;
  
export default Link;