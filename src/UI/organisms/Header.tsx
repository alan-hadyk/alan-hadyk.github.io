import React from "react";
import styled, { css } from "styled-components";
import { transparentize } from "polished";

import PositionContainer from "<layout>/PositionContainer";
import FlexContainer from "<layout>/FlexContainer";

import zIndex from "<styles>/variables/zIndex";

type ZIndexKeys = keyof typeof zIndex;

interface HeaderProps {
  zIndex?: typeof zIndex[ZIndexKeys];
}

const Header = ({
  zIndex
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
        height="100%"
      >
        Header
      </FlexContainer>
    </Header.Container>
  </PositionContainer>
);

Header.Container = styled.header`
  ${({
    theme: {
      colorPalette,
      spacing
    }
  }) => css`
    background-color: ${transparentize(0.25, colorPalette.blue600)};
    border-bottom: 1px solid ${transparentize(0.5, colorPalette.blue300)};
    height: ${spacing.spacing96};
    padding: ${spacing.spacing24} ${spacing.spacing48};
  `}
`;
  
export default Header;