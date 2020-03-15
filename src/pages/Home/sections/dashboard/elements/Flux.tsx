import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import FlowChart from "<src>/UI/molecules/FlowChart";

const Flux = (): JSX.Element => (
  <DashboardElement
    dataTestId="Flux"
    flex="1 1 30%"
    childrenHeight="spacing184"
    title="Flux" 
    shouldDisplayCorners={true}
  >
    <FlowChart />
  </DashboardElement>
);
  
export default memo(Flux);
