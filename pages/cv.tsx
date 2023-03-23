// import { AboutMeContainer } from "containers/aboutMe/AboutMeContainer";
// import { ContactContainer } from "containers/contact/ContactContainer";
import { DashboardContainer } from "containers/dashboard/DashboardContainer";
import { ExperienceContainerFormat } from "containers/experience/@types/ExperienceContainer";
import { ExperienceContainer } from "containers/experience/ExperienceContainer";
import { SidebarContainer } from "containers/sidebar/SidebarContainer";
// import { SkillsContainer } from "containers/skills/SkillsContainer";
import { PdfLayout } from "layouts/PdfLayout";
import { TNextPageWithLayout } from "types/next";

// Size: 793 x 1122

const CvPage: TNextPageWithLayout = () => (
  <>
    <DashboardContainer format="pdf" />
    <ExperienceContainer format={ExperienceContainerFormat.Pdf} />
    {/* <SkillsContainer />
    <AboutMeContainer />
    <ContactContainer /> */}
  </>
);

CvPage.getLayout = (page) => (
  <PdfLayout title="Alan Hadyk - Portfolio" sidebar={<SidebarContainer />}>
    {page}
  </PdfLayout>
);

export default CvPage;
