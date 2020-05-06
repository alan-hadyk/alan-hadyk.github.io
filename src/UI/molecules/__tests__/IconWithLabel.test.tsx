import React from "react";
import { RenderResult } from "@testing-library/react";

import IconWithLabel from "<src>/UI/molecules/IconWithLabel";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { IconWithLabelProps } from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("molecules / IconWithLabel", () => {
  test("should have correct structure", () => {
    const {
      FlexContainer,
      Icon,
      IconContainer,
      SpacingContainer,
      Text
    } = setup();

    expect(FlexContainer.children[0]).toEqual(SpacingContainer);
    expect(FlexContainer.children[1]).toEqual(Text);
    expect(SpacingContainer.children[0]).toEqual(IconContainer);
    expect(IconContainer.children[0]).toEqual(Icon);
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

      describe("height", () => {      
        test("should have 100%", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("justifyContent", () => {      
        test("should have flex-start", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("justify-content", "flex-start");
        });
      });
    });
  });

  describe("SpacingContainer", () => {    
    describe("Props", () => {
      describe("paddingRight", () => {      
        test("should have .8rem when size is small", () => {
          const { SpacingContainer } = setup({
            size: "small"
          });

          expect(SpacingContainer).toHaveStyleRule("padding-right", ".8rem");
        });

        test("should have 1.2rem when size is medium", () => {
          const { SpacingContainer } = setup({
            size: "medium"
          });

          expect(SpacingContainer).toHaveStyleRule("padding-right", "1.2rem");
        });

        test("should have 1.2rem when size is large", () => {
          const { SpacingContainer } = setup({
            size: "large"
          });

          expect(SpacingContainer).toHaveStyleRule("padding-right", "1.2rem");
        });
      });
    });
  });

  describe("Icon", () => {    
    describe("SVG", () => { 
      describe("Props", () => {
        describe("iconName", () => {
          test("should render corect icon passed via props", () => {
            const { Icon } = setup({
              iconName: "brandJS"
            });
      
            expect(Icon.textContent).toEqual("Brand-JS.svg");
          });
        });
      });
    });
  
    describe("IconContainer", () => {
      describe("Props", () => {
        describe("height", () => {
          test("should have 2.8rem for small size", () => {
            const { IconContainer } = setup({
              size: "small"
            });
    
            expect(IconContainer).toHaveStyleRule("height", "2.8rem");
          });
  
          test("should have 3.2rem for medium size", () => {
            const { IconContainer } = setup({
              size: "medium"
            });
    
            expect(IconContainer).toHaveStyleRule("height", "3.2rem");
          });
  
          test("should have 4rem for large size", () => {
            const { IconContainer } = setup({
              size: "large"
            });
    
            expect(IconContainer).toHaveStyleRule("height", "4rem");
          });
        });

        describe("isHeightResponsive", () => {
          describe("height", () => {
            test("should have 100%", () => {
              const { IconContainer } = setup();
        
              expect(IconContainer).toHaveStyleRule("height", "100%", {
                modifier: "svg"
              });
            });
          });
        });
      });
    });
  });

  describe("Text", () => {
    test("should render correct text passed via label props", () => {
      const { Text } = setup({
        label: "Javascript"
      });

      expect(Text.textContent).toEqual("Javascript");
    });

    describe("Props", () => {      
      describe("color", () => {
        test("should have correct value passed via labelColor props", () => {
          const { Text } = setup({
            labelColor: "blue500"
          });

          expect(Text).toHaveStyleRule("color", "#2b595e");
        });
      });

      describe("fontSize", () => {
        test("should have 16px when size is small", () => {
          const { Text } = setup({
            size: "small"
          });

          expect(Text).toHaveStyleRule("font-size", "16px");
        });

        test("should have 20px when size is medium", () => {
          const { Text } = setup({
            size: "medium"
          });

          expect(Text).toHaveStyleRule("font-size", "20px");
        });

        test("should have 24px when size is large", () => {
          const { Text } = setup({
            size: "large"
          });

          expect(Text).toHaveStyleRule("font-size", "24px");
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
    });
  });
});

interface Setup extends RenderResult {
  FlexContainer: Element;
  Icon: SVGSVGElement;
  IconContainer: Element;
  SpacingContainer: Element;
  Text: Element;
}

type IconWithLabelTestProps = Partial<IconWithLabelProps>;

function setup(addedProps?: IconWithLabelTestProps): Setup {
  const props: IconWithLabelProps = {
    iconName: "brandJS",
    label: "/",
    labelColor: "blue300",
    size: "small",
    ...addedProps
  };
  
  const utils: RenderResult = renderWithTheme(
    <IconWithLabel {...props} />
  );

  const { queryByTestId }: RenderResult = utils;

  const FlexContainer: Element = queryByTestId("IconWithLabel");
  const Icon: SVGSVGElement = document.querySelector("svg");
  const IconContainer: Element = queryByTestId("IconContainer");
  const SpacingContainer: Element = queryByTestId("IconWithLabelSpacingContainer");
  const Text: Element = queryByTestId("LabelText");

  return {
    ...utils,
    FlexContainer,
    Icon,
    IconContainer,
    SpacingContainer,
    Text
  };
} 
