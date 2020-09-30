import React, { memo } from "react";

import ConsoleTvDesktopAndTablet from "<molecules>/Console/ConsoleTvDesktopAndTablet";

import DashboardSectionInnerContainer from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionInnerContainer";
import DashboardSectionOuterContainer from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionOuterContainer";
import TechStack from "<pages>/Home/sections/dashboard/elements/TechStack";
import Flux from "<pages>/Home/sections/dashboard/elements/Flux";
import Code from "<pages>/Home/sections/dashboard/elements/Code";
import Commits from "<pages>/Home/sections/dashboard/elements/Commits";
import Ip from "<pages>/Home/sections/dashboard/elements/Ip";
import UserAgent from "<pages>/Home/sections/dashboard/elements/UserAgent";
import PoweredBy from "<pages>/Home/sections/dashboard/elements/PoweredBy";

import Responsive from "<layout>/Responsive";

import spacing from "<styles>/variables/spacing";

const DashboardSectionTvAndDesktop = (): JSX.Element => (
  <Responsive
    dataTestDesktopId="DashboardSectionDesktop"
    dataTestTvId="DashboardSectionTv"
    devices={["tv", "desktop"]}
  >
    <DashboardSectionOuterContainer>
      <DashboardSectionInnerContainer
        height={`calc(17vh + ${spacing.spacing36})`}
        marginTop="2.22vh"
      >
        <TechStack />
        <Flux />
        <Code />
      </DashboardSectionInnerContainer>

      <ConsoleTvDesktopAndTablet />

      <DashboardSectionInnerContainer
        height={`calc(22.6vh + ${spacing.spacing36})`}
        marginBottom="2.22vh"
      >
        <Commits />
        <PoweredBy />
        <UserAgent />
        <Ip />
      </DashboardSectionInnerContainer>
    </DashboardSectionOuterContainer>
  </Responsive>
);

export default memo(DashboardSectionTvAndDesktop);
