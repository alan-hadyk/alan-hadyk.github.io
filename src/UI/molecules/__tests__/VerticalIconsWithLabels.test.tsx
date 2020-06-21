import React from "react";
import { RenderResult } from "@testing-library/react";

import VerticalIconsWithLabels from "<molecules>/VerticalIconsWithLabels";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { IconWithLabelProps } from "<molecules>/__typings__/IconWithLabel.d.ts";

import { VerticalIconsWithLabelsProps } from "<molecules>/__typings__/VerticalIconsWithLabels.d.ts";

describe("molecules / VerticalIconsWithLabels", () => {
  test("should have correct structure", () => {
    const {
      FlexContainer,
      FlexItems,
      IconContainers,
      Icons,
      IconSpacingContainers,
      LabelSpacingContainers,
      Texts
    } = setup();

    expect(FlexContainer.children[0]).toEqual(FlexItems[0]);
    expect(FlexContainer.children[1]).toEqual(FlexItems[1]);
    
    expect(FlexItems[0].children[0]).toEqual(IconSpacingContainers[0]);
    expect(FlexItems[0].children[1]).toEqual(IconSpacingContainers[1]);

    expect(FlexItems[1].children[0]).toEqual(LabelSpacingContainers[0]);
    expect(FlexItems[1].children[1]).toEqual(LabelSpacingContainers[1]);
    
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
        test("should have center", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("justify-content", "center");
        });
      });
    });
  });

  describe("FlexItems", () => {
    describe("FlexItems[0]", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 0 7.2rem", () => {
            const { FlexItems } = setup();

            expect(FlexItems[0]).toHaveStyleRule("flex", "0 0 7.2rem");
          });
        });
      });
    });

    describe("FlexItems[1]", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 auto", () => {
            const { FlexItems } = setup();

            expect(FlexItems[1]).toHaveStyleRule("flex", "0 1 auto");
          });
        });
      });
    });
  });

  describe("SpacingContainers", () => {
    describe("IconSpacingContainer", () => {
      describe("Props", () => {
        describe("marginBottom", () => {
          test("should have 1.2rem", () => {
            const { IconSpacingContainers } = setup();
  
            expect(IconSpacingContainers[0]).toHaveStyleRule("margin-bottom", "1.2rem");
          });
        });
      });
    });

    describe("LabelSpacingContainer", () => {
      describe("Props", () => {
        describe("height", () => {
          test("should have 3.2rem", () => {
            const { LabelSpacingContainers } = setup();
  
            expect(LabelSpacingContainers[0]).toHaveStyleRule("height", "3.2rem");
          });
        });

        describe("marginBottom", () => {
          test("should have 1.2rem", () => {
            const { LabelSpacingContainers } = setup();
  
            expect(LabelSpacingContainers[0]).toHaveStyleRule("margin-bottom", "1.2rem");
          });
        });
      });
    });
  });

  describe("Icon", () => {
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

            IconContainers.forEach((IconContainer) => {
              expect(IconContainer).toHaveStyleRule("height", "2.8rem");
            });
          });
  
          test("should have 3.2rem for medium size", () => {
            const { IconContainers } = setup({
              size: "medium"
            });

            IconContainers.forEach((IconContainer) => {
              expect(IconContainer).toHaveStyleRule("height", "3.2rem");
            });
          });
  
          test("should have 4rem for large size", () => {
            const { IconContainers } = setup({
              size: "large"
            });

            IconContainers.forEach((IconContainer) => {
              expect(IconContainer).toHaveStyleRule("height", "4rem");
            });
          });
        });

        describe("isResponsive", () => {
          describe("height", () => {
            test("should have 100%", () => {
              const { IconContainers } = setup();
        
              IconContainers.forEach((IconContainer) => {
                expect(IconContainer).toHaveStyleRule("height", "100%", {
                  modifier: "svg"
                });
              });
            });
          });
  
          describe("width", () => {
            test("should have 100%", () => {
              const { IconContainers } = setup();
        
              IconContainers.forEach((IconContainer) => {
                expect(IconContainer).toHaveStyleRule("width", "100%", {
                  modifier: "svg"
                });
              });
            });
          });
        });
      });
    });
  });

  describe("Text", () => {
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
        test("should have correct color passed via labelColor props", () => {
          const { Texts } = setup({
            labelColor: "blue200"
          });

          Texts.forEach((Text) => {
            expect(Text).toHaveStyleRule("color", "#67d2df");
          });
        });

        test("should have #fff", () => {
          const { Texts } = setup({
            labelColor: "white"
          });

          Texts.forEach((Text) => {
            expect(Text).toHaveStyleRule("color", "#fff");
          });
        });
      });

      describe("ellipsis", () => {
        describe("text-overflow", () => {
          test("should have ellipsis", () => {
            const { Texts } = setup();

            Texts.forEach((Text) => {
              expect(Text).toHaveStyleRule("text-overflow", "ellipsis");
            });
          });
        });

        describe("overflow", () => {
          test("should have hidden", () => {
            const { Texts } = setup();

            Texts.forEach((Text) => {
              expect(Text).toHaveStyleRule("overflow", "hidden");
            });
          });
        });

        describe("white-space", () => {
          test("should have nowrap", () => {
            const { Texts } = setup();

            Texts.forEach((Text) => {
              expect(Text).toHaveStyleRule("white-space", "nowrap");
            });
          });
        });
      });

      describe("fontSize", () => {
        test("should have 16px when size is small", () => {
          const { Texts } = setup({
            size: "small"
          });

          Texts.forEach((Text) => {
            expect(Text).toHaveStyleRule("font-size", "16px");
          });
        });

        test("should have 20px when size is medium", () => {
          const { Texts } = setup({
            size: "medium"
          });

          Texts.forEach((Text) => {
            expect(Text).toHaveStyleRule("font-size", "20px");
          });
        });

        test("should have 24px when size is large", () => {
          const { Texts } = setup({
            size: "large"
          });

          Texts.forEach((Text) => {
            expect(Text).toHaveStyleRule("font-size", "24px");
          });
        });
      });

      describe("lineHeight", () => {
        describe("should have 3.2rem", () => {
          const { Texts } = setup({
            labelColor: "blue200"
          });

          Texts.forEach((Text) => {
            expect(Text).toHaveStyleRule("line-height", "3.2rem");
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
  Icons: NodeListOf<SVGSVGElement>;
  LabelSpacingContainers: Element[];
  Texts: Element[];
}

type VerticalIconsWithLabelsTestProps = Partial<VerticalIconsWithLabelsProps>;

function setup(additionalProps?: VerticalIconsWithLabelsTestProps): Setup {
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

  const props: VerticalIconsWithLabelsProps = {
    iconsWithLabels,
    labelColor: "blue200",
    size: "medium",
    ...additionalProps
  };
  
  const utils: RenderResult = renderWithTheme(
    <VerticalIconsWithLabels {...props} />
  );

  const { queryAllByTestId }: RenderResult = utils;

  const FlexContainer: Element = queryAllByTestId("VerticalIconsWithLabels")[0];
  const FlexItems: Element[] = queryAllByTestId("FlexItem");
  const IconContainers: Element[] = queryAllByTestId("IconContainer");
  const Icons: NodeListOf<SVGSVGElement> = document.querySelectorAll("svg");
  const LabelSpacingContainers: Element[] = queryAllByTestId("LabelSpacingContainer");
  const IconSpacingContainers: Element[] = queryAllByTestId("IconSpacingContainer");
  const Texts: Element[] = queryAllByTestId("LabelText");

  return {
    ...utils,
    FlexContainer,
    FlexItems,
    IconContainers,
    IconSpacingContainers,
    Icons,
    LabelSpacingContainers,
    Texts
  };
} 
