import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export interface CornerProps {
  position: "topLeft" | "topRight" | "bottomLeft" | "bottomRight";
  isActive?: boolean;
}

interface CornerContainerProps {
  left: 0 | "100%" | "-8px" | "calc(100% + 8px)";
  top: 0 | "100%" | "-8px" | "calc(100% + 8px)";
  transform: "rotate(0)" | "rotate(90deg)" | "rotate(270deg)" | "rotate(180deg)";
}

function Corner({ position = "topLeft", isActive }: CornerProps): JSX.Element {
  const cornerProps: CornerContainerProps = isActive ? mapActivePositionToCornerProps() : mapPositionToCornerProps();

  return (
    <Corner.Container {...cornerProps} />
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
    theme: {
      colorPalette: { white }
    }
  }): FlattenSimpleInterpolation => css`
    position: absolute;
    left: ${left};
    top: ${top};
    transform: ${transform};
    opacity: 0.5;

    &::before, &::after {
      content: '';
      position: absolute;
    }
    
    &::before {
      left: 0;
      background: ${white};
      width: 1px;
      height: 8px;
    }

    &::after {
      top: -4px;
      left: 4px;
      background: ${white};
      width: 1px;
      height: 8px;
      transform: rotate(90deg);
    }
  `}
`;

export default memo(Corner);