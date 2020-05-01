import React from "react";

import DashboardElement from "<molecules>/DashboardElement";
import FlowChart from "<src>/UI/molecules/FlowChart";

const Flux = (): JSX.Element => (
  <DashboardElement
    dataTestId="Flux"
    flex="0 1 30%"
    shouldDisplayCorners
    title="Flux" 
  >
    <FlowChart />
  </DashboardElement>
);
  
export default Flux;
