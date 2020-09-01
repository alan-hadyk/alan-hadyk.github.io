import React from "react";
import styled from "styled-components";

import SpacingContainer from "<layout>/SpacingContainer";

import Text from "<atoms>/Text";

import {
  MapSizeToProjectDescriptionContentProps,
  ProjectDescriptionContentProps
} from "<organisms>/ProjectDescription/__typings__/ProjectDescriptionContent.d.ts";

const mapSizeToProjectDescriptionTitleProps: MapSizeToProjectDescriptionContentProps = {
  large: {
    fontSize: "font48",
    lineHeight: "spacing48"
  },
  small: {
    fontSize: "font28",
    lineHeight: "spacing24"
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

const ProjectDescriptionContent = ({
  description,
  size = "large",
  title
}: ProjectDescriptionContentProps): JSX.Element => (
  <ProjectDescriptionContent.Container
    data-testid="ProjectDescriptionContent"
  >
    <Text
      {...mapSizeToProjectDescriptionTitleProps[size]}
      color="white"
      fontFamily="Exan"
      textTransform="lowercase"
    >
      {title}
    </Text>
    <SpacingContainer
      dataTestId="TitleWithDescriptionSpacingContainer"
      marginBottom="spacing40"
      marginTop="spacing16"
    >
      <Text
        {...mapSizeToProjectDescriptionContentProps[size]}
        color="blue300"
      >
        {description}
      </Text>
    </SpacingContainer>
  </ProjectDescriptionContent.Container>
);

ProjectDescriptionContent.Container = styled.div``;

export default ProjectDescriptionContent;
