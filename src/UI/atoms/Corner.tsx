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

  // function mapPositionesToButtonContainerProps(): ButtonContainerProps {
  //   switch (size) {
  //   case "small":
  //     return {
  //       height: "spacing40",
  //       width: "100%"
  //     };
  //   case "medium":
  //     return {
  //       height: "spacing48",
  //       width: "100%"
  //     };
  //   case "large":
  //     return {
  //       height: "spacing56",
  //       width: "auto"
  //     };
  //   }
  // }
}

Corner.Container = styled.span<CornerProps>`
  ${({
    theme: {
      colorPalette: { white }
    }
  }): FlattenSimpleInterpolation => css`
    position: absolute;
    left: 0;
    top: 0;

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