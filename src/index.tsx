import React from "react";
import ReactDOM from "react-dom";

import App from "<src>/App";
import * as serviceWorker from "<src>/serviceWorker";

const polyfills = [];

if (typeof window.IntersectionObserver === "undefined") {
  polyfills.push(
    import(
      /* webpackChunkName: "intersection-observer" */ "intersection-observer"
    )
  );
}

export function renderApp(): void {
  ReactDOM.render(<App />, document.getElementById("root"));
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
