import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { PageTemplateProps } from "templates/__typings__/PageTemplate";

const PageTemplate = ({ children }: PageTemplateProps): JSX.Element => (
  <PageTemplate.Container data-testid="PageTemplate">
    {children}
  </PageTemplate.Container>
);

PageTemplate.Container = styled.main`
  ${({
    theme: {
      breakpoints: { breakpoint640, breakpoint1920 },
      spacing: { spacing28, spacing48, spacing96 }
    }
  }): FlattenSimpleInterpolation => css`
    margin: 0 auto;
    max-width: ${breakpoint1920};
    padding: 0 ${spacing48} ${spacing96};

    @media (max-width: ${breakpoint640}) {
      padding: 0 ${spacing28} ${spacing96};
    }
  `};
`;

export default PageTemplate;
