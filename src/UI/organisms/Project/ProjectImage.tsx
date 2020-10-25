import React from "react";

import Icon from "UI/atoms/Icon";

import Hexagon from "UI/molecules/Hexagon";

import { ProjectImageProps } from "UI/organisms/Project/__typings__/ProjectImage";

const ProjectImage = ({ projectIcon }: ProjectImageProps): JSX.Element => (
  <Hexagon dataCy="ProjectImage" dataTestId="ProjectImage" fill="pattern">
    <Icon height="auto" iconName={projectIcon} width="100%" />
  </Hexagon>
);

export default ProjectImage;
