import React from "react";

import DashboardElement from "<molecules>/DashboardElement";
import Performance from "<molecules>/Performance";

import {
  DashboardSectionProps
} from "<pages>/Home/sections/dashboard/__typings__/DashboardSection/DashboardSection.d.ts";

const Navigator = ({
  device
}: DashboardSectionProps): JSX.Element => {
  const flex = device === "desktop" ? "0 1 13.6%" : "0 1 25%";

  return (
    <DashboardElement
      dataTestId="Navigator"
      flex={flex}
      title="Navigator"
    >
      <Performance />
    </DashboardElement>
  );
};

export default Navigator;
