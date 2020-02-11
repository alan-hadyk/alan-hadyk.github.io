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
    <App.Text>Anonymous Pro</App.Text>
    <GlobalStyle />
  </ThemeProvider>
);

App.Title = styled.h1`
  margin: 1rem;
  font-size: 10rem;
  text-align: center;
`;
App.Text = styled.p`
  margin: 1rem;
  font-size: 10rem;
  text-align: center;
`;

export default App;
