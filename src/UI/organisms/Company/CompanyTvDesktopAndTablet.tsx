import React, { useCallback } from "react";

import CompanyLogo from "UI/molecules/CompanyLogo";

import CompanyDescription from "UI/organisms/CompanyDescription";
import CompanyTimeline from "UI/organisms/Company/CompanyTimeline";

import FlexContainer from "UI/layout/FlexContainer";
import FlexItem from "UI/layout/FlexItem";
import Responsive from "UI/layout/Responsive";

import { CompanyProps } from "UI/organisms/Company/__typings__/Company";

function CompanyTvDesktopAndTablet({
  date,
  iconsWithLabels,
  logo,
  responsibilities,
  timelineBottom,
  title
}: CompanyProps): JSX.Element {
  const renderCompanyTimeline = useCallback(
    () => <CompanyTimeline timelineBottom={timelineBottom} />,
    [timelineBottom]
  );

  const renderCompanyLogo = useCallback(
    () => (
      <FlexItem flex="0 0 50%">
        <CompanyLogo logo={logo} />
      </FlexItem>
    ),
    [logo]
  );

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
