import React, { useEffect, useState, useRef } from "react";

import Icon from "UI/atoms/Icon";
import FlexContainer from "UI/layout/FlexContainer";

import { CompanyLogoProps } from "UI/molecules/__typings__/CompanyLogo";

import isIE11 from "helpers/browser/isIE11";

const CompanyLogo = ({ logo }: CompanyLogoProps): JSX.Element => {
  const [iconWidth, setIconWidth] = useState<string>("");
  const iconRef = useRef(null);

  useEffect(() => {
    const viewBox = iconRef?.current?.attributes?.viewBox.value.split(" ")[2];

    if (isIE11()) {
      setIconWidth(`${viewBox}px`);
    }
  }, []);

  return (
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
        ref={iconRef}
        width={iconWidth}
      />
    </FlexContainer>
  );
};

export default CompanyLogo;
