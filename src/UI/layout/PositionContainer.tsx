import React, { forwardRef, Ref } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  PositionContainerProps
} from "<layout>/__typings__/PositionContainer";

const PositionContainer = ({
  bottom = "unset",
  children,
  dataTestId,
  height = "unset",
  left = "unset",
  position = "relative",
  right = "unset",
  top = "unset",
  transform = "none",
  zIndex = "layer1"
}: PositionContainerProps, ref: Ref<HTMLDivElement>): JSX.Element => (
  <PositionContainer.Container
    bottom={bottom}
    data-testid={dataTestId || "PositionContainer"}
    height={height}
    left={left}
    position={position}
    ref={ref}
    right={right}
    top={top}
    transform={transform}
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
    transform,
    zIndex
  }): FlattenSimpleInterpolation => css`
    bottom: ${(bottom in spacing && spacing[bottom]) || bottom};
    height: ${(height in spacing && spacing[height]) || height};
    left: ${(left in spacing && spacing[left]) || left};
    position: ${position};
    right: ${(right in spacing && spacing[right]) || right};
    top: ${(top in spacing && spacing[top]) || top};
    transform: ${transform};
    z-index: ${zIndex in zIndexVariables && zIndexVariables[zIndex]};
  `}
`;
  
export default forwardRef(PositionContainer);