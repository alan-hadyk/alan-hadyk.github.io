import React from "react";
import { RenderResult } from "@testing-library/react";

import HexagonWithDescription from "<molecules>/HexagonWithDescription";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("molecules / HexagonWithDescription", () => {
  test("should have correct structure", () => {
    const {
      DescriptionSpacingContainer,
      FlexContainer,
      FlexItems,
      Hexagon,
      HexagonInnerContainer,
      HexagonWithDescriptionContainer,
      Text
    } = setup();

    expect(HexagonWithDescriptionContainer.children[0]).toEqual(FlexContainer);
    expect(FlexContainer.children[0]).toEqual(FlexItems[0]);
    expect(FlexContainer.children[1]).toEqual(FlexItems[1]);

    expect(FlexItems[0].children[0]).toEqual(Hexagon);

    expect(FlexItems[1].children[0]).toEqual(DescriptionSpacingContainer);
    expect(DescriptionSpacingContainer.children[0]).toEqual(Text);
  });

  describe("SpacingContainers", () => { 
    describe("HexagonWithDescriptionContainer", () => { 
      describe("Props", () => {
        describe("marginLeft", () => {      
          test("should have auto", () => {
            const { HexagonWithDescriptionContainer } = setup();

            expect(HexagonWithDescriptionContainer).toHaveStyleRule("margin-left", "auto");
          });
        });

        describe("marginRight", () => {      
          test("should have auto", () => {
            const { HexagonWithDescriptionContainer } = setup();

            expect(HexagonWithDescriptionContainer).toHaveStyleRule("margin-right", "auto");
          });
        });

        describe("maxWidth", () => {      
          test("should have 105.6rem", () => {
            const { HexagonWithDescriptionContainer } = setup();

            expect(HexagonWithDescriptionContainer).toHaveStyleRule("max-width", "105.6rem");
          });
        });
      });
    });

    describe("DescriptionSpacingContainer", () => { 
      describe("Props", () => {
        describe("marginLeft", () => {      
          test("should have 4.8rem", () => {
            const { DescriptionSpacingContainer } = setup();

            expect(DescriptionSpacingContainer).toHaveStyleRule("margin-left", "4.8rem");
          });
        });
      });
    });
  });

  describe("FlexContainer", () => {    
    describe("Props", () => {
      describe("alignItems", () => { 
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("align-items", "center");
        });
      });

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
          test("should have 0 1 50%", () => {
            const { FlexItems } = setup();
      
            expect(FlexItems[0]).toHaveStyleRule("flex", "0 1 50%");
          });
        });
      });
    });

    describe("FlexItems[1]", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 50%", () => {
            const { FlexItems } = setup();
      
            expect(FlexItems[1]).toHaveStyleRule("flex", "0 1 50%");
          });
        });
      });
    });
  });

  describe("Hexagon", () => {
    test("should have fill none", () => {
      const { Hexagon } = setup();

      expect(Hexagon.children[0].textContent).not.toEqual("Hexagon-With-Pattern.svg");
    });
  });

  describe("Text", () => {
    test("should render correct content", () => {
      const { Text } = setup();

      expect(Text.textContent).toEqual("Proven talent for aligning software development strategy and objectives with established user interface implementation and technology management paradigms to achieve maximum operational impacts with minimum resource expenditures.  Growth-focused thought leader with expertise spanning application layering, polygot language coding expertise, best practice compliance, agile methodology, cross-functional team leadership, REST & GraphQL architectural styles, comprehensive components, and project management. Exceptionally dedicated technical professional with keen organizational skills.");
    });

    describe("Props", () => {
      describe("color", () => {
        test("should have #bcd8db", () => {
          const { Text } = setup();
    
          expect(Text).toHaveStyleRule("color", "#bcd8db");
        });
      });

      describe("font-family", () => {
        test("should have 'Anonymous Pro',monospace", () => {
          const { Text } = setup();

          expect(Text).toHaveStyleRule("font-family", "'Anonymous Pro',monospace");
        });
      });

      describe("fontSize", () => {
        test("should have 20px", () => {
          const { Text } = setup();
    
          expect(Text).toHaveStyleRule("font-size", "20px");
        });
      });

      describe("lineHeight", () => {
        test("should have 3.6rem", () => {
          const { Text } = setup();
    
          expect(Text).toHaveStyleRule("line-height", "3.6rem");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  DescriptionSpacingContainer: Element;
  FlexContainer: Element;
  FlexItems: Element[];
  Hexagon: Element;
  HexagonInnerContainer: Element;
  HexagonWithDescriptionContainer: Element;
  Text: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <HexagonWithDescription />
  );

  const { queryAllByTestId } = utils || {};

  const DescriptionSpacingContainer: Element = queryAllByTestId("DescriptionSpacingContainer")[0];
  const FlexContainer: Element = queryAllByTestId("FlexContainer")[0];
  const FlexItems: Element[] = queryAllByTestId("FlexItem");
  const Hexagon: Element = queryAllByTestId("Hexagon")[0];
  const HexagonInnerContainer: Element = queryAllByTestId("HexagonInnerContainer")[0];
  const HexagonWithDescriptionContainer: Element = queryAllByTestId("HexagonWithDescription")[0];
  const Text: Element = queryAllByTestId("Text")[0];

  return {
    ...utils,
    DescriptionSpacingContainer,
    FlexContainer,
    FlexItems,
    Hexagon,
    HexagonInnerContainer,
    HexagonWithDescriptionContainer,
    Text
  };
}
 