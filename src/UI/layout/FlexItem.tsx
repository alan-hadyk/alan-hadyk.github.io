import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import { FlexItemProps } from "UI/layout/__typings__/FlexItem";

const FlexItemContainer = styled.div<FlexItemProps>`
  ${({
    alignSelf,
    flex,
    height,
    order,
    overflow,
    paddingBottom,
    paddingTop,
    theme: { spacing }
  }): FlattenSimpleInterpolation => css`
    align-self: ${alignSelf};
    flex: ${flex};
    height: ${(height in spacing && spacing[height]) || height};
    order: ${order};
    overflow: ${overflow};
    padding-bottom: ${(paddingBottom in spacing && spacing[paddingBottom]) ||
    paddingBottom};
    padding-top: ${(paddingTop in spacing && spacing[paddingTop]) ||
    paddingTop};
  `};
`;

const FlexItem = ({
  alignSelf = "auto",
  children,
  className,
  dataCy,
  dataTestId,
  flex,
  height = "unset",
  order = 0,
  overflow = "auto",
  paddingBottom = "spacing0",
  paddingTop = "spacing0"
}: FlexItemProps): JSX.Element => (
  <FlexItemContainer
    alignSelf={alignSelf}
    className={className}
    data-cy={dataCy}
    data-testid={dataTestId || "FlexItem"}
    flex={flex}
    height={height}
    order={order}
    overflow={overflow}
    paddingBottom={paddingBottom}
    paddingTop={paddingTop}
  >
    {children}
  </FlexItemContainer>
);

FlexItem.propTypes = {
  alignSelf: PropTypes.oneOf([
    "auto",
    "flex-start",
    "flex-end",
    "center",
    "baseline",
    "stretch"
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  className: PropTypes.string,
  dataCy: PropTypes.string,
  dataTestId: PropTypes.string,
  flex: PropTypes.string.isRequired,
  height: PropTypes.string,
  order: PropTypes.number,
  overflow: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingTop: PropTypes.string
};

export default FlexItem;
