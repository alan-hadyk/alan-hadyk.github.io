import React from "react";
import styled, { css } from "styled-components";

import spacing from "<styles>/variables/spacing";
import zIndex from "<styles>/variables/zIndex";

type SpacingKeys = keyof typeof spacing;
type ZIndexKeys = keyof typeof zIndex;

interface PositionContainerProps {
  bottom?: typeof spacing[SpacingKeys] | "unset";
  children: JSX.Element | JSX.Element[] | string;
  height?: typeof spacing[SpacingKeys] | "unset" | "50%" | "100%";
  left?: typeof spacing[SpacingKeys] | "unset";
  right?: typeof spacing[SpacingKeys] | "unset";
  top?: typeof spacing[SpacingKeys] | "unset";
  position?: "static" | "relative" | "fixed" | "sticky";
  zIndex?: typeof zIndex[ZIndexKeys];
}

const PositionContainer = ({
  bottom = "unset",
  children,
  height = "unset",
  left = "unset",
  position = "relative",
  right = "unset",
  top = "unset",
  zIndex = "layer1"
}: PositionContainerProps): JSX.Element => (
  <PositionContainer.Container
    bottom={bottom}
    height={height}
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
    height,
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
    height: ${spacing[height] || height};
    left: ${spacing[left]};
    position: ${position};
    right: ${spacing[right]};
    top: ${spacing[top]};
    z-index: ${zIndexVariables[zIndex]};
  `}
`;
  
export default PositionContainer;