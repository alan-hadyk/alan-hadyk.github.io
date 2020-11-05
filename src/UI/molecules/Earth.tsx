import React from "react";

import Icon from "UI/atoms/Icon";
import FlexContainer from "UI/layout/FlexContainer";
import SpacingContainer from "UI/layout/SpacingContainer";

import isSafari from "helpers/browser/isSafari";

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
      <Icon
        height={isSafari() ? "18vh" : "100%"}
        iconName="earth"
        isResponsive
        width={isSafari() ? "18vh" : "100%"}
      />
    </FlexContainer>
  </SpacingContainer>
);

export default Earth;
