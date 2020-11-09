import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import { LineProps } from "UI/atoms/__typings__/Line";

const LineContainer = styled.div<LineProps>`
  ${({
    direction,
    isActive,
    theme: {
      colorPalette: { blue100, white },
      easing: { easeInOut },
      spacing: { spacing4 },
      transitionTimes,
      zIndex
    }
  }): FlattenSimpleInterpolation => css`
    background-color: ${white};
    bottom: 0;
    box-shadow: 0px 0px ${spacing4} 0px ${blue100};
    display: block;
    height: 1px;
    opacity: ${isActive ? 1 : 0};
    position: absolute;
    transition: all ${transitionTimes.fast} ${easeInOut};
    visibility: ${isActive ? "visible" : "hidden"};
    width: ${isActive ? "50%" : 0};
    z-index: ${zIndex.layer1};

    ${direction === "left" && "left: 50%;"} ${direction === "right" &&
    "right: 50%;"};
  `};
`;

const Line = ({ direction, isActive = false }: LineProps): JSX.Element => (
  <LineContainer
    className="line"
    data-testid="Line"
    direction={direction}
    isActive={isActive}
  />
);

Line.propTypes = {
  direction: PropTypes.oneOf(["left", "right"]).isRequired,
  isActive: PropTypes.bool
};

export default Line;
