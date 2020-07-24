import React from "react";

import ButtonWithIcon from "<molecules>/ButtonWithIcon";
import Nav from "<molecules>/Nav";
import SideMenu from "<molecules>/SideMenu";

import Responsive from "<layout>/Responsive";
import FlexContainer from "<layout>/FlexContainer";

import { HeaderMobileProps } from "<organisms>/__typings__/Header/HeaderMobile.d.ts";

const HeaderTablet = ({
  isMenuVisible,
  onClick
}: HeaderMobileProps): JSX.Element => (
  <Responsive
    device="tablet"
  >
    <FlexContainer
      dataTestId="HeaderTabletFlexContainer"
      flexFlow="row nowrap"
      gap="spacing48"
      height="spacing48"
      justifyContent="flex-start"
    >
      <Nav />

      <ButtonWithIcon
        onClick={onClick}
      />

      <SideMenu
        device="tablet"
        isExpanded={isMenuVisible}
      />
    </FlexContainer>
  </Responsive>
);

export default HeaderTablet;
