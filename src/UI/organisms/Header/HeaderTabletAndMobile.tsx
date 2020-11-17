import React from "react";
import PropTypes from "prop-types";

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
  <Responsive dataTestId="HeaderTabletMobile" devices={["tablet", "mobile"]}>
    <MenuButton isOpen={isMenuVisible} onClick={onClick} />

    {isMenuVisible && <Backdrop onClick={onClick} />}

    <SideMenu isExpanded={isMenuVisible} onCVButtonClick={onCVButtonClick} />
  </Responsive>
);

HeaderTabletAndMobile.propTypes = {
  isMenuVisible: PropTypes.bool.isRequired,
  onCVButtonClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default HeaderTabletAndMobile;
