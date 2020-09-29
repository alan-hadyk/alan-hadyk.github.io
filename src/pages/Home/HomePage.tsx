import React, { Fragment, memo } from "react";

import DashboardSection from "<pages>/Home/sections/dashboard/DashboardSection";
import PortfolioSection from "<pages>/Home/sections/portfolio/PortfolioSection";
import ExperienceSection from "<pages>/Home/sections/experience/ExperienceSection";
import SkillsSection from "<pages>/Home/sections/skills/SkillsSection";
import AboutMeSection from "<pages>/Home/sections/about/AboutMeSection";
import ContactSection from "<pages>/Home/sections/contact/ContactSection";

import Responsive from "<layout>/Responsive";
import Header from "<organisms>/Header";
import PageTemplate from "<templates>/PageTemplate";

import spacing from "<styles>/variables/spacing";

// TODO: Add tests when the component will be ready
const HomePage = (): JSX.Element => {
  return (
    <Fragment>
      <Responsive devices={["tv", "desktop", "tablet"]}>
        <PageTemplate>
          {pageTemplateContent()}
        </PageTemplate>
      </Responsive>

      <Responsive devices={["mobile"]}>
        <PageTemplate padding={`0 ${spacing.spacing28} ${spacing.spacing96}`}>
          {pageTemplateContent()}
        </PageTemplate>
      </Responsive>
    </Fragment>
  );
  
  function pageTemplateContent(): JSX.Element {
    return (
      <Fragment>
        <Header 
          zIndex="layer2"
        />
  
        <DashboardSection />
        <PortfolioSection />
        <ExperienceSection />
        <SkillsSection />
        <AboutMeSection />
        <ContactSection />
      </Fragment>
    );
  }
};
  
export default memo(HomePage);
