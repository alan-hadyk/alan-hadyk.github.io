import React from "react";

import SpacingContainer from "UI/layout/SpacingContainer";

import { ProjectProps } from "UI/organisms/Project/__typings__/Project";

import ProjectTvAndDesktop from "UI/organisms/Project/ProjectTvAndDesktop";
import ProjectTablet from "UI/organisms/Project/ProjectTablet";
import ProjectMobile from "UI/organisms/Project/ProjectMobile";

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
