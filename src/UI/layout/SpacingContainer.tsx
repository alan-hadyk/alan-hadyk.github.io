import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import spacing from "<styles>/variables/spacing";

type SpacingKeys = keyof typeof spacing;

export interface SpacingContainerProps {
  children: JSX.Element | JSX.Element[] | string;
  marginBottom?: typeof spacing[SpacingKeys];
  marginLeft?: typeof spacing[SpacingKeys];
  marginRight?: typeof spacing[SpacingKeys];
  marginTop?: typeof spacing[SpacingKeys];
  paddingBottom?: typeof spacing[SpacingKeys];
  paddingLeft?: typeof spacing[SpacingKeys];
  paddingRight?: typeof spacing[SpacingKeys];
  paddingTop?: typeof spacing[SpacingKeys];
}

const SpacingContainer = ({
  children,
  marginBottom = "spacing0",
  marginLeft = "spacing0",
  marginRight = "spacing0",
  marginTop = "spacing0",
  paddingBottom = "spacing0",
  paddingLeft = "spacing0",
  paddingRight = "spacing0",
  paddingTop = "spacing0"
}: SpacingContainerProps): JSX.Element => (
  <SpacingContainer.Container
    data-testid="SpacingContainer"
    marginBottom={marginBottom}
    marginLeft={marginLeft}
    marginRight={marginRight}
    marginTop={marginTop}
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
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    theme: {
      spacing
    }
  }): FlattenSimpleInterpolation => css`
    margin-bottom: ${marginBottom in spacing && spacing[marginBottom]};
    margin-left: ${marginLeft in spacing && spacing[marginLeft]};
    margin-right: ${marginRight in spacing && spacing[marginRight]};
    margin-top: ${marginTop in spacing && spacing[marginTop]};
    padding-bottom: ${paddingBottom in spacing && spacing[paddingBottom]};
    padding-left: ${paddingLeft in spacing && spacing[paddingLeft]};
    padding-right: ${paddingRight in spacing && spacing[paddingRight]};
    padding-top: ${paddingTop in spacing && spacing[paddingTop]};
  `}
`;
  
export default SpacingContainer;