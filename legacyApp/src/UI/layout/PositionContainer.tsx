import React, { forwardRef, Ref } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { PositionContainerProps } from "UI/layout/__typings__/PositionContainer";

const PositionContainerWrapper = styled.div<PositionContainerProps>`
  ${({
    bottom,
    height,
    left,
    position,
    right,
    top,
    theme: { spacing, zIndex: zIndexVariables },
    transform,
    width,
    zIndex
  }): FlattenSimpleInterpolation => css`
    bottom: ${(bottom in spacing && spacing[bottom]) || bottom};
    height: ${(height in spacing && spacing[height]) || height};
    left: ${(left in spacing && spacing[left]) || left};
    position: ${position};
    right: ${(right in spacing && spacing[right]) || right};
    top: ${(top in spacing && spacing[top]) || top};
    transform: ${transform};
    width: ${(width in spacing && spacing[width]) || width};
    z-index: ${zIndex in zIndexVariables && zIndexVariables[zIndex]};
  `};
`;

const PositionContainer = (
  {
    bottom = "unset",
    children,
    dataCy,
    dataTestId,
    height = "unset",
    left = "unset",
    onFocus = () => false,
    position = "relative",
    right = "unset",
    top = "unset",
    tabIndex,
    transform = "none",
    width = "auto",
    zIndex = "layer1"
  }: PositionContainerProps,
  ref: Ref<HTMLDivElement>
): JSX.Element => (
  <PositionContainerWrapper
    bottom={bottom}
    data-cy={dataCy}
    data-testid={dataTestId || "PositionContainer"}
    height={height}
    left={left}
    onFocus={onFocus}
    position={position}
    ref={ref}
    right={right}
    tabIndex={tabIndex}
    top={top}
    transform={transform}
    width={width}
    zIndex={zIndex}
  >
    {children}
  </PositionContainerWrapper>
);

export default forwardRef(PositionContainer);
