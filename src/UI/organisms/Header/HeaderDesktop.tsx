import React from "react";

import MenuButton from "UI/atoms/MenuButton";

import Button from "UI/molecules/Button";
import Nav from "UI/molecules/Nav";

import SideMenu from "UI/organisms/SideMenu";

import Responsive from "UI/layout/Responsive";
import FlexContainer from "UI/layout/FlexContainer";
import SpacingContainer from "UI/layout/SpacingContainer";

import Backdrop from "UI/atoms/Backdrop";

import spacing from "styles/variables/spacing";

import isIE11 from "helpers/browser/isIE11";

import { HeaderMobileProps } from "UI/organisms/Header/__typings__/HeaderMobile";

const HeaderDesktop = ({
  isMenuVisible,
  onCVButtonClick,
  onClick
}: HeaderMobileProps): JSX.Element => (
  <Responsive dataTestDesktopId="HeaderDesktop" devices={["desktop"]}>
    <FlexContainer
      dataTestId="HeaderDesktopFlexContainer"
      flexFlow="row nowrap"
      height="spacing48"
      gap="spacing24"
      justifyContent="flex-start"
    >
      <SpacingContainer
        dataTestId="HeaderDesktopSpacingContainer"
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

      <MenuButton isOpen={isMenuVisible} onClick={onClick} />

      {isMenuVisible && <Backdrop onClick={onClick} />}

      <SideMenu isExpanded={isMenuVisible} />
    </FlexContainer>
  </Responsive>
);

export default HeaderDesktop;
