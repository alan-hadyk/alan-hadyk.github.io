import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import FlowChart from "<src>/UI/molecules/FlowChart";

import spacing from "<styles>/variables/spacing";

const Flux = (): JSX.Element => (
  <DashboardElement
    childrenHeight={`calc(${Math.round((184 / 1080) * 100)}vh - ${spacing.spacing36})`}
    dataTestId="Flux"
    flex="0 1 30%"
    title="Flux" 
    shouldDisplayCorners={true}
    shuffleDelay={1200}
  >
    <FlowChart />
  </DashboardElement>
);
  
export default memo(Flux);
