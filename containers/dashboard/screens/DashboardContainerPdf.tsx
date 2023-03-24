import { ConsolePdf } from "components/molecules/Console/screens/ConsolePdf";
import { PdfTitle } from "components/molecules/PdfTitle/PdfTitle";
import { catchPhrase } from "containers/dashboard/config";

const DashboardContainerPdf: React.FC = () => (
  <>
    <PdfTitle>Curriculum Vitae</PdfTitle>
    <ConsolePdf>{catchPhrase}</ConsolePdf>
  </>
);

export { DashboardContainerPdf };
