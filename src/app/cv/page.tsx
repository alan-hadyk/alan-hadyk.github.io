import { PdfTemplate } from "@app/components/templates/PdfTemplate/PdfTemplate";
import { DashboardContainerFormat } from "@app/containers/Dashboard/@types/DashboardContainer";
import { DashboardContainer } from "@app/containers/Dashboard/DashboardContainer";
import { DisclaimerContainer } from "@app/containers/Disclaimer/DisclaimerContainer";
import { EducationContainer } from "@app/containers/Education/EducationContainer";
import { ExperienceContainerFormat } from "@app/containers/Experience/@types/ExperienceContainer";
import { ExperienceContainer } from "@app/containers/Experience/ExperienceContainer";
import { SidebarPdfContainer } from "@app/containers/SidebarPdf/SidebarPdfContainer";

const CvPage: React.FC = () => (
  <PdfTemplate sidebar={<SidebarPdfContainer />}>
    <DashboardContainer format={DashboardContainerFormat.Pdf} />
    <ExperienceContainer format={ExperienceContainerFormat.Pdf} />
    <EducationContainer />
    <DisclaimerContainer />
  </PdfTemplate>
);

export default CvPage;
