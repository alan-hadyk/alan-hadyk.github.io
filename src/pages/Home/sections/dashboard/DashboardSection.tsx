import React, { memo } from "react";

import TechStack from "<pages>/Home/sections/dashboard/elements/TechStack";
import Coords from "<pages>/Home/sections/dashboard/elements/Coords";
import Flux from "<pages>/Home/sections/dashboard/elements/Flux";
import Code from "<pages>/Home/sections/dashboard/elements/Code";
import Fps from "<pages>/Home/sections/dashboard/elements/Fps";
import Commits from "<pages>/Home/sections/dashboard/elements/Commits";
import Navigator from "<pages>/Home/sections/dashboard/elements/Navigator";
import Ip from "<pages>/Home/sections/dashboard/elements/Ip";

import Console from "<molecules>/Console";
import Section from "<molecules>/Section";

import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";
import PositionContainer from "<layout>/PositionContainer";

import spacing from "<styles>/variables/spacing";

function DashboardSection(): JSX.Element {
  return (
    <Section
      id="dashboard"
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
            dataTestId="DashboardSectionFlexContainer"
            flexFlow="column nowrap"
            height="100%"
            justifyContent="space-between"
          >
            {renderTopRow()}
            
            <Console />

            {renderBottomRow()}
          </FlexContainer>
        </PositionContainer>
      </SpacingContainer>
    </Section>
  );

  function renderTopRow(): JSX.Element {
    return (
      <SpacingContainer
        dataTestId="DashboardSectionSpacingContainer"
        height={`calc(17vh + ${spacing.spacing36})`}
        marginTop="2.22vh"
        width="100%"
      >
        <FlexContainer
          alignItems="stretch"
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
    );
  }

  function renderBottomRow(): JSX.Element {
    return (
      <SpacingContainer
        dataTestId="DashboardSectionSpacingContainer"
        height={`calc(22.6vh + ${spacing.spacing36})`}
        marginBottom="2.22vh"
        width="100%"
      >
        <FlexContainer
          alignItems="stretch"
          dataTestId="DashboardSectionFlexContainer"
          flexFlow="row nowrap"
          gap="spacing48"
          height="100%"
          justifyContent="center"
        >
          <Fps />
          <Commits />
          <Navigator />
          <Ip />
        </FlexContainer>
      </SpacingContainer>
    );
  }
}
  
export default memo(DashboardSection);
