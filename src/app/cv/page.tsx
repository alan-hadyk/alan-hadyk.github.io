import { PdfTemplate } from "@app/components/templates/PdfTemplate/PdfTemplate";
import { SidebarPdfContainer } from "@app/containers/sidebarPdf/SidebarPdfContainer";

const CvPage: React.FC = () => (
  <PdfTemplate sidebar={<SidebarPdfContainer />}>
    {/* <DashboardContainer format={DashboardContainerFormat.Pdf} />
    <ExperienceContainer format={ExperienceContainerFormat.Pdf} />
    <EducationContainer />
    <DisclaimerContainer /> */}
    CvPage
  </PdfTemplate>
);

export default CvPage;
