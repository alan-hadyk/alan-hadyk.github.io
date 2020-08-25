import React from "react";

import Hexagon from "<molecules>//Hexagon";

import Icon from "<atoms>/Icon";

import {
  ProjectImageProps
} from "<organisms>/Project/__typings__/ProjectImage.d.ts";

const ProjectImage = ({
  projectIcon
}: ProjectImageProps): JSX.Element => (
  <Hexagon
    contentWidth="100%"
    fill="pattern"
  >
    <Icon 
      height="auto"
      iconName={projectIcon} 
      width="100%"
    />
  </Hexagon>
);

export default ProjectImage;
