import { ContentFrameVariant } from "components/molecules/ContentFrame/@types/ContentFrame";
import { ContentFrame } from "components/molecules/ContentFrame/ContentFrame";
import { FluxChart } from "components/molecules/FluxChart/FluxChart";

const DashboardContainerFlux: React.FC = () => (
  <ContentFrame
    title="Flux"
    themeClasses={{
      container: {
        flex: "flex-[1_0_30%]"
      }
    }}
    variant={ContentFrameVariant.Corners}
  >
    <FluxChart />
  </ContentFrame>
);

export { DashboardContainerFlux };
