import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Icon from "<atoms>/Icon";

import {
  HexagonInnerContainerProps,
  HexagonProps
} from "<molecules>/__typings__/Hexagon.d.ts";

const Hexagon = ({
  children,
  contentWidth = "100%",
  dataTestId,
  fill = "none"
}: HexagonProps): JSX.Element => (
  <Hexagon.Container
    data-testid={dataTestId || "Hexagon"}
  >
    {fill === "pattern" ?
      <Icon 
        iconName="hexagonWithPattern"
      /> :
      <Icon 
        iconName="hexagon"
        isActive={fill === "solid"}
        shouldGlow
      />
    }
    
    {children && (
      <Hexagon.InnerContainer
        data-testid="HexagonInnerContainer"
        width={contentWidth}
      >
        {children}
      </Hexagon.InnerContainer>
    )}
  </Hexagon.Container>
);

Hexagon.Container = styled.div`
  position: relative;
`;

Hexagon.InnerContainer = styled.div<HexagonInnerContainerProps>`
  ${({
    width
  }): FlattenSimpleInterpolation => css`
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${width};
  `}
`;

export default Hexagon;
