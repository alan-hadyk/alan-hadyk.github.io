import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import FlexContainer from "UI/layout/FlexContainer";
import PositionContainer from "UI/layout/PositionContainer";

const Loader = (): JSX.Element => (
  <PositionContainer dataTestId="Loader" height="100%" position="relative">
    <FlexContainer
      alignItems="center"
      flexFlow="row nowrap"
      height="100%"
      justifyContent="center"
    >
      <Loader.Spinner />
    </FlexContainer>
  </PositionContainer>
);

Loader.Spinner = styled.div`
  ${({
    theme: {
      colorPalette: { blue300 },
      easing: { linear },
      keyframes: { rotation },
      transitionTimes
    }
  }): FlattenSimpleInterpolation => css`
    animation: rotation 900ms linear infinite;
    animation-duration: calc(
      ${transitionTimes.default} + ${transitionTimes.slow}
    );
    animation-iteration-count: infinite;
    animation-name: ${rotation};
    animation-timing-function: ${linear};
    border: 0.75vh solid;
    border-color: ${blue300} transparent;
    border-radius: 50%;
    display: inline-block;
    height: 12vh;
    width: 12vh;
  `}
`;

export default Loader;
