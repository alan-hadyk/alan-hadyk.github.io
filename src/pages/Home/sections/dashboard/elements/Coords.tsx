import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";

const Coords = (): JSX.Element => (
  <DashboardElement 
    title="Coords" 
  >
    <span>Hello</span>
  </DashboardElement>
);
  
export default memo(Coords);
