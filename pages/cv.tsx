import { DashboardContainerFormat } from "containers/dashboard/@types/DashboardContainer";
import { DashboardContainer } from "containers/dashboard/DashboardContainer";
import { ExperienceContainerFormat } from "containers/experience/@types/ExperienceContainer";
import { ExperienceContainer } from "containers/experience/ExperienceContainer";
import { SidebarContainer } from "containers/sidebar/SidebarContainer";
import { PdfLayout } from "layouts/PdfLayout";
import { TNextPageWithLayout } from "types/next";

// Size: 793 x 1122

const CvPage: TNextPageWithLayout = () => (
  <>
    <DashboardContainer format={DashboardContainerFormat.Pdf} />
    <ExperienceContainer format={ExperienceContainerFormat.Pdf} />
  </>
);

CvPage.getLayout = (page) => (
  <PdfLayout title="Alan Hadyk - Portfolio" sidebar={<SidebarContainer />}>
    {page}
  </PdfLayout>
);

export default CvPage;
