import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import AnimatedIcons from "<molecules>/AnimatedIcons";

const TechStack = (): JSX.Element => (
  <DashboardElement
    childrenHeight="spacing184"
    dataTestId="TechStack"
    flex="1 1 30%"
    shouldDisplayCorners={true}
    title="Tech Stack" 
  >
    <AnimatedIcons />
  </DashboardElement>
);
  
export default memo(TechStack);
