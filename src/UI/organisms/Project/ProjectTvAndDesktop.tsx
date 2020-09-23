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

const ProjectTvAndDesktop = ({
  description,
  iconsWithLabels,
  projectIcon,
  title
}: ProjectProps): JSX.Element => (
  <Responsive
    dataTestDesktopId="ProjectDesktop"
    dataTestTvId="ProjectTv"
    devices={["tv", "desktop"]}
  >
    <FlexContainer
      alignItems="flex-start"
      dataTestId="ProjectTvAndDesktopFlexContainer"
      flexFlow="row nowrap"
    >
      <FlexItem
        flex="0 1 50%"
      >
        <ProjectImage projectIcon={projectIcon} />
      </FlexItem>

      <FlexItem
        flex="0 1 50%"
        overflow="visible"
      >
        <SpacingContainer
          dataTestId="ProjectDescriptionSpacingContainer"
          marginLeft="spacing48"
        >
          <ProjectDescription
            title={title}
            iconsWithLabels={iconsWithLabels}
            description={description}
            size="large"
          />
        </SpacingContainer>
      </FlexItem>
    </FlexContainer>
  </Responsive>
);

export default ProjectTvAndDesktop;
