import React from "react";

import Button from "UI/molecules/Button";
import MenuIcons from "UI/molecules/MenuIcons";
import Nav from "UI/molecules/Nav";

import Responsive from "UI/layout/Responsive";
import FlexContainer from "UI/layout/FlexContainer";
import SpacingContainer from "UI/layout/SpacingContainer";

function HeaderTv(): JSX.Element {
  return (
    <Responsive dataTestTvId="HeaderTv" devices={["tv"]}>
      <FlexContainer
        dataTestId="HeaderTvFlexContainer"
        flexFlow="row nowrap"
        height="spacing48"
        gap="spacing24"
        justifyContent="flex-start"
      >
        <SpacingContainer
          dataTestId="HeaderTvSpacingContainer"
          paddingRight="spacing24"
        >
          <Nav />
        </SpacingContainer>

        <Button
          buttonText="cv"
          iconName="btnDownload"
          onClick={handleButtonClick}
          size="medium"
        />
        <MenuIcons />
      </FlexContainer>
    </Responsive>
  );

  function handleButtonClick() {
    window.open("/pdf/Alan_Hadyk_CV_2020.pdf", "_blank");
  }
}

export default HeaderTv;
