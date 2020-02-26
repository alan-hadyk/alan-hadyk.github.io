import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  FlexContainerProps
} from "<layout>/__typings__/FlexContainer";

const FlexContainer = ({
  alignItems = "center",
  children,
  flexFlow = "row wrap",
  height = "unset",
  justifyContent = "center"
}: FlexContainerProps): JSX.Element => (
  <FlexContainer.Container
    alignItems={alignItems}
    data-testid="FlexContainer"
    flexFlow={flexFlow}
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
  `}
`;
  
export default FlexContainer;