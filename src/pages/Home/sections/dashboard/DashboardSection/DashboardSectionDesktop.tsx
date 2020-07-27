import React, { memo } from "react";

import DashboardSectionInnerContainer from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionInnerContainer";

import TechStack from "<pages>/Home/sections/dashboard/elements/TechStack";
import Coords from "<pages>/Home/sections/dashboard/elements/Coords";
import Flux from "<pages>/Home/sections/dashboard/elements/Flux";
import Code from "<pages>/Home/sections/dashboard/elements/Code";
import Fps from "<pages>/Home/sections/dashboard/elements/Fps";
import Commits from "<pages>/Home/sections/dashboard/elements/Commits";
import Navigator from "<pages>/Home/sections/dashboard/elements/Navigator";
import Ip from "<pages>/Home/sections/dashboard/elements/Ip";
import UserAgent from "<pages>/Home/sections/dashboard/elements/UserAgent";
import PoweredBy from "<pages>/Home/sections/dashboard/elements/PoweredBy";

import Console from "<molecules>/Console";

import FlexContainer from "<layout>/FlexContainer";
import Responsive from "<layout>/Responsive";
import PositionContainer from "<layout>/PositionContainer";

import spacing from "<styles>/variables/spacing";

function DashboardSectionDesktop(): JSX.Element {
  return (
    <Responsive device="desktop">
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
          {renderTopDesktopRow()}

          <Console />
          
          {renderBottomDesktopRow()}
        </FlexContainer>
      </PositionContainer>
    </Responsive>
  );

  function renderTopDesktopRow(): JSX.Element {
    return (
      <DashboardSectionInnerContainer
        height={`calc(17vh + ${spacing.spacing36})`}
      >
        <TechStack />
        <Coords />
        <Flux />
        <Code />
      </DashboardSectionInnerContainer>
    );
  }

  function renderBottomDesktopRow(): JSX.Element {
    return (
      <DashboardSectionInnerContainer
        height={`calc(22.6vh + ${spacing.spacing36})`}
      >
        <Fps />
        <Commits />
        <PoweredBy />
        <Navigator />
        <UserAgent device="desktop" />
        <Ip />
      </DashboardSectionInnerContainer>
    );
  }
}

export default memo(DashboardSectionDesktop);
