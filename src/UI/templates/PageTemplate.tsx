import React from "react";
import styled from "styled-components";

export interface PageTemplateProps {
  children: JSX.Element | JSX.Element[];
}

const PageTemplate = ({ children }: PageTemplateProps): JSX.Element => (
  <PageTemplate.Container>
    {children}
  </PageTemplate.Container>
);

PageTemplate.Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;
  
export default PageTemplate;