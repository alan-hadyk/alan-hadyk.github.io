import React, { memo } from "react";

import ConsoleMobile from "<molecules>/Console/ConsoleMobile";

import Responsive from "<layout>/Responsive";
import SpacingContainer from "<layout>/SpacingContainer";

const DashboardSectionMobile = (): JSX.Element => (
  <Responsive
    dataTestMobileId="DashboardSectionMobile"
    devices={["mobile"]}
  >
    <SpacingContainer
      dataTestId="DashboardSectionSpacingContainer"
      paddingTop="spacing96"
    >
      <ConsoleMobile />
    </SpacingContainer>
  </Responsive>
);

export default memo(DashboardSectionMobile);
