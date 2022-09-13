import { DashboardElement } from "components/molecules/DashboardElement";
import { Earth } from "components/molecules/Earth";

const Ip: React.FC = () => (
  <DashboardElement
    dataCy="Ip"
    flex="flex-[0_1_30%]"
    shouldDisplayCorners
    title="IP: 127.0.0.1"
  >
    <Earth />
  </DashboardElement>
);

export { Ip };
