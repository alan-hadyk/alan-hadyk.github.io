import React from "react";

import FlexContainer from "<layout>/FlexContainer";
import FlexItem from "<layout>/FlexItem";
import SpacingContainer from "<layout>/SpacingContainer";
import Responsive from "<layout>/Responsive";

import ProjectDescription from "<organisms>/ProjectDescription";
import ProjectImage from "<organisms>/Project/ProjectImage";

import {
  ProjectProps
} from "<organisms>/Project/__typings__/Project.d.ts";

const ProjectDesktop = ({
  description,
  iconsWithLabels,
  projectIcon,
  title
}: ProjectProps): JSX.Element => (
  <Responsive devices={["tv", "desktop"]}>
    <FlexContainer
      alignItems="flex-start"
      flexFlow="row nowrap"
    >
      <FlexItem
        flex="0 1 50%"
      >
        <ProjectImage projectIcon={projectIcon} />
      </FlexItem>

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
    </FlexContainer>
  </Responsive>
);

export default ProjectDesktop;
