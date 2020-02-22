import React from "react";
import { render, RenderResult } from "@testing-library/react";

import App from "<src>/App";

jest.mock("<src>/hooks/useIntersectionObserver");

jest.mock("<pages>/Home", () => (): JSX.Element => (
  <div data-testid="Home" />
));

describe("App", () => {
  test("should render <pages>/Home", () => {
    const { Home } = setup();

    expect(Home).toBeTruthy();
  });
});

interface Setup extends RenderResult {
  Home: Element;
}

function setup(): Setup {
  const utils: RenderResult = render(
    <App />
  );

  const { queryByTestId } = utils || {};

  return {
    ...utils,
    Home: queryByTestId("Home")
  };
}
