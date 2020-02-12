import React from "react";
import styled, { css } from "styled-components";

interface PageTemplateProps {
  children: Node | Node[] | string;
}

const PageTemplate = ({ children }: PageTemplateProps) => (
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
  }) => css`
    padding: ${spacing96} ${spacing48};
    max-width: ${breakpoint1920};
  `}
`;
  
export default PageTemplate;