import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  FlexItemProps
} from "<layout>/__typings__/FlexItem";

const FlexItem = ({
  alignSelf = "auto",
  children,
  flex,
  order = 0
}: FlexItemProps): JSX.Element => (
  <FlexItem.Container
    alignSelf={alignSelf}
    data-testid="FlexItem"
    flex={flex}
    order={order}
  >
    {children}
  </FlexItem.Container>
);

FlexItem.Container = styled.div<FlexItemProps>`
  ${({
    alignSelf,
    flex,
    order
  }): FlattenSimpleInterpolation => css`
    align-self: ${alignSelf};
    flex: ${flex};
    order: ${order};
  `}
`;
  
export default FlexItem;