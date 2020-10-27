import React, { Fragment } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { Link as RouterLink } from "react-router-dom";

import Line from "UI/atoms/Line";

import PositionContainer from "UI/layout/PositionContainer";

import { LinkProps, LinkContainerProps } from "UI/molecules/__typings__/Link";

const Link = ({
  children,
  dataCy,
  dataTestId,
  display = "inline",
  height = "unset",
  href,
  isExternal = false,
  isHoverable = false,
  width
}: LinkProps): JSX.Element =>
  isExternal ? (
    <Link.ExternalLink
      data-cy={dataCy}
      data-testid={dataTestId || "Link"}
      display={display}
      height={height}
      href={href}
      target="_blank"
    >
      <Fragment>
        {children}

        {isHoverable && (
          <PositionContainer position="relative">
            <Line direction="left" />
            <Line direction="right" />
          </PositionContainer>
        )}
      </Fragment>
    </Link.ExternalLink>
  ) : (
    <Link.RouterLink
      data-cy={dataCy}
      data-testid={dataTestId || "Link"}
      display={display}
      height={height}
      width={width}
    >
      <RouterLink to={href}>
        <Fragment>
          {children}

          {isHoverable && (
            <PositionContainer position="relative">
              <Line direction="left" />
              <Line direction="right" />
            </PositionContainer>
          )}
        </Fragment>
      </RouterLink>
    </Link.RouterLink>
  );

Link.ExternalLink = styled.a<LinkContainerProps>`
  ${({
    display,
    height,
    theme: { spacing }
  }): FlattenSimpleInterpolation => css`
    display: ${display};
    height: ${(height in spacing && spacing[height]) || height};
    line-height: 1;

    &:hover .line {
      opacity: 1;
      visibility: visible;
      width: 50%;
    }
  `};
`;

Link.RouterLink = styled.span<LinkContainerProps>`
  ${({
    display,
    height,
    theme: { spacing },
    width
  }): FlattenSimpleInterpolation => css`
    display: ${display};
    height: ${(height in spacing && spacing[height]) || height};
    line-height: 1;
    width: ${(width in spacing && spacing[width]) || width};

    &:hover .line {
      opacity: 1;
      visibility: visible;
      width: 50%;
    }
  `};
`;

export default Link;
