import React from "react";

import SpacingContainer from "UI/layout/SpacingContainer";
import Responsive from "UI/layout/Responsive";

import ProjectDescription from "UI/organisms/ProjectDescription";
import ProjectImage from "UI/organisms/Project/ProjectImage";

import { ProjectProps } from "UI/organisms/Project/__typings__/Project";

const ProjectMobile = ({
  description,
  iconsWithLabels,
  projectIcon,
  title
}: ProjectProps): JSX.Element => (
  <Responsive dataTestMobileId="ProjectMobile" devices={["mobile"]}>
    <SpacingContainer marginBottom="4rem" width="100%">
      <ProjectImage projectIcon={projectIcon} />
    </SpacingContainer>

    <ProjectDescription
      description={description}
      iconsWithLabels={iconsWithLabels}
      size="small"
      title={title}
    />
  </Responsive>
);

export default ProjectMobile;
