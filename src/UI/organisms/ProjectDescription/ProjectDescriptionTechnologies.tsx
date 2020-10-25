import React from "react";

import SpacingContainer from "UI/layout/SpacingContainer";

import Text from "UI/atoms/Text";

import IconsWithLabels from "UI/molecules/IconsWithLabels";

import { ProjectDescriptionTechnologiesProps } from "UI/organisms/ProjectDescription/__typings__/ProjectDescriptionTechnologies";

const ProjectDescriptionTechnologies = ({
  iconsWithLabels
}: ProjectDescriptionTechnologiesProps): JSX.Element => (
  <SpacingContainer
    dataCy="ProjectDescriptionTechnologies"
    dataTestId="ProjectDescriptionTechnologies"
    marginBottom="spacing40"
  >
    <Text
      color="blue100"
      fontSize="font24"
      fontWeight="bold"
      lineHeight="spacing40"
    >
      Made with:
    </Text>

    <SpacingContainer
      dataTestId="ProjectDescriptionTechnologiesSpacingContainer"
      marginTop="spacing8"
    >
      <IconsWithLabels
        iconsWithLabels={iconsWithLabels}
        position="horizontal"
        size="large"
      />
    </SpacingContainer>
  </SpacingContainer>
);

export default ProjectDescriptionTechnologies;
