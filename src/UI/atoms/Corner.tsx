import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export interface CornerProps {
  isActive?: boolean;
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
}

interface CornerContainerProps {
  left: 0 | "100%" | "-8px" | "calc(100% + 8px)";
  opacity?: "0.5" | 1;
  top: 0 | "100%" | "-8px" | "calc(100% + 8px)";
  transform: "rotate(0)" | "rotate(90deg)" | "rotate(270deg)" | "rotate(180deg)";
}

function Corner({ isActive, position = "topLeft" }: CornerProps): JSX.Element {
  const cornerProps: CornerContainerProps = isActive ? mapActivePositionToCornerProps() : mapPositionToCornerProps();
  const opacity = isActive ? 1 : "0.5";

  return (
    <Corner.Container {...cornerProps} opacity={opacity} />
  );

  function mapPositionToCornerProps(): CornerContainerProps {
    switch (position) {
    case "topLeft":
      return {
        left: 0,
        top: 0,
        transform: "rotate(0)"
      };
    case "topRight":
      return {
        left: "100%",
        top: 0,
        transform: "rotate(90deg)"
      };
    case "bottomLeft":
      return {
        left: 0,
        top: "100%",
        transform: "rotate(270deg)"
      };
    case "bottomRight":
      return {
        left: "100%",
        top: "100%",
        transform: "rotate(180deg)"
      };
    }
  }

  function mapActivePositionToCornerProps(): CornerContainerProps {
    switch (position) {
    case "topLeft":
      return {
        left: "-8px",
        top: "-8px",
        transform: "rotate(0)"
      };
    case "topRight":
      return {
        left: "calc(100% + 8px)",
        top: "-8px",
        transform: "rotate(90deg)"
      };
    case "bottomLeft":
      return {
        left: "-8px",
        top: "calc(100% + 8px)",
        transform: "rotate(270deg)"
      };
    case "bottomRight":
      return {
        left: "calc(100% + 8px)",
        top: "calc(100% + 8px)",
        transform: "rotate(180deg)"
      };
    }
  }
}

Corner.Container = styled.span<CornerContainerProps>`
  ${({
    top,
    left,
    transform,
    opacity,
    theme: {
      colorPalette: { white },
      transitionTimes: { fast },
      easing: { easeInOut }
    }
  }): FlattenSimpleInterpolation => css`
    left: ${left};
    opacity: ${opacity};
    position: absolute;
    top: ${top};
    transform: ${transform};
    transition: all ${fast} ${easeInOut};

    &::before, &::after {
      content: '';
      position: absolute;
      background: ${white};
    }
    
    &::before {
      height: 8px;
      left: 0;
      width: 1px;
    }

    &::after {
      height: 8px;
      left: 4px;
      top: -3.5px;
      transform: rotate(90deg);
      width: 1px;
    }
  `}
`;

export default memo(Corner);