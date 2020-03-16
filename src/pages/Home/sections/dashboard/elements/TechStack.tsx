import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import AnimatedIcons from "<molecules>/AnimatedIcons";

import spacing from "<styles>/variables/spacing";

const TechStack = (): JSX.Element => (
  <DashboardElement
    childrenHeight={`calc(${Math.round((184 / 1080) * 100)}vh - ${spacing.spacing36})`}
    dataTestId="TechStack"
    flex="0 1 30%"
    shouldDisplayCorners={true}
    title="Tech Stack" 
  >
    <AnimatedIcons />
  </DashboardElement>
);
  
export default memo(TechStack);
