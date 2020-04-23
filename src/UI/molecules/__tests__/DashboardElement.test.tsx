import React from "react";
import { RenderResult } from "@testing-library/react";
import ShuffleText from "shuffle-text";

import DashboardElement from "<molecules>/DashboardElement";
import { DashboardElementProps } from "<molecules>/__typings__/DashboardElement.d.ts";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / DashboardElement", () => {
  test("should have correct structure if have no description", () => {
    const { 
      Corners,
      DashboardElementInnerContainer,
      FlexItem,
      PositionContainer,
      SpacingContainer,
      Text
    } = setup({
      shouldDisplayCorners: true
    });

    expect(FlexItem.children[0]).toEqual(Text);
    expect(FlexItem.children[1]).toEqual(PositionContainer);
    expect(PositionContainer.children[0]).toEqual(Corners[0]);
    expect(PositionContainer.children[1]).toEqual(Corners[1]);
    expect(PositionContainer.children[2]).toEqual(Corners[2]);
    expect(PositionContainer.children[3]).toEqual(Corners[3]);
    expect(PositionContainer.children[4]).toEqual(DashboardElementInnerContainer);
    expect(DashboardElementInnerContainer.children[0]).toEqual(SpacingContainer);
  });

  test("should have correct structure if have description", () => {
    const { 
      Corners,
      DashboardElementDescription,
      DashboardElementDescriptionText,
      DashboardElementInnerContainer,
      FlexItem,
      PositionContainer,
      SpacingContainer,
      Text
    } = setup({
      description: "Lorem ipsum dolor sit amet",
      shouldDisplayCorners: true
    });

    expect(FlexItem.children[0]).toEqual(Text);
    expect(FlexItem.children[1]).toEqual(DashboardElementDescription);
    expect(FlexItem.children[2]).toEqual(PositionContainer);
    expect(DashboardElementDescription.children[0]).toEqual(DashboardElementDescriptionText);
    expect(PositionContainer.children[0]).toEqual(Corners[0]);
    expect(PositionContainer.children[1]).toEqual(Corners[1]);
    expect(PositionContainer.children[2]).toEqual(Corners[2]);
    expect(PositionContainer.children[3]).toEqual(Corners[3]); 
    expect(PositionContainer.children[4]).toEqual(DashboardElementInnerContainer);
    expect(DashboardElementInnerContainer.children[0]).toEqual(SpacingContainer);
  });

  describe("FlexItem", () => {
    describe("Props", () => {
      describe("align-self", () => {
        test("should have auto by default", () => {
          const { FlexItem } = setup();
    
          expect(FlexItem).toHaveStyleRule("align-self", "auto");
        });

        test("should have flex-start when passed via prop value", () => {
          const { FlexItem } = setup({
            alignSelf: "flex-start"
          });
    
          expect(FlexItem).toHaveStyleRule("align-self", "flex-start");
        });

        test("should have flex-end when passed via prop value", () => {
          const { FlexItem } = setup({
            alignSelf: "flex-end"
          });
    
          expect(FlexItem).toHaveStyleRule("align-self", "flex-end");
        });

        test("should have center when passed via prop value", () => {
          const { FlexItem } = setup({
            alignSelf: "center"
          });
    
          expect(FlexItem).toHaveStyleRule("align-self", "center");
        });

        test("should have baseline when passed via prop value", () => {
          const { FlexItem } = setup({
            alignSelf: "baseline"
          });
    
          expect(FlexItem).toHaveStyleRule("align-self", "baseline");
        });

        test("should have stretch when passed via prop value", () => {
          const { FlexItem } = setup({
            alignSelf: "stretch"
          });
    
          expect(FlexItem).toHaveStyleRule("align-self", "stretch");
        });
      });

      describe("flex", () => {
        test("should have 1 0 50% when passed via prop value", () => {
          const { FlexItem } = setup({
            flex: "1 0 50%"
          });
    
          expect(FlexItem).toHaveStyleRule("flex", "1 0 50%");
        });

        test("should have 0 1 25% when passed via prop value", () => {
          const { FlexItem } = setup({
            flex: "0 1 25%"
          });
    
          expect(FlexItem).toHaveStyleRule("flex", "0 1 25%");
        });

        test("should have 1 1 75% when passed via prop value", () => {
          const { FlexItem } = setup({
            flex: "1 1 75%"
          });
    
          expect(FlexItem).toHaveStyleRule("flex", "1 1 75%");
        });
      });

      describe("order", () => {
        test("should have 0 by default", () => {
          const { FlexItem } = setup();
    
          expect(FlexItem).toHaveStyleRule("order", "0");
        });

        test("should have 4 when passed via prop value", () => {
          const { FlexItem } = setup({
            order: 4
          });
    
          expect(FlexItem).toHaveStyleRule("order", "4");
        });

        test("should have 2 when passed via prop value", () => {
          const { FlexItem } = setup({
            order: 2
          });
    
          expect(FlexItem).toHaveStyleRule("order", "2");
        });
      });

      describe("overflow", () => {
        test("should have visible", () => {
          const { FlexItem } = setup();
    
          expect(FlexItem).toHaveStyleRule("overflow", "visible");
        });
      });
    });
  });

  describe("Text", () => { 
    test("should render textContent equal to title prop", () => {
      const { Text } = setup({
        title: "Tech Stack"
      });

      expect(Text.textContent).toEqual("Tech Stack");
    });

    describe("Props", () => {
      describe("color", () => {
        test("should have color #78b0b5", () => {
          const { Text } = setup();
  
          expect(Text).toHaveStyleRule("color", "#78b0b5");
        });
      });
 
      describe("font-family", () => {
        test("should have 'Anonymous Pro',monospace", () => {
          const { Text } = setup();
  
          expect(Text).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
        });
      });

      describe("fontSize", () => {
        test("should have 16px", () => {
          const { Text } = setup();
  
          expect(Text).toHaveStyleRule("font-size", "16px");
        });
      });

      describe("lineHeight", () => {
        test("should have 3.6rem", () => {
          const { Text } = setup();
  
          expect(Text).toHaveStyleRule("line-height", "3.6rem");
        });
      });

      describe("shouldShuffle", () => {
        test("should trigger shuffleText.start in intervals in each Text", () => {
          jest.spyOn(ShuffleText.prototype, "start");
          jest.useFakeTimers();
    
          setup();
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);
    
          jest.clearAllTimers();
        });
      });

      describe("shuffleDelay", () => {
        test("should trigger shuffleText.start in intervals with given shuffleDelay", () => {
          jest.spyOn(ShuffleText.prototype, "start");
          jest.useFakeTimers();
    
          setup({
            shuffleDelay: 150
          });

          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);

          jest.advanceTimersByTime(150);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(0);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
    
          jest.advanceTimersByTime(150);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(1);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);
    
          jest.advanceTimersByTime(150);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(2);
    
          jest.advanceTimersByTime(7200);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(3);
    
          jest.advanceTimersByTime(150);
    
          expect(ShuffleText.prototype.start).toHaveBeenCalledTimes(3);
    
          jest.clearAllTimers();
        });
      });

      describe("textTransform", () => {
        test("should have uppercase", () => {
          const { Text } = setup();
  
          expect(Text).toHaveStyleRule("text-transform", "uppercase");
        });
      });
    });
  });

  describe("PositionContainer", () => {
    test("should render 5 children if shouldDisplayCorners is true", () => {
      const { PositionContainer } = setup({
        shouldDisplayCorners: true
      });

      expect(PositionContainer.children.length).toEqual(5);
    });

    test("should render 1 child if shouldDisplayCorners is false", () => {
      const { PositionContainer } = setup({
        shouldDisplayCorners: false
      });

      expect(PositionContainer.children.length).toEqual(1);
    });

    describe("Props", () => {
      describe("height", () => {
        test("should have calc(100% - 3.6rem) if there is no description", () => {
          const { PositionContainer } = setup();
  
          expect(PositionContainer).toHaveStyleRule("height", "calc(100% - 3.6rem)");
        });

        test("should have calc(100% - 3.6rem - 2.8rem -  ${height}px) if there is description", () => {
          Element.prototype.getBoundingClientRect = jest.fn(() => {
            return {
              bottom: 0,
              height: 120,
              left: 0,
              right: 0,
              toJSON: jest.fn(),
              top: 0,
              width: 120,
              x: 0,
              y: 0
            };
          });

          const { PositionContainer } = setup({
            description: "Lorem ipsum dolor sit amet"
          });
  
          expect(PositionContainer).toHaveStyleRule("height", "calc(100% - 3.6rem - 2.8rem - 120px)");
        });
      });

      describe("position", () => {
        test("should have relative", () => {
          const { PositionContainer } = setup();
  
          expect(PositionContainer).toHaveStyleRule("position", "relative");
        });
      });
    });
  });

  describe("Corners", () => {
    test("should render 4 corners as PositionContainer children if shouldDisplayCorners is true", () => {
      const { Corners, PositionContainer } = setup({
        shouldDisplayCorners: true
      });

      expect(PositionContainer.children[0]).toEqual(Corners[0]);
      expect(PositionContainer.children[1]).toEqual(Corners[1]);
      expect(PositionContainer.children[2]).toEqual(Corners[2]);
      expect(PositionContainer.children[3]).toEqual(Corners[3]);
    });

    test("should not render if shouldDisplayCorners is false", () => {
      const { Corners } = setup({
        shouldDisplayCorners: false
      });

      expect(Corners[0]).toBeFalsy();
      expect(Corners[1]).toBeFalsy();
      expect(Corners[2]).toBeFalsy();
      expect(Corners[3]).toBeFalsy();
    });
  });

  describe("DashboardElementInnerContainer", () => {
    test("should render children equal to children prop", () => {
      const { DashboardElementInnerContainer } = setup({
        children: <div>Custom children</div>
      });

      expect(DashboardElementInnerContainer.textContent).toEqual("Custom children");

    });
    
    describe("Styles", () => {
      describe("height", () => {
        test("should have 100%", () => {
          const { DashboardElementInnerContainer } = setup();
    
          expect(DashboardElementInnerContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("overflow", () => {
        test("should have hidden by default", () => {
          const { DashboardElementInnerContainer } = setup();
    
          expect(DashboardElementInnerContainer).toHaveStyleRule("overflow", "hidden");
        });

        test("should have visible when passed via prop value", () => {
          const { DashboardElementInnerContainer } = setup({
            overflow: "visible"
          });
    
          expect(DashboardElementInnerContainer).toHaveStyleRule("overflow", "visible");
        });
      });

      describe("background", () => {
        test("should have url(Cross.svg) if shouldDisplayCorners is true", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayCorners: true
          });
    
          expect(DashboardElementInnerContainer).toHaveStyleRule("background", "url(Cross.svg)");
        });

        test("should not have if shouldDisplayCorners is false", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayCorners: false
          });
    
          expect(DashboardElementInnerContainer).not.toHaveStyleRule("background");
        });
      });

      describe("background-repeat", () => {
        test("should have space if shouldDisplayCorners is true", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayCorners: true
          });
    
          expect(DashboardElementInnerContainer).toHaveStyleRule("background-repeat", "space");
        });

        test("should not have if shouldDisplayCorners is false", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayCorners: false
          });
    
          expect(DashboardElementInnerContainer).not.toHaveStyleRule("background-repeat");
        });
      });

      describe("background-position", () => {
        test("should have center if shouldDisplayCorners is true", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayCorners: true
          });
    
          expect(DashboardElementInnerContainer).toHaveStyleRule("background-position", "center");
        });

        test("should not have if shouldDisplayCorners is false", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayCorners: false
          });
    
          expect(DashboardElementInnerContainer).not.toHaveStyleRule("background-position");
        });
      });

      describe("background-size", () => {
        test("should have 3.2rem 3.2rem if shouldDisplayCorners is true", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayCorners: true
          });
    
          expect(DashboardElementInnerContainer).toHaveStyleRule("background-size", "3.2rem 3.2rem");
        });

        test("should not have if shouldDisplayCorners is false", () => {
          const { DashboardElementInnerContainer } = setup({
            shouldDisplayCorners: false
          });
    
          expect(DashboardElementInnerContainer).not.toHaveStyleRule("background-size");
        });
      });
    });
  });

  describe("SpacingContainer", () => {
    test("should render children", () => {
      const { SpacingContainer } = setup({
        children: <div>Custom children</div>,
        shouldDisplayCorners: true
      });
  
      expect(SpacingContainer.textContent).toEqual("Custom children");
    });

    test("should not render if shouldDisplayCorners is false", () => {
      const { SpacingContainer } = setup({
        shouldDisplayCorners: false
      });
  
      expect(SpacingContainer).toBeFalsy();
    });

    describe("Props", () => {
      let SpacingContainer: Element;

      beforeEach(() => {
        SpacingContainer = setup({
          shouldDisplayCorners: true
        }).SpacingContainer;
      });

      describe("height", () => {
        test("should have 100%", () => {
          expect(SpacingContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("paddingRight", () => {
        test("should have .8rem", () => {
          expect(SpacingContainer).toHaveStyleRule("padding-right", ".8rem");
        });
      });

      describe("paddingLeft", () => {
        test("should have .8rem", () => {
          expect(SpacingContainer).toHaveStyleRule("padding-left", ".8rem");
        });
      });

      describe("paddingTop", () => {
        test("should have .8rem", () => {
          expect(SpacingContainer).toHaveStyleRule("padding-top", ".8rem");
        });
      });

      describe("paddingBottom", () => {
        test("should have .8rem", () => {
          expect(SpacingContainer).toHaveStyleRule("padding-bottom", ".8rem");
        });
      });
    });
  });
  
  describe("DashboardElementDescription", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have color auto", () => {
          const { DashboardElementDescription } = setup({
            description: "Lorem ipsum dolor sit amet"
          });
  
          expect(DashboardElementDescription).toHaveStyleRule("height", "auto");
        });
      });

      describe("marginBottom", () => {
        test("should have 2.8rem", () => {
          const { DashboardElementDescription } = setup({
            description: "Lorem ipsum dolor sit amet"
          });

          expect(DashboardElementDescription).toHaveStyleRule("margin-bottom", "2.8rem");
        });
      });

      describe("width", () => {
        test("should have auto", () => {
          const { DashboardElementDescription } = setup({
            description: "Lorem ipsum dolor sit amet"
          });

          expect(DashboardElementDescription).toHaveStyleRule("width", "auto");
        });
      });
    });
  });

  describe("DashboardElementDescriptionText", () => {
    describe("Props", () => {
      describe("color", () => {
        test("should have color #78b0b5", () => {
          const { DashboardElementDescriptionText } = setup({
            description: "Lorem ipsum dolor sit amet"
          });
  
          expect(DashboardElementDescriptionText).toHaveStyleRule("color", "#78b0b5");
        });
      });

      describe("fontSize", () => {
        test("should have 8px", () => {
          const { DashboardElementDescriptionText } = setup({
            description: "Lorem ipsum dolor sit amet"
          });

          expect(DashboardElementDescriptionText).toHaveStyleRule("font-size", "8px");
        });
      });

      describe("lineHeight", () => {
        test("should have 1.2rem", () => {
          const { DashboardElementDescriptionText } = setup({
            description: "Lorem ipsum dolor sit amet"
          });

          expect(DashboardElementDescriptionText).toHaveStyleRule("line-height", "1.2rem");
        });
      });

      describe("maxHeight", () => {
        test("should have 3.6rem", () => {
          const { DashboardElementDescriptionText } = setup({
            description: "Lorem ipsum dolor sit amet"
          });

          expect(DashboardElementDescriptionText).toHaveStyleRule("max-height", "3.6rem");
        });
      });

      describe("overflow", () => {
        test("should have hidden", () => {
          const { DashboardElementDescriptionText } = setup({
            description: "Lorem ipsum dolor sit amet"
          });

          expect(DashboardElementDescriptionText).toHaveStyleRule("overflow", "hidden");
        });
      });

      describe("textTransform", () => {
        test("should have uppercase", () => {
          const { DashboardElementDescriptionText } = setup({
            description: "Lorem ipsum dolor sit amet"
          });

          expect(DashboardElementDescriptionText).toHaveStyleRule("text-transform", "uppercase");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Corners: HTMLElement[];
  DashboardElementDescription: Element;
  DashboardElementDescriptionText: Element;
  DashboardElementInnerContainer: Element;
  FlexItem: Element;
  PositionContainer: Element;
  SpacingContainer: Element;
  Text: Element;
}

type DashboardElementTestProps = Partial<DashboardElementProps>;

function setup(addedProps?: DashboardElementTestProps): Setup {
  const props: DashboardElementProps = {
    children: <div>Child</div>,
    flex: "1 1 30%",
    title: "Tech Stack",
    ...addedProps
  };

  const utils: RenderResult = renderWithTheme(
    <DashboardElement {...props} />
  );

  const { container, queryAllByTestId }: RenderResult = utils;
  const Corners: HTMLElement[] = queryAllByTestId("Corner");
  const DashboardElementDescription = queryAllByTestId("DashboardElementDescription")[0];
  const DashboardElementDescriptionText = queryAllByTestId("DashboardElementDescriptionText")[0];
  const DashboardElementInnerContainer: Element = queryAllByTestId("DashboardElementInnerContainer")[0];
  const FlexItem: Element = container.children[0];
  const PositionContainer: Element = queryAllByTestId("PositionContainer")[0];
  const SpacingContainer: Element = DashboardElementInnerContainer.querySelector("[data-testid=SpacingContainer]");
  const Text: Element = queryAllByTestId("Text")[0];
 
  return {
    ...utils,
    Corners,
    DashboardElementDescription,
    DashboardElementDescriptionText,
    DashboardElementInnerContainer,
    FlexItem,
    PositionContainer,
    SpacingContainer,
    Text
  };
}
