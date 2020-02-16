import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import spacing from "<styles>/variables/spacing";
import zIndex from "<styles>/variables/zIndex";

type SpacingKeys = keyof typeof spacing;
type ZIndexKeys = keyof typeof zIndex;

export interface PositionContainerProps {
  bottom?: typeof spacing[SpacingKeys] | "unset";
  children: JSX.Element | JSX.Element[];
  height?: typeof spacing[SpacingKeys] | "unset" | "50%" | "100%";
  left?: typeof spacing[SpacingKeys] | "unset";
  right?: typeof spacing[SpacingKeys] | "unset";
  top?: typeof spacing[SpacingKeys] | "unset";
  position?: "static" | "relative" | "fixed" | "sticky";
  zIndex?: typeof zIndex[ZIndexKeys];
}

const PositionContainer = ({
  bottom = "unset",
  children,
  height = "unset",
  left = "unset",
  position = "relative",
  right = "unset",
  top = "unset",
  zIndex = "layer1"
}: PositionContainerProps): JSX.Element => (
  <PositionContainer.Container
    bottom={bottom}
    height={height}
    left={left}
    position={position}
    right={right}
    top={top}
    zIndex={zIndex}
  >
    {children}
  </PositionContainer.Container>
);

PositionContainer.Container = styled.div<PositionContainerProps>`
  ${({
    bottom,
    height,
    left,
    position,
    right,
    top,
    theme: {
      spacing,
      zIndex: zIndexVariables
    },
    zIndex
  }): FlattenSimpleInterpolation => css`
    bottom: ${(bottom in spacing && spacing[bottom]) || bottom};
    height: ${(height in spacing && spacing[height]) || height};
    left: ${(left in spacing && spacing[left]) || left};
    position: ${position};
    right: ${(right in spacing && spacing[right]) || right};
    top: ${(top in spacing && spacing[top]) || top};
    z-index: ${zIndex in zIndexVariables && zIndexVariables[zIndex]};
  `}
`;
  
export default PositionContainer;