import React from "react";
import styled from "styled-components";

import Text from "<atoms>/Text";
import Corners from "<molecules>/Corners";
import PositionContainer from "<layout>/PositionContainer";

import { DashboardElementProps } from "<molecules>/__typings__/DashboardElement";

function DashboardElement({
  children,
  shouldDisplayCorners = false,
  title
}: DashboardElementProps): JSX.Element {
  return (
    <DashboardElement.Container>
      <Text 
        color="blue300"
        fontFamily="AnonymousPro"
        fontSize="font16"
        lineHeight="spacing36"
        textTransform="uppercase"
      >
        {title}
      </Text>
      <PositionContainer position="relative">
        {shouldDisplayCorners && <Corners />}
        <DashboardElement.InnerContainer>
          {children}
        </DashboardElement.InnerContainer>
      </PositionContainer>
    </DashboardElement.Container>
  );
}

DashboardElement.Container = styled.div``;
DashboardElement.InnerContainer = styled.div``;

export default DashboardElement;