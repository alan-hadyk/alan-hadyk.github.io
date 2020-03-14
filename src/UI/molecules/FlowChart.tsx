import React, { memo, useLayoutEffect } from "react";

import FlexContainer from "<layout>/FlexContainer";
import { ReactComponent as FluxFlowChart } from "<assets>/svg/Flux-FlowChart.svg";

import Vivus from "vivus";

function FlowChart(): JSX.Element {
  useLayoutEffect(() => {
    new Vivus("flow-chart", {
      delay: 300,
      duration: 600, 
      type: "delayed"
    }, (myVivus): Vivus => myVivus.play(myVivus.getStatus() === "end" ? -1 : 1));
  });

  return (
    <FlexContainer 
      alignItems="center"
      dataTestId="FlowChart"
      height="100%"
      justifyContent="center"
    > 
      <FluxFlowChart id="flow-chart" />
    </FlexContainer>
  );
}

export default memo(FlowChart);
