import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";

const TechStack = (): JSX.Element => (
  <DashboardElement 
    title="Tech Stack" 
    shouldDisplayCorners={true}
  >
    <span>Hello</span>
  </DashboardElement>
);
  
export default memo(TechStack);
