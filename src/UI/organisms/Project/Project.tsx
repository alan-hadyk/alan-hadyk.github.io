import React from "react";

import SpacingContainer from "<layout>/SpacingContainer";

import { ProjectProps } from "<organisms>/Project/__typings__/Project.d.ts";

import ProjectTvAndDesktop from "<organisms>/Project/ProjectTvAndDesktop";
import ProjectTablet from "<organisms>/Project/ProjectTablet";
import ProjectMobile from "<organisms>/Project/ProjectMobile";

const Project = ({
  description,
  iconsWithLabels,
  projectIcon,
  title
}: ProjectProps): JSX.Element => (
  <SpacingContainer
    dataCy="Project"
    dataTestId="Project"
    marginLeft="auto"
    marginRight="auto"
    maxWidth="spacing1056"
  >
    <ProjectTvAndDesktop
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
