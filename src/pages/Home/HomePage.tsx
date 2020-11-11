import React, { Suspense, memo, lazy } from "react";

const DashboardSection = lazy(
  () => import("pages/Home/sections/dashboard/DashboardSection")
);
const ExperienceSection = lazy(
  () => import("pages/Home/sections/experience/ExperienceSection")
);
const SkillsSection = lazy(
  () => import("pages/Home/sections/skills/SkillsSection")
);
const AboutMeSection = lazy(
  () => import("pages/Home/sections/about/AboutMeSection")
);
const ContactSection = lazy(
  () => import("pages/Home/sections/contact/ContactSection")
);

const Header = lazy(() => import("UI/organisms/Header"));
import PageTemplate from "UI/templates/PageTemplate";

const HomePage = (): JSX.Element => (
  <PageTemplate>
    <Suspense fallback={<div />}>
      <DashboardSection />
    </Suspense>
    <Suspense fallback={<div />}>
      <ExperienceSection />
    </Suspense>
    <Suspense fallback={<div />}>
      <SkillsSection />
    </Suspense>
    <Suspense fallback={<div />}>
      <AboutMeSection />
    </Suspense>
    <Suspense fallback={<div />}>
      <ContactSection />
    </Suspense>
    <Suspense fallback={<div />}>
      <Header zIndex="layer2" />
    </Suspense>
  </PageTemplate>
);

export default memo(HomePage);
