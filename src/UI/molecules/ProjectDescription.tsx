import React, { useCallback, Fragment } from "react";
import styled from "styled-components";

import SpacingContainer from "<layout>/SpacingContainer";

import Text from "<atoms>/Text";

import Button from "<molecules>/Button";
import IconsWithLabels from "<molecules>/IconsWithLabels";

import { ProjectDescriptionProps } from "<molecules>/__typings__/ProjectDescription.d.ts";

function ProjectDescription({
  // codeSandboxLink = "https://codesandbox.io/u/alan-hadyk",
  description,
  iconsWithLabels,
  // projectLink = "https://github.com/alan-hadyk",
  title
}: ProjectDescriptionProps): JSX.Element {
  const renderTitleWithDescription = useCallback((): JSX.Element => (
    <Fragment>
      <Text
        color="white"
        fontFamily="Exan"
        fontSize="font48"
        lineHeight="spacing48"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <SpacingContainer
        dataTestId="TitleWithDescriptionSpacingContainer"
        marginBottom="spacing40"
        marginTop="spacing16"
      >
        <Text
          color="blue300"
          fontSize="font24"
          lineHeight="spacing32"
        >
          {description}
        </Text>
      </SpacingContainer>
    </Fragment>
  ), [description, title]);

  const renderUsedTechnologies = useCallback((): JSX.Element => (
    <SpacingContainer
      dataTestId="UsedTechnologiesSpacingContainer"
      marginBottom="spacing40"
    >
      <Text
        color="blue100"
        fontSize="font24"
        fontWeight="bold"
        lineHeight="spacing40"
      >
        Made with:
      </Text>
      <SpacingContainer
        dataTestId="IconsWithLabelsSpacingContainer"
        marginTop="spacing8"
      >
        <IconsWithLabels
          iconsWithLabels={iconsWithLabels}
          position="horizontal"
          size="large"
        />
      </SpacingContainer>
    </SpacingContainer>
  ), [iconsWithLabels]);

  const renderButtons = useCallback((): JSX.Element => (
    <Fragment>
      <Button
        buttonText="Launch project"
        iconName="btnExternalLink"
        size="large"
      />
      <SpacingContainer
        dataTestId="ButtonsSpacingContainer"
        marginTop="spacing16"
      >
        <Button
          buttonText="Open in codesandbox"
          iconName="btnCodeSandbox"
          size="large"
          type="secondary"
        />
      </SpacingContainer>
    </Fragment>
  ), []);

  return (
    <ProjectDescription.Container
      data-testid="ProjectDescription"
    >
      {renderTitleWithDescription()}

      {renderUsedTechnologies()}

      {renderButtons()}
    </ProjectDescription.Container>
  );
}

ProjectDescription.Container = styled.div``;

export default ProjectDescription;
