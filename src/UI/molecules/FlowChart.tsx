import React, { memo, useLayoutEffect, useState, useMemo } from "react";
import Vivus from "vivus";
import styled from "styled-components";

import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";

import useFpsCounter from "<hooks>/useFpsCounter";

import transitionTimes from "<styles>/variables/transitionTimes";

import { ReactComponent as FluxFlowChart } from "<assets>/svg/Flux-FlowChart.svg";

import {
  UseFpsCounterResult
} from "<hooks>/__typings__/useFpsCounter.d.ts";

function FlowChart(): JSX.Element {
  const { isPerformanceLow }: UseFpsCounterResult = useFpsCounter({});
  const [vivusInstance, setVivusInstance] = useState<Vivus>(null);

  useLayoutEffect(() => {
    const _vivusInstance: Vivus = new Vivus("flow-chart", {
      delay: parseInt(transitionTimes.fast),
      duration: parseInt(transitionTimes.default), 
      type: "delayed"
    }, (vivusCb: Vivus): Vivus => vivusCb.play(vivusCb.getStatus() === "end" ? -1 : 1));

    setVivusInstance(_vivusInstance);
  }, []);

  useMemo(() => {
    if (!vivusInstance) {
      return;
    }

    if (isPerformanceLow) {
      vivusInstance.finish();
      vivusInstance.stop();
    } else {
      vivusInstance.play(vivusInstance.getStatus() === "end" ? -1 : 1);
    }
  }, [isPerformanceLow, vivusInstance]);

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
  display: block;
  height: 100%;
  margin: 0 auto;
  width: 100%;
`;

export default memo(FlowChart);
