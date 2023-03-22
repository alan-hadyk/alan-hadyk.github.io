import { ConsolePdf } from "components/molecules/Console/screens/ConsolePdf";
import { catchPhrase } from "containers/dashboard/config";

const DashboardContainerPdf: React.FC = () => (
  <ConsolePdf>{catchPhrase}</ConsolePdf>
);

export { DashboardContainerPdf };
