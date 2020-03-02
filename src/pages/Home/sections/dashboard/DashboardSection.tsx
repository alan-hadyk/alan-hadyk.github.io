import React, { memo } from "react";

import TechStack from "<pages>/Home/sections/dashboard/elements/TechStack";
import Coords from "<pages>/Home/sections/dashboard/elements/Coords";

import Section from "<molecules>/Section";
import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";

const DashboardSection = (): JSX.Element => (
  <Section
    id="dashboard"
    minHeight="100vh"
  >
    <SpacingContainer
      paddingTop="spacing24"
    >
      <FlexContainer
        alignItems="flex-start"
        flexFlow="row nowrap"
        gap="spacing48"
        height="spacing220"
        justifyContent="center"
      >
        <TechStack />
        <Coords />
      </FlexContainer>
    </SpacingContainer>
  </Section>
);
  
export default memo(DashboardSection);
