import "core-js";
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
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

export const polyfills: unknown[] = [];

if (typeof window.IntersectionObserver === "undefined") {
  polyfills.push(
    import(
      /* webpackChunkName: "intersection-observer" */ "intersection-observer"
    )
  );
}

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
}

Promise.all(polyfills)
  .then(() => {
    renderApp();
  })
  .catch((error) => {
    console.error("Failed fetching polyfills", error);
  });

// More about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
