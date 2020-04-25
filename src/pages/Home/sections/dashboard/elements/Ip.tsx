import React from "react";
import ip from "ip";

import DashboardElement from "<molecules>/DashboardElement";
import Icon from "<atoms>/Icon";

const Ip = (): JSX.Element => (
  <DashboardElement
    dataTestId="IP"
    flex="1 1 12%"
    shuffleDelay={5400}
    shouldDisplayCorners
    title={`IP: ${ip.address()}`}
  >
    <Icon
      animationTime="verySlow"
      height="100%"
      iconName="earth"
      isResponsive
      width="100%"
    />
  </DashboardElement>
);

export default Ip;
