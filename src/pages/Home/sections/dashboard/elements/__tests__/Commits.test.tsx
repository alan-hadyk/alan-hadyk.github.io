import React from "react";
import { RenderResult } from "@testing-library/react";

import { Commits } from "<pages>/Home/sections/dashboard/elements/Commits";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  ListOfCommitsProps
} from "<molecules>/__typings__/ListOfCommits";

describe("pages / Home / sections / dashboard / elements / Commits", () => {
  test("should have correct structure if has no error", () => {
    const {
      DashboardElement,
      ListOfCommits
    } = setup();

    expect(DashboardElement.children[1].children[0].children[0]).toEqual(ListOfCommits);
  });

  test("should have correct structure if has an error", () => {
    const {
      Error,
      DashboardElement
    } = setup({ hasError: true });

    expect(DashboardElement.children[1].children[4].children[0].children[0]).toEqual(Error);
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 0 1 15%", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement).toHaveStyleRule("flex", "0 1 15%");
        });
      });

      describe("childrenHeight", () => {
        test("should have 22.6vh", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement.children[1]).toHaveStyleRule("height", "22.6vh");
        });
      });

      describe("shouldDisplayCorners", () => {
        test("should render corners if has an error", () => {
          const { Corners, DashboardElement } = setup({
            hasError: true
          });

          expect(DashboardElement.children[1].children[0]).toEqual(Corners[0]);
          expect(DashboardElement.children[1].children[1]).toEqual(Corners[1]);
          expect(DashboardElement.children[1].children[2]).toEqual(Corners[2]);
          expect(DashboardElement.children[1].children[3]).toEqual(Corners[3]);
        });

        test("should not render corners if has no error", () => {
          const { Corners } = setup({
            hasError: false
          });

          expect(Corners[0]).toBeFalsy();
          expect(Corners[1]).toBeFalsy();
          expect(Corners[2]).toBeFalsy();
          expect(Corners[3]).toBeFalsy();
        });
      });

      describe("title", () => {
        test("should render Commits", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement.children[0].textContent).toEqual("Commits");
        });
      });
    });
  });

  describe("ListOfCommits", () => {
    test("should render", () => {
      const { ListOfCommits } = setup();

      expect(ListOfCommits).toHaveStyleRule("align-items", "flex-start");
      expect(ListOfCommits).toHaveStyleRule("flex-flow", "column nowrap");
      expect(ListOfCommits).toHaveStyleRule("justify-content", "flex-start");
    });

    describe("Props", () => {
      describe("commitsList", () => {
        test("should render number of singular commits equal to length of commits list array - 2 items", () => {
          const commitsList = [
            {
              commit: {
                author: {
                  date: "2020-03-15T14:58:16Z"
                }
              },
              // eslint-disable-next-line @typescript-eslint/camelcase
              html_url: "https://github.com/alan-hadyk/portfolio/commit/6f05bb91f454878edcb0f0e30e39501d39b46e4f",
              sha: "6f05bb91f454878edcb0f0e30e39501d39b46e4f"
            },
            {
              commit: {
                author: {
                  date: "2020-03-14T16:05:26Z"
                }
              },
              // eslint-disable-next-line @typescript-eslint/camelcase
              html_url: "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c5",
              sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c5"
            }
          ];

          const { ListOfCommits } = setup({ commitsList });

          expect(ListOfCommits.childElementCount).toEqual(2);
        });

        test("should render number of singular commits equal to length of commits list array - 4 items", () => {
          const commitsList = [
            {
              commit: {
                author: {
                  date: "2020-03-15T14:58:16Z"
                }
              },
              // eslint-disable-next-line @typescript-eslint/camelcase
              html_url: "https://github.com/alan-hadyk/portfolio/commit/6f05bb91f454878edcb0f0e30e39501d39b46e4f",
              sha: "6f05bb91f454878edcb0f0e30e39501d39b46e4f"
            },
            {
              commit: {
                author: {
                  date: "2020-03-14T16:05:26Z"
                }
              },
              // eslint-disable-next-line @typescript-eslint/camelcase
              html_url: "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c5",
              sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c5"
            },
            {
              commit: {
                author: {
                  date: "2020-03-14T16:05:26Z"
                }
              },
              // eslint-disable-next-line @typescript-eslint/camelcase
              html_url: "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c7",
              sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c7"
            },
            {
              commit: {
                author: {
                  date: "2020-03-14T16:05:26Z"
                }
              },
              // eslint-disable-next-line @typescript-eslint/camelcase
              html_url: "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c2",
              sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c2"
            }
          ];

          const { ListOfCommits } = setup({ commitsList });

          expect(ListOfCommits.childElementCount).toEqual(4);
        });

        test("should render each commit with sha", () => {
          const commitsList = [
            {
              commit: {
                author: {
                  date: "2020-03-15T14:58:16Z"
                }
              },
              // eslint-disable-next-line @typescript-eslint/camelcase
              html_url: "https://github.com/alan-hadyk/portfolio/commit/6f05bb91f454878edcb0f0e30e39501d39b46e4f",
              sha: "6f05bb91f454878edcb0f0e30e39501d39b46e4f"
            },
            {
              commit: {
                author: {
                  date: "2020-03-14T16:05:26Z"
                }
              },
              // eslint-disable-next-line @typescript-eslint/camelcase
              html_url: "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c5",
              sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c5"
            }
          ];

          const { ListOfCommits } = setup({ commitsList });

          expect(ListOfCommits.children[0].children[0].children[0].children[0].textContent).toEqual(commitsList[0].sha);
          expect(ListOfCommits.children[1].children[0].children[0].children[0].textContent).toEqual(commitsList[1].sha);
        });

        test("should render each commit with date", () => {
          const commitsList = [
            {
              commit: {
                author: {
                  date: "2020-03-15T14:58:16Z"
                }
              },
              // eslint-disable-next-line @typescript-eslint/camelcase
              html_url: "https://github.com/alan-hadyk/portfolio/commit/6f05bb91f454878edcb0f0e30e39501d39b46e4f",
              sha: "6f05bb91f454878edcb0f0e30e39501d39b46e4f"
            },
            {
              commit: {
                author: {
                  date: "2020-03-14T16:05:26Z"
                }
              },
              // eslint-disable-next-line @typescript-eslint/camelcase
              html_url: "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c5",
              sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c5"
            }
          ];

          const { ListOfCommits } = setup({ commitsList });

          expect(ListOfCommits.children[0].children[0].children[0].children[1].textContent).toEqual(commitsList[0].commit.author.date);
          expect(ListOfCommits.children[1].children[0].children[0].children[1].textContent).toEqual(commitsList[1].commit.author.date);
        });

        test("should render each commit with url", () => {
          const commitsList = [
            {
              commit: {
                author: {
                  date: "2020-03-15T14:58:16Z"
                }
              },
              // eslint-disable-next-line @typescript-eslint/camelcase
              html_url: "https://github.com/alan-hadyk/portfolio/commit/6f05bb91f454878edcb0f0e30e39501d39b46e4f",
              sha: "6f05bb91f454878edcb0f0e30e39501d39b46e4f"
            },
            {
              commit: {
                author: {
                  date: "2020-03-14T16:05:26Z"
                }
              },
              // eslint-disable-next-line @typescript-eslint/camelcase
              html_url: "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c5",
              sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c5"
            }
          ];

          const { ListOfCommits } = setup({ commitsList });

          expect(ListOfCommits.children[0].children[0].children[0].children[0].children[0].getAttribute("href")).toEqual(commitsList[0].html_url);
          expect(ListOfCommits.children[1].children[0].children[0].children[0].children[0].getAttribute("href")).toEqual(commitsList[1].html_url);
        });
      });

      describe("hasError", () => {
        test("should render Error if hasError is true", () => {
          const {
            Error,
            DashboardElement
          } = setup({
            hasError: true
          });

          expect(DashboardElement.children[1].children[4].children[0].children[0]).toEqual(Error);
        });

        test("should not render Error if hasError is false", () => {
          const {
            Error
          } = setup({
            hasError: false
          });

          expect(Error).toBeFalsy();
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Corners: Element[];
  DashboardElement: Element;
  Error: Element;
  ListOfCommits: Element;
}

type ListOfCommitsTestProps = Partial<ListOfCommitsProps>;

function setup(addedProps?: ListOfCommitsTestProps): Setup {
  const defaultProps: ListOfCommitsProps = {
    commitsList: [
      {
        commit: {
          author: {
            date: "2020-03-10T22:34:52Z"
          }
        },
        // eslint-disable-next-line @typescript-eslint/camelcase
        html_url: "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2964",
        sha: "4380d5d391eee216e651d34700a331ec501c2964"
      }
    ],
    hasError: false
  };

  const props: ListOfCommitsProps = { ...defaultProps, ...addedProps };

  const utils: RenderResult = renderWithTheme(
    <Commits {...props} />
  );

  const { queryByTestId, queryAllByTestId } = utils || {};

  return {
    ...utils,
    Corners: queryAllByTestId("Corner"),
    DashboardElement: queryByTestId("Commits"),
    Error: queryByTestId("Error"),
    ListOfCommits: queryByTestId("ListOfCommits")
  };
}
