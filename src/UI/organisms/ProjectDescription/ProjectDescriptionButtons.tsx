import React from "react";
import styled from "styled-components";

import SpacingContainer from "<layout>/SpacingContainer";

import Button from "<molecules>/Button";

import { ProjectDescriptionButtonsProps } from "<organisms>/ProjectDescription/__typings__/ProjectDescriptionButtons.d.ts";

const ProjectDescriptionButtons = ({
  size = "medium"
}: ProjectDescriptionButtonsProps): JSX.Element => (
  <ProjectDescriptionButtons.Container
    data-testid="ProjectDescriptionButtons"
  >
    <Button
      buttonText={size === "large" ? "Launch project" : "Launch"}
      iconName="btnExternalLink"
      size={size}
    />
    <SpacingContainer
      dataTestId="ButtonsSpacingContainer"
      marginTop="spacing16"
    >
      <Button
        buttonText={size === "large" ? "Open in codesandbox" : "Codesandbox"}
        iconName="btnCodeSandbox"
        size={size}
        type="secondary"
      />
    </SpacingContainer>
  </ProjectDescriptionButtons.Container>
);

ProjectDescriptionButtons.Container = styled.div``;

export default ProjectDescriptionButtons;
