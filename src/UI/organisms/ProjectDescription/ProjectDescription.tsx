import React from "react";
import styled from "styled-components";

import ProjectDescriptionContent from "UI/organisms/ProjectDescription/ProjectDescriptionContent";
import ProjectDescriptionButtons from "UI/organisms/ProjectDescription/ProjectDescriptionButtons";
import ProjectDescriptionTechnologies from "UI/organisms/ProjectDescription/ProjectDescriptionTechnologies";

import { ProjectDescriptionProps } from "UI/organisms/ProjectDescription/__typings__/ProjectDescription";

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
