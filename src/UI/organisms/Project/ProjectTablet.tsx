import React from "react";

import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";
import Responsive from "<layout>/Responsive";

import ProjectDescription from "<organisms>/ProjectDescription";
import ProjectImage from "<organisms>/Project/ProjectImage";

import {
  ProjectProps
} from "<organisms>/Project/__typings__/Project.d.ts";

const Project = ({
  description,
  iconsWithLabels,
  projectIcon,
  title
}: ProjectProps): JSX.Element => (
  <Responsive devices={["tablet"]}>
    <FlexContainer
      alignItems="center"
      flexFlow="column nowrap"
    >
      <SpacingContainer
        marginBottom="4rem"
        width="60%"
      >
        <ProjectImage projectIcon={projectIcon} />
      </SpacingContainer>

      <ProjectDescription
        title={title}
        iconsWithLabels={iconsWithLabels}
        description={description}
      />
    </FlexContainer>
  </Responsive>
);

export default Project;
