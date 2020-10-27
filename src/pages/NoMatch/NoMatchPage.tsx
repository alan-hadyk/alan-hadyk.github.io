import React, { memo } from "react";

import { useHistory } from "react-router-dom";

import LinkWithIcon from "UI/molecules/LinkWithIcon";
import Error from "UI/molecules/Error";
import DashboardElement from "UI/molecules/DashboardElement";

import NoMatchPageTemplate from "UI/templates/NoMatchPageTemplate";

import FlexContainer from "UI/layout/FlexContainer";
import SpacingContainer from "UI/layout/SpacingContainer";
import Button from "UI/molecules/Button";
import Responsive from "UI/layout/Responsive";

const NoMatchPage = (): JSX.Element => {
  const history = useHistory();

  return (
    <NoMatchPageTemplate>
      <FlexContainer flexFlow="column nowrap" height="100%">
        <LinkWithIcon
          dataCy="SiteLogo"
          href="/"
          height="spacing48"
          iconName="logo"
          linkWidth="100%"
          width="100%"
        />
        <SpacingContainer paddingTop="spacing64" width="100%">
          <DashboardElement
            dataCy="NoMatchPageDashboardElement"
            dataTestId="NoMatchPageDashboardElement"
            flex="1 1 100%"
            shouldDisplayCorners
            title=""
          >
            <Error title="Error" description="Page not found" />
          </DashboardElement>
        </SpacingContainer>
        <SpacingContainer paddingTop="spacing64">
          <Responsive devices={["mobile"]}>
            <Button
              buttonText="Portfolio"
              onClick={handleButtonClick}
              size="small"
            />
          </Responsive>
          <Responsive devices={["tv", "desktop", "tablet"]}>
            <Button
              buttonText="Return to Portfolio"
              onClick={handleButtonClick}
              size="small"
            />
          </Responsive>
        </SpacingContainer>
      </FlexContainer>
    </NoMatchPageTemplate>
  );

  function handleButtonClick() {
    history.push("/");
  }
};

export default memo(NoMatchPage);
