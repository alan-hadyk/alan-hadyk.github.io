import { DashboardElement } from "components/molecules/DashboardElement";
import { FlowChart } from "components/molecules/FlowChart";

const Flux: React.FC = () => (
  <DashboardElement flex="flex-[1_0_30%]" shouldDisplayCorners title="Flux">
    <FlowChart />
  </DashboardElement>
);

export { Flux };
