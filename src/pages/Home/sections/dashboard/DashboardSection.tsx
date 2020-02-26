import React, { memo } from "react";

import TechStack from "<pages>/Home/sections/dashboard/elements/TechStack";
import Coords from "<pages>/Home/sections/dashboard/elements/Coords";

import Section from "<molecules>/Section";
import FlexContainer from "<layout>/FlexContainer";

const DashboardSection = (): JSX.Element => (
  <Section
    id="dashboard"
    minHeight="100vh"
  >
    <FlexContainer
      flexFlow="row nowrap"
      justifyContent="center"
      alignItems="center"
    >
      <TechStack />
      <Coords />
    </FlexContainer>
  </Section>
);
  
export default memo(DashboardSection);
