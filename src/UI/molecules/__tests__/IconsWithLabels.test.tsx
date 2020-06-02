import React from "react";
import { RenderResult } from "@testing-library/react";

import IconsWithLabels from "<src>/UI/molecules/IconsWithLabels";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { IconsWithLabelsProps } from "<molecules>/__typings__/IconsWithLabels.d.ts";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("molecules / IconsWithLabels", () => {
  test("should have correct structure when position is horizontal", () => {
    const {
      FlexContainer,
      IconContainers,
      IconsWithLabelsList,
      Icons,
      IconWithLabelSpacingContainers,
      Texts
    } = setup({
      position: "horizontal"
    });

    expect(FlexContainer.children[0]).toEqual(IconsWithLabelsList[0]);
    expect(FlexContainer.children[1]).toEqual(IconsWithLabelsList[1]);

    IconsWithLabelsList.forEach((IconWithLabel, index) => {
      expect(IconWithLabel.children[0]).toEqual(IconWithLabelSpacingContainers[index]);
      expect(IconWithLabel.children[1]).toEqual(Texts[index]);
      expect(IconWithLabelSpacingContainers[index].children[0]).toEqual(IconContainers[index]);
      expect(IconContainers[index].children[0]).toEqual(Icons[index]); 
    });
  });

  test("should have correct structure when position is vertical", () => {
    const {
      FlexContainer,
      FlexItems,
      IconContainers,
      Icons,
      IconSpacingContainers,
      LabelSpacingContainers,
      Texts
    } = setup({
      position: "vertical"
    });

    expect(FlexContainer.children[0]).toEqual(FlexItems[0]);
    expect(FlexContainer.children[1]).toEqual(FlexItems[1]);

    IconSpacingContainers.forEach((IconSpacingContainer, index) => {
      expect(IconSpacingContainer.children[0]).toEqual(IconContainers[index]);
      expect(IconContainers[index].children[0]).toEqual(Icons[index]); 
    });

    LabelSpacingContainers.forEach((LabelSpacingContainer, index) => {
      expect(LabelSpacingContainer.children[0]).toEqual(Texts[index]);
    });
  });

  describe("FlexContainer", () => {    
    describe("Props", () => {
      describe("alignItems", () => {      
        test("should have flex-start", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("align-items", "flex-start");
        });
      });

      describe("flexFlow", () => {      
        test("should have row nowrap", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });

      describe("gap", () => {
        describe("marginLeft", () => {
          test("should have 1.6rem for all children except the first one when size is small", () => {
            const { FlexContainer } = setup({
              size: "small"
            });
            
            expect(FlexContainer).toHaveStyleRule("margin-left", "1.6rem", {
              modifier: "& > *"
            });
            expect(FlexContainer).toHaveStyleRule("margin-left", "0", {
              modifier: "& > *:first-child"
            });
          });

          test("should have 1.2rem to all children except the first one when size is medium", () => {
            const { FlexContainer } = setup({
              size: "medium"
            });
            
            expect(FlexContainer).toHaveStyleRule("margin-left", "1.2rem", {
              modifier: "& > *"
            });
            expect(FlexContainer).toHaveStyleRule("margin-left", "0", {
              modifier: "& > *:first-child"
            });
          });
    
          test("should have 2.8rem to all children except the first one when size is large", () => {
            const { FlexContainer } = setup({
              size: "large"
            });
            
            expect(FlexContainer).toHaveStyleRule("margin-left", "2.8rem", {
              modifier: "& > *"
            });
            expect(FlexContainer).toHaveStyleRule("margin-left", "0", {
              modifier: "& > *:first-child"
            });
          });
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

      describe("margin", () => {      
        test("should have 0 auto", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("margin", "0 auto");
        });
      });

      describe("maxWidth", () => {      
        test("should have 50%", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("max-width", "50%");
        });
      });
    });
  });

  describe("FlexItems", () => {
    describe("FlexItems[0]", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 0 25%", () => {
            const { FlexItems } = setup({
              position: "vertical"
            });

            expect(FlexItems[0]).toHaveStyleRule("flex", "0 0 25%");
          });
        });

        describe("overflow", () => {
          test("should have hidden", () => {
            const { FlexItems } = setup({
              position: "vertical"
            });

            expect(FlexItems[0]).toHaveStyleRule("overflow", "hidden");
          });
        });
      });
    });

    describe("FlexItems[1]", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 0 75%", () => {
            const { FlexItems } = setup({
              position: "vertical"
            });

            expect(FlexItems[1]).toHaveStyleRule("flex", "0 0 75%");
          });
        });
      });
    });
  });

  describe("IconWithLabel", () => {
    const iconsWithLabels: IconWithLabelProps[] = [
      {
        iconName: "brandJS",
        label: "Javascript"
      },
      {
        iconName: "brandReact",
        label: "React"
      }
    ];

    describe("Icon", () => {
      test("there should be correct number of icons", () => {
        const { Icons } = setup({
          iconsWithLabels
        });
  
        expect(Icons.length).toEqual(2);
      });
  
      test("icons should render correct SVGs", () => {
        const { Icons } = setup({
          iconsWithLabels
        });
  
        expect(Icons[0].textContent).toEqual("Brand-JS.svg");
        expect(Icons[1].textContent).toEqual("Brand-React.svg");
      });

      describe("IconContainer", () => {
        describe("Props", () => {
          describe("height", () => {
            test("should have 2.8rem for small size", () => {
              const { IconContainers } = setup({
                size: "small"
              });
      
              expect(IconContainers[0]).toHaveStyleRule("height", "2.8rem");
              expect(IconContainers[1]).toHaveStyleRule("height", "2.8rem");
            });
    
            test("should have 3.2rem for medium size", () => {
              const { IconContainers } = setup({
                size: "medium"
              });
      
              expect(IconContainers[0]).toHaveStyleRule("height", "3.2rem");
              expect(IconContainers[1]).toHaveStyleRule("height", "3.2rem");
            });
    
            test("should have 4rem for large size", () => {
              const { IconContainers } = setup({
                size: "large"
              });
      
              expect(IconContainers[0]).toHaveStyleRule("height", "4rem");
              expect(IconContainers[1]).toHaveStyleRule("height", "4rem");
            });
          });
        });
      });
    });

    describe("Text", () => {
      describe("Props", () => {
        describe("label", () => {
          describe("should have correct content passed via label props", () => {
            const { Texts } = setup({
              iconsWithLabels
            });
  
            expect(Texts[0].textContent).toEqual("Javascript");
            expect(Texts[1].textContent).toEqual("React");
          });
        });

        describe("color", () => {
          describe("should have correct color passed via labelColor props", () => {
            const { Texts } = setup({
              labelColor: "blue200"
            });
  
            expect(Texts[0]).toHaveStyleRule("color", "#67d2df");
            expect(Texts[1]).toHaveStyleRule("color", "#67d2df");
          });
        });

        describe("fontSize", () => {
          test("should have 16px when size is small", () => {
            const { Texts } = setup({
              size: "small"
            });
  
            expect(Texts[0]).toHaveStyleRule("font-size", "16px");
            expect(Texts[1]).toHaveStyleRule("font-size", "16px");
          });
  
          test("should have 20px when size is medium", () => {
            const { Texts } = setup({
              size: "medium"
            });
  
            expect(Texts[0]).toHaveStyleRule("font-size", "20px");
            expect(Texts[1]).toHaveStyleRule("font-size", "20px");
          });
  
          test("should have 24px when size is large", () => {
            const { Texts } = setup({
              size: "large"
            });
  
            expect(Texts[0]).toHaveStyleRule("font-size", "24px");
            expect(Texts[1]).toHaveStyleRule("font-size", "24px");
          });
        });
      });
    });
  });

  describe("SpacingContainer", () => {
    describe("IconSpacingContainer", () => {
      describe("Props", () => {
        describe("marginBottom", () => {
          test("should have 1.2rem", () => {
            const { IconSpacingContainers } = setup({
              position: "vertical"
            });
  
            expect(IconSpacingContainers[0]).toHaveStyleRule("margin-bottom", "1.2rem");
          });
        });
      });
    });

    describe("LabelSpacingContainer", () => {
      describe("Props", () => {
        describe("marginBottom", () => {
          test("should have 1.2rem", () => {
            const { LabelSpacingContainers } = setup({
              position: "vertical"
            });
  
            expect(LabelSpacingContainers[0]).toHaveStyleRule("margin-bottom", "1.2rem");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  FlexContainer: Element;
  FlexItems: Element[];
  IconContainers: Element[];
  IconSpacingContainers: Element[];
  IconWithLabelSpacingContainers: Element[];
  Icons: NodeListOf<SVGSVGElement>;
  IconsWithLabelsList: Element[];
  LabelSpacingContainers: Element[];
  Texts: Element[];
}

type IconsWithLabelsTestProps = Partial<IconsWithLabelsProps>;

function setup(additionalProps?: IconsWithLabelsTestProps): Setup {
  const iconsWithLabels: IconWithLabelProps[] = [
    {
      iconName: "brandJS",
      label: "Javascript"
    },
    {
      iconName: "brandReact",
      label: "React"
    }
  ];

  const props: IconsWithLabelsProps = {
    iconsWithLabels,
    labelColor: "blue200",
    position: "horizontal",
    size: "small",
    ...additionalProps
  };
  
  const utils: RenderResult = renderWithTheme(
    <IconsWithLabels {...props} />
  );

  const { queryAllByTestId }: RenderResult = utils;

  const FlexContainer: Element = queryAllByTestId("IconsWithLabels")[0];
  const FlexItems: Element[] = queryAllByTestId("FlexItem");
  const IconContainers: Element[] = queryAllByTestId("IconContainer");
  const Icons: NodeListOf<SVGSVGElement> = document.querySelectorAll("svg");
  const IconsWithLabelsList: Element[] = queryAllByTestId("IconWithLabel");
  const IconWithLabelSpacingContainers: Element[] = queryAllByTestId("IconWithLabelSpacingContainer");
  const LabelSpacingContainers: Element[] = queryAllByTestId("LabelSpacingContainer");
  const IconSpacingContainers: Element[] = queryAllByTestId("IconSpacingContainer");
  const Texts: Element[] = queryAllByTestId("LabelText");

  return {
    ...utils,
    FlexContainer,
    FlexItems,
    IconContainers,
    IconSpacingContainers,
    IconWithLabelSpacingContainers,
    Icons,
    IconsWithLabelsList,
    LabelSpacingContainers,
    Texts
  };
} 
