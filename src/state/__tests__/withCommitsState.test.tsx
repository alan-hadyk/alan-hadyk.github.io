import React from "react";
import { act, RenderResult } from "@testing-library/react";

import withCommitsState from "<state>/withCommitsState";

import renderWithTheme from "<helpers>/tests/renderWithTheme";
import { CommitProps, ListOfCommitsProps } from "<molecules>/__typings__/ListOfCommits.d.ts";

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
      await setup();
    });

    expect(spyFetch).toHaveBeenCalledWith("https://api.github.com/repos/alan-hadyk/portfolio/commits");
  });

  describe("WrappedComponent", () => {
    describe("Props", () => {
      describe("commitsList and hasError", () => {
        test("should contain an array of commits if status is 200", async () => {
          const commitsList: CommitProps[] = [
            {
              commit: {
                author: {
                  date: "2020-03-15T14:58:16Z"
                }
              },
              html_url: "https://github.com/alan-hadyk/portfolio/commit/6f05bb91f454878edcb0f0e30e39501d39b46e4f",
              sha: "6f05bb91f454878edcb0f0e30e39501d39b46e4f"
            },
            {
              commit: {
                author: {
                  date: "2020-03-14T16:05:26Z"
                }
              },
              html_url: "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c5",
              sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c5"
            }
          ];

          const mockFetch = fetch as unknown as jest.Mock;
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

          expect(JSON.parse(WrappedComponent.getAttribute("data-commitslist"))).toEqual(commitsList);
          expect(WrappedComponent.getAttribute("data-haserror")).toEqual("false");
        });

        test("should have an error if network request fails", async () => {
          const mockFetch = fetch as unknown as jest.Mock;
          mockFetch.mockImplementation(() => {
            return new Error();
          });

          let WrappedComponent: Element;

          await act(async () => {
            const setupFn = await setup();

            WrappedComponent = setupFn.WrappedComponent;
          });

          expect(JSON.parse(WrappedComponent.getAttribute("data-commitslist"))).toEqual([]);
          expect(WrappedComponent.getAttribute("data-haserror")).toEqual("true");
        });

        test("should have an error if network request returns status 404", async () => {
          const mockFetch = fetch as unknown as jest.Mock;
          mockFetch.mockImplementation(() => {
            return new Response(JSON.stringify({
              documentation_url: "https://docs.github.com/rest/reference/repos#list-commits",
              message: "Not Found"
            }), {
              status: 404
            });
          });

          let WrappedComponent: Element;

          await act(async () => {
            const setupFn = await setup();

            WrappedComponent = setupFn.WrappedComponent;
          });

          expect(JSON.parse(WrappedComponent.getAttribute("data-commitslist"))).toEqual([]);
          expect(WrappedComponent.getAttribute("data-haserror")).toEqual("true");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  WrappedComponent: Element;
}

function setup(): Setup {
  const MockWrappedComponent = ({ commitsList, hasError }: ListOfCommitsProps): JSX.Element => (
    <div
      data-testid="WrappedComponent"
      data-commitslist={JSON.stringify(commitsList)}
      data-haserror={hasError}
    />
  );
  const WithCommitsState: (props: unknown) => JSX.Element = withCommitsState(MockWrappedComponent);

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
