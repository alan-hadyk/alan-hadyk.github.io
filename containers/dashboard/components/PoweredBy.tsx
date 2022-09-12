import { DashboardElement } from "components/molecules/DashboardElement";
import { ReactLogo } from "components/molecules/ReactLogo";

const PoweredBy: React.FC = () => (
  <DashboardElement
    dataCy="PoweredBy"
    flex="flex-[1_0_30%]"
    shouldDisplayCorners
    title="Powered by"
  >
    <ReactLogo />
  </DashboardElement>
);

export { PoweredBy };
