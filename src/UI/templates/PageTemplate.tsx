import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";

import { PageTemplateProps }  from "<templates>/__typings__/PageTemplate.d.ts";

import spacing from "<styles>/variables/spacing";

const PageTemplate = ({
  children,
  padding = `0 ${spacing.spacing48} ${spacing.spacing96}`
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
      spacing,
      breakpoints: { breakpoint1920 }
    }
  }): FlattenSimpleInterpolation => css`
    margin: 0 auto;
    max-width: ${breakpoint1920};
    padding: ${padding};
  `}
`;
  
export default PageTemplate;