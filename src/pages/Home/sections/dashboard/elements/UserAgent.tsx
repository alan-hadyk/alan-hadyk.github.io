import React from "react";

import DashboardElement from "UI/molecules/DashboardElement";
import BrowserInfo from "UI/molecules/BrowserInfo";

export const UserAgent = (): JSX.Element => (
  <DashboardElement
    dataCy="UserAgent"
    dataTestId="UserAgent"
    description={window && window.navigator && window.navigator.userAgent}
    flex="1 0 20%"
    shouldDisplayCorners
    title="User Agent"
  >
    <BrowserInfo />
  </DashboardElement>
);

export default UserAgent;
