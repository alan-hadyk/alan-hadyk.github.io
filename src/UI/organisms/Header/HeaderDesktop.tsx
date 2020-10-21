import React from "react";

import MenuButton from "<atoms>/MenuButton";
import Nav from "<molecules>/Nav";
import SideMenu from "<organisms>/SideMenu";

import Responsive from "<layout>/Responsive";
import FlexContainer from "<layout>/FlexContainer";

import Backdrop from "<atoms>/Backdrop";
import { HeaderMobileProps } from "<organisms>/Header/__typings__/HeaderMobile.d.ts";

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

      <MenuButton isOpen={isMenuVisible} onClick={onClick} />

      {isMenuVisible && <Backdrop onClick={onClick} />}

      <SideMenu isExpanded={isMenuVisible} />
    </FlexContainer>
  </Responsive>
);

export default HeaderDesktop;
