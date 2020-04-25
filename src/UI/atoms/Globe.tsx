import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import ReactGlobe from "react-globe";

import colorPalette from "<styles>/variables/colorPalette";

const Globe = (): JSX.Element => (
  // <Globe.Container
  //   data-testid="Globe"
  // >
  // </Globe.Container>
  <ReactGlobe
    globeOptions={{
      enableBackground: false,
      enableClouds: false,
      enableGlow: true,
      glowCoefficient: 0.05,
      glowColor: colorPalette.white,
      glowPower: 6,
      glowRadiusScale: 0.25,
      texture: "/images/miniature-earth.svg"
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