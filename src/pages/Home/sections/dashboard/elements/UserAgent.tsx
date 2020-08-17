import React from "react";

import DashboardElement from "<molecules>/DashboardElement";
import BrowserInfo from "<molecules>/BrowserInfo";

import {
  DashboardSectionProps
} from "<pages>/Home/sections/dashboard/DashboardSection/__typings__/DashboardSection.d.ts";

export const UserAgent = ({
  device
}: DashboardSectionProps): JSX.Element => (
  <DashboardElement
    dataTestId="UserAgent"
    description={device === "desktop" && window && window.navigator && window.navigator.userAgent}
    device={device}
    flex="0 1 20%"
    shouldDisplayCorners
    title="User Agent" 
  >
    <BrowserInfo />
  </DashboardElement>
);
  
export default UserAgent;
