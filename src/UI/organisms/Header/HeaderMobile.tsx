import React from "react";

import ButtonWithIcon from "<molecules>/ButtonWithIcon";
import SideMenu from "<molecules>/SideMenu";

import Responsive from "<layout>/Responsive";

import { HeaderMobileProps } from "<organisms>/__typings__/Header/HeaderMobile.d.ts";

const HeaderMobile = ({
  isMenuVisible,
  onClick
}: HeaderMobileProps): JSX.Element => (
  <Responsive
    device="mobile"
  >
    <ButtonWithIcon
      onClick={onClick}
    />

    <SideMenu
      device="mobile"
      isExpanded={isMenuVisible}
    />
  </Responsive>
);

export default HeaderMobile;
