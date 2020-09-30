import React, { memo } from "react";

import DashboardSectionTop from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionTop";
import DashboardSectionBottom from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionBottom";

import Console from "<molecules>/Console";
import Section from "<molecules>/Section";

import FlexContainer from "<layout>/FlexContainer";
import PositionContainer from "<layout>/PositionContainer";
import SpacingContainer from "<layout>/SpacingContainer";

const DashboardSection = (): JSX.Element => (
  <Section
    dataCy="Dashboard"
    dataTestId="DashboardSection"
    id="dashboard"
    marginBottom="spacing12"
    minHeight="100vh"
  >
    <SpacingContainer
      dataTestId="DashboardSectionSpacingContainer"
      height="100vh"
      paddingTop="spacing96"
    >
      <PositionContainer
        dataTestId="DashboardSectionPositionContainer"
        height="100%"
        position="relative"
      >
        <FlexContainer
          alignItems="center"
          dataTestId="DashboardSectionOuterFlexContainer"
          flexFlow="column nowrap"
          height="100%"
          justifyContent="space-between"
        >
          <DashboardSectionTop devices={["tv"]} />
          <DashboardSectionTop devices={["desktop"]} />
          <DashboardSectionTop devices={["tablet"]} />
          <DashboardSectionTop devices={["mobile"]} />

          <Console />

          <DashboardSectionBottom devices={["tv"]} />
          <DashboardSectionBottom devices={["desktop"]} />
          <DashboardSectionBottom devices={["tablet"]} />
          <DashboardSectionBottom devices={["mobile"]} />
          
        </FlexContainer>
      </PositionContainer>
    </SpacingContainer>
  </Section>
);

export default memo(DashboardSection);
