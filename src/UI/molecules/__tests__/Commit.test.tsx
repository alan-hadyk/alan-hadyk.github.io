import React from "react";
import {
  act,
  fireEvent,
  RenderResult
} from "@testing-library/react";
import ShuffleText from "shuffle-text";

import Commit from "<molecules>/Commit";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  CommitProps
} from "<molecules>/__typings__/Commit";

describe("molecules / Commit", () => {
  test("should have correct structure", () => {
    const { 
      CommitContainer,
      CommitFlexContainer,
      CommitSpacingContainer,
      Link,
      Texts
    } = setup();

    expect(CommitContainer.children[0]).toEqual(CommitSpacingContainer);
    expect(CommitSpacingContainer.children[0]).toEqual(CommitFlexContainer);
    expect(CommitFlexContainer.children[0]).toEqual(Link);
    expect(Link.children[0]).toEqual(Texts[0]);
    expect(CommitFlexContainer.children[1]).toEqual(Texts[1]);
  });
  
  describe("CommitContainer", () => {    
    describe("Styles", () => {
      describe("align-items", () => {      
        test("should have center", () => {
          const { CommitContainer } = setup();

          expect(CommitContainer).toHaveStyleRule("align-items", "center");
        });
      });

      describe("border-top", () => {      
        test("should have 0 for the first child", () => {
          const { CommitContainer } = setup();

          expect(CommitContainer).toHaveStyleRule("border-top", "0", {
            modifier: ":first-child"
          });
        });

        test("should have 1px solid #526065 for the rest of children", () => {
          const { CommitContainer } = setup();

          expect(CommitContainer).toHaveStyleRule("border-top", "1px solid #526065");
        });
      });

      describe("display", () => {      
        test("should have none by default", () => {
          const { CommitContainer } = setup();

          expect(CommitContainer).toHaveStyleRule("display", "none");
        });

        test("should have flex for 10 children if min-height: 800px", () => {
          const { CommitContainer } = setup();

          expect(CommitContainer).toHaveStyleRule("display", "flex", {
            media: "(min-height: 800px)",
            modifier: ":nth-child(-n+10)"
          });
        });

        test("should have flex for 5 children if min-height: 399px and max-height: 799px", () => {
          const { CommitContainer } = setup();

          expect(CommitContainer).toHaveStyleRule("display", "flex", {
            media: "(min-height: 399px) and (max-height: 799px)",
            modifier: ":nth-child(-n+5)"
          });
        });

        test("should have flex for 3 children if max-height: 400px", () => {
          const { CommitContainer } = setup();

          expect(CommitContainer).toHaveStyleRule("display", "flex", {
            media: "(max-height: 400px)",
            modifier: ":nth-child(-n+3)"
          });
        });
      });

      describe("height", () => {      
        test("should have 2.26vh if min-height: 800px", () => {
          const { CommitContainer } = setup();

          expect(CommitContainer).toHaveStyleRule("height", "2.26vh", {
            media: "(min-height: 800px)"
          });
        });

        test("should have 4.52vh if min-height: 399px and max-height: 799px", () => {
          const { CommitContainer } = setup();

          expect(CommitContainer).toHaveStyleRule("height", "4.52vh", {
            media: "(min-height: 399px) and (max-height: 799px)"
          });
        });

        test("should have 7.53vh if max-height: 400px", () => {
          const { CommitContainer } = setup();

          expect(CommitContainer).toHaveStyleRule("height", "7.53vh", {
            media: "(max-height: 400px)"
          });
        });
      });
    });
  });

  describe("CommitSpacingContainer", () => {    
    describe("Styles", () => {
      describe("padding-top", () => {      
        test("should have .4rem", () => {
          const { CommitSpacingContainer } = setup();

          expect(CommitSpacingContainer).toHaveStyleRule("padding-top", ".4rem");
        });
      });

      describe("padding-bottom", () => {      
        test("should have .4rem", () => {
          const { CommitSpacingContainer } = setup();

          expect(CommitSpacingContainer).toHaveStyleRule("padding-bottom", ".4rem");
        });
      });
    });
  });

  describe("CommitFlexContainer", () => {    
    describe("Props", () => {
      describe("align-items", () => { 
        test("should have center", () => {
          const { CommitFlexContainer } = setup();

          expect(CommitFlexContainer).toHaveStyleRule("align-items", "center");
        });
      });

      describe("justify-content", () => { 
        test("should have center", () => {
          const { CommitFlexContainer } = setup();

          expect(CommitFlexContainer).toHaveStyleRule("justify-content", "center");
        });
      });

      describe("flex-flow", () => { 
        test("should have row wrap", () => {
          const { CommitFlexContainer } = setup();

          expect(CommitFlexContainer).toHaveStyleRule("flex-flow", "row wrap");
        });
      });

      describe("gap", () => { 
        test("should have 2.4rem", () => {
          const { CommitFlexContainer } = setup();

          expect(CommitFlexContainer).toHaveStyleRule("padding-left", "2.4rem", {
            modifier: "& > *"
          });
        });
      });
    });
  });

  describe("Texts", () => { 
    describe("Text[0]", () => {
      test("should render textContent equal to sha prop", () => {
        const { Texts } = setup({
          sha: "4380d5d391eee216e651d34700a331ec501c2964"
        });
  
        expect(Texts[0].textContent).toEqual("4380d5d391eee216e651d34700a331ec501c2964");
      });

      describe("Props", () => {
        describe("color", () => {
          test("should have #bcd8db", () => {
            const { Texts } = setup();
      
            expect(Texts[0]).toHaveStyleRule("color", "#bcd8db");
          });
        });
  
        describe("font-family", () => {
          test("should have 'Anonymous Pro',monospace", () => {
            const { Texts } = setup();

            expect(Texts[0]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
          });
        });
  
        describe("font-size", () => {
          test("should have 8px", () => {
            const { Texts } = setup();
      
            expect(Texts[0]).toHaveStyleRule("font-size", "8px");
          });
        });

        describe("shouldShuffle", () => {
          test("should trigger shuffleText.start in interval", () => {
            jest.spyOn(ShuffleText.prototype, "start");
            jest.useFakeTimers();
      
            setup();
      
            expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);
      
            jest.advanceTimersByTime(3600);
      
            expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
      
            jest.advanceTimersByTime(3600);
      
            expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);
      
            jest.clearAllTimers();
          });
        });

        describe("shouldShuffleOnHover", () => {
          test("should trigger shuffleText.start on hover", () => {
            jest.spyOn(ShuffleText.prototype, "start");
            jest.useFakeTimers();
      
            setup();
      
            expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

            const { Texts } = setup();
      
            act(() => {
              fireEvent.mouseOver(Texts[0]);
            });
      
            jest.advanceTimersByTime(10);
      
            expect(ShuffleText.prototype.start).toHaveBeenCalled();
            jest.clearAllTimers();
          });
        });

        describe("shuffleDelay", () => {
          test("should trigger shuffleText.start with delay passed in props", () => {
            jest.spyOn(ShuffleText.prototype, "start");
            jest.useFakeTimers();
      
            setup();
      
            expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);
      
            jest.advanceTimersByTime(3600);
      
            expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
      
            jest.advanceTimersByTime(3600);
      
            expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);
      
            jest.clearAllTimers();
          });
        });

        describe("text-transform", () => {
          test("should have uppercase", () => {
            const { Texts } = setup();
      
            expect(Texts[0]).toHaveStyleRule("text-transform", "uppercase");
          });
        });
      });
    });

    describe("Text[1]", () => {
      test("should render textContent equal to date prop", () => {
        const { Texts } = setup({
          sha: "2020-03-10T22:34:52Z"
        });
  
        expect(Texts[1].textContent).toEqual("2020-03-10T22:34:52Z");
      });

      describe("Props", () => {
        describe("color", () => {
          test("should have #78b0b5", () => {
            const { Texts } = setup();
      
            expect(Texts[1]).toHaveStyleRule("color", "#78b0b5");
          });
        });
  
        describe("font-family", () => {
          test("should have 'Anonymous Pro',monospace", () => {
            const { Texts } = setup();

            expect(Texts[1]).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
          });
        });

        describe("font-size", () => {
          test("should have 8px", () => {
            const { Texts } = setup();
      
            expect(Texts[1]).toHaveStyleRule("font-size", "8px");
          });
        });
      });
    });
  });
  
  describe("Link", () => {    
    describe("Props", () => {
      describe("display", () => {      
        test("should have inline", () => {
          const { Link } = setup();
    
          expect(Link.getAttribute("display")).toEqual("inline");
        });
      });

      describe("height", () => {      
        test("should have unset", () => {
          const { Link } = setup();
    
          expect(Link.getAttribute("height")).toEqual("unset");
        });
      });

      describe("target", () => {      
        test("should have _blank", () => {
          const { Link } = setup();
    
          expect(Link.getAttribute("target")).toEqual("_blank");
        });
      });

      describe("href", () => {      
        test("should have value equal to htmlUrl prop", () => {
          const { Link } = setup({
            htmlUrl: "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2964"
          });
    
          expect(Link.getAttribute("href")).toEqual("https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2964");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  CommitContainer: Element;
  CommitFlexContainer: Element;
  CommitSpacingContainer: Element;
  Link: Element;
  Texts: Element[];
}

type CommitTestProps = Partial<CommitProps>;

function setup(addedProps?: CommitTestProps): Setup {
  const props: CommitProps = {
    date: "2020-03-10T22:34:52Z",
    delay: 0,
    htmlUrl: "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2964",
    sha: "4380d5d391eee216e651d34700a331ec501c2964",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <Commit {...props} />
  );

  const { queryAllByTestId } = utils || {};

  const { container }: RenderResult = utils;
  const CommitContainer: Element = container.children[0];
  const CommitFlexContainer: Element = queryAllByTestId("CommitFlexContainer")[0];
  const CommitSpacingContainer: Element = queryAllByTestId("CommitSpacingContainer")[0];
  const Link: Element = queryAllByTestId("Link")[0];
  const Texts: Element[] = queryAllByTestId("Text");

  return {
    ...utils,
    CommitContainer,
    CommitFlexContainer,
    CommitSpacingContainer,
    Link,
    Texts
  };
}
