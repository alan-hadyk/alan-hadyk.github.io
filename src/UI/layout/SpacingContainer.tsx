import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  SpacingContainerProps
} from "<layout>/__typings__/SpacingContainer.d.ts";

const SpacingContainer = ({
  children,
  dataTestId,
  height = "auto",
  id,
  marginBottom = "spacing0",
  marginLeft = "spacing0",
  marginRight = "spacing0",
  marginTop = "spacing0",
  maxWidth,
  minHeight = "spacing0",
  overflow = "initial",
  paddingBottom = "spacing0",
  paddingLeft = "spacing0",
  paddingRight = "spacing0",
  paddingTop = "spacing0",
  width = "auto"
}: SpacingContainerProps): JSX.Element => (
  <SpacingContainer.Container
    data-testid={dataTestId || "SpacingContainer"}
    height={height}
    id={id}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
    maxWidth={maxWidth}
    minHeight={minHeight}
    overflow={overflow}
    paddingBottom={paddingBottom}
    paddingLeft={paddingLeft}
    paddingRight={paddingRight}
    paddingTop={paddingTop}
    width={width}
  >
    {children}
  </SpacingContainer.Container>
);

SpacingContainer.Container = styled.div<SpacingContainerProps>`
  ${({
    height,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    maxWidth,
    minHeight,
    overflow,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    theme: {
      spacing
    },
    width
  }): FlattenSimpleInterpolation => css`
    height: ${(height in spacing && spacing[height]) || height};
    margin-bottom: ${(marginBottom in spacing && spacing[marginBottom]) || marginBottom};
    margin-left: ${(marginLeft in spacing && spacing[marginLeft]) || marginLeft};
    margin-right: ${(marginRight in spacing && spacing[marginRight]) || marginRight};
    margin-top: ${(marginTop in spacing && spacing[marginTop]) || marginTop};
    max-width: ${(maxWidth in spacing && spacing[maxWidth]) || maxWidth};
    min-height: ${(minHeight in spacing && spacing[minHeight]) || minHeight};
    overflow-y: ${overflow};
    padding-bottom: ${(paddingBottom in spacing && spacing[paddingBottom]) || paddingBottom};
    padding-left: ${(paddingLeft in spacing && spacing[paddingLeft]) || paddingLeft};
    padding-right: ${(paddingRight in spacing && spacing[paddingRight]) || paddingRight};
    padding-top: ${(paddingTop in spacing && spacing[paddingTop]) || paddingTop};
    width: ${(width in spacing && spacing[width]) || width};
  `}
`;
  
export default SpacingContainer;