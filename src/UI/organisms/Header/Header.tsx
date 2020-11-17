import React, { memo, useState } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import transparentize from "polished/lib/color/transparentize";
import PropTypes from "prop-types";

import LinkWithIcon from "UI/molecules/LinkWithIcon";

import HeaderTv from "UI/organisms/Header/HeaderTv";
import HeaderDesktop from "UI/organisms/Header/HeaderDesktop";
import HeaderTabletAndMobile from "UI/organisms/Header/HeaderTabletAndMobile";

import PositionContainer from "UI/layout/PositionContainer";
import FlexContainer from "UI/layout/FlexContainer";
import Responsive from "UI/layout/Responsive";

import zIndex from "styles/variables/zIndex";

import useResize from "hooks/useResize";

import { HeaderProps } from "UI/organisms/Header/__typings__/Header";

const downloadCV = (): Window =>
  window.open("/pdf/Alan_Hadyk_CV_2020.pdf", "_blank");

const HeaderContainer = styled.header`
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

const HeaderInnerContainer = styled.div`
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
      <HeaderContainer data-cy="Header" data-testid="HeaderContainer">
        <FlexContainer
          dataTestId="HeaderOuterFlexContainer"
          flexFlow="row nowrap"
        >
          {renderHeaderInnerContainer()}
        </FlexContainer>
      </HeaderContainer>
    </PositionContainer>
  );

  function renderHeaderInnerContainer(): JSX.Element {
    return (
      <HeaderInnerContainer data-testid="HeaderInnerContainer">
        <FlexContainer
          dataTestId="HeaderInnerFlexContainer"
          flexFlow="row nowrap"
          height="spacing48"
          justifyContent="space-between"
        >
          <Responsive
            dataTestId="ResponsiveLinkTvDesktopTablet"
            devices={["tv", "desktop", "tablet"]}
          >
            <LinkWithIcon
              dataCy="SiteLogo"
              href="/"
              height="spacing48"
              iconName="logo"
              width="spacing248"
            />
          </Responsive>

          <Responsive dataTestId="ResponsiveLinkMobile" devices={["mobile"]}>
            <LinkWithIcon
              dataCy="SiteLogoMobile"
              href="/"
              iconName="logoShortcut"
              width="spacing64"
            />
          </Responsive>

          <HeaderTv onCVButtonClick={downloadCV} />

          <HeaderDesktop
            isMenuVisible={isMenuVisible}
            onCVButtonClick={downloadCV}
            onClick={handleMenuButtonClick}
          />

          <HeaderTabletAndMobile
            isMenuVisible={isMenuVisible}
            onCVButtonClick={downloadCV}
            onClick={handleMenuButtonClick}
          />
        </FlexContainer>
      </HeaderInnerContainer>
    );
  }

  function handleMenuButtonClick(): void {
    setIsMenuVisible((_isMenuVisible) => !_isMenuVisible);
  }
}

Header.propTypes = {
  zIndex: PropTypes.oneOf([...Object.keys(zIndex)])
};

export { downloadCV };

export default memo(Header);
