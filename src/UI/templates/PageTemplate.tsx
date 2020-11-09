import React from "react";
import styled, { css, FlattenSimpleInterpolation } from "styled-components";
import PropTypes from "prop-types";

import { PageTemplateProps } from "UI/templates/__typings__/PageTemplate";

const PageTemplateContainer = styled.div`
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

const PageTemplate = ({ children }: PageTemplateProps): JSX.Element => (
  <PageTemplateContainer data-testid="PageTemplate">
    {children}
  </PageTemplateContainer>
);

PageTemplate.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default PageTemplate;
