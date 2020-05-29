import React, { useCallback } from "react";

import Hexagon from "<molecules>//Hexagon";

import FlexContainer from "<layout>/FlexContainer";
import FlexItem from "<layout>/FlexItem";
import SpacingContainer from "<layout>/SpacingContainer";

import ProjectDescription from "<organisms>/ProjectDescription";

import Icon from "<atoms>/Icon";

import {
  ProjectProps
} from "<organisms>/__typings__/Project.d.ts";

function Project ({
  description,
  iconsWithLabels,
  projectIcon,
  title
}: ProjectProps): JSX.Element {
  const renderImage = useCallback((): JSX.Element => (
    <FlexItem
      flex="0 1 50%"
    >
      <Hexagon fill="pattern">
        <Icon 
          height="auto"
          iconName={projectIcon} 
          width="100%"
        />
      </Hexagon>
    </FlexItem>
  ), [projectIcon]);

  const renderDescription = useCallback((): JSX.Element => (
    <FlexItem
      flex="0 1 50%"
      overflow="unset"
    >
      <SpacingContainer
        dataTestId="ProjectDescriptionSpacingContainer"
        marginLeft="spacing48"
      >
        <ProjectDescription
          title={title}
          iconsWithLabels={iconsWithLabels}
          description={description}
        />
      </SpacingContainer>
    </FlexItem>
  ), [title, iconsWithLabels, description]);

  return (
    <SpacingContainer
      dataTestId="Project"
      marginLeft="auto"
      marginRight="auto"
      maxWidth="spacing1056"
    >
      <FlexContainer
        alignItems="flex-start"
        flexFlow="row nowrap"
      >
        {renderImage()}

        {renderDescription()}
      </FlexContainer>
    </SpacingContainer>
  );
} 

export default Project;
