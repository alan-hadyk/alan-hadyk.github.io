import React, { memo, useState } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import LinkWithIcon from "<molecules>/LinkWithIcon";

import HeaderDesktop from "<organisms>/Header/HeaderDesktop";
import HeaderTablet from "<organisms>/Header/HeaderTablet";
import HeaderMobile from "<organisms>/Header/HeaderMobile";

import PositionContainer from "<layout>/PositionContainer";
import FlexContainer from "<layout>/FlexContainer";

import { HeaderProps } from "<organisms>/__typings__/Header/Header.d.ts";

function Header({
  zIndex = "layer1"
}: HeaderProps): JSX.Element {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false);

  return (
    <PositionContainer
      left="spacing0"
      position="fixed"
      right="spacing0"
      top="spacing0"
      zIndex={zIndex}
    >
      <Header.Container data-testid="HeaderContainer">
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
          <LinkWithIcon
            href={window.location.href}
            height="spacing48"
            iconName="logo"
            width="spacing248"
          />

          <HeaderDesktop />

          <HeaderTablet
            isMenuVisible={isMenuVisible}
            onClick={handleMenuButtonClick}
          />

          <HeaderMobile
            isMenuVisible={isMenuVisible}
            onClick={handleMenuButtonClick}
          />
            
        </FlexContainer>
      </Header.InnerContainer>
    );
  }

  function handleMenuButtonClick(): void {
    setIsMenuVisible(!isMenuVisible);
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
  `}
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
  `}
`;

export default memo(Header);