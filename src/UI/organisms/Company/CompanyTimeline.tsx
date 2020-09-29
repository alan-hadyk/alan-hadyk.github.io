import React from "react";

import Timeline from "<molecules>/Timeline";

import PositionContainer from "<layout>/PositionContainer";

const CompanyTimeline = (): JSX.Element => (
  <PositionContainer
    bottom="spacing0"
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
