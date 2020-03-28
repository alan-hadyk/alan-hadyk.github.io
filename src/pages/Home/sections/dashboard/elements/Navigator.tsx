import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import Performance from "<src>/UI/molecules/Performance";

const Navigator = (): JSX.Element => (
  <DashboardElement
    childrenHeight="17vh"
    dataTestId="Navigator"
    flex="0 1 12%"
    title="Navigator"
  >
    <Performance />
  </DashboardElement>
);

export default memo(Navigator);
