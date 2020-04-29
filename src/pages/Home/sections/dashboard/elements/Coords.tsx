import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import Sonar from "<molecules>/Sonar";

const Coords = (): JSX.Element => (
  <DashboardElement
    dataTestId="Coords"
    flex="0 1 15%"
    title="Coords" 
  >
    <Sonar />
  </DashboardElement>
);
  
export default memo(Coords);
