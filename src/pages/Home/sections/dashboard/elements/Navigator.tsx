import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import Performance from "<src>/UI/molecules/Performance";

const Navigator = (): JSX.Element => (
  <DashboardElement
    childrenHeight="22.6vh"
    dataTestId="Navigator"
    flex="0 1 12%"
    shuffleDelay={3600}
    title="Navigator"
  >
    <Performance />
  </DashboardElement>
);

export default memo(Navigator);
