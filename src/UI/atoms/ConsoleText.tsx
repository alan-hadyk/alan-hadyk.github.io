import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { ConsoleTextProps } from "<atoms>/__typings__/ConsoleText.d.ts";

export const hero =
  "Vision driven change agent with career-long record of front-end user strategy and UI development";

const ConsoleText = ({
  dataTestId,
  fontSize,
  height,
  lineHeight,
  transform,
  width
}: ConsoleTextProps): JSX.Element => (
  <ConsoleText.Container
    data-testid={dataTestId || "ConsoleText"}
    fontSize={fontSize}
    height={height}
    lineHeight={lineHeight}
    transform={transform}
    width={width}
  >
    {hero}
  </ConsoleText.Container>
);

ConsoleText.Container = styled.div<ConsoleTextProps>`
  ${({
    fontSize,
    height,
    lineHeight,
    theme: {
      colorPalette: { blue100, white },
      easing: { easeInOut },
      fontSizes,
      fontFamilies: { Exan },
      keyframes: { blink },
      spacing,
      transitionTimes
    },
    transform,
    width
  }): FlattenSimpleInterpolation => css`
    color: ${white};
    font-family: ${Exan};
    font-size: ${(fontSize in fontSizes && fontSizes[fontSize]) || fontSize};
    line-height: ${(lineHeight in spacing && spacing[lineHeight]) ||
    lineHeight};
    text-align: center;
    text-transform: lowercase;

    &::after {
      animation-duration: ${transitionTimes.slow};
      animation-iteration-count: infinite;
      animation-name: ${blink};
      animation-timing-function: ${easeInOut};
      background-color: ${blue100};
      content: "";
      display: inline-block;
      height: ${(height in spacing && spacing[height]) || height};
      margin-left: ${spacing.spacing8};
      transform: ${transform};
      width: ${(width in spacing && spacing[width]) || width};
    }
  `};
`;

export default ConsoleText;
