import React, { memo } from "react";

import DashboardSectionDesktop from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionDesktop";
import DashboardSectionTablet from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionTablet";

import Section from "<molecules>/Section";

import SpacingContainer from "<layout>/SpacingContainer";

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

        <DashboardSectionDesktop />

        <DashboardSectionTablet />
      </SpacingContainer>
    </Section>
  );
}

export default memo(DashboardSection);
