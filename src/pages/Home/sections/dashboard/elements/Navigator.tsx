import React from "react";

import DashboardElement from "<molecules>/DashboardElement";
import Performance from "<src>/UI/molecules/Performance";

const Navigator = (): JSX.Element => (
  <DashboardElement
    dataTestId="Navigator"
    flex="0 1 13.6%"
    title="Navigator"
  >
    <Performance />
  </DashboardElement>
);

export default Navigator;
