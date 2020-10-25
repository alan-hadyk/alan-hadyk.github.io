import React from "react";

import CompanyLogo from "UI/molecules/CompanyLogo";

import CompanyDescription from "UI/organisms/CompanyDescription";
import FlexContainer from "UI/layout/FlexContainer";
import Responsive from "UI/layout/Responsive";

import { CompanyProps } from "UI/organisms/Company/__typings__/Company";

const CompanyMobile = ({
  date,
  iconsWithLabels,
  logo,
  responsibilities,
  responsibilitiesPaddingBottom,
  title
}: CompanyProps): JSX.Element => (
  <Responsive devices={["mobile"]}>
    <FlexContainer
      alignItems="center"
      dataTestId="CompanyMobileFlexContainer"
      flexFlow="column nowrap"
      gap="spacing48"
      maxWidth="spacing1056"
    >
      <CompanyLogo logo={logo} />

      <CompanyDescription
        date={date}
        iconsWithLabels={iconsWithLabels}
        responsibilities={responsibilities}
        responsibilitiesPaddingBottom={responsibilitiesPaddingBottom}
        textAlign="center"
        title={title}
      />
    </FlexContainer>
  </Responsive>
);

export default CompanyMobile;
