import React, { memo } from "react";

import DashboardSectionInnerContainer from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionInnerContainer";
import DashboardSectionOuterContainer from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionOuterContainer";

import TechStack from "<pages>/Home/sections/dashboard/elements/TechStack";
import Flux from "<pages>/Home/sections/dashboard/elements/Flux";
import Commits from "<pages>/Home/sections/dashboard/elements/Commits";
import UserAgent from "<pages>/Home/sections/dashboard/elements/UserAgent";
import PoweredBy from "<pages>/Home/sections/dashboard/elements/PoweredBy";
import Ip from "<pages>/Home/sections/dashboard/elements/Ip";

import Console from "<molecules>/Console";

import Responsive from "<layout>/Responsive";

import spacing from "<styles>/variables/spacing";

function DashboardSectionTablet(): JSX.Element {
  return (
    <Responsive devices={["tablet"]}>
      <DashboardSectionOuterContainer>
        {renderTopTabletRow()}

        <Console />

        {renderBottomTabletRow()}
      </DashboardSectionOuterContainer>
    </Responsive>
  );

  function renderTopTabletRow(): JSX.Element {
    return (
      <DashboardSectionInnerContainer
        height={`calc(22.5vh + ${spacing.spacing36})`}
      >
        <TechStack device="tablet" />
        <Flux device="tablet" />
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
        {/* <Navigator /> */}
        <UserAgent device="tablet" />
        <Ip />
      </DashboardSectionInnerContainer>
    );
  }
}

export default memo(DashboardSectionTablet);
