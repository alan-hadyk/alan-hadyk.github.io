import React from "react";

import CompanyTvDesktopAndTablet from "UI/organisms/Company/CompanyTvDesktopAndTablet";
import CompanyMobile from "UI/organisms/Company/CompanyMobile";

import FlexContainer from "UI/layout/FlexContainer";
import PositionContainer from "UI/layout/PositionContainer";

import { CompanyProps } from "UI/organisms/Company/__typings__/Company";

const Company = ({
  companyMobilePaddingBottom,
  dataCy,
  dataTestId,
  date,
  iconsWithLabels,
  logo,
  responsibilities,
  timelineBottom,
  title
}: CompanyProps): JSX.Element => (
  <FlexContainer dataCy={dataCy} dataTestId={dataTestId || "Company"}>
    <PositionContainer
      dataTestId="CompanyPositionContainer"
      position="relative"
      width="100%"
    >
      <CompanyTvDesktopAndTablet
        date={date}
        iconsWithLabels={iconsWithLabels}
        logo={logo}
        responsibilities={responsibilities}
        timelineBottom={timelineBottom}
        title={title}
      />

      <CompanyMobile
        date={date}
        iconsWithLabels={iconsWithLabels}
        logo={logo}
        responsibilities={responsibilities}
        responsibilitiesPaddingBottom={companyMobilePaddingBottom}
        title={title}
      />
    </PositionContainer>
  </FlexContainer>
);

export default Company;
