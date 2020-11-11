import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import spacing from "styles/variables/spacing";

import {
  CalculateGap,
  FlexContainerProps
} from "UI/layout/__typings__/FlexContainer";

const FlexContainerWrapper = styled.div<FlexContainerProps>`
  ${({
    alignItems,
    flexFlow,
    gap,
    height,
    justifyContent,
    maxWidth,
    width,
    theme: { spacing }
  }): FlattenSimpleInterpolation => css`
    align-items: ${alignItems};
    display: flex;
    flex-flow: ${flexFlow};
    height: ${(height in spacing && spacing[height]) || height};
    justify-content: ${justifyContent};
    max-width: ${(maxWidth in spacing && spacing[maxWidth]) || maxWidth};
    width: ${(width in spacing && spacing[width]) || width};

    ${gap !== "spacing0" &&
    `
      & > * {
        ${calculateGap({ flexFlow, gap })}
      }
    `};
  `};
`;

const FlexContainer = ({
  alignItems = "center",
  dataCy,
  dataTestId,
  children,
  flexFlow = "row wrap",
  gap = "spacing0",
  height = "unset",
  justifyContent = "center",
  maxWidth = "unset",
  width = "unset"
}: FlexContainerProps): JSX.Element => (
  <FlexContainerWrapper
    alignItems={alignItems}
    data-cy={dataCy}
    data-testid={dataTestId || "FlexContainer"}
    flexFlow={flexFlow}
    gap={gap}
    height={height}
    justifyContent={justifyContent}
    maxWidth={maxWidth}
    width={width}
  >
    {children}
  </FlexContainerWrapper>
);

function calculateGap({ flexFlow, gap }: CalculateGap): string {
  switch (flexFlow) {
  case "row nowrap":
    return `
      margin-left: ${(gap in spacing && spacing[gap]) || gap};

      &:first-child {
        margin-left: 0;
      }  
    `;

  case "row wrap":
    return `
      margin-bottom: ${(gap in spacing && spacing[gap]) || gap};
      margin-right: ${(gap in spacing && spacing[gap]) || gap};
    `;

  case "column wrap":
  case "column nowrap":
    return `
      margin-top: ${(gap in spacing && spacing[gap]) || gap};

      &:first-child {
        margin-top: 0;
      }  
    `;
  }
}

FlexContainer.propTypes = {
  alignItems: PropTypes.oneOf([
    "stretch",
    "flex-start",
    "flex-end",
    "center",
    "baseline"
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  dataCy: PropTypes.string,
  dataTestId: PropTypes.string,
  flexFlow: PropTypes.oneOf([
    "row wrap",
    "row nowrap",
    "column wrap",
    "column nowrap"
  ]),
  gap: PropTypes.string,
  height: PropTypes.oneOf([...Object.keys(spacing), "unset", "50%", "100%"]),
  justifyContent: PropTypes.oneOf([
    "flex-start",
    "flex-end",
    "center",
    "space-between"
  ]),
  maxWidth: PropTypes.oneOf([...Object.keys(spacing), "unset"])
};

export default FlexContainer;
