import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import MouseCoords from "<molecules>/MouseCoords";

const Coords = (): JSX.Element => (
  <DashboardElement
    flex="1 1 15%"
    childrenHeight="spacing184"
    title="Coords" 
  >
    <MouseCoords />
  </DashboardElement>
);
  
export default memo(Coords);
