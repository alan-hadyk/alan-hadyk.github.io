import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import ReactGlobe from "react-globe";

const Globe = (): JSX.Element => (
  // <Globe.Container
  //   data-testid="Globe"
  // >
  // </Globe.Container>
  <ReactGlobe
    globeOptions={{
      enableBackground: false,
      enableClouds: false,
      glowCoefficient: 0.05,
      glowColor: "#fff",
      glowPower: 4,
      glowRadiusScale: 0.25,
      enableGlow: true
    }}
  />
);

Globe.Container = styled.div`
  ${({
    theme: {
      spacing
    }
  }): FlattenSimpleInterpolation => css`
    bottom: 0;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
  `}
`;
  
export default Globe;