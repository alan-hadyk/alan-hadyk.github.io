import React from "react";
import styled from "styled-components";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import theme from "<styles>/theme";
import globalStyle from "<styles>/globalStyle";

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

const App = () => (
  <ThemeProvider theme={theme}>
    <App.Title>
    Portfolio
    </App.Title>
    <GlobalStyle />
  </ThemeProvider>
);

App.Title = styled.p`
  margin: 1rem;
  font-size: 1.6rem;
`;

export default App;
