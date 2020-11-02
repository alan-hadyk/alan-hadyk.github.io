import React, { useCallback } from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { FlexItemProps } from "UI/layout/__typings__/FlexItem";

import isIE11 from "helpers/browser/isIE11";

const FlexItem = ({
  alignSelf = "auto",
  children,
  className,
  dataCy,
  dataTestId,
  flex,
  height = "unset",
  order = 0,
  overflow = "auto",
  paddingBottom = "spacing0",
  paddingTop = "spacing0"
}: FlexItemProps): JSX.Element => {
  const getWidth: () => string = useCallback((): string => {
    return flex.split(" ").splice(-1)[0];
  }, [flex]);

  return (
    <FlexItem.Container
      alignSelf={alignSelf}
      className={className}
      data-cy={dataCy}
      data-testid={dataTestId || "FlexItem"}
      flex={flex}
      height={height}
      order={order}
      overflow={isIE11() ? "hidden" : overflow}
      paddingBottom={paddingBottom}
      paddingTop={paddingTop}
      width={getWidth()}
    >
      {children}
    </FlexItem.Container>
  );
};

FlexItem.Container = styled.div<FlexItemProps>`
  ${({
    alignSelf,
    flex,
    height,
    order,
    overflow,
    paddingBottom,
    paddingTop,
    theme: { spacing },
    width
  }): FlattenSimpleInterpolation => css`
    align-self: ${alignSelf};
    flex: ${flex};
    height: ${(height in spacing && spacing[height]) || height};
    order: ${order};
    overflow: ${overflow};
    padding-bottom: ${(paddingBottom in spacing && spacing[paddingBottom]) ||
    paddingBottom};
    padding-top: ${(paddingTop in spacing && spacing[paddingTop]) ||
    paddingTop};

    @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
      /* IE10+ CSS */
      flex: none;
      width: ${width};
    }
  `};
`;

export default FlexItem;
