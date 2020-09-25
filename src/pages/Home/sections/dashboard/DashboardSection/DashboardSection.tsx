import React, { memo } from "react";

import DashboardSectionTvDesktopAndTablet from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionTvDesktopAndTablet";
import DashboardSectionMobile from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionMobile";

import Section from "<molecules>/Section";

const DashboardSection = (): JSX.Element => (
  <Section
    dataCy="Dashboard"
    dataTestId="DashboardSection"
    id="dashboard"
  >
    <DashboardSectionTvDesktopAndTablet />
    <DashboardSectionMobile />
  </Section>
);

export default memo(DashboardSection);
