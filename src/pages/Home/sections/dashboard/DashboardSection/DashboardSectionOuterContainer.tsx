import React from "react";

import FlexContainer from "<layout>/FlexContainer";
import PositionContainer from "<layout>/PositionContainer";

import {
  DashboardSectionOuterContainerProps
} from "<pages>/Home/sections/dashboard/__typings__/DashboardSection/DashboardSectionOuterContainer.d.ts";

const DashboardSectionOuterContainer = ({
  children
}: DashboardSectionOuterContainerProps): JSX.Element => (
  <PositionContainer
    dataTestId="DashboardSectionPositionContainer"
    height="100%"
    position="relative"
  >
    <FlexContainer
      alignItems="center"
      dataTestId="DashboardSectionFlexContainer"
      flexFlow="column nowrap"
      height="100%"
      justifyContent="space-between"
    >
      {children}
    </FlexContainer>
  </PositionContainer>
);

export default DashboardSectionOuterContainer;
