import React, { Fragment } from "react";
import styled from "styled-components";

import SpacingContainer from "<layout>/SpacingContainer";

import Text from "<atoms>/Text";

import Button from "<molecules>/Button";
import IconsWithLabels from "<molecules>/IconsWithLabels";

import { ProjectDescriptionProps } from "<molecules>/__typings__/ProjectDescription.d.ts";

function ProjectDescription({
  description,
  iconsWithLabels,
  title
}: ProjectDescriptionProps): JSX.Element {
  return (
    <ProjectDescription.Container
      data-testid="ProjectDescription"
    >
      {renderTitleWithDescription()}

      {renderUsedTechnologies()}

      {renderButtons()}
    </ProjectDescription.Container>
  );

  function renderTitleWithDescription(): JSX.Element {
    return (
      <Fragment>
        <Text
          color="white"
          fontFamily="Exan"
          fontSize="font48"
          textTransform="uppercase"
        >
          {title}
        </Text>
        <SpacingContainer
          marginBottom="spacing40"
          marginTop="spacing16"
        >
          <Text
            color="blue300"
            fontSize="font24"
          >
            {description}
          </Text>
        </SpacingContainer>
      </Fragment>
    );
  }

  function renderUsedTechnologies(): JSX.Element {
    return (
      <SpacingContainer
        marginBottom="spacing40"
      >
        <Text
          color="white"
          fontSize="font24"
          fontWeight="bold"
        >
          Made with:
        </Text>
        <SpacingContainer
          marginTop="spacing8"
        >
          <IconsWithLabels
            iconsWithLabels={iconsWithLabels}
            position="horizontal"
            size="large"
          />
        </SpacingContainer>
      </SpacingContainer>
    );
  }

  function renderButtons(): JSX.Element {
    return (
      <Fragment>
        <Button
          buttonText="Launch project"
          iconName="btnExternalLink"
          size="large"
        />
        <SpacingContainer
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
    );
  }
}

ProjectDescription.Container = styled.div``;

export default ProjectDescription;
