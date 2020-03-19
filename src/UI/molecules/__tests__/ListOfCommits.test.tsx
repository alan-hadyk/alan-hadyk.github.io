import React from "react";
import { RenderResult } from "@testing-library/react";

import ListOfCommits from "<molecules>/ListOfCommits";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  ListOfCommitsProps
} from "<molecules>/__typings__/ListOfCommits";

describe("molecules / ListOfCommits", () => {
  test("should have correct structure if has no error", () => {
    const { 
      Commits,
      ListOfCommitsWrapper
    } = setup();

    expect(ListOfCommitsWrapper.children[0]).toEqual(Commits[0]);
    expect(ListOfCommitsWrapper.children[1]).toEqual(Commits[1]);
  });

  test("should have correct structure if has an error", () => {
    const { 
      CommitsError,
      IconWarning,
      Texts
    } = setup({ hasError: true });

    expect(CommitsError.children[0]).toEqual(IconWarning);
    expect(CommitsError.children[1]).toEqual(Texts[0]);
    expect(CommitsError.children[2]).toEqual(Texts[1]);
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

  describe("ListOfCommits", () => {    
    describe("Props", () => {
      describe("align-items", () => { 
        test("should have flex-start", () => {
          const { ListOfCommitsWrapper } = setup();

          expect(ListOfCommitsWrapper).toHaveStyleRule("align-items", "flex-start");
        });
      });

      describe("justify-content", () => { 
        test("should have flex-start", () => {
          const { ListOfCommitsWrapper } = setup();

          expect(ListOfCommitsWrapper).toHaveStyleRule("justify-content", "flex-start");
        });
      });

      describe("flex-flow", () => { 
        test("should have column nowrap", () => {
          const { ListOfCommitsWrapper } = setup();

          expect(ListOfCommitsWrapper).toHaveStyleRule("flex-flow", "column nowrap");
        });
      });
    });
  });

  describe("CommitsError", () => {    
    describe("Props", () => {
      describe("align-items", () => { 
        test("should have center", () => {
          const { CommitsError } = setup({ hasError: true });

          expect(CommitsError).toHaveStyleRule("align-items", "center");
        });
      });

      describe("justify-content", () => { 
        test("should have center", () => {
          const { CommitsError } = setup({ hasError: true });

          expect(CommitsError).toHaveStyleRule("justify-content", "center");
        });
      });

      describe("height", () => { 
        test("should have 100%", () => {
          const { CommitsError } = setup({ hasError: true });

          expect(CommitsError).toHaveStyleRule("height", "100%");
        });
      });

      describe("flex-flow", () => { 
        test("should have column nowrap", () => {
          const { CommitsError } = setup({ hasError: true });

          expect(CommitsError).toHaveStyleRule("flex-flow", "column nowrap");
        });
      });
    });
  });

  describe("IconWarning", () => {
    test("should render correct SVG", () => {
      const { IconWarning } = setup({ hasError: true });

      expect(IconWarning.textContent).toEqual("Icon-Warning.svg");
    });
  });

  describe("Texts", () => {    
    describe("Text[0]", () => {
      test("text should have correct content", () => {
        const { Texts } = setup({ hasError: true });
  
        expect(Texts[0].textContent).toEqual("Error");
      });

      describe("Props", () => {
        describe("font-family", () => {
          test("should have 'Anonymous Pro',monospace", () => {
            const { Texts } = setup({ hasError: true });
      
            expect(Texts[0]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
          });
        });

        describe("font-size", () => {
          test("should have 24px", () => {
            const { Texts } = setup({ hasError: true });
      
            expect(Texts[0]).toHaveStyleRule("font-size", "24px");
          });
        });

        describe("padding-top", () => {
          test("should have 1.2rem", () => {
            const { Texts } = setup({ hasError: true });
      
            expect(Texts[0]).toHaveStyleRule("padding-top", "1.2rem");
          });
        });

        describe("text-transform", () => {
          test("should have uppercase", () => {
            const { Texts } = setup({ hasError: true });
      
            expect(Texts[0]).toHaveStyleRule("text-transform", "uppercase");
          });
        });
      });
    });

    describe("Text[1]", () => {
      test("text should have correct content", () => {
        const { Texts } = setup({ hasError: true });
  
        expect(Texts[1].textContent).toEqual("Github API is offline");
      });

      describe("Props", () => {
        describe("font-family", () => {
          test("should have 'Anonymous Pro',monospace", () => {
            const { Texts } = setup({ hasError: true });
      
            expect(Texts[1]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
          });
        });

        describe("font-size", () => {
          test("should have 16px", () => {
            const { Texts } = setup({ hasError: true });
      
            expect(Texts[1]).toHaveStyleRule("font-size", "16px");
          });
        });

        describe("padding-top", () => {
          test("should have 1.2rem", () => {
            const { Texts } = setup({ hasError: true });
      
            expect(Texts[1]).toHaveStyleRule("padding-top", "1.2rem");
          });
        });

        describe("text-transform", () => {
          test("should have uppercase", () => {
            const { Texts } = setup({ hasError: true });
      
            expect(Texts[1]).toHaveStyleRule("text-transform", "uppercase");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Commits: Element[];
  CommitsError: Element;
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
  const ListOfCommitsWrapper: Element = queryByTestId("ListOfCommits");
  const CommitsError: Element = queryByTestId("CommitsError");
  const IconWarning: SVGSVGElement = document.querySelector("svg");
  const Texts: Element[] = queryAllByTestId("Text");

  return {
    ...utils,
    Commits,
    CommitsError,
    IconWarning,
    ListOfCommitsWrapper,
    Texts
  };
}
