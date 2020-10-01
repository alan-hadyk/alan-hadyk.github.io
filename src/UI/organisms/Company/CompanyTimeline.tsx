import React from "react";

import Timeline from "<molecules>/Timeline";

import PositionContainer from "<layout>/PositionContainer";

import { CompanyTimelineProps } from "<organisms>/Company/__typings__/CompanyTimeline.d.ts";

const CompanyTimeline = ({
  timelineBottom = "negativeSpacing16"
}: CompanyTimelineProps): JSX.Element => (
  <PositionContainer
    bottom={timelineBottom}    
    dataTestId="CompanyTimeline"
    left="50%"
    position="absolute"
    top="spacing16"
    transform="translateX(-50%)"
  >
    <Timeline />
  </PositionContainer>
);

export default CompanyTimeline;
