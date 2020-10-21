import React from "react";

import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";

import Icon from "<atoms>/Icon";

const Earth = (): JSX.Element => (
  <SpacingContainer
    dataTestId="Earth"
    height="100%"
    paddingBottom="1vh"
    paddingLeft="1vw"
    paddingRight="1vw"
    paddingTop="1vh"
    width="100%"
  >
    <FlexContainer
      alignItems="center"
      dataTestId="EarthFlexContainer"
      height="100%"
      justifyContent="center"
    >
      <Icon height="100%" iconName="earth" isResponsive width="100%" />
    </FlexContainer>
  </SpacingContainer>
);

export default Earth;
