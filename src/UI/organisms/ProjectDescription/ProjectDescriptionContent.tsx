import React, { useCallback } from "react";
import styled from "styled-components";

import SpacingContainer from "layout/SpacingContainer";

import Text from "atoms/Text";

import {
  MapSizeToProjectDescriptionContentProps,
  ProjectDescriptionContentProps
} from "organisms/ProjectDescription/__typings__/ProjectDescriptionContent";

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
    <ProjectDescriptionContent.Container data-testid="ProjectDescriptionContent">
      {renderTitle()}

      {renderDescription()}
    </ProjectDescriptionContent.Container>
  );
}

ProjectDescriptionContent.Container = styled.div``;

export default ProjectDescriptionContent;
