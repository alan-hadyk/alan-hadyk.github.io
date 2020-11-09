import React from "react";

import Icon from "UI/atoms/Icon";
import FlexContainer from "UI/layout/FlexContainer";
import SpacingContainer from "UI/layout/SpacingContainer";

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
      <Icon height="100%" iconName="reactLogo" isResponsive width="100%" />
    </FlexContainer>
  </SpacingContainer>
);

export default ReactLogo;
