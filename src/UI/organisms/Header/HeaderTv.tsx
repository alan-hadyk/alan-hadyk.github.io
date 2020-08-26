import React from "react";

import Button from "<molecules>/Button";
import MenuIcons from "<molecules>/MenuIcons";
import Nav from "<molecules>/Nav";

import Responsive from "<layout>/Responsive";
import FlexContainer from "<layout>/FlexContainer";

const HeaderTv = (): JSX.Element => (
  <Responsive
    dataTestTvId="HeaderTv"
    devices={["tv"]}
  >
    <FlexContainer
      dataTestId="HeaderTvFlexContainer"
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

export default HeaderTv;
