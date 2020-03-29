import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
// import { transparentize, radialGradient } from "polished";

import PositionContainer from "<layout>/PositionContainer";

// TODO - tests after component will be ready
const FpsChart = (): JSX.Element => (
  <PositionContainer
    position="relative"
  >
    <FpsChart.Container>
      FPS
    </FpsChart.Container>
  </PositionContainer>
);

FpsChart.Container = styled.div`
  ${({
    theme: {
      colorPalette: { blue400 }
    }
  }): FlattenSimpleInterpolation => css`
    border: thin solid ${blue400};
  `}
`;
  
export default memo(FpsChart);
