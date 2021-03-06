import React, { memo } from "react";

import ConsoleTvDesktopAndTablet from "UI/molecules/Console/ConsoleTvDesktopAndTablet";

import DashboardSectionInnerContainer from "pages/Home/sections/dashboard/DashboardSection/DashboardSectionInnerContainer";
import DashboardSectionOuterContainer from "pages/Home/sections/dashboard/DashboardSection/DashboardSectionOuterContainer";
import TechStack from "pages/Home/sections/dashboard/elements/TechStack";
import Commits from "pages/Home/sections/dashboard/elements/Commits";
import PoweredBy from "pages/Home/sections/dashboard/elements/PoweredBy";

import Responsive from "UI/layout/Responsive";

import spacing from "styles/variables/spacing";

const DashboardSectionTablet = (): JSX.Element => (
  <Responsive dataTestId="DashboardSectionTablet" devices={["tablet"]}>
    <DashboardSectionOuterContainer>
      <DashboardSectionInnerContainer
        height={`calc(17vh + ${spacing.spacing36})`}
        marginTop="2.22vh"
      >
        <TechStack />
      </DashboardSectionInnerContainer>

      <ConsoleTvDesktopAndTablet />

      <DashboardSectionInnerContainer
        height={`calc(22.6vh + ${spacing.spacing36})`}
        marginBottom="2.22vh"
      >
        <Commits />
        <PoweredBy />
      </DashboardSectionInnerContainer>
    </DashboardSectionOuterContainer>
  </Responsive>
);

export default memo(DashboardSectionTablet);
