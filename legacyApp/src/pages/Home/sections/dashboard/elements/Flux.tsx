import DashboardElement from "UI/molecules/DashboardElement";
import FlowChart from "UI/molecules/FlowChart";

const Flux = (): JSX.Element => (
  <DashboardElement
    dataCy="Flux"
    dataTestId="Flux"
    flex="1 0 30%"
    shouldDisplayCorners
    title="Flux"
  >
    <FlowChart />
  </DashboardElement>
);

export default Flux;
