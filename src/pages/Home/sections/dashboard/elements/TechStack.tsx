import React from "react";

import DashboardElement from "UI/molecules/DashboardElement";
import AnimatedIcons from "UI/molecules/AnimatedIcons";

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
