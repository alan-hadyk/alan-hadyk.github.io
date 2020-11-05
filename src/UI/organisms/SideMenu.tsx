import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Button from "UI/molecules/Button";
import MenuIcons from "UI/molecules/MenuIcons";
import Nav from "UI/molecules/Nav";

import SpacingContainer from "UI/layout/SpacingContainer";
import FlexContainer from "UI/layout/FlexContainer";
import Responsive from "UI/layout/Responsive";

import { transparentize } from "polished";
import spacing from "styles/variables/spacing";

import isIE11 from "helpers/browser/isIE11";

import {
  SideMenuContainerProps,
  SideMenuProps
} from "UI/organisms/__typings__/SideMenu";

const SideMenu = ({
  isExpanded = false,
  onCVButtonClick
}: SideMenuProps): JSX.Element => (
  <SideMenu.Container
    data-cy="SideMenu"
    data-testid="SideMenu"
    isExpanded={isExpanded}
  >
    <SpacingContainer
      dataTestId="SideMenuOuterSpacingContainer"
      height="100%"
      overflowY="auto"
      paddingLeft="spacing48"
      paddingRight="spacing48"
      paddingTop="spacing8"
    >
      <Responsive devices={["mobile", "tablet"]}>
        <SpacingContainer
          dataTestId="SideMenuMobileSpacingContainer"
          marginBottom="spacing24"
        >
          <FlexContainer
            dataTestId="SideMenuMobileFlexContainer"
            flexFlow="row wrap"
            justifyContent="flex-end"
          >
            <SpacingContainer
              dataTestId="SideMenuNavSpacingContainer"
              marginBottom="spacing24"
            >
              <Nav position="vertical" />
            </SpacingContainer>
          </FlexContainer>
          <Button
            buttonText="cv"
            dataCy="CvButton"
            iconName="btnDownload"
            iconWidth={isIE11() ? `${spacing.spacing24}` : "auto"}
            onClick={onCVButtonClick}
            size="medium"
            width="100%"
          />
        </SpacingContainer>
      </Responsive>

      <SpacingContainer
        dataTestId="SideMenuInnerSpacingContainer"
        marginBottom="spacing24"
      >
        <FlexContainer
          dataTestId="SideMenuInnerFlexContainer"
          flexFlow="row nowrap"
          gap="spacing24"
        >
          <MenuIcons />
        </FlexContainer>
      </SpacingContainer>
    </SpacingContainer>
  </SideMenu.Container>
);

SideMenu.Container = styled.div<SideMenuContainerProps>`
  ${({
    isExpanded,
    theme: {
      colorPalette: { blue300, blue600 },
      easing: { easeInOut },
      spacing: { spacing88 },
      transitionTimes: { fast },
      zIndex: { layer10 }
    }
  }): FlattenSimpleInterpolation => css`
    background: ${transparentize(0.125, blue600)};
    border-left: 1px solid ${transparentize(0.25, blue300)};
    height: 100%;
    padding-top: ${spacing88};
    position: fixed;
    right: 0;
    top: 0;
    transform: ${isExpanded ? "translateX(0)" : "translateX(100%)"};
    transition: all ${fast} ${easeInOut};
    z-index: ${layer10};

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      /* IE10+ CSS */
      max-width: 300px;
    }
  `};
`;

export default SideMenu;
