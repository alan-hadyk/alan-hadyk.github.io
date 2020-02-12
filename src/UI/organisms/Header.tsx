import React, { Fragment } from "react";
import styled, { css } from "styled-components";

import PositionContainer from "<layout>/PositionContainer";

interface HeaderProps {
  children: Node | Node[] | string;
}

const Header = ({ children }: HeaderProps) => (
  <PositionContainer
    position="fixed"
  >
    {children}
  </PositionContainer>
);

Header.Container = styled.main`
  ${({
    theme: {
      spacing
    }
  }) => css`

  `}
`;
  
export default Header;