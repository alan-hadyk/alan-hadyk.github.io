import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import { ConsoleTextProps } from "UI/atoms/__typings__/ConsoleText";

export const hero =
  "Vision driven change agent with career-long record of front-end user strategy and UI development";

const ConsoleTextContainer = styled.div<ConsoleTextProps>`
  ${({
    fontSize,
    height,
    lineHeight,
    theme: {
      colorPalette: { blue100, white },
      easing: { easeInOut },
      fontSizes,
      fontFamilies: { AnonymousPro, Exan },
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

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      /* IE10+ CSS */
      font-family: ${AnonymousPro};
      text-transform: uppercase;
    }

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

const ConsoleText = ({
  dataTestId,
  fontSize,
  height,
  lineHeight,
  transform,
  width
}: ConsoleTextProps): JSX.Element => (
  <ConsoleTextContainer
    data-testid={dataTestId || "ConsoleText"}
    fontSize={fontSize}
    height={height}
    lineHeight={lineHeight}
    transform={transform}
    width={width}
  >
    {hero}
  </ConsoleTextContainer>
);

ConsoleText.propTypes = {
  dataTestId: PropTypes.string,
  fontSize: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  lineHeight: PropTypes.string.isRequired,
  transform: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

export default ConsoleText;
