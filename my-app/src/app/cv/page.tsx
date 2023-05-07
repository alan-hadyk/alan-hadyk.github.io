import { PdfTemplate } from "@app/components/templates/PdfTemplate/PdfTemplate";

const CvPage: React.FC = () => (
  <PdfTemplate sidebar={<SidebarPdfContainer />}>
    <DashboardContainer format={DashboardContainerFormat.Pdf} />
    <ExperienceContainer format={ExperienceContainerFormat.Pdf} />
    <EducationContainer />
    <DisclaimerContainer />
  </PdfTemplate>
);

export default CvPage;
