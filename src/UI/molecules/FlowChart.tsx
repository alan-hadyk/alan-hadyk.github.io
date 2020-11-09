import React from "react";
import styled from "styled-components";

import FlexContainer from "UI/layout/FlexContainer";
import SpacingContainer from "UI/layout/SpacingContainer";

import { ReactComponent as FluxFlowChart } from "assets/svg/Flux-FlowChart.svg";

const FlowChartIcon = styled(FluxFlowChart)`
  display: block;
  height: 100%;
  margin: 0 auto;
  width: 100%;
`;

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
      <FlowChartIcon id="flow-chart" />
    </SpacingContainer>
  </FlexContainer>
);

export default FlowChart;
