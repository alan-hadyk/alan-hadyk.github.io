import React from "react";
import styled from "styled-components";

import ProjectDescriptionTvDesktopAndTablet from "<organisms>/ProjectDescription/ProjectDescriptionTvDesktopAndTablet";
import ProjectDescriptionMobile from "<organisms>/ProjectDescription/ProjectDescriptionMobile";

import { ProjectDescriptionProps } from "<organisms>/ProjectDescription/__typings__/ProjectDescription.d.ts";

const ProjectDescription = ({
  // codeSandboxLink = "https://codesandbox.io/u/alan-hadyk",
  description,
  iconsWithLabels,
  // projectLink = "https://github.com/alan-hadyk",
  title
}: ProjectDescriptionProps): JSX.Element => (
  <ProjectDescription.Container
    data-testid="ProjectDescription"
  >
    <ProjectDescriptionTvDesktopAndTablet
      description={description}
      iconsWithLabels={iconsWithLabels}
      title={title}
    />
    <ProjectDescriptionMobile
      description={description}
      iconsWithLabels={iconsWithLabels}
      title={title}
    />
  </ProjectDescription.Container>
);

ProjectDescription.Container = styled.div``;

export default ProjectDescription;
