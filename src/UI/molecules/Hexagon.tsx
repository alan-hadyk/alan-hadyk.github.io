import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Cross from "<assets>/svg/Cross.svg";
import Icon from "<atoms>/Icon";

import {
  HexagonContainerProps,
  HexagonProps
} from "<molecules>/__typings__/Hexagon.d.ts";

function Hexagon ({
  background = "transparent", 
  children
}: HexagonProps): JSX.Element {
  return (
    <Hexagon.Container background={background}>
      <Icon 
        iconName="hexagon"
        isActive={background === "blue"}
      />
      <Hexagon.InnerContainer>
        {children}
      </Hexagon.InnerContainer>
    </Hexagon.Container>
  );
}

Hexagon.Container = styled.div<HexagonContainerProps>`
  ${({
    background,
    theme: {
      spacing: { spacing32 }
    }
  }): FlattenSimpleInterpolation => css`
    position: relative;

    ${background === "crossed" && css`
      svg path {
        fill: url(#dots); 
      }
    `}
  `}
`;

Hexagon.InnerContainer = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default Hexagon;
