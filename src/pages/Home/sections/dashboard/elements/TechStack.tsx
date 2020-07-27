import React from "react";

import DashboardElement from "<molecules>/DashboardElement";
import AnimatedIcons from "<molecules>/AnimatedIcons";

import {
  DashboardSectionProps
} from "<pages>/Home/sections/dashboard/__typings__/DashboardSection/DashboardSection.d.ts";

const TechStack = ({
  device
}: DashboardSectionProps): JSX.Element => {
  const flex = device === "desktop" ? "0 1 30%" : "0 1 50%";

  return (
    <DashboardElement
      dataTestId="TechStack"
      flex={flex}
      shouldDisplayCorners
      title="Tech Stack" 
    >
      <AnimatedIcons />
    </DashboardElement>
  );
};
  
export default TechStack;
