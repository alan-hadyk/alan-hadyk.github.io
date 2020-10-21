import React from "react";

import MenuButton from "<atoms>/MenuButton";
import Backdrop from "<atoms>/Backdrop";

import SideMenu from "<organisms>/SideMenu";

import Responsive from "<layout>/Responsive";

import { HeaderMobileProps } from "<organisms>/Header/__typings__/HeaderMobile.d.ts";

const HeaderTabletAndMobile = ({
  isMenuVisible,
  onClick
}: HeaderMobileProps): JSX.Element => (
  <Responsive
    dataTestMobileId="HeaderMobile"
    dataTestTabletId="HeaderTablet"
    devices={["tablet", "mobile"]}
  >
    <MenuButton isOpen={isMenuVisible} onClick={onClick} />

    {isMenuVisible && <Backdrop onClick={onClick} />}

    <SideMenu isExpanded={isMenuVisible} />
  </Responsive>
);

export default HeaderTabletAndMobile;
