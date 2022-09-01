import { render, RenderResult } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import App from "../App";

jest.mock("hooks/useIntersectionObserver");

function mockHomePage(): JSX.Element {
  return <div data-testid="Home" />;
}
jest.mock("pages/Home/HomePage", () => mockHomePage);

function mockNoMatchPage(): JSX.Element {
  return <div data-testid="NoMatch" />;
}
jest.mock("pages/NoMatch/NoMatchPage", () => mockNoMatchPage);

describe("App", () => {
  test("should render pages/Home/HomePage", () => {
    const { Home } = setup("/");

    expect(Home).toBeTruthy();
  });

  test("should render pages/NoMatch/NoMatchPage", () => {
    const { NoMatch } = setup("/wrong/path");

    expect(NoMatch).toBeTruthy();
  });
});

interface Setup extends RenderResult {
  Home: Element;
  NoMatch: Element;
}

function setup(route: string): Setup {
  const history = createMemoryHistory();
  history.push(route);

  const utils: RenderResult = render(
    <Router history={history}>
      <App />
    </Router>
  );

  const { queryByTestId } = utils || {};

  const Home: Element = queryByTestId("Home");
  const NoMatch: Element = queryByTestId("NoMatch");

  return {
    ...utils,
    Home,
    NoMatch
  };
}
