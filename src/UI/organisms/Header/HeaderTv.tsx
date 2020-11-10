import React from "react";

import Button from "UI/molecules/Button";
import MenuIcons from "UI/molecules/MenuIcons";
import Nav from "UI/molecules/Nav";

import Responsive from "UI/layout/Responsive";
import FlexContainer from "UI/layout/FlexContainer";
import SpacingContainer from "UI/layout/SpacingContainer";

import spacing from "styles/variables/spacing";

import isIE11 from "helpers/browser/isIE11";

import { HeaderTvProps } from "UI/organisms/Header/__typings__/HeaderTv";

const HeaderTv = ({ onCVButtonClick }: HeaderTvProps): JSX.Element => (
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
        marginRight="spacing24"
      >
        <Nav />
      </SpacingContainer>

      <Button
        buttonText="cv"
        dataCy="CvButton"
        iconName="btnDownload"
        iconWidth={isIE11() ? `${spacing.spacing24}` : "auto"}
        onClick={onCVButtonClick}
        size="medium"
      />

      <MenuIcons />
    </FlexContainer>
  </Responsive>
);

export default HeaderTv;
