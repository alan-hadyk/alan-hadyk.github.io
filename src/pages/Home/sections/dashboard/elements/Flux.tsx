import React from "react";

import DashboardElement from "<molecules>/DashboardElement";
import FlowChart from "<molecules>/FlowChart";

const Flux = (): JSX.Element => (
  <DashboardElement
    dataCy="Flux"
    dataTestId="Flux"
    flex="1 0 30%" 
    shouldDisplayCorners
    title="Flux" 
  >
    <FlowChart />
  </DashboardElement>
);
  
export default Flux;
