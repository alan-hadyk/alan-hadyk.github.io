import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import FpsChart from "<molecules>/FpsChart";

const Fps = (): JSX.Element => (
  <DashboardElement
    dataTestId="Fps"
    flex="0 1 20%"
    overflow="visible"
    title="Fps"
  >
    <FpsChart />
  </DashboardElement>
);

export default memo(Fps);
