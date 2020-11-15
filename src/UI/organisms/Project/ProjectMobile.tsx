import React from "react";
import PropTypes from "prop-types";

import { iconNames } from "UI/atoms/Icon";
import ProjectDescription from "UI/organisms/ProjectDescription";
import ProjectImage from "UI/organisms/Project/ProjectImage";
import SpacingContainer from "UI/layout/SpacingContainer";
import Responsive from "UI/layout/Responsive";

import colorPalette from "styles/variables/colorPalette";

import { ProjectProps } from "UI/organisms/Project/__typings__/Project";

const ProjectMobile = ({
  description,
  iconsWithLabels,
  projectIcon,
  title
}: ProjectProps): JSX.Element => (
  <Responsive dataTestMobileId="ProjectMobile" devices={["mobile"]}>
    <SpacingContainer marginBottom="4rem" width="100%">
      <ProjectImage projectIcon={projectIcon} />
    </SpacingContainer>

    <ProjectDescription
      description={description}
      iconsWithLabels={iconsWithLabels}
      size="small"
      title={title}
    />
  </Responsive>
);

ProjectMobile.propTypes = {
  description: PropTypes.string.isRequired,
  iconsWithLabels: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.oneOf(iconNames).isRequired,
      label: PropTypes.string.isRequired,
      labelColor: PropTypes.oneOf([...Object.keys(colorPalette)]),
      size: PropTypes.oneOf(["small", "medium", "large"])
    })
  ).isRequired,
  projectIcon: PropTypes.oneOf(iconNames).isRequired,
  title: PropTypes.string.isRequired
};

export default ProjectMobile;
