import React from "react";

import Icon from "UI/atoms/Icon";
import FlexContainer from "UI/layout/FlexContainer";

import { CompanyLogoProps } from "UI/molecules/__typings__/CompanyLogo";

import isIE11 from "helpers/browser/isIE11";

import spacing from "styles/variables/spacing";

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
      overflow={isIE11() ? "hidden" : "visible"}
      width={isIE11() && `${spacing.spacing48}`}
    />
  </FlexContainer>
);

export default CompanyLogo;
