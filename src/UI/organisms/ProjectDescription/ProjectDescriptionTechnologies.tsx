import React from "react";
import PropTypes from "prop-types";

import { iconNames } from "UI/atoms/Icon";

import Text from "UI/atoms/Text";
import IconsWithLabels from "UI/molecules/IconsWithLabels";
import SpacingContainer from "UI/layout/SpacingContainer";

import colorPalette from "styles/variables/colorPalette";

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

ProjectDescriptionTechnologies.propTypes = {
  iconsWithLabels: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.oneOf(iconNames).isRequired,
      label: PropTypes.string.isRequired,
      labelColor: PropTypes.oneOf([...Object.keys(colorPalette)]),
      size: PropTypes.oneOf(["small", "medium", "large"])
    })
  ).isRequired
};

export default ProjectDescriptionTechnologies;
