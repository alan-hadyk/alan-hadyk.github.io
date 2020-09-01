import React from "react";

import FlexContainer from "<layout>/FlexContainer";
import SpacingContainer from "<layout>/SpacingContainer";
import Responsive from "<layout>/Responsive";

import ProjectDescription from "<organisms>/ProjectDescription";
import ProjectImage from "<organisms>/Project/ProjectImage";

import {
  ProjectProps
} from "<organisms>/Project/__typings__/Project.d.ts";

const ProjectTablet = ({
  description,
  iconsWithLabels,
  projectIcon,
  title
}: ProjectProps): JSX.Element => (
  <Responsive
    dataTestTabletId="ProjectTablet"
    devices={["tablet"]}
  >
    <FlexContainer
      dataTestId="ProjectTabletFlexContainer"
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
        size="large"
      />
    </FlexContainer>
  </Responsive>
);

export default ProjectTablet;
