import React, { memo, useState } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import LinkWithIcon from "UI/molecules/LinkWithIcon";

import HeaderTv from "UI/organisms/Header/HeaderTv";
import HeaderDesktop from "UI/organisms/Header/HeaderDesktop";
import HeaderTabletAndMobile from "UI/organisms/Header/HeaderTabletAndMobile";

import PositionContainer from "UI/layout/PositionContainer";
import FlexContainer from "UI/layout/FlexContainer";
import Responsive from "UI/layout/Responsive";

import useResize from "hooks/useResize";

import { HeaderProps } from "UI/organisms/Header/__typings__/Header";

function Header({ zIndex = "layer1" }: HeaderProps): JSX.Element {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  useResize({
    breakpoint: "1680px",
    callback: () => setIsMenuVisible(false)
  });

  return (
    <PositionContainer
      dataTestId="HeaderPositionContainer"
      left="spacing0"
      position="fixed"
      right="spacing0"
      top="spacing0"
      zIndex={zIndex}
    >
      <Header.Container data-cy="Header" data-testid="HeaderContainer">
        <FlexContainer
          dataTestId="HeaderOuterFlexContainer"
          flexFlow="row nowrap"
        >
          {renderHeaderInnerContainer()}
        </FlexContainer>
      </Header.Container>
    </PositionContainer>
  );

  function renderHeaderInnerContainer(): JSX.Element {
    return (
      <Header.InnerContainer data-testid="HeaderInnerContainer">
        <FlexContainer
          dataTestId="HeaderInnerFlexContainer"
          flexFlow="row nowrap"
          height="spacing48"
          justifyContent="space-between"
        >
          <Responsive devices={["tv", "desktop", "tablet"]}>
            <LinkWithIcon
              dataCy="SiteLogo"
              href={window.location.href}
              height="spacing48"
              iconName="logo"
              width="spacing248"
            />
          </Responsive>

          <Responsive devices={["mobile"]}>
            <LinkWithIcon
              dataCy="SiteLogoMobile"
              href={window.location.href}
              iconName="logoShortcut"
              width="spacing64"
            />
          </Responsive>

          <HeaderTv />

          <HeaderDesktop
            isMenuVisible={isMenuVisible}
            onClick={handleMenuButtonClick}
          />

          <HeaderTabletAndMobile
            isMenuVisible={isMenuVisible}
            onClick={handleMenuButtonClick}
          />
        </FlexContainer>
      </Header.InnerContainer>
    );
  }

  function handleMenuButtonClick(): void {
    setIsMenuVisible((_isMenuVisible) => !_isMenuVisible);
  }
}

Header.Container = styled.header`
  ${({
    theme: {
      colorPalette: { blue300, blue600 },
      spacing: { spacing96 }
    }
  }): FlattenSimpleInterpolation => css`
    background-color: ${transparentize(0.25, blue600)};
    border-bottom: 1px solid ${transparentize(0.5, blue300)};
    height: ${spacing96};
  `};
`;

Header.InnerContainer = styled.div`
  ${({
    theme: {
      breakpoints: { breakpoint1920 },
      spacing: { spacing24, spacing48 }
    }
  }): FlattenSimpleInterpolation => css`
    max-width: ${breakpoint1920};
    padding: ${spacing24} ${spacing48};
    width: 100%;
  `};
`;

export default memo(Header);
