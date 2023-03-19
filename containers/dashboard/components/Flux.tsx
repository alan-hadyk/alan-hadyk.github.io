import { DashboardElement } from "components/molecules/DashboardElement/DashboardElement";
import { FlowChart } from "components/molecules/FlowChart";

const Flux: React.FC = () => (
  <DashboardElement
    shouldDisplayCorners
    title="Flux"
    themeClasses={{
      container: {
        flex: "flex-[1_0_30%]"
      }
    }}
  >
    <FlowChart />
  </DashboardElement>
);

export { Flux };
