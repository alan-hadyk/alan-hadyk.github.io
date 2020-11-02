import React from "react";

import MenuButton from "UI/atoms/MenuButton";
import Backdrop from "UI/atoms/Backdrop";

import SideMenu from "UI/organisms/SideMenu";

import Responsive from "UI/layout/Responsive";

import { HeaderMobileProps } from "UI/organisms/Header/__typings__/HeaderMobile";

const HeaderTabletAndMobile = ({
  isMenuVisible,
  onCVButtonClick,
  onClick
}: HeaderMobileProps): JSX.Element => (
  <Responsive
    dataTestMobileId="HeaderMobile"
    dataTestTabletId="HeaderTablet"
    devices={["tablet", "mobile"]}
  >
    <MenuButton isOpen={isMenuVisible} onClick={onClick} />

    {isMenuVisible && <Backdrop onClick={onClick} />}

    <SideMenu isExpanded={isMenuVisible} onCVButtonClick={onCVButtonClick} />
  </Responsive>
);

export default HeaderTabletAndMobile;
