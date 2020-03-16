import React, { memo, useLayoutEffect } from "react";
import Vivus from "vivus";
import styled from "styled-components";

import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";

import transitionTimes from "<styles>/variables/transitionTimes";

import { ReactComponent as FluxFlowChart } from "<assets>/svg/Flux-FlowChart.svg";

function FlowChart(): JSX.Element {
  useLayoutEffect(() => {
    new Vivus("flow-chart", {
      delay: parseInt(transitionTimes.fast),
      duration: parseInt(transitionTimes.default), 
      type: "delayed"
    }, (myVivus: Vivus): Vivus => myVivus.play(myVivus.getStatus() === "end" ? -1 : 1));
  });

  return (
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
        <FlowChart.Icon 
          id="flow-chart"
        />
      </SpacingContainer>
    </FlexContainer>
  );
}

FlowChart.Icon = styled(FluxFlowChart)`
  display:block;
  height: 100%;
  margin: 0 auto;
  width: 100%;
`;

export default memo(FlowChart);
