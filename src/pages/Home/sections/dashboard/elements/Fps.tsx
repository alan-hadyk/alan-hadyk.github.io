import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import FpsChart from "<molecules>/FpsChart";

const Fps = (): JSX.Element => (
  <DashboardElement
    childrenHeight="22.6vh"
    dataTestId="Fps"
    flex="0 1 15%"
    title="Fps" 
  >
    <FpsChart />
  </DashboardElement>
);
  
export default memo(Fps);
