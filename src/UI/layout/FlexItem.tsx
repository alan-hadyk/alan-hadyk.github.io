import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  FlexItemProps
} from "<layout>/__typings__/FlexItem.d.ts";

const FlexItem = ({
  alignSelf = "auto",
  children,
  className,
  dataTestId,
  flex,
  height = "unset",
  order = 0,
  overflow = "auto",
  paddingBottom = "spacing0",
  paddingTop = "spacing0"
}: FlexItemProps): JSX.Element => (
  <FlexItem.Container
    alignSelf={alignSelf}
    className={className}
    data-testid={dataTestId || "FlexItem"}
    flex={flex}
    height={height}
    order={order}
    overflow={overflow}
    paddingBottom={paddingBottom}
    paddingTop={paddingTop}
  >
    {children}
  </FlexItem.Container>
);

FlexItem.Container = styled.div<FlexItemProps>`
  ${({
    alignSelf,
    flex,
    height,
    order,
    overflow,
    paddingBottom,
    paddingTop,
    theme: {
      spacing
    }
  }): FlattenSimpleInterpolation => css`
    align-self: ${alignSelf};
    flex: ${flex};
    height: ${(height in spacing && spacing[height]) || height};
    order: ${order};
    overflow: ${overflow};
    padding-bottom: ${(paddingBottom in spacing && spacing[paddingBottom]) || paddingBottom};
    padding-top: ${(paddingTop in spacing && spacing[paddingTop]) || paddingTop};
  `}
`;
  
export default FlexItem;