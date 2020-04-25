import React from "react";
import ip from "ip";

import DashboardElement from "<molecules>/DashboardElement";
import Globe from "<atoms>/Globe";

const Ip = (): JSX.Element => (
  <DashboardElement
    dataTestId="IP"
    flex="1 1 12%"
    shuffleDelay={5400}
    title={`IP: ${ip.address()}`}
  >
    <Globe />
  </DashboardElement>
);

export default Ip;
