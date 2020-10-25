import React from "react";

import DashboardElement from "UI/molecules/DashboardElement";
import ReactLogo from "UI/molecules/ReactLogo";

const PoweredBy = (): JSX.Element => (
  <DashboardElement
    dataCy="PoweredBy"
    dataTestId="PoweredBy"
    flex="1 0 30%"
    shouldDisplayCorners
    title="Powered by"
  >
    <ReactLogo />
  </DashboardElement>
);

export default PoweredBy;
