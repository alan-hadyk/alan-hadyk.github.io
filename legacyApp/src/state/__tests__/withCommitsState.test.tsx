import { act, RenderResult } from "@testing-library/react";

import withCommitsState, { commitsMachine } from "state/withCommitsState";

import renderWithTheme from "helpers/tests/renderWithTheme";
import {
  CommitProps,
  ListOfCommitsProps
} from "UI/molecules/__typings__/ListOfCommits";

jest.mock("node-fetch");

import fetch from "node-fetch";

const commitsList: CommitProps[] = [
  {
    commit: {
      author: {
        date: "2020-03-15T14:58:16Z"
      }
    },
    html_url:
      "https://github.com/alan-hadyk/portfolio/commit/6f05bb91f454878edcb0f0e30e39501d39b46e4f",
    sha: "6f05bb91f454878edcb0f0e30e39501d39b46e4f"
  },
  {
    commit: {
      author: {
        date: "2020-03-14T16:05:26Z"
      }
    },
    html_url:
      "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c5",
    sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c5"
  }
];

afterEach(() => {
  jest.resetAllMocks();
});

describe("state / withCommitsState", () => {
  describe("commitsMachine", () => {
    test("should return CommitsMachine", () => {
      expect(typeof commitsMachine.context).toEqual("function");
      expect(commitsMachine.current).toEqual("idle");
      expect(JSON.stringify(commitsMachine.states)).toEqual(
        JSON.stringify({
          error: {
            final: true,
            transitions: {}
          },
          idle: {
            final: false,
            transitions: {},
            // eslint-disable-next-line sort-keys
            immediates: [
              {
                from: null,
                to: "loading"
              }
            ]
          },
          loaded: {
            final: true,
            transitions: {}
          },
          loading: {
            transitions: {}
          }
        })
      );
      expect(Object.keys(commitsMachine)).toEqual([
        "context",
        "current",
        "states"
      ]);
    });
  });

  test("withCommitsState should call fetch with correct link", async () => {
    const spyFetch = jest.fn();

    const mockFetch = (fetch as unknown) as jest.Mock;
    mockFetch.mockImplementation(spyFetch);

    await act(async () => {
      await setup();
    });

    expect(spyFetch).toHaveBeenCalledWith(
      "https://api.github.com/repos/alan-hadyk/portfolio/commits"
    );
  });

  describe("WrappedComponent", () => {
    describe("Props", () => {
      describe("commitsList and hasError", () => {
        test("should contain an array of commits if GitHub API call's status is 200", async () => {
          const mockFetch = (fetch as unknown) as jest.Mock;
          mockFetch.mockImplementation(() => {
            return new Response(JSON.stringify(commitsList), {
              status: 200
            });
          });

          let WrappedComponent: Element;

          await act(async () => {
            const setupFn = await setup();

            WrappedComponent = setupFn.WrappedComponent;
          });

          expect(
            JSON.parse(WrappedComponent.getAttribute("data-commitslist"))
          ).toEqual(commitsList);
          expect(WrappedComponent.getAttribute("data-commitsstate")).toEqual(
            "loaded"
          );
        });

        test("should have an error state if GitHub API call fails", async () => {
          const mockFetch = (fetch as unknown) as jest.Mock;
          mockFetch.mockImplementation(() => {
            return new Error();
          });

          let WrappedComponent: Element;

          await act(async () => {
            const setupFn = await setup();

            WrappedComponent = setupFn.WrappedComponent;
          });

          expect(
            JSON.parse(WrappedComponent.getAttribute("data-commitslist"))
          ).toEqual([]);
          expect(WrappedComponent.getAttribute("data-commitsstate")).toEqual(
            "error"
          );
        });

        test("should have an error state if GitHub API call returns status 404", async () => {
          const mockFetch = (fetch as unknown) as jest.Mock;
          mockFetch.mockImplementation(() => {
            return new Response(
              JSON.stringify({
                documentation_url:
                  "https://docs.github.com/rest/reference/repos#list-commits",
                message: "Not Found"
              }),
              {
                status: 404
              }
            );
          });

          let WrappedComponent: Element;

          await act(async () => {
            const setupFn = await setup();

            WrappedComponent = setupFn.WrappedComponent;
          });

          expect(
            JSON.parse(WrappedComponent.getAttribute("data-commitslist"))
          ).toEqual([]);
          expect(WrappedComponent.getAttribute("data-commitsstate")).toEqual(
            "error"
          );
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  WrappedComponent: Element;
}

function setup(): Setup {
  const MockWrappedComponent = ({
    commitsList,
    commitsState
  }: ListOfCommitsProps): JSX.Element => (
    <div
      data-testid="WrappedComponent"
      data-commitslist={JSON.stringify(commitsList)}
      data-commitsstate={commitsState}
    />
  );
  const WithCommitsState: (props: unknown) => JSX.Element = withCommitsState(
    MockWrappedComponent
  );

  const utils: RenderResult = renderWithTheme(<WithCommitsState />);

  const { queryByTestId }: RenderResult = utils;
  const WrappedComponent: Element = queryByTestId("WrappedComponent");

  return {
    ...utils,
    WrappedComponent
  };
}
