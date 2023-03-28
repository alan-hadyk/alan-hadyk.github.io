import { ConsolePdf } from "components/molecules/Console/screens/ConsolePdf";
import { catchPhrase } from "containers/Dashboard/config";

const DashboardContainerPdf: React.FC = () => (
  <ConsolePdf>{catchPhrase}</ConsolePdf>
);

export { DashboardContainerPdf };
