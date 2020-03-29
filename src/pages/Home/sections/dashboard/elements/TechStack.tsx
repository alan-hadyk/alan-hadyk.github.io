import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import AnimatedIcons from "<molecules>/AnimatedIcons";

const TechStack = (): JSX.Element => (
  <DashboardElement
    dataTestId="TechStack"
    flex="0 1 30%"
    shouldDisplayCorners
    title="Tech Stack" 
  >
    <AnimatedIcons />
  </DashboardElement>
);
  
export default memo(TechStack);
