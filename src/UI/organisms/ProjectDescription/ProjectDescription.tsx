import React from "react";

import ProjectDescriptionContent from "<organisms>/ProjectDescription/ProjectDescriptionContent";
import ProjectDescriptionButtons from "<organisms>/ProjectDescription/ProjectDescriptionButtons";
import ProjectDescriptionTechnologies from "<organisms>/ProjectDescription/ProjectDescriptionTechnologies";

import Responsive from "<layout>/Responsive";

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
    <Responsive
      dataTestDesktopId="ProjectDescriptionDesktop"
      dataTestMobileId="ProjectDescriptionMobile"
      dataTestTabletId="ProjectDescriptionTablet"
      dataTestTvId="ProjectDescriptionTv"
      devices={["desktop", "tv", "tablet", "mobile"]}
    >
      <ProjectDescriptionContent
        description={description}
        size={size}
        title={title}
      />

      <ProjectDescriptionTechnologies iconsWithLabels={iconsWithLabels} />

      <ProjectDescriptionButtons size={size} />
    </Responsive>
  );
};

export default ProjectDescription;
