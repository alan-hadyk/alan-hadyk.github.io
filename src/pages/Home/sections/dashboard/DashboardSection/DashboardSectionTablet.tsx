import React, { memo } from "react";

import DashboardSectionInnerContainer from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionInnerContainer";

import TechStack from "<pages>/Home/sections/dashboard/elements/TechStack";
import Flux from "<pages>/Home/sections/dashboard/elements/Flux";
import Commits from "<pages>/Home/sections/dashboard/elements/Commits";
import Navigator from "<pages>/Home/sections/dashboard/elements/Navigator";
import UserAgent from "<pages>/Home/sections/dashboard/elements/UserAgent";
import PoweredBy from "<pages>/Home/sections/dashboard/elements/PoweredBy";

import Console from "<molecules>/Console";

import FlexContainer from "<layout>/FlexContainer";
import Responsive from "<layout>/Responsive";
import PositionContainer from "<layout>/PositionContainer";

import spacing from "<styles>/variables/spacing";

function DashboardSectionTablet(): JSX.Element {
  return (
    <Responsive device="tablet">
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

          {renderTopTabletRow()}

          <Console />

          {renderBottomTabletRow()}
        </FlexContainer>
      </PositionContainer>
    </Responsive>
  );

  function renderTopTabletRow(): JSX.Element {
    return (
      <DashboardSectionInnerContainer
        height={`calc(22.5vh + ${spacing.spacing36})`}
      >
        <TechStack />
        <Flux />
      </DashboardSectionInnerContainer>
    );
  }

  function renderBottomTabletRow(): JSX.Element {
    return (
      <DashboardSectionInnerContainer
        height={`calc(22.6vh + ${spacing.spacing36})`}
      >
        <Commits />
        <PoweredBy />
        <Navigator />
        <UserAgent device="tablet" />
      </DashboardSectionInnerContainer>
    );
  }
}

export default memo(DashboardSectionTablet);
