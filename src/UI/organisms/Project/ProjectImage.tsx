import React from "react";
import PropTypes from "prop-types";

import Icon, { iconComponents } from "UI/atoms/Icon";
import Hexagon from "UI/molecules/Hexagon";

import { ProjectImageProps } from "UI/organisms/Project/__typings__/ProjectImage";

const ProjectImage = ({ projectIcon }: ProjectImageProps): JSX.Element => (
  <Hexagon dataCy="ProjectImage" dataTestId="ProjectImage" fill="pattern">
    <Icon height="auto" iconName={projectIcon} width="100%" />
  </Hexagon>
);

ProjectImage.propTypes = {
  projectIcon: PropTypes.oneOf([...Object.keys(iconComponents)]).isRequired
};

export default ProjectImage;
