import React from "react";

import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";

import Icon from "<atoms>/Icon";

const ReactLogo = (): JSX.Element => (
  <SpacingContainer
    dataTestId="ReactLogo"
    height="100%"
    paddingBottom="1vh"
    paddingLeft="1vw"
    paddingRight="1vw"
    paddingTop="1vh"
    width="100%"
  >
    <FlexContainer 
      alignItems="center"
      dataTestId="ReactLogoFlexContainer"
      height="100%"
      justifyContent="center"
    > 
      <Icon
        // animationTime="verySlow"
        height="100%"
        iconName="reactLogo"
        isResponsive
        // shouldDisplayGlowAnimation
        // shouldRotate
        width="100%"
      />
    </FlexContainer>
  </SpacingContainer>
);

export default ReactLogo;
