import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import spacing from "styles/variables/spacing";

import {
  CalculateGap,
  FlexContainerProps
} from "UI/layout/__typings__/FlexContainer";

const FlexContainer = ({
  alignItems = "center",
  dataCy,
  dataTestId,
  children,
  flexFlow = "row wrap",
  gap = "spacing0",
  height = "unset",
  justifyContent = "center",
  margin = "spacing0",
  maxWidth = "unset"
}: FlexContainerProps): JSX.Element => (
  <FlexContainer.Container
    alignItems={alignItems}
    data-cy={dataCy}
    data-testid={dataTestId || "FlexContainer"}
    flexFlow={flexFlow}
    gap={gap}
    height={height}
    justifyContent={justifyContent}
    maxWidth={maxWidth}
    margin={margin}
  >
    {children}
  </FlexContainer.Container>
);

FlexContainer.Container = styled.div<FlexContainerProps>`
  ${({
    alignItems,
    flexFlow,
    gap,
    height,
    justifyContent,
    margin,
    maxWidth,
    theme: { spacing }
  }): FlattenSimpleInterpolation => css`
    align-items: ${alignItems};
    display: flex;
    flex-flow: ${flexFlow};
    height: ${(height in spacing && spacing[height]) || height};
    justify-content: ${justifyContent};
    margin: ${(margin in spacing && spacing[margin]) || margin};
    max-width: ${(maxWidth in spacing && spacing[maxWidth]) || maxWidth};

    ${gap !== "spacing0" &&
    `
      & > * {
        ${calculateGap({ flexFlow, gap })}
      }
    `};
  `};
`;

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

export default FlexContainer;
