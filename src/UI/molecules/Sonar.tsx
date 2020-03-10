import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import PositionContainer from "<layout>/PositionContainer";

const Sonar = (): JSX.Element => (
  <PositionContainer
    dataTestId="Sonar"
    height="100%"
    position="relative"
  >
    <Sonar.Container>
      <Sonar.Dot />
      <Sonar.VerticalLine />
      <Sonar.HorizontalLine />
    </Sonar.Container>
  </PositionContainer>
);

Sonar.Container = styled.div`
  ${({
    theme: {
      colorPalette: { blue400 }
    }
  }): FlattenSimpleInterpolation => css`
    backface-visibility: hidden;
    border: thin solid ${blue400};
    height: 100%;
    overflow: hidden;
    width: 100%;
  `}
`;

Sonar.Dot = styled.div`
  ${({
    theme: {
      colorPalette: { blue100, blue300 },
      keyframes: { rippleAlternative },
      spacing: { spacing2, spacing4, spacing8, spacing24 },
      transitionTimes: { verySlow }
    }
  }): FlattenSimpleInterpolation => css`
    backface-visibility: hidden;
    background-color: ${blue300};
    border-radius: 50%;
    box-shadow: 0px 0px ${spacing8} 0px ${blue100};
    height: ${spacing4};
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateX(-37.5%) translateY(-37.5%);
    width: ${spacing4};

    &:after {
      animation: ${rippleAlternative} infinite ${verySlow};
      border-radius: 50%;
      box-shadow: 0px 0px ${spacing8} 0px ${blue300};
      content: '';
      display: block;
      height: ${spacing24};
      opacity: 0;
      position: absolute;
      transform: translate(calc(-50% + ${spacing2}), calc(-50% + ${spacing2}));
      width: ${spacing24};
    }
  `}
`;

Sonar.VerticalLine = styled.div`
  ${({
    theme: {
      colorPalette: { blue300 },
      keyframes: { borderDanceVertical },
      spacing: { spacing1, spacing2, spacing12 },
      transitionTimes
    }
  }): FlattenSimpleInterpolation => css`
    animation: ${borderDanceVertical} ${transitionTimes.default} infinite linear;
    backface-visibility: hidden;
    background-image: linear-gradient(0deg, ${blue300} 50%, transparent 50%);
    background-repeat: repeat-y;
    background-size: ${spacing1} ${spacing12};
    bottom: 1px;
    left: 50%;
    position: absolute;
    top: 1px;
    width: ${spacing2};
  `}
`;

Sonar.HorizontalLine = styled.div`
  ${({
    theme: {
      colorPalette: { blue300 },
      keyframes: { borderDanceHorizontal },
      spacing: { spacing1, spacing2, spacing12 },
      transitionTimes
    }
  }): FlattenSimpleInterpolation => css`
    animation: ${borderDanceHorizontal} ${transitionTimes.default} infinite linear;
    backface-visibility: hidden;
    background-image: linear-gradient(90deg, ${blue300} 50%, transparent 50%);
    background-repeat: repeat-x;
    background-size: ${spacing12} ${spacing1};
    height: ${spacing2};
    left: 1px;
    position: absolute;
    right: 1px;
    top: 50%;
  `}
`;

export default memo(Sonar);