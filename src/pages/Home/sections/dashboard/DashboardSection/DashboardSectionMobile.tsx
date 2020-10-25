import React, { memo } from "react";

import ConsoleMobile from "UI/molecules/Console/ConsoleMobile";

import Responsive from "UI/layout/Responsive";
import SpacingContainer from "UI/layout/SpacingContainer";

const DashboardSectionMobile = (): JSX.Element => (
  <Responsive dataTestMobileId="DashboardSectionMobile" devices={["mobile"]}>
    <SpacingContainer
      dataTestId="DashboardSectionSpacingContainer"
      paddingTop="spacing96"
    >
      <ConsoleMobile />
    </SpacingContainer>
  </Responsive>
);

export default memo(DashboardSectionMobile);
