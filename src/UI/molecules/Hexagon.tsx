import React from "react";
import styled from "styled-components";

import Icon from "<atoms>/Icon";

import {
  HexagonProps
} from "<molecules>/__typings__/Hexagon.d.ts";

const Hexagon = ({
  children,
  fill = "none"
}: HexagonProps): JSX.Element => (
  <Hexagon.Container data-testid="Hexagon">
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
      <Hexagon.InnerContainer data-testid="HexagonInnerContainer">
        {children}
      </Hexagon.InnerContainer>
    )}
  </Hexagon.Container>
);

Hexagon.Container = styled.div`
  position: relative;
`;

Hexagon.InnerContainer = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export default Hexagon;
