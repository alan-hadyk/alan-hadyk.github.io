import { DashboardContainerFormat } from "containers/dashboard/@types/DashboardContainer";
import { DashboardContainer } from "containers/dashboard/DashboardContainer";
import { DisclaimerContainer } from "containers/disclaimer/DisclaimerContainer";
import { EducationContainer } from "containers/education/EducationContainer";
import { ExperienceContainerFormat } from "containers/experience/@types/ExperienceContainer";
import { ExperienceContainer } from "containers/experience/ExperienceContainer";
import { SidebarPdfContainer } from "containers/sidebarPdf/SidebarPdfContainer";
import { PdfLayout } from "layouts/PdfLayout";
import { TNextPageWithLayout } from "types/next";

// Size: 793 x 1122

const CvPage: TNextPageWithLayout = () => (
  <>
    <DashboardContainer format={DashboardContainerFormat.Pdf} />
    <ExperienceContainer format={ExperienceContainerFormat.Pdf} />
    <EducationContainer />
    <DisclaimerContainer />
  </>
);

CvPage.getLayout = (page) => (
  <PdfLayout title="Alan Hadyk - Portfolio" sidebar={<SidebarPdfContainer />}>
    {page}
  </PdfLayout>
);

export default CvPage;
