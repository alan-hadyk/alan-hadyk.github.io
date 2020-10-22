import React, { memo } from "react";
import styled from "styled-components";

import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";

import { ReactComponent as FluxFlowChart } from "<assets>/svg/Flux-FlowChart.svg";

const FlowChart = (): JSX.Element => (
  <FlexContainer
    alignItems="center"
    dataTestId="FlowChart"
    height="100%"
    justifyContent="center"
  >
    <SpacingContainer
      dataTestId="FlowChartSpacingContainer"
      height="100%"
      paddingBottom="spacing8"
      paddingLeft="spacing8"
      paddingRight="spacing8"
      paddingTop="spacing8"
      width="100%"
    >
      <FlowChart.Icon id="flow-chart" />
    </SpacingContainer>
  </FlexContainer>
);

FlowChart.Icon = styled(FluxFlowChart)`
  display: block;
  height: 100%;
  margin: 0 auto;
  width: 100%;
`;

export default memo(FlowChart);
