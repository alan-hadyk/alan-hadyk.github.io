import React from "react";

import DashboardElement from "<molecules>/DashboardElement";
import FlowChart from "<molecules>/FlowChart";

import {
  DashboardSectionProps
} from "<pages>/Home/sections/dashboard/DashboardSection/__typings__/DashboardSection.d.ts";

const Flux = ({
  device
}: DashboardSectionProps): JSX.Element => {
  const flex = device === "desktop" ? "0 1 30%" : "0 1 50%";

  return (
    <DashboardElement
      dataTestId="Flux"
      flex={flex}
      shouldDisplayCorners
      title="Flux" 
    >
      <FlowChart />
    </DashboardElement>
  );
};
  
export default Flux;
