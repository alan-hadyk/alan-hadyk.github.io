import React, { memo } from "react";

import DashboardSectionTvAndDesktop from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionTvAndDesktop";
import DashboardSectionTablet from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionTablet";
import DashboardSectionMobile from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionMobile";

import Section from "<molecules>/Section";

const DashboardSection = (): JSX.Element => (
  <Section
    dataCy="Dashboard"
    dataTestId="DashboardSection"
    id="dashboard"
  >
    <DashboardSectionTvAndDesktop />
    <DashboardSectionTablet />
    <DashboardSectionMobile />
  </Section>
);

export default memo(DashboardSection);
