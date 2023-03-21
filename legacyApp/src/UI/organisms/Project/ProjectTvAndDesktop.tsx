import PropTypes from "prop-types";

import { iconNames } from "UI/atoms/Icon";
import ProjectDescription from "UI/organisms/ProjectDescription";
import ProjectImage from "UI/organisms/Project/ProjectImage";
import FlexContainer from "UI/layout/FlexContainer";
import FlexItem from "UI/layout/FlexItem";
import SpacingContainer from "UI/layout/SpacingContainer";
import Responsive from "UI/layout/Responsive";

import colorPalette from "styles/variables/colorPalette";

import { ProjectProps } from "UI/organisms/Project/__typings__/Project";

const ProjectTvAndDesktop = ({
  description,
  iconsWithLabels,
  projectIcon,
  title
}: ProjectProps): JSX.Element => (
  <Responsive dataTestId="ProjectTvDesktop" devices={["tv", "desktop"]}>
    <FlexContainer
      alignItems="flex-start"
      dataTestId="ProjectTvAndDesktopFlexContainer"
      flexFlow="row nowrap"
    >
      <FlexItem flex="0 1 50%">
        <ProjectImage projectIcon={projectIcon} />
      </FlexItem>

      <FlexItem flex="0 1 50%" overflow="visible">
        <SpacingContainer
          dataTestId="ProjectDescriptionSpacingContainer"
          marginLeft="spacing48"
        >
          <ProjectDescription
            title={title}
            iconsWithLabels={iconsWithLabels}
            description={description}
            size="large"
          />
        </SpacingContainer>
      </FlexItem>
    </FlexContainer>
  </Responsive>
);

ProjectTvAndDesktop.propTypes = {
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

export default ProjectTvAndDesktop;
