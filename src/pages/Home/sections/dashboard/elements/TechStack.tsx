import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import AnimatedIcons from "<molecules>/AnimatedIcons";

const TechStack = (): JSX.Element => (
  <DashboardElement 
    title="Tech Stack" 
    shouldDisplayCorners={true}
  >
    <AnimatedIcons />
  </DashboardElement>
);
  
export default memo(TechStack);
