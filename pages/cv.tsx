import { AboutMeContainer } from "containers/AboutMe/AboutMeContainer";
import { ContactContainer } from "containers/Contact/ContactContainer";
import { DashboardContainerFormat } from "containers/Dashboard/@types/DashboardContainer";
import { DashboardContainer } from "containers/Dashboard/DashboardContainer";
import { ExperienceContainer } from "containers/experience/ExperienceContainer";
import { SkillsContainer } from "containers/Skills/SkillsContainer";
import { PdfLayout } from "layouts/PdfLayout";
import { TNextPageWithLayout } from "types/next";

// Size: 793 x 1122

const CVPage: TNextPageWithLayout = () => (
  <>
    <DashboardContainer format={DashboardContainerFormat.Pdf} />
    <ExperienceContainer />
    <SkillsContainer />
    <AboutMeContainer />
    <ContactContainer />
  </>
);

CVPage.getLayout = (page) => (
  <PdfLayout sidebar={<div />} title="Alan Hadyk - Portfolio">
    {page}
  </PdfLayout>
);

export default CVPage;
