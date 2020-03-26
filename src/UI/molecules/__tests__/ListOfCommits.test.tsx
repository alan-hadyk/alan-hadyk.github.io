import React from "react";
import { RenderResult } from "@testing-library/react";
import ShuffleText from "shuffle-text";

import ListOfCommits from "<molecules>/ListOfCommits";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  ListOfCommitsProps,
  CommitProps
} from "<molecules>/__typings__/ListOfCommits.d.ts";


describe("molecules / ListOfCommits", () => {
  test("should have correct structure if has no error", () => {
    const {
      Commits,
      Error,
      ListOfCommitsWrapper
    } = setup();

    expect(ListOfCommitsWrapper.children[0]).toEqual(Commits[0]);
    expect(ListOfCommitsWrapper.children[1]).toEqual(Commits[1]);
    expect(Error).toBeFalsy();
  });

  test("should have correct structure if has an error", () => {
    const {
      Error,
      FlexContainer,
      IconWarning,
      Texts
    } = setup({ hasError: true });

    expect(Error.children[0]).toEqual(FlexContainer);
    expect(Error.children[0].children[0]).toEqual(IconWarning);
    expect(Error.children[0].children[1]).toEqual(Texts[0]);
    expect(Error.children[0].children[2]).toEqual(Texts[1]);
  });

  describe("Commit", () => {
    test("should render", () => {
      const { Commits } = setup();

      expect(Commits[0].children[0]).toHaveStyleRule("height", "auto");
      expect(Commits[0].children[0].children[0]).toHaveStyleRule("height", "unset");
      expect(Commits[0].children[0].children[0].children[0].children[0]).toHaveStyleRule("display", "inline");
      expect(Commits[0].children[0].children[0].children[0].children[0]).toHaveStyleRule("height", "unset");
      expect(Commits[0].children[0].children[0].children[0].children[0].getAttribute("target")).toEqual("_blank");
      expect(Commits[0].children[0].children[0].children[0].children[0].children[0]).toHaveStyleRule("color", "#bcd8db");
      expect(Commits[0].children[0].children[0].children[0].children[0].children[0]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
      expect(Commits[0].children[0].children[0].children[0].children[0].children[0]).toHaveStyleRule("font-size", "8px");
      expect(Commits[0].children[0].children[0].children[1].children[0]).toHaveStyleRule("color", "#78b0b5");
      expect(Commits[0].children[0].children[0].children[1].children[0]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
      expect(Commits[0].children[0].children[0].children[1].children[0]).toHaveStyleRule("font-size", "8px");

      expect(Commits[1].children[0]).toHaveStyleRule("height", "auto");
      expect(Commits[1].children[0].children[0]).toHaveStyleRule("height", "unset");
      expect(Commits[1].children[0].children[0].children[0].children[0]).toHaveStyleRule("display", "inline");
      expect(Commits[1].children[0].children[0].children[0].children[0]).toHaveStyleRule("height", "unset");
      expect(Commits[1].children[0].children[0].children[0].children[0].getAttribute("target")).toEqual("_blank");
      expect(Commits[1].children[0].children[0].children[0].children[0].children[0]).toHaveStyleRule("color", "#bcd8db");
      expect(Commits[1].children[0].children[0].children[0].children[0].children[0]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
      expect(Commits[1].children[0].children[0].children[0].children[0].children[0]).toHaveStyleRule("font-size", "8px");
      expect(Commits[1].children[0].children[0].children[1].children[0]).toHaveStyleRule("color", "#78b0b5");
      expect(Commits[1].children[0].children[0].children[1].children[0]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
      expect(Commits[1].children[0].children[0].children[1].children[0]).toHaveStyleRule("font-size", "8px");
    });

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
        Commits = setup({ commitsList }).Commits;
      });

      test("should render each commit with sha", () => {
        Commits.forEach((Commit, index) => {
          expect(Commit.children[0].children[0].children[0].textContent).toEqual(commitsList[index].sha);
        });
      });
      
      test("should render each commit with date", () => {
        Commits.forEach((Commit, index) => {
          expect(Commit.children[0].children[0].children[1].textContent).toEqual(commitsList[index].commit.author.date);
        });
      });

      test("should render each commit with url", () => {
        Commits.forEach((Commit, index) => {
          expect(Commit.children[0].children[0].children[0].children[0].getAttribute("href")).toEqual(commitsList[index].html_url);
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
    describe("Props", () => {
      describe("alignItems", () => {
        test("should have flex-start", () => {
          const { ListOfCommitsWrapper } = setup();

          expect(ListOfCommitsWrapper).toHaveStyleRule("align-items", "flex-start");
        });
      });

      describe("justifyContent", () => {
        test("should have flex-start", () => {
          const { ListOfCommitsWrapper } = setup();

          expect(ListOfCommitsWrapper).toHaveStyleRule("justify-content", "flex-start");
        });
      });

      describe("flexFlow", () => {
        test("should have column nowrap", () => {
          const { ListOfCommitsWrapper } = setup();

          expect(ListOfCommitsWrapper).toHaveStyleRule("flex-flow", "column nowrap");
        });
      });
    });
  });

  describe("Error", () => {
    describe("Props", () => {
      describe("title", () => {
        test("should have Error", () => {
          const { Error } = setup({ hasError: true });

          expect(Error.children[0].children[1].textContent).toEqual("Error");
        });
      });

      describe("description", () => {
        test("should have Github API is offline", () => {
          const { Error } = setup({ hasError: true });

          expect(Error.children[0].children[2].textContent).toEqual("Github API is offline");
        });
      });
    });

    describe("IconWarning", () => {
      test("should render correct SVG", () => {
        const { Error } = setup({ hasError: true });

        expect(Error.children[0].children[0].textContent).toEqual("Icon-Warning.svg");
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
  Texts: Element[];
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
      },
      {
        commit: {
          author: {
            date: "2020-03-11T22:34:52Z"
          }
        },
        // eslint-disable-next-line @typescript-eslint/camelcase
        html_url: "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2969",
        sha: "4380d5d391eee216e651d34700a331ec501c2969"
      }
    ],
    hasError: false
  };

  const props: ListOfCommitsProps = { ...defaultProps, ...addedProps };

  const utils: RenderResult = renderWithTheme(
    <ListOfCommits {...props} />
  );

  const { queryByTestId, queryAllByTestId } = utils || {};

  const Commits: Element[] = queryAllByTestId("Commit");
  const ListOfCommitsWrapper: Element = queryAllByTestId("ListOfCommits")[0];
  const Error: Element = queryByTestId("Error");
  const FlexContainer: Element = queryByTestId("FlexContainer");
  const IconWarning: SVGSVGElement = document.querySelector("svg");
  const Texts: Element[] = queryAllByTestId("Text");

  return {
    ...utils,
    Commits,
    Error,
    FlexContainer,
    IconWarning,
    ListOfCommitsWrapper,
    Texts
  };
}
