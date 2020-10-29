import React from "react";

import MenuButton from "UI/atoms/MenuButton";

import Button from "UI/molecules/Button";
import Nav from "UI/molecules/Nav";

import SideMenu from "UI/organisms/SideMenu";

import Responsive from "UI/layout/Responsive";
import FlexContainer from "UI/layout/FlexContainer";

import Backdrop from "UI/atoms/Backdrop";
import { HeaderMobileProps } from "UI/organisms/Header/__typings__/HeaderMobile";

const HeaderDesktop = ({
  isMenuVisible,
  onClick
}: HeaderMobileProps): JSX.Element => (
  <Responsive dataTestDesktopId="HeaderDesktop" devices={["desktop"]}>
    <FlexContainer
      dataTestId="HeaderDesktopFlexContainer"
      flexFlow="row nowrap"
      gap="spacing48"
      height="spacing48"
      justifyContent="flex-start"
    >
      <Nav />

      <Button buttonText="cv" iconName="btnDownload" size="medium" />

      <MenuButton isOpen={isMenuVisible} onClick={onClick} />

      {isMenuVisible && <Backdrop onClick={onClick} />}

      <SideMenu isExpanded={isMenuVisible} />
    </FlexContainer>
  </Responsive>
);

export default HeaderDesktop;
