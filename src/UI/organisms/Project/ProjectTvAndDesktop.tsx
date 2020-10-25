import React from "react";

import FlexContainer from "UI/layout/FlexContainer";
import FlexItem from "UI/layout/FlexItem";
import SpacingContainer from "UI/layout/SpacingContainer";
import Responsive from "UI/layout/Responsive";

import ProjectDescription from "UI/organisms/ProjectDescription";
import ProjectImage from "UI/organisms/Project/ProjectImage";

import { ProjectProps } from "UI/organisms/Project/__typings__/Project";

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
      <FlexItem flex="0 1 50%">
        <ProjectImage projectIcon={projectIcon} />
      </FlexItem>

      <FlexItem flex="0 1 50%" overflow="visible">
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
