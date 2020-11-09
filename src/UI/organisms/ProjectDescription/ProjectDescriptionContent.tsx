import React, { useCallback } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import Text from "UI/atoms/Text";
import SpacingContainer from "UI/layout/SpacingContainer";

import {
  MapSizeToProjectDescriptionContentProps,
  ProjectDescriptionContentProps
} from "UI/organisms/ProjectDescription/__typings__/ProjectDescriptionContent";

const mapSizeToProjectDescriptionTitleProps: MapSizeToProjectDescriptionContentProps = {
  large: {
    fontSize: "font48",
    lineHeight: "spacing52"
  },
  small: {
    fontSize: "font28",
    lineHeight: "spacing32"
  }
};

const mapSizeToProjectDescriptionContentProps: MapSizeToProjectDescriptionContentProps = {
  large: {
    fontSize: "font24",
    lineHeight: "spacing32"
  },
  small: {
    fontSize: "font20",
    lineHeight: "spacing24"
  }
};

const ProjectDescriptionContentContainer = styled.div``;

function ProjectDescriptionContent({
  description,
  size = "large",
  title
}: ProjectDescriptionContentProps): JSX.Element {
  const renderTitle = useCallback(
    () => (
      <Text
        {...mapSizeToProjectDescriptionTitleProps[size]}
        color="white"
        dataTestId="ProjectDescriptionTitle"
        fontFamily="Exan"
        textTransform="lowercase"
      >
        {title}
      </Text>
    ),
    [size, title]
  );

  const renderDescription = useCallback(
    () => (
      <SpacingContainer
        dataTestId="TitleWithDescriptionSpacingContainer"
        marginBottom="spacing40"
        marginTop="spacing16"
      >
        <Text
          {...mapSizeToProjectDescriptionContentProps[size]}
          color="blue300"
          dataTestId="ProjectDescriptionText"
        >
          {description}
        </Text>
      </SpacingContainer>
    ),
    [description, size]
  );

  return (
    <ProjectDescriptionContentContainer data-testid="ProjectDescriptionContent">
      {renderTitle()}

      {renderDescription()}
    </ProjectDescriptionContentContainer>
  );
}

ProjectDescriptionContent.propTypes = {
  description: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  title: PropTypes.string.isRequired
};

export default ProjectDescriptionContent;
