import React from "react";

import Button from "<molecules>/Button";
import MenuIcons from "<molecules>/MenuIcons";
import Nav from "<molecules>/Nav";

import Responsive from "<layout>/Responsive";
import FlexContainer from "<layout>/FlexContainer";

const HeaderDesktop = (): JSX.Element => (
  <Responsive
    device="desktop"
  >
    <FlexContainer
      flexFlow="row nowrap"
      height="spacing48"
      gap="spacing48"
      justifyContent="flex-start"
    >
      <Nav />

      <Button
        buttonText="resume"
        iconName="btnDownload"
        size="medium"
      />

      <MenuIcons />
    </FlexContainer>
  </Responsive>
);

export default HeaderDesktop;
