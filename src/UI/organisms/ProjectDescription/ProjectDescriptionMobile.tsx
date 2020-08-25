import React from "react";

import Responsive from "<layout>/Responsive";

import ProjectDescriptionContent from "<organisms>/ProjectDescription/ProjectDescriptionContent";
import ProjectDescriptionTechnologies from "<organisms>/ProjectDescription/ProjectDescriptionTechnologies";
import ProjectDescriptionButtons from "<organisms>/ProjectDescription/ProjectDescriptionButtons";

import { ProjectDescriptionProps } from "<organisms>/ProjectDescription/__typings__/ProjectDescription.d.ts";

const ProjectDescriptionMobile = ({
  description,
  iconsWithLabels,
  title
}: ProjectDescriptionProps): JSX.Element => (
  <Responsive devices={["mobile"]}>
    <ProjectDescriptionContent
      description={description}
      size="small"
      title={title}
    />

    <ProjectDescriptionTechnologies iconsWithLabels={iconsWithLabels} />

    <ProjectDescriptionButtons size="small" />
  </Responsive>
);

export default ProjectDescriptionMobile;
