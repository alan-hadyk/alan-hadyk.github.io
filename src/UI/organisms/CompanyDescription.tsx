import React, { useCallback, Fragment } from "react";
import styled from "styled-components";

import Text from "<atoms>/Text";
import IconsWithLabels from "<molecules>/IconsWithLabels";
import IconWithLabel from "<molecules>/IconWithLabel";
import UnorderedList from "<molecules>/UnorderedList";
import SpacingContainer from "<layout>/SpacingContainer";

import { CompanyDescriptionProps } from "<organisms>/__typings__/CompanyDescription.d.ts";

function CompanyDescription({
  date,
  iconsWithLabels,
  responsibilities,
  responsibilitiesPaddingBottom = "spacing68",
  textAlign = "left",
  title
}: CompanyDescriptionProps): JSX.Element {
  const renderTitleAndDate = useCallback(
    (): JSX.Element => (
      <Fragment>
        <Text
          color="white"
          dataCy="CompanyDescriptionMainTitle"
          dataTestId="MainTitle"
          fontFamily="Exan"
          fontSize="font36"
          lineHeight="spacing48"
          textAlign={textAlign}
          textTransform="uppercase"
        >
          {title}
        </Text>
        <SpacingContainer
          dataTestId="DateSpacingContainer"
          marginBottom="spacing32"
          marginTop="spacing32"
        >
          <IconWithLabel
            labelColor="blue300"
            iconName="calendar"
            label={date}
            size="medium"
          />
        </SpacingContainer>
      </Fragment>
    ),
    [date, textAlign, title]
  );

  return (
    <CompanyDescription.Container data-testid="CompanyDescription">
      {renderTitleAndDate()}

      {renderTechStack()}

      {renderResponsibilities()}
    </CompanyDescription.Container>
  );

  function renderTechStack(): JSX.Element {
    return (
      <SpacingContainer
        dataCy="CompanyTechStack"
        dataTestId="TechStackSpacingContainer"
        marginBottom="spacing16"
      >
        <Text
          color="blue100"
          dataTestId="TechStackTitle"
          fontFamily="AnonymousPro"
          fontSize="font24"
          fontWeight="bold"
          lineHeight="spacing32"
        >
          Tech stack
        </Text>
        <SpacingContainer
          dataTestId="TechStackIconsWithLabelsSpacingContainer"
          marginLeft="spacing16"
          marginTop="spacing16"
        >
          <IconsWithLabels
            iconsWithLabels={iconsWithLabels}
            position="horizontal"
            size="small"
          />
        </SpacingContainer>
      </SpacingContainer>
    );
  }

  function renderResponsibilities(): JSX.Element {
    return (
      <SpacingContainer
        dataCy="CompanyResponsibilities"
        dataTestId="ResponsibilitiesSpacingContainer"
        paddingBottom={responsibilitiesPaddingBottom}
      >
        <Text
          color="blue100"
          dataTestId="ResponsibilitiesTitle"
          fontFamily="AnonymousPro"
          fontSize="font24"
          fontWeight="bold"
          lineHeight="spacing32"
        >
          Responsibilities
        </Text>
        <SpacingContainer
          dataTestId="ResponsibilitiesListSpacingContainer"
          marginLeft="spacing16"
          marginTop="spacing16"
        >
          <UnorderedList items={responsibilities} />
        </SpacingContainer>
      </SpacingContainer>
    );
  }
}

CompanyDescription.Container = styled.div``;

export default CompanyDescription;
