import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";

import Home from "<pages>/Home";

import theme from "<styles>/theme";
import globalStyle from "<styles>/globalStyle";

const GlobalStyle = createGlobalStyle`
  ${globalStyle}
`;

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <Home />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
