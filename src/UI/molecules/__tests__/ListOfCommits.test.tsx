import React from "react";
import { RenderResult } from "@testing-library/react";

import ListOfCommits from "<molecules>/ListOfCommits";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  ListOfCommitsProps
} from "<molecules>/__typings__/ListOfCommits";

describe("molecules / ListOfCommits", () => {
  test("should have correct structure", () => {
    const { 
      Commits,
      FlexContainer
    } = setup();

    expect(FlexContainer.children[0]).toEqual(Commits[0]);
    expect(FlexContainer.children[1]).toEqual(Commits[1]);
  });

  describe("Commit", () => { 
    test("should render", () => {
      const { Commits } = setup();

      expect(Commits[0].children[0]).toHaveStyleRule("height", "auto");
      expect(Commits[0].children[0].children[0]).toHaveStyleRule("height", "unset");
      expect(Commits[0].children[0].children[0].children[0]).toHaveStyleRule("display", "inline");
      expect(Commits[0].children[0].children[0].children[0]).toHaveStyleRule("height", "unset");
      expect(Commits[0].children[0].children[0].children[0].getAttribute("target")).toEqual("_blank");
      expect(Commits[0].children[0].children[0].children[0].children[0]).toHaveStyleRule("color", "#bcd8db");
      expect(Commits[0].children[0].children[0].children[0].children[0]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
      expect(Commits[0].children[0].children[0].children[0].children[0]).toHaveStyleRule("font-size", "8px");
      expect(Commits[0].children[0].children[0].children[1]).toHaveStyleRule("color", "#78b0b5");
      expect(Commits[0].children[0].children[0].children[1]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
      expect(Commits[0].children[0].children[0].children[1]).toHaveStyleRule("font-size", "8px");

      expect(Commits[1].children[0]).toHaveStyleRule("height", "auto");
      expect(Commits[1].children[0].children[0]).toHaveStyleRule("height", "unset");
      expect(Commits[1].children[0].children[0].children[0]).toHaveStyleRule("display", "inline");
      expect(Commits[1].children[0].children[0].children[0]).toHaveStyleRule("height", "unset");
      expect(Commits[1].children[0].children[0].children[0].getAttribute("target")).toEqual("_blank");
      expect(Commits[1].children[0].children[0].children[0].children[0]).toHaveStyleRule("color", "#bcd8db");
      expect(Commits[1].children[0].children[0].children[0].children[0]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
      expect(Commits[1].children[0].children[0].children[0].children[0]).toHaveStyleRule("font-size", "8px");
      expect(Commits[1].children[0].children[0].children[1]).toHaveStyleRule("color", "#78b0b5");
      expect(Commits[1].children[0].children[0].children[1]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
      expect(Commits[1].children[0].children[0].children[1]).toHaveStyleRule("font-size", "8px");
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

    test("should render each commit with sha, date and correct link", () => {
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

      expect(Commits[0].children[0].children[0].children[0].getAttribute("href")).toEqual(commitsList[0].html_url);
      expect(Commits[0].children[0].children[0].children[0].textContent).toEqual(commitsList[0].sha);
      expect(Commits[0].children[0].children[0].children[1].textContent).toEqual(commitsList[0].commit.author.date);
    
      expect(Commits[1].children[0].children[0].children[0].getAttribute("href")).toEqual(commitsList[1].html_url);
      expect(Commits[1].children[0].children[0].children[0].textContent).toEqual(commitsList[1].sha);
      expect(Commits[1].children[0].children[0].children[1].textContent).toEqual(commitsList[1].commit.author.date);
    });
  });

  describe("FlexContainer", () => {    
    describe("Props", () => {
      describe("align-items", () => { 
        test("should have flex-start", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("align-items", "flex-start");
        });
      });

      describe("justify-content", () => { 
        test("should have flex-start", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("justify-content", "flex-start");
        });
      });

      describe("flex-flow", () => { 
        test("should have column nowrap", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("flex-flow", "column nowrap");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Commits: Element[];
  FlexContainer: Element;
}

function setup(addedProps?: ListOfCommitsProps): Setup {
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
    ]
  };

  const props: ListOfCommitsProps = addedProps || defaultProps;

  const utils: RenderResult = renderWithTheme(
    <ListOfCommits {...props} />
  );

  const { queryByTestId, queryAllByTestId } = utils || {};

  const Commits: Element[] = queryAllByTestId("Commit");
  const FlexContainer: Element = queryByTestId("ListOfCommits");

  return {
    ...utils,
    Commits,
    FlexContainer
  };
}
