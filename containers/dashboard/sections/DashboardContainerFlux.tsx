import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { FluxChart } from "components/molecules/FluxChart/FluxChart";
import { dashboardContainerFluxDefaultThemeClasses } from "containers/dashboard/styles";

const DashboardContainerFlux: React.FC = () => (
  <ContentFrame
    shouldDisplayCorners
    title="Flux"
    themeClasses={dashboardContainerFluxDefaultThemeClasses}
  >
    <FluxChart />
  </ContentFrame>
);

export { DashboardContainerFlux };
