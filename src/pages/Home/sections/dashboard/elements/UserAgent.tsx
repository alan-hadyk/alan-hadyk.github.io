import React from "react";

import DashboardElement from "<molecules>/DashboardElement";
import BrowserInfo from "<molecules>/BrowserInfo";

import {
  DashboardSectionProps
} from "<pages>/Home/sections/dashboard/__typings__/DashboardSection/DashboardSection.d.ts";

export const UserAgent = ({
  device
}: DashboardSectionProps): JSX.Element => {
  const flex = device === "desktop" ? "0 1 13.6%" : "0 1 25%";

  return (
    <DashboardElement
      dataTestId="UserAgent"
      description={device === "desktop" && window && window.navigator && window.navigator.userAgent}
      device={device}
      flex={flex}
      shouldDisplayCorners
      title="User Agent" 
    >
      <BrowserInfo />
    </DashboardElement>
  );
};
  
export default UserAgent;
