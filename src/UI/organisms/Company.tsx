import React, { useCallback } from "react";
import styled from "styled-components";

// import Text from "<atoms>/Text";
// import IconsWithLabels from "<molecules>/IconsWithLabels";
// import IconWithLabel from "<molecules>/IconWithLabel";
// import UnorderedList from "<molecules>/UnorderedList";
import Icon from "<atoms>/Icon";
import SpacingContainer from "<layout>/SpacingContainer";
import FlexContainer from "<layout>/FlexContainer";
import FlexItem from "<layout>/FlexItem";
import CompanyDescription from "<organisms>/CompanyDescription";

import { CompanyProps } from "<organisms>/__typings__/Company.d.ts";

function Company({
  date,
  iconsWithLabels,
  logo,
  responsibilites,
  title
}: CompanyProps): JSX.Element {
  const renderLogo = useCallback((): JSX.Element => (
    <FlexContainer
      alignItems="flex-start"
      justifyContent="flex-end"
    >
      <Icon
        height="spacing48"
        iconName={logo}
        isHeightResponsive
      />
    </FlexContainer>
  ), [logo]);

  return (
    <FlexContainer>
      <FlexContainer
        alignItems="flex-start"
        dataTestId="Company"
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
    </FlexContainer>
  );
}

Company.Container = styled.div``;

export default Company;
