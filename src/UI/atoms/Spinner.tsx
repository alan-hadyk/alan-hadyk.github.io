import styled, { css, FlattenSimpleInterpolation } from "styled-components";

const Spinner = styled.div`
  ${({
    theme: {
      colorPalette: { blue300 },
      easing: { linear },
      keyframes: { rotation },
      transitionTimes
    }
  }): FlattenSimpleInterpolation => css`
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

export default Spinner;
