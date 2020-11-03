import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import FlexContainer from "UI/layout/FlexContainer";
import PositionContainer from "UI/layout/PositionContainer";

import { LoaderLetterProps } from "UI/molecules/__typings__/Loader";

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
  animation: rotation 900ms linear infinite;
  border: 0.75vh solid;
  border-color: #78b0b5 transparent;
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  height: 12vh;
  width: 12vh;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

Loader.Letter = styled.span<LoaderLetterProps>`
  ${({
    animationDelay,
    theme: {
      colorPalette: { blue300, white },
      easing: { easeInOut },
      fontFamilies: { AnonymousPro },
      keyframes: { drop },
      spacing: { spacing4 },
      transitionTimes
    }
  }): FlattenSimpleInterpolation => css`
    animation-delay: ${animationDelay};
    animation-duration: calc(
      ${transitionTimes.default} + ${transitionTimes.slow}
    );
    animation-iteration-count: infinite;
    animation-name: ${drop};
    animation-timing-function: ${easeInOut};
    color: ${blue300};
    display: inline-block;
    font-family: ${AnonymousPro};
    font-size: 4vh;
    opacity: 0;
    position: relative;
    text-shadow: 0px 0px ${spacing4} ${transparentize(0.5, white)};
    text-transform: uppercase;
    transform: rotateX(-90deg);
  `}
`;

export default Loader;
