import React from "react";
import styled, { css } from "styled-components";

import spacing from "<styles>/variables/spacing";
import zIndex from "<styles>/variables/zIndex";

type SpacingKeys = keyof typeof spacing;
type ZIndexKeys = keyof typeof zIndex;

interface PositionContainerProps {
  children: Node | Node[] | string;
  bottom: typeof spacing[SpacingKeys] | "unset";
  left: typeof spacing[SpacingKeys] | "unset";
  right: typeof spacing[SpacingKeys] | "unset";
  top: typeof spacing[SpacingKeys] | "unset";
  position: "static" | "relative" | "fixed" | "sticky";
  zIndex: typeof zIndex[ZIndexKeys];
}

const PositionContainer = ({
  bottom = "unset",
  children,
  left = "unset",
  position,
  right = "unset",
  top = "unset",
  zIndex = "layer1"
}: PositionContainerProps) => (
  <PositionContainer.Container
    bottom={bottom}
    left={left}
    position={position}
    right={right}
    top={top}
    zIndex={zIndex}
  >
    {children}
  </PositionContainer.Container>
);

PositionContainer.Container = styled.div<PositionContainerProps>`
  ${({
    bottom,
    left,
    position,
    right,
    top,
    theme: {
      spacing,
      zIndex: zIndexVariables
    },
    zIndex
  }) => css`
      bottom: ${spacing[bottom]};
      left: ${spacing[left]};
      position: ${position};
      right: ${spacing[right]};
      top: ${spacing[top]};
      z-index: ${zIndexVariables[zIndex]};
  `}
`;
  
export default PositionContainer;