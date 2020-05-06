import React, { memo } from "react";

import DashboardSection from "<pages>/Home/sections/dashboard/DashboardSection";
import PortfolioSection from "<pages>/Home/sections/portfolio/PortfolioSection";
import ExperienceSection from "<pages>/Home/sections/experience/ExperienceSection";

import Header from "<organisms>/Header";
import PageTemplate from "<templates>/PageTemplate";

const HomePage = (): JSX.Element => (
  <PageTemplate>
    <Header 
      zIndex="layer2"
    />

    <DashboardSection />
    <PortfolioSection />
    <ExperienceSection />
  </PageTemplate>
);
  
export default memo(HomePage);
