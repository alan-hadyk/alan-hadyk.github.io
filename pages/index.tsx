import { Header } from "components/organisms/Header/Header";
import { AboutMeContainer } from "containers/aboutMe/AboutMeContainer";
import { ContactContainer } from "containers/contact/ContactContainer";
import { DashboardContainer } from "containers/dashboard/DashboardContainer";
import { ExperienceContainer } from "containers/experience/ExperienceContainer";
import { SkillsContainer } from "containers/skills/SkillsContainer";
import { WebLayout } from "layouts/WebLayout";
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
  <WebLayout title="Alan Hadyk">{page}</WebLayout>
);

export default IndexPage;
