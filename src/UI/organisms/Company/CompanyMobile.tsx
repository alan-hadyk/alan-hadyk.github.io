import React from "react";

import CompanyLogo from "<molecules>/CompanyLogo";

import CompanyDescription from "<organisms>/CompanyDescription";
import FlexContainer from "<layout>/FlexContainer";
import Responsive from "<layout>/Responsive";

import { CompanyProps } from "<organisms>/Company/__typings__/Company.d.ts";

const CompanyMobile = ({
  date,
  iconsWithLabels,
  logo,
  responsibilities,
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
        textAlign="center"
        title={title}
      />
    </FlexContainer>
  </Responsive>
);

export default CompanyMobile;
