import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SpacingContainer from "UI/layout/SpacingContainer";

import Button from "UI/molecules/Button";

import { ProjectDescriptionButtonsProps } from "UI/organisms/ProjectDescription/__typings__/ProjectDescriptionButtons";

const ProjectDescriptionButtonsContainer = styled.div``;

const ProjectDescriptionButtons = ({
  size = "medium"
}: ProjectDescriptionButtonsProps): JSX.Element => (
  <ProjectDescriptionButtonsContainer
    data-cy="ProjectDescriptionButtons"
    data-testid="ProjectDescriptionButtons"
  >
    <Button
      buttonText={size === "large" ? "Launch project" : "Launch"}
      iconName="btnExternalLink"
      size={size}
      width="100%"
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
        width="100%"
      />
    </SpacingContainer>
  </ProjectDescriptionButtonsContainer>
);

ProjectDescriptionButtons.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"])
};

export default ProjectDescriptionButtons;
