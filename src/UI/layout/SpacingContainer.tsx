import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import {
  SpacingContainerProps
} from "<layout>/__typings__/SpacingContainer";

const SpacingContainer = ({
  children,
  dataTestId,
  height = "auto",
  id,
  marginBottom = "spacing0",
  marginLeft = "spacing0",
  marginRight = "spacing0",
  marginTop = "spacing0",
  minHeight = "spacing0",
  paddingBottom = "spacing0",
  paddingLeft = "spacing0",
  paddingRight = "spacing0",
  paddingTop = "spacing0"
}: SpacingContainerProps): JSX.Element => (
  <SpacingContainer.Container
    data-testid={dataTestId || "SpacingContainer"}
    height={height}
    id={id}
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
    minHeight={minHeight}
    paddingBottom={paddingBottom}
    paddingLeft={paddingLeft}
    paddingRight={paddingRight}
    paddingTop={paddingTop}
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
    minHeight,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    theme: {
      spacing
    }
  }): FlattenSimpleInterpolation => css`
    height: ${(height in spacing && spacing[height]) || height};
    margin-bottom: ${marginBottom in spacing && spacing[marginBottom]};
    margin-left: ${marginLeft in spacing && spacing[marginLeft]};
    margin-right: ${marginRight in spacing && spacing[marginRight]};
    margin-top: ${marginTop in spacing && spacing[marginTop]};
    min-height: ${(minHeight in spacing && spacing[minHeight]) || minHeight};
    padding-bottom: ${paddingBottom in spacing && spacing[paddingBottom]};
    padding-left: ${paddingLeft in spacing && spacing[paddingLeft]};
    padding-right: ${paddingRight in spacing && spacing[paddingRight]};
    padding-top: ${paddingTop in spacing && spacing[paddingTop]};
  `}
`;
  
export default SpacingContainer;