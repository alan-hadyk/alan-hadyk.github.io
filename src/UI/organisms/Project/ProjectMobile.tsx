import React from "react";

import SpacingContainer from "<layout>/SpacingContainer";
import Responsive from "<layout>/Responsive";

import ProjectDescription from "<organisms>/ProjectDescription";
import ProjectImage from "<organisms>/Project/ProjectImage";

import {
  ProjectProps
} from "<organisms>/Project/__typings__/Project.d.ts";

const ProjectMobile = ({
  description,
  iconsWithLabels,
  projectIcon,
  title
}: ProjectProps): JSX.Element => (
  <Responsive devices={["mobile"]}>
    <SpacingContainer
      marginBottom="4rem"
      width="100%"
    >
      <ProjectImage projectIcon={projectIcon} />
    </SpacingContainer>

    <ProjectDescription
      title={title}
      iconsWithLabels={iconsWithLabels}
      description={description}
    />
  </Responsive>
);

export default ProjectMobile;
