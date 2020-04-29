import React from "react";
import ip from "ip";

import DashboardElement from "<molecules>/DashboardElement";
import Earth from "<molecules>/Earth";

const Ip = (): JSX.Element => (
  <DashboardElement
    dataTestId="IP"
    flex="0 1 20%"
    shouldDisplayCorners
    title={`IP: ${ip.address()}`}
  >
    <Earth />
  </DashboardElement>
);

export default Ip;
