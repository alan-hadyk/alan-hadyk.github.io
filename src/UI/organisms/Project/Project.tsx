import React from "react";
import PropTypes from "prop-types";

import { iconNames } from "UI/atoms/Icon";
import ProjectTvAndDesktop from "UI/organisms/Project/ProjectTvAndDesktop";
import ProjectTablet from "UI/organisms/Project/ProjectTablet";
import ProjectMobile from "UI/organisms/Project/ProjectMobile";
import SpacingContainer from "UI/layout/SpacingContainer";

import colorPalette from "styles/variables/colorPalette";

import { ProjectProps } from "UI/organisms/Project/__typings__/Project";

const Project = ({
  description,
  iconsWithLabels,
  projectIcon,
  title
}: ProjectProps): JSX.Element => (
  <SpacingContainer
    dataCy="Project"
    dataTestId="Project"
    marginLeft="auto"
    marginRight="auto"
    maxWidth="spacing1056"
  >
    <ProjectTvAndDesktop
      description={description}
      iconsWithLabels={iconsWithLabels}
      projectIcon={projectIcon}
      title={title}
    />

    <ProjectTablet
      description={description}
      iconsWithLabels={iconsWithLabels}
      projectIcon={projectIcon}
      title={title}
    />

    <ProjectMobile
      description={description}
      iconsWithLabels={iconsWithLabels}
      projectIcon={projectIcon}
      title={title}
    />
  </SpacingContainer>
);

Project.propTypes = {
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

export default Project;
