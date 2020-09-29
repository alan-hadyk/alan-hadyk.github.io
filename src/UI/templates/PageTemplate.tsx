import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { PageTemplateProps }  from "<templates>/__typings__/PageTemplate.d.ts";

const PageTemplate = ({
  children,
  padding
}: PageTemplateProps): JSX.Element => (
  <PageTemplate.Container
    padding={padding}
  >
    {children}
  </PageTemplate.Container>
);

PageTemplate.Container = styled.main<PageTemplateProps>`
  ${({
    padding,
    theme: {
      spacing: { spacing96, spacing48 },
      breakpoints: { breakpoint1920 }
    }
  }): FlattenSimpleInterpolation => css`
    margin: 0 auto;
    max-width: ${breakpoint1920};
    padding: 0 ${spacing48} ${spacing96};
    padding: ${padding};
  `}
`;
  
export default PageTemplate;