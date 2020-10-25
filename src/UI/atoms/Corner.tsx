import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  CornerContainerProps,
  CornerProps,
  MapPositionToCornerProps
} from "atoms/__typings__/Corner";

const mapPositionToCornerProps = (
  isActive: CornerProps["isActive"]
): MapPositionToCornerProps => ({
  bottomLeft: {
    left: isActive ? "-8px" : 0,
    top: isActive ? "100%" : "calc(100% - 8px)",
    transform: "rotate(270deg)"
  },
  bottomRight: {
    left: isActive ? "100%" : "calc(100% - 8px)",
    top: isActive ? "100%" : "calc(100% - 8px)",
    transform: "rotate(180deg)"
  },
  topLeft: {
    left: isActive ? "-8px" : 0,
    top: isActive ? "-8px" : 0,
    transform: "rotate(0)"
  },
  topRight: {
    left: isActive ? "100%" : "calc(100% - 8px)",
    top: isActive ? "-8px" : 0,
    transform: "rotate(90deg)"
  }
});

function Corner({ isActive = false, position }: CornerProps): JSX.Element {
  const cornerProps: CornerContainerProps = mapPositionToCornerProps(isActive)[
    position
  ];
  const opacity: CornerContainerProps["opacity"] = isActive ? 1 : 0.5;

  return (
    <Corner.Container {...cornerProps} opacity={opacity} data-testid="Corner" />
  );
}

Corner.Container = styled.div<CornerContainerProps>`
  ${({
    top,
    left,
    transform,
    opacity,
    theme: {
      colorPalette: { white },
      easing: { easeInOut },
      spacing: { spacing8 },
      transitionTimes: { fast }
    }
  }): FlattenSimpleInterpolation => css`
    border-left: thin solid ${white};
    border-top: thin solid ${white};
    height: ${spacing8};
    left: ${left};
    opacity: ${opacity};
    position: absolute;
    top: ${top};
    transform: ${transform};
    transition: all ${fast} ${easeInOut};
    width: ${spacing8};
  `};
`;

export default Corner;
