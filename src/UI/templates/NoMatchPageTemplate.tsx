import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { NoMatchPageTemplateProps } from "UI/templates/__typings__/NoMatchPageTemplate";

const NoMatchPageTemplate = ({
  children,
  dataCy
}: NoMatchPageTemplateProps): JSX.Element => (
  <NoMatchPageTemplate.Container
    data-cy={dataCy}
    data-testid="NoMatchPageTemplate"
  >
    {children}
  </NoMatchPageTemplate.Container>
);

NoMatchPageTemplate.Container = styled.div`
  ${({
    theme: {
      breakpoints: { breakpoint640, breakpoint641, breakpoint1280 },
      spacing: { spacing28, spacing48, spacing96, spacing356 }
    }
  }): FlattenSimpleInterpolation => css`
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: 0 auto;
    min-height: 100vh;
    padding: ${spacing48};
    width: calc(${spacing356} + ${spacing96});

    @media (min-width: ${breakpoint641}) and (max-width: ${breakpoint1280}) {
      width: 50%;
    }

    @media (max-width: ${breakpoint640}) {
      min-height: initial;
      padding: ${spacing28};
      width: 100%;
    }
  `};
`;

export default NoMatchPageTemplate;
