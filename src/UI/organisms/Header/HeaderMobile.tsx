import React from "react";

import MenuButton from "<atoms>/MenuButton";
import Backdrop from "<atoms>/Backdrop";

import SideMenu from "<organisms>/SideMenu";

import Responsive from "<layout>/Responsive";

import { HeaderMobileProps } from "<organisms>/__typings__/Header/HeaderMobile.d.ts";

const HeaderMobile = ({
  isMenuVisible,
  onClick
}: HeaderMobileProps): JSX.Element => (
  <Responsive
    dataTestMobileId="HeaderMobile"
    devices={["mobile"]}
  >
    <MenuButton
      isOpen={isMenuVisible}
      onClick={onClick}
    />

    {
      isMenuVisible && (
        <Backdrop onClick={onClick} />
      )
    }

    <SideMenu
      isExpanded={isMenuVisible}
    />
  </Responsive>
);

export default HeaderMobile;
