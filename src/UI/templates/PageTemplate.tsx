import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

export interface PageTemplateProps {
  children: JSX.Element | JSX.Element[];
}

const PageTemplate = ({ children }: PageTemplateProps): JSX.Element => (
  <PageTemplate.Container>
    {children}
  </PageTemplate.Container>
);

PageTemplate.Container = styled.main`
  ${({
    theme: {
      spacing: { spacing96, spacing48 },
      breakpoints: { breakpoint1920 }
    }
  }): FlattenSimpleInterpolation => css`
    padding: ${spacing96} ${spacing48};
    max-width: ${breakpoint1920};
  `}
`;
  
export default PageTemplate;