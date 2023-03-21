import ip from "ip";

import DashboardElement from "UI/molecules/DashboardElement";
import Earth from "UI/molecules/Earth";

const Ip = (): JSX.Element => (
  <DashboardElement
    dataCy="Ip"
    dataTestId="IP"
    flex="0 1 30%"
    shouldDisplayCorners
    title={`IP: ${ip.address()}`}
  >
    <Earth />
  </DashboardElement>
);

export default Ip;
