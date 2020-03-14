import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  FlexContainerProps
} from "<layout>/__typings__/FlexContainer";

const FlexContainer = ({
  alignItems = "center",
  dataTestId,
  children,
  flexFlow = "row wrap",
  gap = "spacing0",
  height = "unset",
  justifyContent = "center"
}: FlexContainerProps): JSX.Element => (
  <FlexContainer.Container
    alignItems={alignItems}
    data-testid={dataTestId || "FlexContainer"}
    flexFlow={flexFlow}
    gap={gap}
    height={height}
    justifyContent={justifyContent}
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
    theme: {
      spacing
    }
  }): FlattenSimpleInterpolation => css`
    align-items: ${alignItems};
    display: flex;
    flex-flow: ${flexFlow};
    height: ${(height in spacing && spacing[height]) || height};
    justify-content: ${justifyContent};

    ${gap !== "spacing0" && `
      & > * {
        ${flexFlow.includes("row") ? `
          padding-left: ${(gap in spacing && spacing[gap])};

          &:first-child {
            padding-left: 0;
          }  
        ` : `
          margin-top: ${(gap in spacing && spacing[gap])};

          &:first-child {
            margin-top: 0;
          }  
        `}
      }`} 
  `}
`;
  
export default FlexContainer;