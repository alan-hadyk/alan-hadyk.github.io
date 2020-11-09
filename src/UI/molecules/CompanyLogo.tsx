import React from "react";
import PropTypes from "prop-types";

import Icon, { iconComponents } from "UI/atoms/Icon";
import FlexContainer from "UI/layout/FlexContainer";

import { CompanyLogoProps } from "UI/molecules/__typings__/CompanyLogo";

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

CompanyLogo.propTypes = {
  logo: PropTypes.oneOf([...Object.keys(iconComponents)]).isRequired
};

export default CompanyLogo;
