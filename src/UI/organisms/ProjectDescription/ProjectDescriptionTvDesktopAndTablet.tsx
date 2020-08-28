import React from "react";

import Responsive from "<layout>/Responsive";

import ProjectDescriptionContent from "<organisms>/ProjectDescription/ProjectDescriptionContent";
import ProjectDescriptionTechnologies from "<organisms>/ProjectDescription/ProjectDescriptionTechnologies";
import ProjectDescriptionButtons from "<organisms>/ProjectDescription/ProjectDescriptionButtons";

import { ProjectDescriptionProps } from "<organisms>/ProjectDescription/__typings__/ProjectDescription.d.ts";

const ProjectDescriptionTvDesktopAndTablet = ({
  // codeSandboxLink = "https://codesandbox.io/u/alan-hadyk",
  description,
  iconsWithLabels,
  // projectLink = "https://github.com/alan-hadyk",
  title
}: ProjectDescriptionProps): JSX.Element => (
  <Responsive devices={["tv", "desktop", "tablet"]}>
    <ProjectDescriptionContent
      description={description}
      size="large"
      title={title}
    />

    <ProjectDescriptionTechnologies iconsWithLabels={iconsWithLabels} />

    <ProjectDescriptionButtons size="large" />
  </Responsive>
);

export default ProjectDescriptionTvDesktopAndTablet;
