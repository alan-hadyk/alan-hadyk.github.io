import React from "react";
import { render, RenderResult } from "@testing-library/react";

import App from "<src>/App";

jest.mock("<hooks>/useIntersectionObserver");

jest.mock("<pages>/Home/HomePage", () => (): JSX.Element => (
  <div data-testid="Home" />
));

describe("App", () => {
  test("should render <pages>/Home/HomePage", () => {
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
