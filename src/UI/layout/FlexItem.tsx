import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  FlexItemProps
} from "<layout>/__typings__/FlexItem.d.ts";

const FlexItem = ({
  alignSelf = "auto",
  children,
  dataTestId,
  flex,
  order = 0,
  overflow = "auto"
}: FlexItemProps): JSX.Element => (
  <FlexItem.Container
    alignSelf={alignSelf}
    data-testid={dataTestId || "FlexItem"}
    flex={flex}
    order={order}
    overflow={overflow}
  >
    {children}
  </FlexItem.Container>
);

FlexItem.Container = styled.div<FlexItemProps>`
  ${({
    alignSelf,
    flex,
    order,
    overflow
  }): FlattenSimpleInterpolation => css`
    align-self: ${alignSelf};
    flex: ${flex};
    order: ${order};
    overflow: ${overflow};
  `}
`;
  
export default FlexItem;