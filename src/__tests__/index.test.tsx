import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { JSDOM } from "jsdom";

import { GlobalStyle, renderApp } from "../index";

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
  afterEach(() => {
    jest.clearAllMocks();
  });

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

  test("renderApp fn should call document.querySelector and document.querySelector.parentNode.removeChild after 900ms", async () => {
    jest.useFakeTimers();
    const spyQuerySelector = jest.fn();
    const spyRemoveChild = jest.fn();
    const style = {};
    const dom = new JSDOM();
    global.document = dom.window.document;

    Object.defineProperty(global.document, "querySelector", {
      value: (selector: string) => {
        spyQuerySelector(selector);

        return {
          parentNode: {
            removeChild: spyRemoveChild
          },
          style
        };
      }
    });

    renderApp();

    expect(spyQuerySelector).toHaveBeenCalledTimes(0);
    expect(spyRemoveChild).toHaveBeenCalledTimes(0);
    expect(style).toEqual({});

    jest.advanceTimersByTime(600);

    expect(spyQuerySelector).toHaveBeenNthCalledWith(1, ".loader");
    expect(spyRemoveChild).toHaveBeenCalledTimes(0);
    expect(style).toEqual({ opacity: "0" });

    jest.advanceTimersByTime(300);

    expect(spyQuerySelector).toHaveBeenNthCalledWith(1, ".loader");
    expect(spyRemoveChild).toHaveBeenNthCalledWith(1, {
      parentNode: {
        removeChild: spyRemoveChild
      },
      style
    });

    jest.clearAllTimers();
  });
});
