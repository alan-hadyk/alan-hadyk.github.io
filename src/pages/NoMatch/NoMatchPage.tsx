import React, { memo } from "react";

import { useHistory } from "react-router-dom";

import LinkWithIcon from "UI/molecules/LinkWithIcon";
import Error from "UI/molecules/Error";
import DashboardElement from "UI/molecules/DashboardElement";

import NoMatchPageTemplate from "UI/templates/NoMatchPageTemplate";

import SpacingContainer from "UI/layout/SpacingContainer";
import Button from "UI/molecules/Button";

function NoMatchPage(): JSX.Element {
  const history = useHistory();

  return (
    <NoMatchPageTemplate>
      <LinkWithIcon
        dataCy="SiteLogo"
        height="auto"
        href="/"
        iconName="logo"
        width="100%"
      />

      <SpacingContainer
        marginBottom="spacing32"
        marginTop="spacing32"
        width="100%"
      >
        <DashboardElement
          dataCy="NoMatchPageDashboardElement"
          dataTestId="NoMatchPageDashboardElement"
          flex="1 1 100%"
          shouldDisplayCorners
        >
          <Error title="Error" description="Page not found" />
        </DashboardElement>
      </SpacingContainer>

      <Button
        buttonText="Return to Portfolio"
        onClick={handleButtonClick}
        size="small"
        width="100%"
      />
    </NoMatchPageTemplate>
  );

  function handleButtonClick() {
    history.push("/");
  }
}

export default memo(NoMatchPage);
