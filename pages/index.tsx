import { AboutMeContainer } from "containers/aboutMe/AboutMeContainer";
import { ContactContainer } from "containers/contact/ContactContainer";
import { DashboardContainer } from "containers/dashboard/DashboardContainer";
import { ExperienceContainer } from "containers/experience/ExperienceContainer";
import { HeaderContainer } from "containers/header/HeaderContainer";
import { SkillsContainer } from "containers/skills/SkillsContainer";
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
