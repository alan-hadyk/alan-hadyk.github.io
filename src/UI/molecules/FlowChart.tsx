import React, { memo, useLayoutEffect } from "react";
import Vivus from "vivus";

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
        paddingBottom="spacing8"
        paddingLeft="spacing8"
        paddingRight="spacing8"
        paddingTop="spacing8"
      >
        <FluxFlowChart id="flow-chart" />
      </SpacingContainer>
    </FlexContainer>
  );
}

export default memo(FlowChart);
