import React, { memo } from "react";

import DashboardSection from "<pages>/Home/sections/dashboard/DashboardSection";
import PortfolioSection from "<pages>/Home/sections/portfolio/PortfolioSection";

import Header from "<organisms>/Header";
import PageTemplate from "<templates>/PageTemplate";

const HomePage = (): JSX.Element => (
  <PageTemplate>
    <Header 
      zIndex="layer2"
    />

    <DashboardSection />
    <PortfolioSection />
  </PageTemplate>
);
  
export default memo(HomePage);
