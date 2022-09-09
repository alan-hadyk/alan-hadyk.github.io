import ip from "ip";

import { DashboardElement } from "components/molecules/DashboardElement";
import { Earth } from "components/molecules/Earth";

const Ip = (): JSX.Element => (
  <DashboardElement
    dataCy="Ip"
    flex="flex-[0_1_30%]"
    shouldDisplayCorners
    title={`IP: ${ip.address()}`}
  >
    <Earth />
  </DashboardElement>
);

export { Ip };
