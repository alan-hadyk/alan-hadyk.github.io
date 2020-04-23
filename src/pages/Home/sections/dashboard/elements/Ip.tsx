import React from "react";
import ip from "ip";

import DashboardElement from "<molecules>/DashboardElement";

const Ip = (): JSX.Element => (
  <DashboardElement
    dataTestId="IP"
    flex="1 1 12%"
    shuffleDelay={5400}
    title={`IP: ${ip.address()}`}
  >
    <div>IP</div>
  </DashboardElement>
);

export default Ip;
