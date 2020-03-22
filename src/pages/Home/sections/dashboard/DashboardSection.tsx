import React, { memo } from "react";

import TechStack from "<pages>/Home/sections/dashboard/elements/TechStack";
import Coords from "<pages>/Home/sections/dashboard/elements/Coords";
import Flux from "<pages>/Home/sections/dashboard/elements/Flux";
import Code from "<pages>/Home/sections/dashboard/elements/Code";
import Fps from "<pages>/Home/sections/dashboard/elements/Fps";

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
      height={`calc(17vh + ${spacing.spacing36})`}
      paddingTop="2.22vh"
    >
      <FlexContainer
        alignItems="flex-start"
        dataTestId="DashboardSectionFlexContainer"
        flexFlow="row nowrap"
        gap="spacing48"
        height="100%"
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
      marginTop="5.18vh"
      marginBottom="3.70vh"
    >
      <FlexContainer
        alignItems="center"
        dataTestId="DashboardSectionFlexContainer"
        flexFlow="row nowrap"
        justifyContent="center"
      >
        <Console />
      </FlexContainer>
    </SpacingContainer>
    <SpacingContainer
      dataTestId="DashboardSectionSpacingContainer"
      height={`calc(22.6vh + ${spacing.spacing36})`}
    >
      <FlexContainer
        alignItems="flex-start"
        dataTestId="DashboardSectionFlexContainer"
        flexFlow="row nowrap"
        gap="spacing48"
        height="100%"
        justifyContent="center"
      >
        <Fps />
      </FlexContainer>
    </SpacingContainer>
  </Section>
);
  
export default memo(DashboardSection);
