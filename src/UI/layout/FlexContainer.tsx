import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import spacing from "<styles>/variables/spacing";

type SpacingKeys = keyof typeof spacing;

export interface FlexContainerProps {
  alignItems? : "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  children: JSX.Element | JSX.Element[];
  flexFlow?: "row wrap" | "row nowrap" | "column wrap" | "column nowrap";
  height?: typeof spacing[SpacingKeys] | "unset" | "50%" | "100%";
  justifyContent?: "flex-start" | "flex-end" | "center"; 
}

const FlexContainer = ({
  alignItems = "center",
  children,
  flexFlow = "row wrap",
  height = "unset",
  justifyContent = "center"
}: FlexContainerProps): JSX.Element => (
  <FlexContainer.Container
    alignItems={alignItems}
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