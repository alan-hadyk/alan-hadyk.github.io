import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import { LoaderLetterProps } from "UI/atoms/__typings__/Loader";
// import Icon from "UI/atoms/Icon";
// import Hexagon from "UI/molecules/Hexagon";

const Loader = (): JSX.Element => (
  <Loader.Wrapper>
    <Loader.Letter animationDelay="1.2s">L</Loader.Letter>
    <Loader.Letter animationDelay="1.3s">o</Loader.Letter>
    <Loader.Letter animationDelay="1.4s">a</Loader.Letter>
    <Loader.Letter animationDelay="1.5s">d</Loader.Letter>
    <Loader.Letter animationDelay="1.6s">i</Loader.Letter>
    <Loader.Letter animationDelay="1.7s">n</Loader.Letter>
    <Loader.Letter animationDelay="1.8s">g</Loader.Letter>
  </Loader.Wrapper>
);

Loader.Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: center;
  position: relative;
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
