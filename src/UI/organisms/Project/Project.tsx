import React from "react";

import SpacingContainer from "<layout>/SpacingContainer";

import {
  ProjectProps
} from "<organisms>/Project/__typings__/Project.d.ts";

import ProjectDesktop from "<organisms>/Project/ProjectDesktop";
import ProjectTablet from "<organisms>/Project/ProjectTablet";
import ProjectMobile from "<organisms>/Project/ProjectMobile";

const Project = ({
  description,
  iconsWithLabels,
  projectIcon,
  title
}: ProjectProps): JSX.Element => (
  <SpacingContainer
    dataTestId="Project"
    marginLeft="auto"
    marginRight="auto"
    maxWidth="spacing1056"
  >
    <ProjectDesktop
      description={description}
      iconsWithLabels={iconsWithLabels}
      projectIcon={projectIcon}
      title={title}
    />

    <ProjectTablet
      description={description}
      iconsWithLabels={iconsWithLabels}
      projectIcon={projectIcon}
      title={title}
    />

    <ProjectMobile
      description={description}
      iconsWithLabels={iconsWithLabels}
      projectIcon={projectIcon}
      title={title}
    />
  </SpacingContainer>
);

export default Project;
