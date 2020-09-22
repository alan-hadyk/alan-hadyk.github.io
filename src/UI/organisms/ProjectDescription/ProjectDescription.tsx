import React from "react";
import styled from "styled-components";

import ProjectDescriptionContent from "<organisms>/ProjectDescription/ProjectDescriptionContent";
import ProjectDescriptionButtons from "<organisms>/ProjectDescription/ProjectDescriptionButtons";
import ProjectDescriptionTechnologies from "<organisms>/ProjectDescription/ProjectDescriptionTechnologies";

import { ProjectDescriptionProps } from "<organisms>/ProjectDescription/__typings__/ProjectDescription.d.ts";

const ProjectDescription = ({
  // codeSandboxLink = "https://codesandbox.io/u/alan-hadyk",
  description,
  iconsWithLabels,
  // projectLink = "https://github.com/alan-hadyk",
  size,
  title
}: ProjectDescriptionProps): JSX.Element => {
  return (
    <ProjectDescription.Container data-testid="ProjectDescription">
      <ProjectDescriptionContent
        description={description}
        size={size === "small" ? size : "large"}
        title={title}
      />

      <ProjectDescriptionTechnologies iconsWithLabels={iconsWithLabels} />

      <ProjectDescriptionButtons size={size} />
    </ProjectDescription.Container>
  );
};

ProjectDescription.Container = styled.div``;

export default ProjectDescription;
