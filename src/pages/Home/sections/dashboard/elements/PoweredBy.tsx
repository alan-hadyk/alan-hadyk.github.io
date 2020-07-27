import React from "react";

import DashboardElement from "<molecules>/DashboardElement";
import ReactLogo from "<molecules>/ReactLogo";

import {
  DashboardSectionProps
} from "<pages>/Home/sections/dashboard/__typings__/DashboardSection/DashboardSection.d.ts";

const PoweredBy = ({
  device
}: DashboardSectionProps): JSX.Element => {
  const flex = device === "desktop" ? "0 1 20%" : "0 1 25%";

  return (
    <DashboardElement
      dataTestId="PoweredBy"
      flex={flex}
      shouldDisplayCorners
      title="Powered by react"
    >
      <ReactLogo />
    </DashboardElement>
  );
};

export default PoweredBy;
