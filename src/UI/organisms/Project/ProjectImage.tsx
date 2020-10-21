import React from "react";

import Icon from "<atoms>/Icon";

import Hexagon from "<molecules>//Hexagon";

import { ProjectImageProps } from "<organisms>/Project/__typings__/ProjectImage.d.ts";

const ProjectImage = ({ projectIcon }: ProjectImageProps): JSX.Element => (
  <Hexagon dataCy="ProjectImage" dataTestId="ProjectImage" fill="pattern">
    <Icon height="auto" iconName={projectIcon} width="100%" />
  </Hexagon>
);

export default ProjectImage;
