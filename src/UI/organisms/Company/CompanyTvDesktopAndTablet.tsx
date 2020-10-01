import React from "react";

import CompanyLogo from "<molecules>/CompanyLogo";

import CompanyDescription from "<organisms>/CompanyDescription";
import CompanyTimeline from "<organisms>/Company/CompanyTimeline";

import FlexContainer from "<layout>/FlexContainer";
import FlexItem from "<layout>/FlexItem";
import Responsive from "<layout>/Responsive";

import { CompanyProps } from "<organisms>/Company/__typings__/Company.d.ts";

const CompanyTvDesktopAndTablet = ({
  date,
  iconsWithLabels,
  logo,
  responsibilities,
  timelineBottom,
  title
}: CompanyProps): JSX.Element => (
  <Responsive devices={["tv", "desktop", "tablet"]}>
    <CompanyTimeline timelineBottom={timelineBottom} />

    <FlexContainer
      alignItems="flex-start"
      dataTestId="CompanyTvDesktopAndTabletFlexContainer"
      flexFlow="row nowrap"
      gap="spacing88"
      maxWidth="spacing1056"
    >
      <FlexItem flex="0 0 50%">
        <CompanyLogo logo={logo} />
      </FlexItem>

      <FlexItem flex="0 0 50%">
        <CompanyDescription
          date={date}
          iconsWithLabels={iconsWithLabels}
          responsibilities={responsibilities}
          title={title}
        />
      </FlexItem>
    </FlexContainer>
  </Responsive>
);

export default CompanyTvDesktopAndTablet;
