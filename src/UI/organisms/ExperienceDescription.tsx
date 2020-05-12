import React, { useCallback, Fragment } from "react";
import styled from "styled-components";

import Text from "<atoms>/Text";
import IconsWithLabels from "<molecules>/IconsWithLabels";
import IconWithLabel from "<molecules>/IconWithLabel";
import UnorderedList from "<molecules>/UnorderedList";
import SpacingContainer from "<layout>/SpacingContainer";

import { ExperienceDescriptionProps } from "<organisms>/__typings__/ExperienceDescription.d.ts";

function ExperienceDescription({
  date,
  iconsWithLabels,
  responsibilites,
  title
}: ExperienceDescriptionProps): JSX.Element {
  const renderTitleAndDate = useCallback((): JSX.Element => (
    <Fragment>
      <Text
        color="white"
        dataTestId="MainTitle"
        fontFamily="Exan"
        fontSize="font36"
        lineHeight="spacing36"
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
  ), [date, title]);

  const renderTechStack = useCallback((): JSX.Element => (
    <SpacingContainer
      dataTestId="TechStackSpacingContainer"
      marginBottom="spacing32"
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
        dataTestId="IconsWithLabelsSpacingContainer"
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
  ), [iconsWithLabels]);

  const renderResponsibilities = useCallback((): JSX.Element => (
    <SpacingContainer
      dataTestId="ResponsibilitiesSpacingContainer"
      paddingBottom="spacing84"
    >
      <Text
        color="blue100"
        dataTestId="ResponsibilitiesTitle"
        fontFamily="AnonymousPro"
        fontSize="font24"
        fontWeight="bold"
        lineHeight="spacing32"
      >
        Responsibilites
      </Text>
      <SpacingContainer
        dataTestId="ResponsibilitiesListSpacingContainer"
        marginLeft="spacing16"
        marginTop="spacing16"
      >
        <UnorderedList
          items={responsibilites}
        />
      </SpacingContainer>
    </SpacingContainer>
  ), [responsibilites]);

  return (
    <ExperienceDescription.Container
      data-testid="ExperienceDescription"
    >
      {renderTitleAndDate()}

      {renderTechStack()}

      {renderResponsibilities()}
    </ExperienceDescription.Container>
  );
}

ExperienceDescription.Container = styled.div``;

export default ExperienceDescription;
