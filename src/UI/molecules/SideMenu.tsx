import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Button from "<molecules>/Button";
import MenuIcons from "<molecules>/MenuIcons";
import Nav from "<molecules>/Nav";

import SpacingContainer from "<layout>/SpacingContainer";
import FlexContainer from "<layout>/FlexContainer";

import {
  SideMenuContainerProps,
  SideMenuProps
} from "<molecules>/__typings__/SideMenu.d.ts";

const SideMenu = ({
  device,
  isExpanded = false
}: SideMenuProps): JSX.Element => (
  <SideMenu.Container
    data-testid="SideMenu"
    isExpanded={isExpanded}
  >
    <SpacingContainer
      dataTestId="SideMenuOuterSpacingContainer"
      paddingTop="spacing96"
    >
      {device === "mobile" && (
        <FlexContainer
          dataTestId="SideMenuMobileFlexContainer"
          flexFlow="row wrap"
          height="100%"
          justifyContent="center"
        >
          <SpacingContainer
            dataTestId="SideMenuMobileSpacingContainer"
            marginBottom="spacing24"
          >
            <Nav position="vertical" />
          </SpacingContainer>
        </FlexContainer>
      )}

      <FlexContainer
        dataTestId="SideMenuOuterFlexContainer"
        flexFlow="column nowrap"
        justifyContent="center"
      >
        <Button
          buttonText="resume"
          iconName="btnDownload"
          size="medium"
        />

        <SpacingContainer
          dataTestId="SideMenuInnerSpacingContainer"
          paddingTop="spacing24"
        >
          <FlexContainer
            dataTestId="SideMenuInnerFlexContainer"
            flexFlow="row nowrap"
            gap="spacing24"
          >
            <MenuIcons /> 
          </FlexContainer>
        </SpacingContainer>
      </FlexContainer>
    </SpacingContainer>
  </SideMenu.Container>
);

SideMenu.Container = styled.div<SideMenuContainerProps>`
  ${({
    isExpanded,
    theme: {
      colorPalette: {
        blue300
      },
      easing: {
        easeInOut
      },
      spacing: {
        spacing288
      },
      transitionTimes: {
        fast
      },
      zIndex: {
        layer10
      }
    }
  }): FlattenSimpleInterpolation => css`
    background-color: rgba(30, 34, 36, .8);
    border-left: 1px solid ${blue300};
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    transform: ${isExpanded ? "translateX(0)" : "translateX(100%)"};
    transition: all ${fast} ${easeInOut};
    width: ${spacing288};
    z-index: ${layer10};

    * {
      opacity: 1;
    }
  `}
`;

export default SideMenu;
