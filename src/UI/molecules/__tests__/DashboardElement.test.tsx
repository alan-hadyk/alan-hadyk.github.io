import React from "react";
import { RenderResult } from "@testing-library/react";

import DashboardElement from "<molecules>/DashboardElement";
import { DashboardElementProps } from "<molecules>/__typings__/DashboardElement.d.ts";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

describe("molecules / DashboardElement", () => {
  test("should have correct structure if there's no description", () => {
    const {       
      Corners,
      DashboardElementChildrenSpacingContainer,
      DashboardElementContentSpacingContainer,
      DashboardElementContainer,
      DashboardElementInnerContainer,
      DashboardElementTitleText,
      PositionContainer
    } = setup({
      shouldDisplayCorners: true
    });

    expect(DashboardElementContainer.children[0]).toEqual(DashboardElementTitleText);
    expect(DashboardElementContainer.children[1]).toEqual(DashboardElementContentSpacingContainer);
    expect(DashboardElementContentSpacingContainer.children[0]).toEqual(PositionContainer);

    expect(PositionContainer.children[0]).toEqual(Corners[0]);
    expect(PositionContainer.children[1]).toEqual(Corners[1]);
    expect(PositionContainer.children[2]).toEqual(Corners[2]);
    expect(PositionContainer.children[3]).toEqual(Corners[3]);

    expect(PositionContainer.children[4]).toEqual(DashboardElementInnerContainer);
    expect(DashboardElementInnerContainer.children[0]).toEqual(DashboardElementChildrenSpacingContainer);
  });

  test("should have correct structure if there's description", () => {
    const { 
      Corners,
      DashboardElementChildrenSpacingContainer,
      DashboardElementContentSpacingContainer,
      DashboardElementContainer,
      DashboardElementDescription,
      DashboardElementDescriptionText,
      DashboardElementInnerContainer,
      DashboardElementTitleText,
      PositionContainer
    } = setup({
      description: "Lorem ipsum dolor sit amet",
      shouldDisplayCorners: true
    });

    expect(DashboardElementContainer.children[0]).toEqual(DashboardElementTitleText);
    expect(DashboardElementContainer.children[1]).toEqual(DashboardElementDescription);
    expect(DashboardElementContainer.children[2]).toEqual(DashboardElementContentSpacingContainer);

    expect(DashboardElementDescription.children[0]).toEqual(DashboardElementDescriptionText);

    expect(DashboardElementContentSpacingContainer.children[0]).toEqual(PositionContainer);

    expect(PositionContainer.children[0]).toEqual(Corners[0]);
    expect(PositionContainer.children[1]).toEqual(Corners[1]);
    expect(PositionContainer.children[2]).toEqual(Corners[2]);
    expect(PositionContainer.children[3]).toEqual(Corners[3]); 
    expect(PositionContainer.children[4]).toEqual(DashboardElementInnerContainer);
    expect(DashboardElementInnerContainer.children[0]).toEqual(DashboardElementChildrenSpacingContainer);
  });

  describe("DashboardElementContainer", () => {
    describe("Props", () => {
      describe("align-self", () => {
        test("should have auto by default", () => {
          const { DashboardElementContainer } = setup();
    
          expect(DashboardElementContainer).toHaveStyleRule("align-self", "auto");
        });

        test("should have flex-start when passed via prop value", () => {
          const { DashboardElementContainer } = setup({
            alignSelf: "flex-start"
          });
    
          expect(DashboardElementContainer).toHaveStyleRule("align-self", "flex-start");
        });

        test("should have flex-end when passed via prop value", () => {
          const { DashboardElementContainer } = setup({
            alignSelf: "flex-end"
          });
    
          expect(DashboardElementContainer).toHaveStyleRule("align-self", "flex-end");
        });

        test("should have center when passed via prop value", () => {
          const { DashboardElementContainer } = setup({
            alignSelf: "center"
          });
    
          expect(DashboardElementContainer).toHaveStyleRule("align-self", "center");
        });

        test("should have baseline when passed via prop value", () => {
          const { DashboardElementContainer } = setup({
            alignSelf: "baseline"
          });
    
          expect(DashboardElementContainer).toHaveStyleRule("align-self", "baseline");
        });

        test("should have stretch when passed via prop value", () => {
          const { DashboardElementContainer } = setup({
            alignSelf: "stretch"
          });
    
          expect(DashboardElementContainer).toHaveStyleRule("align-self", "stretch");
        });
      });

      describe("flex", () => {
        test("should have 1 0 50% when passed via prop value", () => {
          const { DashboardElementContainer } = setup({
            flex: "1 0 50%"
          });
    
          expect(DashboardElementContainer).toHaveStyleRule("flex", "1 0 50%");
        });

        test("should have 0 1 25% when passed via prop value", () => {
          const { DashboardElementContainer } = setup({
            flex: "0 1 25%"
          });
    
          expect(DashboardElementContainer).toHaveStyleRule("flex", "0 1 25%");
        });

        test("should have 1 1 75% when passed via prop value", () => {
          const { DashboardElementContainer } = setup({
            flex: "1 1 75%"
          });
    
          expect(DashboardElementContainer).toHaveStyleRule("flex", "1 1 75%");
        });
      });

      describe("order", () => {
        test("should have 0 by default", () => {
          const { DashboardElementContainer } = setup();
    
          expect(DashboardElementContainer).toHaveStyleRule("order", "0");
        });

        test("should have 4 when passed via prop value", () => {
          const { DashboardElementContainer } = setup({
            order: 4
          });
    
          expect(DashboardElementContainer).toHaveStyleRule("order", "4");
        });

        test("should have 2 when passed via prop value", () => {
          const { DashboardElementContainer } = setup({
            order: 2
          });
    
          expect(DashboardElementContainer).toHaveStyleRule("order", "2");
        });
      });

      describe("overflow", () => {
        test("should have visible", () => {
          const { DashboardElementContainer } = setup();
    
          expect(DashboardElementContainer).toHaveStyleRule("overflow", "visible");
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

      describe("shouldDisplayBorder", () => {
        describe("border", () => {
          test("should have thin solid #78b0b5", () => {
            const { DashboardElementInnerContainer } = setup({
              shouldDisplayBorder: true
            });
      
            expect(DashboardElementInnerContainer).toHaveStyleRule("border", "thin solid #78b0b5");
          });
        });

        describe("box-shadow", () => {
          test("should have 0px 0px .8rem 0px #bcd8db", () => {
            const { DashboardElementInnerContainer } = setup({
              shouldDisplayBorder: true
            });
      
            expect(DashboardElementInnerContainer).toHaveStyleRule("box-shadow", "0px 0px .8rem 0px #bcd8db");
          });
        }); 
      });
    });
  });

  describe("SpacingContainers", () => {
    describe("DashboardElementChildrenSpacingContainer", () => {
      test("should render children", () => {
        const { DashboardElementChildrenSpacingContainer } = setup({
          children: <div>Custom children</div>,
          shouldDisplayCorners: true
        });
    
        expect(DashboardElementChildrenSpacingContainer.textContent).toEqual("Custom children");
      });
  
      test("should not render if shouldDisplayCorners is false", () => {
        const { DashboardElementChildrenSpacingContainer } = setup({
          shouldDisplayCorners: false
        });
    
        expect(DashboardElementChildrenSpacingContainer).toBeFalsy();
      });
  
      describe("Props", () => {
        let DashboardElementChildrenSpacingContainer: Element;
  
        beforeEach(() => {
          DashboardElementChildrenSpacingContainer = setup({
            shouldDisplayCorners: true
          }).DashboardElementChildrenSpacingContainer;
        });
  
        describe("height", () => {
          test("should have 100%", () => {
            expect(DashboardElementChildrenSpacingContainer).toHaveStyleRule("height", "100%");
          });
        });
  
        describe("paddingRight", () => {
          test("should have .8rem", () => {
            expect(DashboardElementChildrenSpacingContainer).toHaveStyleRule("padding-right", ".8rem");
          });
        });
  
        describe("paddingLeft", () => {
          test("should have .8rem", () => {
            expect(DashboardElementChildrenSpacingContainer).toHaveStyleRule("padding-left", ".8rem");
          });
        });
  
        describe("paddingTop", () => {
          test("should have .8rem", () => {
            expect(DashboardElementChildrenSpacingContainer).toHaveStyleRule("padding-top", ".8rem");
          });
        });
  
        describe("paddingBottom", () => {
          test("should have .8rem", () => {
            expect(DashboardElementChildrenSpacingContainer).toHaveStyleRule("padding-bottom", ".8rem");
          });
        });
      });
    });

    describe("DashboardElementDescription", () => {
      describe("marginBottom", () => {
        test("should have 2.8rem", () => {
          const { DashboardElementDescription } = setup({
            description: "Lorem ipsum"
          });
  
          expect(DashboardElementDescription).toHaveStyleRule("margin-bottom", "2.8rem");
        });
      });
    });

    describe("DashboardElementContentSpacingContainer", () => {
      describe("height", () => {
        test("should have calc(100% - 3.6rem) if there is no description", () => {
          const { DashboardElementContentSpacingContainer } = setup();
  
          expect(DashboardElementContentSpacingContainer).toHaveStyleRule("height", "calc(100% - 3.6rem)");
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

          const { DashboardElementContentSpacingContainer } = setup({
            description: "Lorem ipsum dolor sit amet"
          });
  
          expect(DashboardElementContentSpacingContainer).toHaveStyleRule("height", "calc(100% - 3.6rem - 2.8rem - 120px)");
        });
      });

      describe("marginTop", () => {
        test("should have .8rem when title font size is equal 28px", () => {
          const { DashboardElementContentSpacingContainer } = setup({
            titleFontSize: "font28"
          });
  
          expect(DashboardElementContentSpacingContainer).toHaveStyleRule("margin-top", ".8rem");
        });

        test("should have 0 when title font size is not equal 28px", () => {
          const { DashboardElementContentSpacingContainer } = setup({
            titleFontSize: "font16"
          });
  
          expect(DashboardElementContentSpacingContainer).toHaveStyleRule("margin-top", "0");
        });
      });
    });
  });

  describe("DashboardElementDescription", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have auto", () => {
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

  describe("Texts", () => {
    describe("DashboardElementTitleText", () => { 
      test("should render textContent equal to title prop", () => {
        const { DashboardElementTitleText } = setup({
          title: "Tech Stack"
        });
  
        expect(DashboardElementTitleText.textContent).toEqual("Tech Stack");
      });
  
      describe("Props", () => {
        describe("color", () => {
          test("should have color #bcd8db when font size is equal 28px", () => {
            const { DashboardElementTitleText } = setup({
              titleFontSize: "font28"
            });
    
            expect(DashboardElementTitleText).toHaveStyleRule("color", "#bcd8db");
          });
  
          test("should have color #78b0b5 when font size is not equal 28px", () => {
            const { DashboardElementTitleText } = setup({
              titleFontSize: "font16"
            });
    
            expect(DashboardElementTitleText).toHaveStyleRule("color", "#78b0b5");
          });
        });
  
        describe("ellipsis", () => {
          describe("text-overflow", () => {
            test("should have ellipsis", () => {
              const { DashboardElementTitleText } = setup();
    
              expect(DashboardElementTitleText).toHaveStyleRule("text-overflow", "ellipsis");
            });
          });
    
          describe("overflow", () => {
            test("should have hidden", () => {
              const { DashboardElementTitleText } = setup();
    
              expect(DashboardElementTitleText).toHaveStyleRule("overflow", "hidden");
            });
          });
    
          describe("white-space", () => {
            test("should have nowrap", () => {
              const { DashboardElementTitleText } = setup();
    
              expect(DashboardElementTitleText).toHaveStyleRule("white-space", "nowrap");
            });
          });
        });
   
        describe("font-family", () => {
          test("should have 'Anonymous Pro',monospace", () => {
            const { DashboardElementTitleText } = setup();
    
            expect(DashboardElementTitleText).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
          });
        });
  
        describe("fontSize", () => {
          test("should have 16px", () => {
            const { DashboardElementTitleText } = setup();
    
            expect(DashboardElementTitleText).toHaveStyleRule("font-size", "16px");
          });
        });
  
        describe("lineHeight", () => {
          test("should have 3.6rem", () => {
            const { DashboardElementTitleText } = setup();
    
            expect(DashboardElementTitleText).toHaveStyleRule("line-height", "3.6rem");
          });
        });
  
        describe("DashboardElementTitleTextTransform", () => {
          test("should have uppercase", () => {
            const { DashboardElementTitleText } = setup();
    
            expect(DashboardElementTitleText).toHaveStyleRule("text-transform", "uppercase");
          });
        });
      });
    });

    describe("DashboardElementDescriptionText", () => {
      describe("Props", () => {
        let DashboardElementDescriptionText: Element;
  
        beforeEach(() => {
          DashboardElementDescriptionText = setup({
            description: "Lorem ipsum dolor sit amet"
          }).DashboardElementDescriptionText;
        });
  
        describe("color", () => {
          test("should have color #78b0b5", () => {  
            expect(DashboardElementDescriptionText).toHaveStyleRule("color", "#78b0b5");
          });
        });
  
        describe("fontSize", () => {
          test("should have 8px", () => {
            expect(DashboardElementDescriptionText).toHaveStyleRule("font-size", "8px");
          });
        });
  
        describe("lineHeight", () => {
          test("should have 1.2rem", () => {
            expect(DashboardElementDescriptionText).toHaveStyleRule("line-height", "1.2rem");
          });
        });
  
        describe("maxHeight", () => {
          test("should have 3.6rem", () => {
            expect(DashboardElementDescriptionText).toHaveStyleRule("max-height", "3.6rem");
          });
        });
  
        describe("overflow", () => {
          test("should have hidden", () => {
            expect(DashboardElementDescriptionText).toHaveStyleRule("overflow", "hidden");
          });
        });
  
        describe("textTransform", () => {
          test("should have uppercase", () => {
            expect(DashboardElementDescriptionText).toHaveStyleRule("text-transform", "uppercase");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Corners: HTMLElement[];
  DashboardElementChildrenSpacingContainer: Element;
  DashboardElementContainer: Element;
  DashboardElementContentSpacingContainer: Element;
  DashboardElementDescription: Element;
  DashboardElementDescriptionText: Element;
  DashboardElementInnerContainer: Element;
  DashboardElementTitleText: Element;
  PositionContainer: Element;
}

type DashboardElementTestProps = Partial<DashboardElementProps>;

function setup(additionalProps?: DashboardElementTestProps): Setup {
  const props: DashboardElementProps = {
    children: <div>Child</div>,
    flex: "1 1 30%",
    title: "Tech Stack",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <DashboardElement {...props} />
  );

  const { queryAllByTestId }: RenderResult = utils;
  const Corners: HTMLElement[] = queryAllByTestId("Corner");
  const DashboardElementChildrenSpacingContainer: Element = queryAllByTestId("DashboardElementChildrenSpacingContainer")[0];
  const DashboardElementContainer: Element = queryAllByTestId("DashboardElement")[0];
  const DashboardElementContentSpacingContainer: Element = queryAllByTestId("DashboardElementContentSpacingContainer")[0];
  const DashboardElementDescription = queryAllByTestId("DashboardElementDescription")[0];
  const DashboardElementDescriptionText = queryAllByTestId("DashboardElementDescriptionText")[0];
  const DashboardElementInnerContainer: Element = queryAllByTestId("DashboardElementInnerContainer")[0];
  const DashboardElementTitleText: Element = queryAllByTestId("DashboardElementTitleText")[0];
  const PositionContainer: Element = queryAllByTestId("PositionContainer")[0];
 
  return {
    ...utils,
    Corners,
    DashboardElementChildrenSpacingContainer,
    DashboardElementContainer,
    DashboardElementContentSpacingContainer,
    DashboardElementDescription,
    DashboardElementDescriptionText,
    DashboardElementInnerContainer,
    DashboardElementTitleText,
    PositionContainer
  };
}
