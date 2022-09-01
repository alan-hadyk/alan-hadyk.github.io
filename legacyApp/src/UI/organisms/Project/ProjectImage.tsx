import PropTypes from "prop-types";

import Icon, { iconNames } from "UI/atoms/Icon";
import Hexagon from "UI/molecules/Hexagon";

import { ProjectImageProps } from "UI/organisms/Project/__typings__/ProjectImage";

const ProjectImage = ({ projectIcon }: ProjectImageProps): JSX.Element => (
  <Hexagon dataCy="ProjectImage" dataTestId="ProjectImage" fill="pattern">
    <Icon height="auto" iconName={projectIcon} width="100%" />
  </Hexagon>
);

ProjectImage.propTypes = {
  projectIcon: PropTypes.oneOf(iconNames).isRequired
};

export default ProjectImage;
