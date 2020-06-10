import React from "react";
import { RenderResult } from "@testing-library/react";

import HexagonWithDescription from "<molecules>/HexagonWithDescription";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  HexagonWithDescriptionProps
} from "<molecules>/__typings__/HexagonWithDescription.d.ts";

describe("molecules / HexagonWithDescription", () => {
  test("should have correct structure", () => {
    const {
      DescriptionSpacingContainer,
      FlexContainer,
      FlexItems,
      Hexagon,
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
    test("should render children", () => {
      const { Hexagon } = setup({
        children: <div>Custom image</div>,
        description: <span>Custom text</span>
      });

      expect(Hexagon.children[1].children[0].textContent).toEqual("Custom image");
    });

    describe("Props", () => {
      describe("width", () => {
        test("should have 75%", () => {
          const { Hexagon } = setup();
    
          expect(Hexagon.children[1]).toHaveStyleRule("width", "75%");
        });
      });
    });
  });

  describe("Text", () => {
    test("should render correct content passed via description prop", () => {
      const { Text } = setup({
        children: <div>Custom image</div>,
        description: <span>Custom text</span>
      });

      expect(Text.children[0].textContent).toEqual("Custom text");
    });

    describe("Props", () => {
      describe("color", () => {
        test("should have #78b0b5", () => {
          const { Text } = setup();
    
          expect(Text).toHaveStyleRule("color", "#78b0b5");
        });
      });

      describe("fontFamily", () => {
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
  HexagonWithDescriptionContainer: Element;
  Text: Element;
}
type HexagonWithDescriptionTestProps = Partial<HexagonWithDescriptionProps>;

function setup(additionalProps?: HexagonWithDescriptionTestProps): Setup {
  const props: HexagonWithDescriptionProps = {
    children: <div>Image</div>,
    description: <span>Custom text</span>,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <HexagonWithDescription {...props}>
      {props.children}
    </HexagonWithDescription>
  );

  const { queryAllByTestId } = utils || {};

  const DescriptionSpacingContainer: Element = queryAllByTestId("DescriptionSpacingContainer")[0];
  const FlexContainer: Element = queryAllByTestId("FlexContainer")[0];
  const FlexItems: Element[] = queryAllByTestId("FlexItem");
  const Hexagon: Element = queryAllByTestId("Hexagon")[0];
  const HexagonWithDescriptionContainer: Element = queryAllByTestId("HexagonWithDescription")[0];
  const Text: Element = queryAllByTestId("Text")[0];

  return {
    ...utils,
    DescriptionSpacingContainer,
    FlexContainer,
    FlexItems,
    Hexagon,
    HexagonWithDescriptionContainer,
    Text
  };
}
 