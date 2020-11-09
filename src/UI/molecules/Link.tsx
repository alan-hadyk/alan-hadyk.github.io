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

import Line from "UI/atoms/Line";
import PositionContainer from "UI/layout/PositionContainer";

import spacing from "styles/variables/spacing";

import { LinkProps, LinkContainerProps } from "UI/molecules/__typings__/Link";

const linkStyles: FlattenInterpolation<ThemedStyledProps<
  Partial<LinkProps>,
  DefaultTheme
>> = css<LinkContainerProps>`
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

const LinkExternal = styled.a<LinkContainerProps>`
  ${linkStyles};
`;

const LinkRouter = styled.span<LinkContainerProps>`
  ${linkStyles};
`;

function Link({
  children,
  dataCy,
  dataTestId,
  display = "inline",
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

  return (
    <LinkComponent
      className={getComponentType()}
      data-cy={dataCy}
      data-testid={dataTestId || getComponentType()}
      display={display}
      height={height}
      href={isExternal ? href : ""}
      target={isExternal ? "_blank" : "_self"}
      width={width}
    >
      {isExternal ? (
        renderChildren()
      ) : (
        <RouterLink to={href}>{renderChildren()}</RouterLink>
      )}
    </LinkComponent>
  );

  function renderChildren() {
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
