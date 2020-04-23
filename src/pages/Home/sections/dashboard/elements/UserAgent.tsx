import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import BrowserInfo from "<molecules>/BrowserInfo";

export const UserAgent = (): JSX.Element => (
  <DashboardElement
    dataTestId="UserAgent"
    description={window.navigator.userAgent}
    flex="0 1 13.6%"
    shouldDisplayCorners
    shuffleDelay={4800}
    title="User Agent:" 
  >
    <BrowserInfo />
  </DashboardElement>
);
  
export default memo(UserAgent);
