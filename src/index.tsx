import "core-js";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import "intersection-observer";

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import {
  createGlobalStyle,
  DefaultTheme,
  GlobalStyleComponent,
  ThemeProvider
} from "styled-components";

import theme from "styles/theme";
import globalStyle from "styles/globalStyle";

import App from "./App";
import * as serviceWorker from "./serviceWorker";

export const GlobalStyle: GlobalStyleComponent<
  unknown,
  DefaultTheme
> = createGlobalStyle`
  ${globalStyle}
`;

export function renderApp(): void {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
      <GlobalStyle />
    </ThemeProvider>,
    document.getElementById("root")
  );

  window.setTimeout(() => {
    const loader: HTMLElement = document.querySelector(".loader");

    loader.style.opacity = "0";

    window.setTimeout(() => {
      loader?.parentNode?.removeChild(loader);
    }, 300);
  }, 600);
}

renderApp();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorker.register();
