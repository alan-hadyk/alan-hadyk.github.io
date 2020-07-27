import React from "react";

import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";

import {
  DashboardSectionInnerContainerProps
} from "<pages>/Home/sections/dashboard/__typings__/DashboardSection/DashboardSectionInnerContainer.d.ts";

const DashboardSectionInnerContainer = ({
  children,
  height
}: DashboardSectionInnerContainerProps): JSX.Element => (
  <SpacingContainer
    dataTestId="DashboardSectionSpacingContainer"
    height={height}
    marginTop="2.22vh"
    width="100%"
  >
    <FlexContainer
      alignItems="stretch"
      dataTestId="DashboardSectionFlexContainer"
      flexFlow="row nowrap"
      gap="spacing48"
      height="100%"
      justifyContent="center"
    >
      {children}
    </FlexContainer>
  </SpacingContainer>
);

export default DashboardSectionInnerContainer;
