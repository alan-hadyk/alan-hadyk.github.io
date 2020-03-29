import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import FlowChart from "<src>/UI/molecules/FlowChart";

const Flux = (): JSX.Element => (
  <DashboardElement
    dataTestId="Flux"
    flex="0 1 30%"
    title="Flux" 
    shouldDisplayCorners
    shuffleDelay={1200}
  >
    <FlowChart />
  </DashboardElement>
);
  
export default memo(Flux);
