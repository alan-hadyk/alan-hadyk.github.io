import React from "react";

import DashboardElement from "<molecules>/DashboardElement";
import AnimatedIcons from "<molecules>/AnimatedIcons";

const TechStack = (): JSX.Element => (
  <DashboardElement
    dataCy="TechStack"
    dataTestId="TechStack"
    flex="1 0 40%"
    shouldDisplayCorners
    title="Tech Stack"
  >
    <AnimatedIcons />
  </DashboardElement>
);

export default TechStack;
