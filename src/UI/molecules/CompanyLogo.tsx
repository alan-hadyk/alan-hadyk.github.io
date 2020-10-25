import React from "react";

import Icon from "atoms/Icon";
import FlexContainer from "layout/FlexContainer";

import { CompanyLogoProps } from "molecules/__typings__/CompanyLogo";

const CompanyLogo = ({ logo }: CompanyLogoProps): JSX.Element => (
  <FlexContainer
    alignItems="flex-start"
    dataCy="CompanyLogo"
    dataTestId="CompanyLogoFlexContainer"
    justifyContent="flex-end"
  >
    <Icon
      dataTestId="Logo"
      height="spacing48"
      iconName={logo}
      isHeightResponsive
    />
  </FlexContainer>
);

export default CompanyLogo;
