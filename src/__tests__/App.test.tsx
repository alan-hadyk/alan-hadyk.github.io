import React from "react";
import { render, RenderResult } from "@testing-library/react";

import App from "<src>/App";

jest.mock("<hooks>/useIntersectionObserver");

function mockHomePage(): JSX.Element {
  return <div data-testid="Home" />;
}
jest.mock("<pages>/Home/HomePage", () => mockHomePage);

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
  const utils: RenderResult = render(<App />);

  const { queryByTestId } = utils || {};

  return {
    ...utils,
    Home: queryByTestId("Home")
  };
}
