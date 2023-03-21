import PropTypes from "prop-types";

import { iconNames } from "UI/atoms/Icon";
import ProjectDescription from "UI/organisms/ProjectDescription";
import ProjectImage from "UI/organisms/Project/ProjectImage";
import FlexContainer from "UI/layout/FlexContainer";
import SpacingContainer from "UI/layout/SpacingContainer";
import Responsive from "UI/layout/Responsive";

import colorPalette from "styles/variables/colorPalette";

import { ProjectProps } from "UI/organisms/Project/__typings__/Project";

const ProjectTablet = ({
  description,
  iconsWithLabels,
  projectIcon,
  title
}: ProjectProps): JSX.Element => (
  <Responsive dataTestId="ProjectTablet" devices={["tablet"]}>
    <FlexContainer
      dataTestId="ProjectTabletFlexContainer"
      alignItems="center"
      flexFlow="column nowrap"
    >
      <SpacingContainer marginBottom="4rem" width="60%">
        <ProjectImage projectIcon={projectIcon} />
      </SpacingContainer>

      <ProjectDescription
        iconsWithLabels={iconsWithLabels}
        description={description}
        size="large"
        title={title}
      />
    </FlexContainer>
  </Responsive>
);

ProjectTablet.propTypes = {
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

export default ProjectTablet;
