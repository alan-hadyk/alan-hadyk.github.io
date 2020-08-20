import React from "react";

import DashboardElement from "<molecules>/DashboardElement";
import ReactLogo from "<molecules>/ReactLogo";

const PoweredBy = (): JSX.Element => (
  <DashboardElement
    dataTestId="PoweredBy"
    flex="1 0 30%"
    shouldDisplayCorners
    title="Powered by"
  >
    <ReactLogo />
  </DashboardElement>
);

export default PoweredBy;
