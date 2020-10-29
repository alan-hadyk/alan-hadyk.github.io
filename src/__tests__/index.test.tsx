import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { GlobalStyle, polyfills, renderApp } from "../index";

import theme from "styles/theme";

jest.mock("intersection-observer", () => "mockIntersectionObserver");

jest.mock("react-dom", () => ({
  render: jest.fn()
}));

import { render } from "react-dom";

function MockApp(): JSX.Element {
  return <div />;
}
jest.mock("../App", () => MockApp);

describe("index", () => {
  test("renderApp fn should call ReactDOM.render", () => {
    const renderSpy = jest.fn();
    const renderFn = (render as unknown) as jest.Mock;
    renderFn.mockImplementation((...args) => renderSpy(args));

    expect(renderSpy).toHaveBeenCalledTimes(0);

    renderApp();

    const mockCall = renderSpy.mock.calls[0][0][0];

    expect(mockCall).toEqual(
      <ThemeProvider theme={theme}>
        <Router>
          <MockApp />
        </Router>
        <GlobalStyle />
      </ThemeProvider>
    );
  });

  test("Promise.all(polyfills) should contain intersection-observer", async () => {
    const _polyfills = await Promise.all(polyfills);

    expect(_polyfills).toEqual([
      {
        default: "mockIntersectionObserver"
      }
    ]);
  });
});
