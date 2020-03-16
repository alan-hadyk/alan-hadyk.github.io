import React, { memo } from "react";

import TechStack from "<pages>/Home/sections/dashboard/elements/TechStack";
import Coords from "<pages>/Home/sections/dashboard/elements/Coords";
import Flux from "<pages>/Home/sections/dashboard/elements/Flux";
import Code from "<pages>/Home/sections/dashboard/elements/Code";

import Console from "<molecules>/Console";
import Section from "<molecules>/Section";
import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";

import spacing from "<styles>/variables/spacing";

const DashboardSection = (): JSX.Element => (
  <Section
    id="dashboard"
    minHeight="100vh"
  >
    <SpacingContainer
      dataTestId="DashboardSectionSpacingContainer"
      height={`calc(${Math.round((184 / 1080) * 100)}vh + ${spacing.spacing24})`}
      paddingTop="spacing24"
    >
      <FlexContainer
        alignItems="flex-start"
        dataTestId="DashboardSectionFlexContainerr"
        flexFlow="row nowrap"
        gap="spacing48"
        height="spacing220"
        justifyContent="center"
      >
        <TechStack />
        <Coords />
        <Flux />
        <Code />
      </FlexContainer>
    </SpacingContainer>
    <SpacingContainer
      dataTestId="DashboardSectionSpacingContainer"
      marginTop="spacing56"
      marginBottom="spacing40"
    >
      <FlexContainer
        alignItems="center"
        dataTestId="DashboardSectionFlexContainerr"
        flexFlow="row nowrap"
        justifyContent="center"
      >
        <Console />
      </FlexContainer>
    </SpacingContainer>
  </Section>
);
  
export default memo(DashboardSection);
