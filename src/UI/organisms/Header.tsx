import React, { memo } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import { transparentize } from "polished";

import Logo from "<molecules>/Logo";
import PositionContainer from "<layout>/PositionContainer";
import FlexContainer from "<layout>/FlexContainer";

import zIndex from "<styles>/variables/zIndex";

type ZIndexKeys = keyof typeof zIndex;

interface HeaderProps {
  zIndex?: typeof zIndex[ZIndexKeys];
}

const Header = ({
  zIndex = "layer1"
}: HeaderProps): JSX.Element => (
  <PositionContainer
    left="spacing0"
    position="fixed"
    right="spacing0"
    top="spacing0"
    zIndex={zIndex}
  >
    <Header.Container>
      <FlexContainer
        flexFlow="row nowrap"
      >
        <Header.InnerContainer>
          <FlexContainer
            flexFlow="row nowrap"
            height="spacing48"
            justifyContent="space-between"
          >
            <Logo />
          </FlexContainer>
        </Header.InnerContainer>
      </FlexContainer>
    </Header.Container>
  </PositionContainer>
);

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