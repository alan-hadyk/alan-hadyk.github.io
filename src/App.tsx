import React from "react";
import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
  ThemeProvider
} from "styled-components";

import HomePage from "<pages>/Home/HomePage";

import theme from "<styles>/theme";
import globalStyle from "<styles>/globalStyle";

const GlobalStyle: GlobalStyleComponent<object, DefaultTheme> = createGlobalStyle`
  ${globalStyle}
`;

const App = (): JSX.Element => (
  <ThemeProvider theme={theme}>
    <HomePage />
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
