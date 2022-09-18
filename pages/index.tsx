import { Header } from "components/organisms/Header/Header";
import { AboutMeContainer } from "containers/aboutMe/AboutMeContainer";
import { ContactContainer } from "containers/contact/ContactContainer";
import { DashboardContainer } from "containers/dashboard/DashboardContainer";
import { ExperienceContainer } from "containers/experience/ExperienceContainer";
import { SkillsContainer } from "containers/skills/SkillsContainer";
import { MainLayout } from "layouts/MainLayout";
import { TNextPageWithLayout } from "types/next";

const IndexPage: TNextPageWithLayout = () => (
  <>
    <Header zIndex="z-400" />

    <DashboardContainer />
    <ExperienceContainer />
    <SkillsContainer />
    <AboutMeContainer />
    <ContactContainer />
  </>
);

IndexPage.getLayout = (page) => (
  <MainLayout title="Alan Hadyk">{page}</MainLayout>
);

export default IndexPage;
