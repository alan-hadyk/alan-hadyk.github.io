import React from "react";

import FlexContainer from "<layout>/FlexContainer";
import PositionContainer from "<layout>/PositionContainer";
import SpacingContainer from "<layout>/SpacingContainer";

import {
  DashboardSectionOuterContainerProps
} from "<pages>/Home/sections/dashboard/DashboardSection/__typings__/DashboardSectionOuterContainer.d.ts";

const DashboardSectionOuterContainer = ({
  children
}: DashboardSectionOuterContainerProps): JSX.Element => (
  <SpacingContainer
    dataTestId="DashboardSectionOuterContainer"
    height="100vh"
    paddingTop="spacing96"
  >
    <PositionContainer
      dataTestId="DashboardSectionPositionContainer"
      height="100%"
      position="relative"
    >
      <FlexContainer
        alignItems="center"
        dataTestId="DashboardSectionOuterFlexContainer"
        flexFlow="column nowrap"
        height="100%"
        justifyContent="space-between"
      >
        {children}
      </FlexContainer>
    </PositionContainer>
  </SpacingContainer>
);

export default DashboardSectionOuterContainer;
