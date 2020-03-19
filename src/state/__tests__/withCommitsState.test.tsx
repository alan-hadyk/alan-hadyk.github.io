import React from "react";
import { act, RenderResult, waitForElement } from "@testing-library/react";

import withCommitsState from "<state>/withCommitsState";

import renderWithTheme from "<helpers>/tests/renderWithTheme";
import { ListOfCommitsProps } from "<src>/UI/molecules/__typings__/ListOfCommits";

jest.mock("node-fetch");

import fetch from "node-fetch";

afterEach(() => {
  jest.resetAllMocks();
});

describe("state / withCommitsState", () => {
  test("should call fetch with correct link", async () => {
    const spyFetch = jest.fn();
    const mockFetch = fetch as unknown as jest.Mock;
    mockFetch.mockImplementation(spyFetch);

    await act(async () => {
      setup();
    });
    
    expect(spyFetch).toHaveBeenCalledWith("https://api.github.com/repos/alan-hadyk/portfolio/commits");
  });
});

interface Setup extends RenderResult {
  WrappedComponent: Element;
}

function setup(): Setup {
  const MockWrappedComponent = ({ commitsList, hasError }: ListOfCommitsProps): JSX.Element => (
    <div data-testid="WrappedComponent" data-commitslist={commitsList} data-haserror={hasError} />
  );
  const WithCommitsState = withCommitsState(MockWrappedComponent);

  const utils: RenderResult = renderWithTheme(
    <WithCommitsState />
  );

  const { queryByTestId }: RenderResult = utils;
  const WrappedComponent: Element = queryByTestId("WrappedComponent");

  return {
    ...utils,
    WrappedComponent
  };
}
