import React from "react";

import FlexContainer from "UI/layout/FlexContainer";
import SpacingContainer from "UI/layout/SpacingContainer";
import Responsive from "UI/layout/Responsive";

import ProjectDescription from "UI/organisms/ProjectDescription";
import ProjectImage from "UI/organisms/Project/ProjectImage";

import { ProjectProps } from "UI/organisms/Project/__typings__/Project";

const ProjectTablet = ({
  description,
  iconsWithLabels,
  projectIcon,
  title
}: ProjectProps): JSX.Element => (
  <Responsive dataTestTabletId="ProjectTablet" devices={["tablet"]}>
    <FlexContainer
      dataTestId="ProjectTabletFlexContainer"
      alignItems="center"
      flexFlow="column nowrap"
    >
      <SpacingContainer marginBottom="4rem" width="60%">
        <ProjectImage projectIcon={projectIcon} />
      </SpacingContainer>

      <ProjectDescription
        iconsWithLabels={iconsWithLabels}
        description={description}
        size="large"
        title={title}
      />
    </FlexContainer>
  </Responsive>
);

export default ProjectTablet;
