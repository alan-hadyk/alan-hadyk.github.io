import React, { memo } from "react";

import DashboardSectionTop from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionTop";
import DashboardSectionBottom from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionBottom";

import ConsoleTvDesktopAndTablet from "<molecules>/Console/ConsoleTvDesktopAndTablet";

import FlexContainer from "<layout>/FlexContainer";
import PositionContainer from "<layout>/PositionContainer";
import SpacingContainer from "<layout>/SpacingContainer";
import Responsive from "<layout>/Responsive";

const DashboardSectionTvDesktopAndTablet = (): JSX.Element => (
  <Responsive
    dataTestId="DashboardSectionMobile"
    devices={["tv", "desktop", "tablet"]}
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

          <ConsoleTvDesktopAndTablet />

          <DashboardSectionBottom devices={["tv"]} />
          <DashboardSectionBottom devices={["desktop"]} />
          <DashboardSectionBottom devices={["tablet"]} />
          
        </FlexContainer>
      </PositionContainer>
    </SpacingContainer>
  </Responsive>
);

export default memo(DashboardSectionTvDesktopAndTablet);
