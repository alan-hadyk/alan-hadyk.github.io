import React from "react";
import { RenderResult } from "@testing-library/react";
import ShuffleText from "shuffle-text";

import ListOfCommits from "UI/molecules/ListOfCommits";

import renderWithTheme from "helpers/tests/renderWithTheme";

import {
  ListOfCommitsProps,
  CommitProps
} from "UI/molecules/__typings__/ListOfCommits";

jest.mock("helpers/browser/isIE11", () => jest.fn());

const defaultProps: ListOfCommitsProps = {
  commitsList: [
    {
      commit: {
        author: {
          date: "2020-03-10T22:34:52Z"
        }
      },
      html_url:
        "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2964",
      sha: "4380d5d391eee216e651d34700a331ec501c2964"
    },
    {
      commit: {
        author: {
          date: "2020-03-11T22:34:52Z"
        }
      },
      html_url:
        "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2969",
      sha: "4380d5d391eee216e651d34700a331ec501c2969"
    }
  ],
  commitsState: "loaded"
};

describe("molecules / ListOfCommits", () => {
  test("should have correct structure if commitsState is loaded", () => {
    const { Commits, Error, ListOfCommitsWrapper, Loader } = setup({
      commitsState: "loaded"
    });

    expect(Error).toBeFalsy();
    expect(Loader).toBeFalsy();

    expect(ListOfCommitsWrapper.children[0]).toEqual(Commits[0]);
    expect(ListOfCommitsWrapper.children[1]).toEqual(Commits[1]);
  });

  test("should have correct structure if commitsState is error", () => {
    const {
      Error,
      FlexContainer,
      IconWarning,
      ListOfCommitsWrapper,
      Loader,
      Texts
    } = setup({
      commitsState: "error"
    });

    expect(Loader).toBeFalsy();
    expect(ListOfCommitsWrapper).toBeFalsy();

    expect(Error.children[0]).toEqual(FlexContainer);
    expect(Error.children[0].children[0]).toEqual(IconWarning);
    expect(Error.children[0].children[1]).toEqual(Texts[0]);
    expect(Error.children[0].children[2]).toEqual(Texts[1]);
  });

  test("should have correct structure if commitsState is idle", () => {
    const { Error, ListOfCommitsWrapper, Loader } = setup({
      commitsState: "idle"
    });

    expect(Loader).toBeTruthy();
    expect(Error).toBeFalsy();
    expect(ListOfCommitsWrapper).toBeFalsy();
  });

  test("should have correct structure if commitsState is loading", () => {
    const { Error, ListOfCommitsWrapper, Loader } = setup({
      commitsState: "loading"
    });

    expect(Loader).toBeTruthy();
    expect(Error).toBeFalsy();
    expect(ListOfCommitsWrapper).toBeFalsy();
  });

  describe("Commit", () => {
    test("should render", () => {
      const { Commits } = setup();

      Commits.forEach((Commit) => {
        expect(Commit.children[0]).toHaveStyleRule("height", "auto");
        expect(Commit.children[0].children[0]).toHaveStyleRule(
          "height",
          "unset"
        );
        expect(
          Commit.children[0].children[0].children[0].children[0]
        ).toHaveStyleRule("display", "block");
        expect(
          Commit.children[0].children[0].children[0].children[0]
        ).toHaveStyleRule("height", "unset");
        expect(
          Commit.children[0].children[0].children[0].children[0].getAttribute(
            "target"
          )
        ).toEqual("_blank");
        expect(
          Commit.children[0].children[0].children[0].children[0].children[0]
        ).toHaveStyleRule("color", "#bcd8db");
        expect(
          Commit.children[0].children[0].children[0].children[0].children[0]
        ).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
        expect(
          Commit.children[0].children[0].children[0].children[0].children[0]
        ).toHaveStyleRule("font-size", "8px");
        expect(
          Commit.children[0].children[0].children[1].children[0]
        ).toHaveStyleRule("color", "#78b0b5");
        expect(
          Commit.children[0].children[0].children[1].children[0]
        ).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
        expect(
          Commit.children[0].children[0].children[1].children[0]
        ).toHaveStyleRule("font-size", "8px");
      });
    });

    test("should render number of singular commits equal to length of commits list array - 2 items", () => {
      const commitsList = [
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

      const { Commits } = setup({ commitsList });

      expect(Commits.length).toEqual(2);
    });

    test("should render number of singular commits equal to length of commits list array - 4 items", () => {
      const commitsList = [
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
        },
        {
          commit: {
            author: {
              date: "2020-03-14T16:05:26Z"
            }
          },
          html_url:
            "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c7",
          sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c7"
        },
        {
          commit: {
            author: {
              date: "2020-03-14T16:05:26Z"
            }
          },
          html_url:
            "https://github.com/alan-hadyk/portfolio/commit/b18b6616d0da725d49decc1b1f63c3322ca9c3c2",
          sha: "b18b6616d0da725d49decc1b1f63c3322ca9c3c2"
        }
      ];

      const { Commits } = setup({ commitsList });

      expect(Commits.length).toEqual(4);
    });

    describe("Props", () => {
      let Commits: Element[];
      let commitsList: CommitProps[];

      beforeEach(() => {
        commitsList = [
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
        Commits = setup({ commitsList }).Commits;
      });

      test("should render each commit with sha", () => {
        Commits.forEach((Commit, index) => {
          expect(
            Commit.children[0].children[0].children[0].textContent
          ).toEqual(commitsList[index].sha);
        });
      });

      test("should render each commit with date", () => {
        Commits.forEach((Commit, index) => {
          expect(
            Commit.children[0].children[0].children[1].textContent
          ).toEqual(commitsList[index].commit.author.date);
        });
      });

      test("should render each commit with url", () => {
        Commits.forEach((Commit, index) => {
          expect(
            Commit.children[0].children[0].children[0].children[0].getAttribute(
              "href"
            )
          ).toEqual(commitsList[index].html_url);
        });
      });
    });

    describe("delay", () => {
      test("should render each commit in intervals with 300ms delay", () => {
        jest.spyOn(ShuffleText.prototype, "start");
        jest.useFakeTimers();

        setup();

        expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

        jest.advanceTimersByTime(3600);

        expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);

        jest.advanceTimersByTime(300);

        expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);

        jest.advanceTimersByTime(3300);

        expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(3);

        jest.advanceTimersByTime(300);

        expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(4);

        jest.clearAllTimers();
      });
    });
  });

  describe("ListOfCommits", () => {
    let ListOfCommitsWrapper: Element;

    beforeEach(() => {
      ListOfCommitsWrapper = setup().ListOfCommitsWrapper;
    });

    describe("Props", () => {
      describe("alignItems", () => {
        test("should have flex-start", () => {
          expect(ListOfCommitsWrapper).toHaveStyleRule(
            "align-items",
            "flex-start"
          );
        });
      });

      describe("justifyContent", () => {
        test("should have flex-start", () => {
          expect(ListOfCommitsWrapper).toHaveStyleRule(
            "justify-content",
            "flex-start"
          );
        });
      });

      describe("flexFlow", () => {
        test("should have column nowrap", () => {
          expect(ListOfCommitsWrapper).toHaveStyleRule(
            "flex-flow",
            "column nowrap"
          );
        });
      });
    });
  });

  describe("Error", () => {
    let Error: Element;

    beforeEach(() => {
      Error = setup({ commitsState: "error" }).Error;
    });

    describe("Props", () => {
      describe("title", () => {
        test("should have Error", () => {
          expect(Error.children[0].children[1].textContent).toEqual("Error");
        });
      });

      describe("description", () => {
        test("should have Github API is offline", () => {
          expect(Error.children[0].children[2].textContent).toEqual(
            "Github API is offline"
          );
        });
      });
    });

    describe("IconWarning", () => {
      test("should render correct SVG", () => {
        expect(Error.children[0].children[0].textContent).toEqual(
          "Icon-Warning.svg"
        );
      });
    });
  });
});

interface Setup extends RenderResult {
  Commits: Element[];
  Error: Element;
  FlexContainer: Element;
  IconWarning: SVGSVGElement;
  ListOfCommitsWrapper: Element;
  Loader: Element;
  Texts: Element[];
}

type ListOfCommitsTestProps = Partial<ListOfCommitsProps>;

function setup(additionalProps?: ListOfCommitsTestProps): Setup {
  const props: ListOfCommitsProps = { ...defaultProps, ...additionalProps };

  const utils: RenderResult = renderWithTheme(<ListOfCommits {...props} />);

  const { queryByTestId, queryAllByTestId } = utils || {};

  const Commits: Element[] = queryAllByTestId("Commit");
  const Error: Element = queryByTestId("Error");
  const FlexContainer: Element = queryByTestId("FlexContainer");
  const IconWarning: SVGSVGElement = document.querySelector("svg");
  const ListOfCommitsWrapper: Element = queryAllByTestId("ListOfCommits")[0];
  const Loader: Element = queryAllByTestId("Loader")[0];
  const Texts: Element[] = queryAllByTestId("Text");

  return {
    ...utils,
    Commits,
    Error,
    FlexContainer,
    IconWarning,
    ListOfCommitsWrapper,
    Loader,
    Texts
  };
}
