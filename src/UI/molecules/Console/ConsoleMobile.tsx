import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import ConsoleText from "<atoms>/ConsoleText";

import Responsive from "<layout>/Responsive";
import SpacingContainer from "<layout>/SpacingContainer";

export const hero = "Vision driven change agent with career-long record of front-end user strategy and UI development";

const ConsoleMobile = (): JSX.Element => (
  <Responsive
    dataTestId="ConsoleMobile"
    devices={["mobile"]}
  >
    <SpacingContainer
      paddingTop="spacing48"
    >
      <ConsoleMobile.Container data-testid="ConsoleContainer">
        <ConsoleText
          fontSize="font32"
          height="spacing36"
          lineHeight="spacing36"
          transform="translateY(5px)"
          width="spacing12"
        />
      </ConsoleMobile.Container>
    </SpacingContainer>
  </Responsive>
);

ConsoleMobile.Container = styled.div`
  ${({
    theme: {
      colorPalette: { blue100, blue300, blue700 },
      spacing: { spacing8, spacing16 }
    }
  }): FlattenSimpleInterpolation => css`
    background-color: ${transparentize(0.25, blue700)};
    border: 1px solid ${blue300};
    box-shadow: 0px 0px ${spacing8} 0px ${blue100};
    padding: ${spacing16};
  `}
`;

ConsoleMobile.Text = styled.div`
  ${({
    theme: {
      colorPalette: { blue100, white },
      easing: { easeInOut },
      fontSizes: { font32 },
      fontFamilies: { Exan },
      keyframes: { blink },
      spacing: {
        spacing8,
        spacing12,
        spacing36
      },
      transitionTimes
    }
  }): FlattenSimpleInterpolation => css`
    color: ${white};
    font-family: ${Exan};
    font-size: ${font32};
    line-height: ${spacing36};
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
      height: ${spacing36};
      margin-left: ${spacing8};
      transform: translateY(5px);
      width: ${spacing12};
    }
  `}
`;

export default ConsoleMobile;