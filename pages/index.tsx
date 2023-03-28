import { AboutMeContainer } from "containers/AboutMe/AboutMeContainer";
import { ContactContainer } from "containers/Contact/ContactContainer";
import { DashboardContainer } from "containers/Dashboard/DashboardContainer";
import { ExperienceContainer } from "containers/experience/ExperienceContainer";
import { HeaderContainer } from "containers/Header/HeaderContainer";
import { SkillsContainer } from "containers/Skills/SkillsContainer";
import { WebLayout } from "layouts/WebLayout";
import { TNextPageWithLayout } from "types/next";

const IndexPage: TNextPageWithLayout = () => (
  <>
    <HeaderContainer />

    <DashboardContainer />
    <ExperienceContainer />
    <SkillsContainer />
    <AboutMeContainer />
    <ContactContainer />
  </>
);

IndexPage.getLayout = (page) => (
  <WebLayout title="Alan Hadyk - Portfolio">{page}</WebLayout>
);

export default IndexPage;
