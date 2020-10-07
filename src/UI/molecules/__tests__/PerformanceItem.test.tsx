import React from "react";
import { RenderResult } from "@testing-library/react";

import PerformanceItem from "<molecules>/PerformanceItem";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  PerformanceItemProps
} from "<molecules>/__typings__/PerformanceItem.d.ts";

describe("molecules / PerformanceItem", () => {
  test("should have correct structure", () => {
    const {
      Barchart,
      FlexContainer,
      FlexItems,
      PerformanceItemContainer,
      SpacingContainer,
      Text
    } = setup();

    expect(PerformanceItemContainer.children[0]).toEqual(SpacingContainer);
    expect(SpacingContainer.children[0]).toEqual(FlexContainer);
    expect(FlexContainer.children[0]).toEqual(FlexItems[0]);
    expect(FlexContainer.children[1]).toEqual(FlexItems[1]);
    expect(FlexItems[0].children[0]).toEqual(Text);
    expect(FlexItems[1].children[0]).toEqual(Barchart);
  });

  describe("PerformanceItemContainer", () => {    
    describe("Styles", () => {
      describe("display", () => {      
        test("should have none", () => {
          const { PerformanceItemContainer } = setup();

          expect(PerformanceItemContainer).toHaveStyleRule("display", "none");
        });

        test("should have flex for 17 children if min-height: 900px", () => {
          const { PerformanceItemContainer } = setup();

          expect(PerformanceItemContainer).toHaveStyleRule("display", "flex", {
            media: "(min-height: 900px)",
            modifier: ":nth-child(-n+17)"
          });
        });

        test("should have flex for 15 children if min-height: 800px and max-height: 899px", () => {
          const { PerformanceItemContainer } = setup();

          expect(PerformanceItemContainer).toHaveStyleRule("display", "flex", {
            media: "(min-height: 800px) and (max-height: 899px)",
            modifier: ":nth-child(-n+15)"
          });
        });

        test("should have flex for 10 children if min-height: 520px and max-height: 799px", () => {
          const { PerformanceItemContainer } = setup();

          expect(PerformanceItemContainer).toHaveStyleRule("display", "flex", {
            media: "(min-height: 520px) and (max-height: 799px)",
            modifier: ":nth-child(-n+10)"
          });
        });

        test("should have flex for 8 children if min-height: 415px and max-height: 519px", () => {
          const { PerformanceItemContainer } = setup();

          expect(PerformanceItemContainer).toHaveStyleRule("display", "flex", {
            media: "(min-height: 415px) and (max-height: 519px)",
            modifier: ":nth-child(-n+8)"
          });
        });

        test("should have flex for 3 children if max-height: 414px", () => {
          const { PerformanceItemContainer } = setup();

          expect(PerformanceItemContainer).toHaveStyleRule("display", "flex", {
            media: "(max-height: 414px)",
            modifier: ":nth-child(-n+3)"
          });
        });
      });

      describe("width", () => {      
        test("should have 100%", () => {
          const { PerformanceItemContainer } = setup();

          expect(PerformanceItemContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("SpacingContainer", () => {    
    describe("Props", () => {
      describe("paddingTop", () => {      
        test("should have .2rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-top", ".2rem");
        });
      });

      describe("paddingBottom", () => {      
        test("should have .2rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-bottom", ".2rem");
        });
      });
      
      describe("width", () => {      
        test("should have 100%", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("FlexContainer", () => {    
    describe("Props", () => {
      describe("flexFlow", () => { 
        test("should have row nowrap", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });
    });
  });

  describe("FlexItems", () => { 
    describe("FlexItems[0]", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 40%", () => {
            const { FlexItems } = setup();
      
            expect(FlexItems[0]).toHaveStyleRule("flex", "0 1 40%");
          });
        });
      });
    });

    describe("FlexItems[1]", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 60%", () => {
            const { FlexItems } = setup();
      
            expect(FlexItems[1]).toHaveStyleRule("flex", "0 1 60%");
          });
        });
      });
    });
  });

  describe("Label", () => { 
    test("should render textContent equal to label prop", () => {
      const { Text } = setup({
        label: "Hello"
      });

      expect(Text.textContent).toEqual("Hello");
    });

    describe("Props", () => {
      describe("color", () => {
        test("should have #bcd8db", () => {
          const { Text } = setup();
    
          expect(Text).toHaveStyleRule("color", "#bcd8db");
        });
      });

      describe("ellipsis", () => {
        describe("text-overflow", () => {
          test("should have ellipsis", () => {
            const { Text } = setup();

            expect(Text).toHaveStyleRule("text-overflow", "ellipsis");
          });
        });

        describe("overflow", () => {
          test("should have hidden", () => {
            const { Text } = setup();

            expect(Text).toHaveStyleRule("overflow", "hidden");
          });
        });

        describe("white-space", () => {
          test("should have nowrap", () => {
            const { Text } = setup();

            expect(Text).toHaveStyleRule("white-space", "nowrap");
          });
        });
      });

      describe("font-family", () => {
        test("should have 'Anonymous Pro',monospace", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
        });
      });

      describe("fontSize", () => {
        test("should have 8px", () => {
          const { Text } = setup();
    
          expect(Text).toHaveStyleRule("font-size", "8px");
        });
      });

      describe("paddingRight", () => {
        test("should have .4rem", () => {
          const { Text } = setup();
    
          expect(Text).toHaveStyleRule("padding-right", ".4rem");
        });
      });

      describe("textAlign", () => {
        test("should have right", () => {
          const { Text } = setup();
    
          expect(Text).toHaveStyleRule("text-align", "right");
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
  
  describe("Barchart", () => { 
    describe("Styles", () => {
      describe("when shouldAnimate is true", () => {
        describe("animation-delay", () => {
          test("should have correct value passed via prop", () => {
            const { Barchart } = setup({
              animationDelay: "500ms",
              shouldAnimate: true
            });
      
            expect(Barchart).toHaveStyleRule("animation-delay", "500ms");
          });
        });
  
        describe("animation-duration", () => {
          test("should have 3600ms", () => {
            const { Barchart } = setup({
              shouldAnimate: true
            });
      
            expect(Barchart).toHaveStyleRule("animation-duration", "3600ms");
          });
        });
  
        describe("animation-iteration-count", () => {
          test("should have infinite", () => {
            const { Barchart } = setup({
              shouldAnimate: true
            });
      
            expect(Barchart).toHaveStyleRule("animation-iteration-count", "infinite");
          });
        });
  
        describe("animation-timing-function", () => {
          test("should have ease-in-out", () => {
            const { Barchart } = setup({
              shouldAnimate: true
            });
      
            expect(Barchart).toHaveStyleRule("animation-timing-function", "ease-in-out");
          });
        });
      });

      describe("when shouldAnimate is false", () => {
        let Barchart: Element;

        beforeEach(() => {
          Barchart = setup({
            shouldAnimate: false
          }).Barchart;
        });

        describe("animation-delay", () => {
          test("should not have", () => {      
            expect(Barchart).not.toHaveStyleRule("animation-delay");
          });
        });
  
        describe("animation-duration", () => {
          test("should not have", () => {      
            expect(Barchart).not.toHaveStyleRule("animation-duration");
          });
        });
  
        describe("animation-iteration-count", () => {
          test("should not have", () => {      
            expect(Barchart).not.toHaveStyleRule("animation-iteration-count");
          });
        });
  
        describe("animation-timing-function", () => {
          test("should not have", () => {      
            expect(Barchart).not.toHaveStyleRule("animation-timing-function");
          });
        });
      });

      describe("background-color", () => {
        test("should have #78b0b5", () => {
          const { Barchart } = setup();
    
          expect(Barchart).toHaveStyleRule("background-color", "#78b0b5");
        });
      });

      describe("height", () => {
        test("should have .4rem", () => {
          const { Barchart } = setup();
    
          expect(Barchart).toHaveStyleRule("height", ".4rem");
        });
      });

      describe("padding-right", () => {
        test("should have .4rem", () => {
          const { Barchart } = setup();
    
          expect(Barchart).toHaveStyleRule("padding-right", ".4rem");
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { Barchart } = setup();
    
          expect(Barchart).toHaveStyleRule("width", "100%");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Barchart: Element;
  FlexContainer: Element;
  FlexItems: Element[];
  PerformanceItemContainer: Element;
  SpacingContainer: Element;
  Text: Element;
}

type PerformanceItemTestProps = Partial<PerformanceItemProps>;

function setup(additionalProps?: PerformanceItemTestProps): Setup {
  const props: PerformanceItemProps = {
    animationDelay: "600ms",
    label: "Total heap size",
    shouldAnimate: true,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <PerformanceItem {...props} />
  );

  const { queryByTestId, queryAllByTestId } = utils || {};

  const Barchart: Element = queryByTestId("PerformanceItemBarchart");
  const FlexContainer: Element = queryByTestId("FlexContainer");
  const FlexItems: Element[] = queryAllByTestId("FlexItem");
  const PerformanceItemContainer: Element = queryByTestId("PerformanceItem");
  const SpacingContainer: Element = queryByTestId("SpacingContainer");
  const Text: Element = queryByTestId("Text");

  return {
    ...utils,
    Barchart,
    FlexContainer,
    FlexItems,
    PerformanceItemContainer,
    SpacingContainer,
    Text
  };
}
 