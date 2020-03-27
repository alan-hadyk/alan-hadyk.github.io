import React, { memo, useRef } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import PositionContainer from "<layout>/PositionContainer";
import Text from "<atoms>/Text";

import useInterval from "<hooks>/useInterval";

export const hero = "Vision driven change agent with career-long record of front-end user strategy and UI development";

function Console(): JSX.Element {
  const heroContainer = useRef<HTMLDivElement>(null);
  const currentChar = useRef<number>(0);

  useInterval(() => {
    updateText();
  }, 75);

  return (
    <PositionContainer
      left="spacing0"
      position="absolute"
      right="spacing0"
      top="50%"
      transform="translateY(-50%)"
    >
      <Console.Container data-testid="Console">
        <PositionContainer
          left="spacing0"
          position="absolute"
          top="spacing0"
          transform="translateY(-100%)"
        >
          <Text
            fontSize="font12"
            lineHeight="spacing28"
            shouldShuffle={true}
            shuffleDelay={2400}
            textTransform="uppercase"
          >
          GNU bash, version 3.2.57(1)-release (x86_64-apple-darwin19)
          </Text>
        </PositionContainer>

        <Console.Text 
          data-testid="ConsoleText"
          ref={heroContainer} 
        />
      </Console.Container>
    </PositionContainer>
  );

  function updateText(): void {
    if (currentChar.current <= hero.length) {
      heroContainer.current.innerHTML += hero.charAt(currentChar.current);

      currentChar.current++;
    }
  }
}

Console.Container = styled.div`
  ${({
    theme: {
      colorPalette: { blue100, blue300, blue700 },
      spacing: { spacing8 }
    }
  }): FlattenSimpleInterpolation => css`
    align-items: center;
    background-color: ${transparentize(0.25, blue700)};
    border: 1px solid ${blue300};
    box-shadow: 0px 0px ${spacing8} 0px ${blue100};
    display: flex;
    height: 26.6%;
    justify-content: center;
    min-height: 26.6vh;
    padding: 1.11vh 0.62vw;
    position: relative;
    width: 100%;
  `}
`;

Console.Text = styled.div`
  ${({
    theme: {
      colorPalette: { blue100, white },
      easing: { easeInOut },
      fontFamilies: { Exan },
      keyframes: { blink },
      spacing: { spacing8 },
      transitionTimes
    }
  }): FlattenSimpleInterpolation => css`
    color: ${white};
    font-family: ${Exan};
    font-size: 6vh;
    font-variant-numeric: tabular-nums;
    line-height: 7.4vh;
    text-align: center;
    text-transform: lowercase;

    &::after {
      animation-duration: ${transitionTimes.slow};
      animation-iteration-count: infinite;
      animation-name: ${blink};
      animation-timing-function: ${easeInOut};
      background-color: ${blue100};
      content: '';
      display: inline-block;
      height: 6vh;
      margin-left: ${spacing8};
      transform: translateY(1vh);
      width: 3vh;
    }
  `}
`;

export default memo(Console);