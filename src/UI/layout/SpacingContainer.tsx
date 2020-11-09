import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import spacing from "styles/variables/spacing";

import { SpacingContainerProps } from "UI/layout/__typings__/SpacingContainer";

const SpacingContainerWrapper = styled.div<SpacingContainerProps>`
  ${({
    height,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    maxWidth,
    minHeight,
    overflowY,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    theme: { spacing },
    width
  }): FlattenSimpleInterpolation => css`
    height: ${(height in spacing && spacing[height]) || height};
    margin-bottom: ${(marginBottom in spacing && spacing[marginBottom]) ||
    marginBottom};
    margin-left: ${(marginLeft in spacing && spacing[marginLeft]) ||
    marginLeft};
    margin-right: ${(marginRight in spacing && spacing[marginRight]) ||
    marginRight};
    margin-top: ${(marginTop in spacing && spacing[marginTop]) || marginTop};
    max-width: ${(maxWidth in spacing && spacing[maxWidth]) || maxWidth};
    min-height: ${(minHeight in spacing && spacing[minHeight]) || minHeight};
    overflow-y: ${overflowY};
    padding-bottom: ${(paddingBottom in spacing && spacing[paddingBottom]) ||
    paddingBottom};
    padding-left: ${(paddingLeft in spacing && spacing[paddingLeft]) ||
    paddingLeft};
    padding-right: ${(paddingRight in spacing && spacing[paddingRight]) ||
    paddingRight};
    padding-top: ${(paddingTop in spacing && spacing[paddingTop]) ||
    paddingTop};
    width: ${(width in spacing && spacing[width]) || width};
  `};
`;

const SpacingContainer = ({
  children,
  dataCy,
  dataTestId,
  height = "auto",
  id,
  marginBottom = "spacing0",
  marginLeft = "spacing0",
  marginRight = "spacing0",
  marginTop = "spacing0",
  maxWidth,
  minHeight = "spacing0",
  overflowY = "initial",
  paddingBottom = "spacing0",
  paddingLeft = "spacing0",
  paddingRight = "spacing0",
  paddingTop = "spacing0",
  width = "auto"
}: SpacingContainerProps): JSX.Element => (
  <SpacingContainerWrapper
    data-cy={dataCy}
    data-testid={dataTestId || "SpacingContainer"}
    height={height}
    id={id}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
    maxWidth={maxWidth}
    minHeight={minHeight}
    overflowY={overflowY}
    paddingBottom={paddingBottom}
    paddingLeft={paddingLeft}
    paddingRight={paddingRight}
    paddingTop={paddingTop}
    width={width}
  >
    {children}
  </SpacingContainerWrapper>
);

SpacingContainer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  dataCy: PropTypes.string,
  dataTestId: PropTypes.string,
  height: PropTypes.string,
  id: PropTypes.string,
  marginBottom: PropTypes.string,
  marginLeft: PropTypes.string,
  marginRight: PropTypes.string,
  marginTop: PropTypes.string,
  maxWidth: PropTypes.string,
  minHeight: PropTypes.oneOf([...Object.keys(spacing), "100vh"]),
  overflowY: PropTypes.string,
  paddingBottom: PropTypes.string,
  paddingLeft: PropTypes.string,
  paddingRight: PropTypes.string,
  paddingTop: PropTypes.string,
  width: PropTypes.string
};

export default SpacingContainer;
