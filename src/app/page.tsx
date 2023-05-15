import { PageTemplate } from "@app/components/templates/PageTemplate/PageTemplate";
import { AboutMeContainer } from "@app/containers/aboutMe/AboutMeContainer";
import { ContactContainer } from "@app/containers/contact/ContactContainer";
import { DashboardContainer } from "@app/containers/dashboard/DashboardContainer";
import { ExperienceContainer } from "@app/containers/experience/ExperienceContainer";
import { HeaderContainer } from "@app/containers/header/HeaderContainer";
import { SkillsContainer } from "@app/containers/skills/SkillsContainer";

const metadata = {
  description: "Alan Hadyk's Portfolio",
  title: "Alan Hadyk - Portfolio",
};

const IndexPage: React.FC = () => (
  <PageTemplate as="main">
    <HeaderContainer />
    <DashboardContainer />
    <ExperienceContainer />
    <SkillsContainer />
    <AboutMeContainer />
    <ContactContainer />
  </PageTemplate>
);

export { metadata };
export default IndexPage;
