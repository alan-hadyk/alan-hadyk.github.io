import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import Button from "<molecules>/Button";
import MenuIcons from "<molecules>/MenuIcons";
import Nav from "<molecules>/Nav";

import SpacingContainer from "<layout>/SpacingContainer";
import FlexContainer from "<layout>/FlexContainer";
import Responsive from "<layout>/Responsive";

import { transparentize } from "polished";

import {
  SideMenuContainerProps,
  SideMenuProps
} from "<organisms>/__typings__/SideMenu.d.ts";

const SideMenu = ({
  isExpanded = false
}: SideMenuProps): JSX.Element => (
  <SideMenu.Container
    data-testid="SideMenu"
    isExpanded={isExpanded}
  >
    <SpacingContainer
      dataTestId="SideMenuOuterSpacingContainer"
      height="100%"
      overflow="auto"
      paddingLeft="spacing48"
      paddingRight="spacing48"
    > 
      <Responsive devices={["mobile"]}>
        <FlexContainer
          dataTestId="SideMenuMobileFlexContainer"
          flexFlow="row wrap"
          justifyContent="flex-end"
        >
          <SpacingContainer
            dataTestId="SideMenuMobileSpacingContainer"
            marginBottom="spacing24"
          >
            <Nav position="vertical" />
          </SpacingContainer>
        </FlexContainer>
      </Responsive>


      <FlexContainer
        dataTestId="SideMenuOuterFlexContainer"
        flexFlow="column nowrap"
        justifyContent="center"
      >
        <Button
          buttonText="resume"
          iconName="btnDownload"
          size="medium"
          width="100%"
        />

        <SpacingContainer
          dataTestId="SideMenuInnerSpacingContainer"
          paddingBottom="spacing24"
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
        blue300,
        blue600
      },
      easing: {
        easeInOut
      },
      spacing: {
        spacing96
      },
      transitionTimes: {
        fast
      },
      zIndex: {
        layer10
      }
    }
  }): FlattenSimpleInterpolation => css`
    background: ${transparentize(0.125, blue600)};
    border-left: 1px solid ${transparentize(0.75, blue300)};
    height: 100%;
    padding-top: ${spacing96};
    position: fixed;
    right: 0;
    top: 0;
    transform: ${isExpanded ? "translateX(0)" : "translateX(100%)"};
    transition: all ${fast} ${easeInOut};
    z-index: ${layer10};
  `}
`;

export default SideMenu;
