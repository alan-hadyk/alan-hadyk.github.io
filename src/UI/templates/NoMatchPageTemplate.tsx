import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { NoMatchPageTemplateProps } from "UI/templates/__typings__/NoMatchPageTemplate";

const NoMatchPageTemplate = ({
  children
}: NoMatchPageTemplateProps): JSX.Element => (
  <NoMatchPageTemplate.Container data-testid="NoMatchPageTemplate">
    {children}
  </NoMatchPageTemplate.Container>
);

NoMatchPageTemplate.Container = styled.main`
  ${({
    theme: {
      breakpoints: { breakpoint640, breakpoint1920 },
      spacing: { spacing28, spacing48 }
    }
  }): FlattenSimpleInterpolation => css`
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: 0 auto;
    max-width: ${breakpoint1920};
    min-height: 100vh;
    padding: ${spacing48};

    @media (max-width: ${breakpoint640}) {
      padding: ${spacing28};
    }
  `};
`;

export default NoMatchPageTemplate;
