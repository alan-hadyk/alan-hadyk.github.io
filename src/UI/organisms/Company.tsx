import React, { useCallback } from "react";

import Icon from "<atoms>/Icon";
import Timeline from "<molecules>/Timeline";
import CompanyDescription from "<organisms>/CompanyDescription";
import FlexContainer from "<layout>/FlexContainer";
import PositionContainer from "<layout>/PositionContainer";
import FlexItem from "<layout>/FlexItem";

import { CompanyProps } from "<organisms>/__typings__/Company.d.ts";

function Company({
  date,
  iconsWithLabels,
  logo,
  responsibilites,
  title
}: CompanyProps): JSX.Element {
  const renderTimeline = useCallback((): JSX.Element => (
    <PositionContainer
      bottom="negativeSpacing16"
      dataTestId="TimelinePositionContainer"
      left="50%"
      position="absolute"
      top="spacing16"
      transform="translateX(-50%)"
    >
      <Timeline />
    </PositionContainer>
  ), []);

  const renderLogo = useCallback((): JSX.Element => (
    <FlexContainer
      alignItems="flex-start"
      dataTestId="LogoFlexContainer"
      justifyContent="flex-end"
    >
      <Icon
        dataTestId="Logo"
        height="spacing48"
        iconName={logo}
        isHeightResponsive
      />
    </FlexContainer>
  ), [logo]);

  return (
    <FlexContainer dataTestId="Company">
      <PositionContainer
        dataTestId="CompanyPositionContainer"
        position="relative"
      >
        {renderTimeline()}
          
        <FlexContainer
          alignItems="flex-start"
          dataTestId="CompanyInnerFlexContainer"
          flexFlow="row nowrap"
          gap="spacing88"
          maxWidth="spacing1056"
        >
          <FlexItem flex="0 0 50%">
            {renderLogo()}
          </FlexItem>

          <FlexItem flex="0 0 50%">
            <CompanyDescription
              date={date}
              iconsWithLabels={iconsWithLabels}
              responsibilites={responsibilites}
              title={title}
            />
          </FlexItem>
        </FlexContainer>
      </PositionContainer>
    </FlexContainer>
  );
}

export default Company;
