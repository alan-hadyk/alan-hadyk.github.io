import React from "react";
import { RenderResult } from "@testing-library/react";

import IconsWithLabels from "<molecules>/IconsWithLabels";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { IconsWithLabelsProps } from "<molecules>/__typings__/IconsWithLabels.d.ts";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("molecules / IconsWithLabels", () => {
  test("should have correct structure when position is vertical", () => {
    const {
      FlexContainer,
      FlexItems,
      IconContainers,
      Icons,
      IconSpacingContainers,
      LabelSpacingContainers,
      Texts,
      VerticalIconsWithLabels
    } = setup({
      position: "vertical"
    });

    expect(FlexContainer.children[0]).toEqual(VerticalIconsWithLabels);

    expect(VerticalIconsWithLabels.children[0]).toEqual(FlexItems[0]);
    expect(VerticalIconsWithLabels.children[1]).toEqual(FlexItems[1]);

    IconSpacingContainers.forEach((IconSpacingContainer, index) => {
      expect(IconSpacingContainer.children[0]).toEqual(IconContainers[index]);
      expect(IconContainers[index].children[0]).toEqual(Icons[index]); 
    });

    LabelSpacingContainers.forEach((LabelSpacingContainer, index) => {
      expect(LabelSpacingContainer.children[0]).toEqual(Texts[index]);
    });
  });

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

  describe("FlexContainer", () => {    
    describe("Props", () => {
      describe("alignItems", () => {      
        test("should have flex-start", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("align-items", "flex-start");
        });
      });

      describe("flexFlow", () => {      
        test("should have row wrap when position is horizontal", () => {
          const { FlexContainer } = setup({
            position: "horizontal"
          });

          expect(FlexContainer).toHaveStyleRule("flex-flow", "row wrap");
        });

        test("should have row nowrap when position is vertical", () => {
          const { FlexContainer } = setup({
            position: "vertical"
          });

          expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });
      });

      describe("gap", () => {
        describe("margin-right, margin-bottom when position is horizontal", () => {
          test("should have margin-right: 1.6rem and margin-bottom: 1.6rem in all children when size is small", () => {
            const { FlexContainer } = setup({
              position: "horizontal",
              size: "small"
            });
            
            expect(FlexContainer).toHaveStyleRule("margin-right", "1.6rem", {
              modifier: "& > *"
            });
            expect(FlexContainer).toHaveStyleRule("margin-bottom", "1.6rem", {
              modifier: "& > *"
            });
          });

          test("should have margin-right: 1.2rem and margin-bottom: 1.2rem in all children when size is medium", () => {
            const { FlexContainer } = setup({
              position: "horizontal",
              size: "medium"
            });
            
            expect(FlexContainer).toHaveStyleRule("margin-right", "1.2rem", {
              modifier: "& > *"
            });
            expect(FlexContainer).toHaveStyleRule("margin-bottom", "1.2rem", {
              modifier: "& > *"
            });
          });

          test("should have margin-right: 2.8rem and margin-bottom: 2.8rem in all children when size is large", () => {
            const { FlexContainer } = setup({
              position: "horizontal",
              size: "large"
            });
            
            expect(FlexContainer).toHaveStyleRule("margin-right", "2.8rem", {
              modifier: "& > *"
            });
            expect(FlexContainer).toHaveStyleRule("margin-bottom", "2.8rem", {
              modifier: "& > *"
            });
          });
        });

        describe("margin-left when position is vertical", () => {
          test("should have margin-left: 1.6rem for all children (except first) when size is small", () => {
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

          test("should have margin-left: 1.2rem for all children (except first) when size is medium", () => {
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

          test("should have margin-left: 2.8rem for all children (except first) when size is large", () => {
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
        test("should have flex-start when position is horizontal", () => {
          const { FlexContainer } = setup({
            position: "horizontal"
          });

          expect(FlexContainer).toHaveStyleRule("justify-content", "flex-start");
        });

        test("should have center when position is vertical", () => {
          const { FlexContainer } = setup({
            position: "vertical"
          });

          expect(FlexContainer).toHaveStyleRule("justify-content", "center");
        });
      });
    });
  });

  describe("IconWithLabel", () => {
    describe("Icon", () => {
      test("there should be correct number of icons", () => {
        const { Icons } = setup();
  
        expect(Icons.length).toEqual(2);
      });
  
      test("icons should render correct SVGs", () => {
        const { Icons } = setup();
  
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
        });
      });
    });

    describe("Text", () => {
      describe("Props", () => {
        describe("label", () => {
          test("should have correct content passed via label props", () => {
            const { Texts } = setup();
  
            expect(Texts[0].textContent).toEqual("Javascript");
            expect(Texts[1].textContent).toEqual("React");
          });
        });

        describe("color", () => {
          test("should have #bcd8db by default", () => {
            const { Texts } = setup();
  
            Texts.forEach((Text) => {
              expect(Text).toHaveStyleRule("color", "#bcd8db");
            });
          });

          test("should have correct color passed via labelColor props", () => {
            const { Texts } = setup({
              labelColor: "blue200"
            });
  
            Texts.forEach((Text) => {
              expect(Text).toHaveStyleRule("color", "#67d2df");
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
  VerticalIconsWithLabels: Element;
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
  const VerticalIconsWithLabels: Element = queryAllByTestId("VerticalIconsWithLabels")[0];

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
    Texts,
    VerticalIconsWithLabels
  };
} 
