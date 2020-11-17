import React, { Fragment, useCallback } from "react";
import styled, {
  css,
  DefaultTheme,
  FlattenInterpolation,
  FlattenSimpleInterpolation,
  ThemedStyledProps
} from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import PropTypes from "prop-types";
import transparentize from "polished/lib/color/transparentize";

import Line from "UI/atoms/Line";
import PositionContainer from "UI/layout/PositionContainer";

import spacing from "styles/variables/spacing";

import {
  LinkProps,
  LinkContainerProps,
  RenderChildrenArgs
} from "UI/molecules/__typings__/Link";

const linkStyles: FlattenInterpolation<ThemedStyledProps<
  Partial<LinkProps>,
  DefaultTheme
>> = css<LinkContainerProps>`
  ${({
    display,
    height,
    theme: {
      colorPalette: { white },
      spacing
    },
    width
  }): FlattenSimpleInterpolation => css`
    display: ${display};
    height: ${(height in spacing && spacing[height]) || height};
    line-height: 1;
    width: ${(width in spacing && spacing[width]) || width};

    &:hover .line,
    &:focus .line,
    &:active .line {
      opacity: 1;
      visibility: visible;
      width: 50%;
    }

    &:focus svg,
    &:active svg {
      filter: drop-shadow(
        0px 0px ${spacing.spacing4} ${transparentize(0.5, white)}
      );
    }
  `};
`;

const LinkExternal = styled.a<LinkContainerProps>`
  ${linkStyles};
`;

const LinkRouter = styled(RouterLink)<LinkContainerProps>`
  ${linkStyles};
`;

function Link({
  children,
  dataCy,
  dataTestId,
  display = "block",
  height = "unset",
  href,
  isExternal = false,
  isHoverable = false,
  width = "unset"
}: LinkProps): JSX.Element {
  const getComponentType = useCallback(
    () => (isExternal ? "ExternalLink" : "RouterLink"),
    [isExternal]
  );
  const LinkComponent = isExternal ? LinkExternal : LinkRouter;
  const linkAdditionalProps: LinkContainerProps = {
    ...(isExternal && {
      href: href
    })
  };

  return (
    <LinkComponent
      aria-label={dataCy || dataTestId}
      className={getComponentType()}
      data-cy={dataCy}
      data-testid={dataTestId || getComponentType()}
      display={display}
      height={height}
      tabIndex={0}
      target={isExternal ? "_blank" : "_self"}
      to={href}
      width={width}
      {...linkAdditionalProps}
    >
      {renderChildren({ children, isHoverable })}
    </LinkComponent>
  );
}

function renderChildren({
  children,
  isHoverable
}: RenderChildrenArgs): JSX.Element {
  return (
    <Fragment>
      {children}

      {isHoverable && (
        <PositionContainer position="relative">
          <Line direction="left" />
          <Line direction="right" />
        </PositionContainer>
      )}
    </Fragment>
  );
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  dataCy: PropTypes.string,
  dataTestId: PropTypes.string,
  display: PropTypes.oneOf(["block", "inline"]),
  height: PropTypes.oneOf([...Object.keys(spacing), "unset", "50%", "auto"]),
  href: PropTypes.string.isRequired,
  isExternal: PropTypes.bool,
  isHoverable: PropTypes.bool,
  width: PropTypes.string
};

export default Link;
