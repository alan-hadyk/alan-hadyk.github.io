import React from "react";

import { polyfills, renderApp } from "../index";

jest.mock("intersection-observer", () => "mockIntersectionObserver");

jest.mock("react-dom", () => ({
  render: jest.fn()
}));

import { render } from "react-dom";

function MockApp(): JSX.Element {
  return <div />;
}
jest.mock("./App", () => MockApp);

describe("index", () => {
  test("renderApp fn should call ReactDOM.render", () => {
    const renderSpy = jest.fn();
    const renderFn = (render as unknown) as jest.Mock;
    renderFn.mockImplementation((...args) => renderSpy(args));

    expect(renderSpy).toHaveBeenCalledTimes(0);

    renderApp();

    // eslint-disable-next-line react/jsx-key
    expect(renderSpy).toHaveBeenNthCalledWith(1, [<MockApp />, null]);
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
