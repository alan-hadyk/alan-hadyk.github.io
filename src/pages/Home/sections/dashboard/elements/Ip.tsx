import React from "react";
import ip from "ip";

import DashboardElement from "<molecules>/DashboardElement";
import Earth from "<molecules>/Earth";

const Ip = (): JSX.Element => (
  <DashboardElement
    dataTestId="IP"
    flex="1 1 12%"
    shuffleDelay={5400}
    shouldDisplayCorners
    title={`IP: ${ip.address()}`}
  >
    <Earth />
  </DashboardElement>
);

export default Ip;
