import React, { memo } from "react";

import DashboardElement from "<molecules>/DashboardElement";
import BrowserInfo from "<molecules>/BrowserInfo";

export const UserAgent = (): JSX.Element => {
  return (
    <DashboardElement
      dataTestId="UserAgent"
      flex="0 1 13.6%"
      description={window.navigator.userAgent}
      shouldDisplayCorners
      shuffleDelay={4800}
      title="User Agent:" 
    >
      <BrowserInfo />
    </DashboardElement>
  );
};
  
export default memo(UserAgent);
