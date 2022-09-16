import { Header } from "components/organisms/Header/Header";
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
  </>
);

IndexPage.getLayout = (page) => (
  <MainLayout title="Alan Hadyk">{page}</MainLayout>
);

export default IndexPage;
