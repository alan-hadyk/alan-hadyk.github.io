import React, { useCallback } from "react";

import CompanyLogo from "<molecules>/CompanyLogo";

import CompanyDescription from "<organisms>/CompanyDescription";
import CompanyTimeline from "<organisms>/Company/CompanyTimeline";

import FlexContainer from "<layout>/FlexContainer";
import FlexItem from "<layout>/FlexItem";
import Responsive from "<layout>/Responsive";

import { CompanyProps } from "<organisms>/Company/__typings__/Company.d.ts";

function CompanyTvDesktopAndTablet({
  date,
  iconsWithLabels,
  logo,
  responsibilities,
  timelineBottom,
  title
}: CompanyProps): JSX.Element {
  const renderCompanyTimeline = useCallback(() => (
    <CompanyTimeline timelineBottom={timelineBottom} />
  ), [timelineBottom]);

  const renderCompanyLogo = useCallback(() => (
    <FlexItem flex="0 0 50%">
      <CompanyLogo logo={logo} />
    </FlexItem>
  ), [logo]);

  return (
    <Responsive devices={["tv", "desktop", "tablet"]}>
      {renderCompanyTimeline()}

      <FlexContainer
        alignItems="flex-start"
        dataTestId="CompanyTvDesktopAndTabletFlexContainer"
        flexFlow="row nowrap"
        gap="spacing88"
        maxWidth="spacing1056"
      >
        {renderCompanyLogo()}

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
}

export default CompanyTvDesktopAndTablet;
