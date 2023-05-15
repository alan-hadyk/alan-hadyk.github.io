import { PageTemplate } from "@app/components/templates/PageTemplate/PageTemplate";
import { AboutMeContainer } from "@app/containers/AboutMe/AboutMeContainer";
import { ContactContainer } from "@app/containers/Contact/ContactContainer";
import { DashboardContainer } from "@app/containers/Dashboard/DashboardContainer";
import { ExperienceContainer } from "@app/containers/Experience/ExperienceContainer";
import { HeaderContainer } from "@app/containers/Header/HeaderContainer";
import { SkillsContainer } from "@app/containers/Skills/SkillsContainer";

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
