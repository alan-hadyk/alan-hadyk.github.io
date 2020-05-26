import React, { memo } from "react";

import Hexagon from "<molecules>//Hexagon";

import FlexContainer from "<layout>/FlexContainer";
import FlexItem from "<layout>/FlexItem";
import SpacingContainer from "<layout>/SpacingContainer";

import ProjectDescription from "<organisms>/ProjectDescription";

import Icon from "<atoms>/Icon";

import {
  ProjectProps
} from "<organisms>/__typings__/Project.d.ts";

const Project = ({
  description,
  iconName,
  iconsWithLabels,
  title
}: ProjectProps): JSX.Element => (
  <SpacingContainer
    dataTestId="Project"
    marginLeft="auto"
    marginRight="auto"
    maxWidth="breakpoint1056"
  >
    <FlexContainer
      alignItems="flex-start"
      flexFlow="row nowrap"
    >
      <FlexItem
        flex="0 1 40%"
      >
        <Hexagon fill="pattern">
          <Icon 
            height="auto"
            iconName={iconName} 
            width="100%"
          />
        </Hexagon>
      </FlexItem>
      <FlexItem
        flex="0 1 60%"
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
    </FlexContainer>
  </SpacingContainer>
);

export default memo(Project);
