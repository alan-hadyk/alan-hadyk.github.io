import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export interface CornerProps {
  positionX?: "left" | "right";
  positionY?: "top" | "bottom";
}

function Corner({ 
  positionX = "left", 
  positionY = "top"
}: CornerProps): JSX.Element {
  return (
    <Corner.Container positionX={positionX} positionY={positionY} />
  );
}

Corner.Container = styled.span<CornerProps>`
  ${({
    theme: {
      colorPalette: { white }
    }
  }): FlattenSimpleInterpolation => css`
    position: relative;

    &::before, &::after {
      content: '';
      position: absolute;
    }
    
    &::before {
      left: 0;
      border: 1px solid ${white};
      height: 8px;
    }

    &::after {
      top: -4px;
      left: 4px;
      border-right: 1px solid ${white};
      height: 8px;
      transform: rotate(90deg);
    }
  `}
`;

export default memo(Corner);