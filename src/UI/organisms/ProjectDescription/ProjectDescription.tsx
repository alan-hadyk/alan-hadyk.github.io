import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import { iconComponents } from "UI/atoms/Icon";
import ProjectDescriptionContent from "UI/organisms/ProjectDescription/ProjectDescriptionContent";
import ProjectDescriptionButtons from "UI/organisms/ProjectDescription/ProjectDescriptionButtons";
import ProjectDescriptionTechnologies from "UI/organisms/ProjectDescription/ProjectDescriptionTechnologies";

import colorPalette from "styles/variables/colorPalette";

import { ProjectDescriptionProps } from "UI/organisms/ProjectDescription/__typings__/ProjectDescription";

const ProjectDescriptionContainer = styled.div``;

const ProjectDescription = ({
  description,
  iconsWithLabels,
  size,
  title
}: ProjectDescriptionProps): JSX.Element => (
  <ProjectDescriptionContainer data-testid="ProjectDescription">
    <ProjectDescriptionContent
      description={description}
      size={size === "small" ? size : "large"}
      title={title}
    />

    <ProjectDescriptionTechnologies iconsWithLabels={iconsWithLabels} />

    <ProjectDescriptionButtons size={size} />
  </ProjectDescriptionContainer>
);

ProjectDescription.propTypes = {
  description: PropTypes.string.isRequired,
  iconsWithLabels: PropTypes.arrayOf(
    PropTypes.shape({
      iconName: PropTypes.oneOf([...Object.keys(iconComponents)]).isRequired,
      label: PropTypes.string.isRequired,
      labelColor: PropTypes.oneOf([...Object.keys(colorPalette)]),
      size: PropTypes.oneOf(["small", "medium", "large"])
    })
  ).isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  title: PropTypes.string.isRequired
};

export default ProjectDescription;
