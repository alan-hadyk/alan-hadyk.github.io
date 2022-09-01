import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Hexagon from "UI/molecules/Hexagon";
import PositionContainer from "UI/layout/PositionContainer";

const TimelineLine = styled.div`
  ${({
    theme: {
      colorPalette: { blue300 },
      spacing: { spacing0, spacing2 }
    }
  }): FlattenSimpleInterpolation => css`
    background-color: ${blue300};
    bottom: ${spacing0};
    left: 50%;
    position: absolute;
    top: ${spacing0};
    transform: translateX(-50%);
    width: ${spacing2};
  `};
`;

const Timeline = (): JSX.Element => (
  <PositionContainer
    dataTestId="Timeline"
    height="100%"
    position="relative"
    width="spacing16"
  >
    <PositionContainer
      dataTestId="TimelineHexagonPositionContainer"
      height="spacing16"
      left="spacing0"
      position="absolute"
      top="spacing0"
      width="spacing16"
    >
      <Hexagon fill="solid" />
    </PositionContainer>
    <TimelineLine data-testid="TimelineLine" />
  </PositionContainer>
);

export default Timeline;
