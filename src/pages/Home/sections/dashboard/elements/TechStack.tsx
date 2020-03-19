import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import AnimatedIcons from "<molecules>/AnimatedIcons";

const TechStack = (): JSX.Element => (
  <DashboardElement
    childrenHeight="17vh"
    dataTestId="TechStack"
    flex="0 1 30%"
    shouldDisplayCorners={true}
    title="Tech Stack" 
  >
    <AnimatedIcons />
  </DashboardElement>
);
  
export default memo(TechStack);
