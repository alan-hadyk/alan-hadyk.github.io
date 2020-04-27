import React from "react";
import { RenderResult } from "@testing-library/react";

import IconsWithLabels from "<src>/UI/molecules/IconsWithLabels";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { IconsWithLabelsProps } from "<molecules>/__typings__/IconsWithLabels.d.ts";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("molecules / IconsWithLabels", () => {
  test("should have correct structure", () => {
    const {
      FlexContainer,
      IconContainers,
      IconsWithLabelsList,
      Icons,
      SpacingContainers,
      Texts
    } = setup();

    expect(FlexContainer.children[0]).toEqual(IconsWithLabelsList[0]);
    expect(FlexContainer.children[1]).toEqual(IconsWithLabelsList[1]);

    IconsWithLabelsList.forEach((IconWithLabel, index) => {
      expect(IconWithLabel.children[0]).toEqual(SpacingContainers[index]);
      expect(IconWithLabel.children[1]).toEqual(Texts[index]);
      expect(SpacingContainers[index].children[0]).toEqual(IconContainers[index]);
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
        test("should have row nowrap when position is horizontal", () => {
          const { FlexContainer } = setup({
            position: "horizontal"
          });

          expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });

        test("should have column nowrap when position is vertical", () => {
          const { FlexContainer } = setup({
            position: "vertical"
          });

          expect(FlexContainer).toHaveStyleRule("flex-flow", "column nowrap");
        });
      });

      describe("gap", () => {
        describe("paddingLeft", () => {
          test("should have 1.6rem for all children except the first one when size is small and position is horizontal", () => {
            const { FlexContainer } = setup({
              position: "horizontal",
              size: "small"
            });
            
            expect(FlexContainer).toHaveStyleRule("padding-left", "1.6rem", {
              modifier: "& > *"
            });
            expect(FlexContainer).toHaveStyleRule("padding-left", "0", {
              modifier: "& > *:first-child"
            });
          });

          test("should have 1.2rem to all children except the first one when when size is medium and position is horizontal", () => {
            const { FlexContainer } = setup({
              position: "horizontal",
              size: "medium"
            });
            
            expect(FlexContainer).toHaveStyleRule("padding-left", "1.2rem", {
              modifier: "& > *"
            });
            expect(FlexContainer).toHaveStyleRule("padding-left", "0", {
              modifier: "& > *:first-child"
            });
          });
    
          test("should have 2.8rem to all children except the first one when when size is large and position is horizontal", () => {
            const { FlexContainer } = setup({
              position: "horizontal",
              size: "large"
            });
            
            expect(FlexContainer).toHaveStyleRule("padding-left", "2.8rem", {
              modifier: "& > *"
            });
            expect(FlexContainer).toHaveStyleRule("padding-left", "0", {
              modifier: "& > *:first-child"
            });
          });
        });

        describe("paddingTop", () => {
          test("should have 1.6rem for all children except the first one when size is small and position is vertical", () => {
            const { FlexContainer } = setup({
              position: "vertical",
              size: "small"
            });
            
            expect(FlexContainer).toHaveStyleRule("padding-top", "1.6rem", {
              modifier: "& > *"
            });
            expect(FlexContainer).toHaveStyleRule("padding-top", "0", {
              modifier: "& > *:first-child"
            });
          });

          test("should have 1.2rem to all children except the first one when when size is medium and position is vertical", () => {
            const { FlexContainer } = setup({
              position: "vertical",
              size: "medium"
            });
            
            expect(FlexContainer).toHaveStyleRule("padding-top", "1.2rem", {
              modifier: "& > *"
            });
            expect(FlexContainer).toHaveStyleRule("padding-top", "0", {
              modifier: "& > *:first-child"
            });
          });
    
          test("should have 2.8rem to all children except the first one when when size is large and position is vertical", () => {
            const { FlexContainer } = setup({
              position: "vertical",
              size: "large"
            });
            
            expect(FlexContainer).toHaveStyleRule("padding-top", "2.8rem", {
              modifier: "& > *"
            });
            expect(FlexContainer).toHaveStyleRule("padding-top", "0", {
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
          describe("should have correct color passed via color props", () => {
            const { Texts } = setup({
              color: "blue200"
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
});

interface Setup extends RenderResult {
  FlexContainer: Element;
  IconContainers: Element[];
  Icons: NodeListOf<SVGSVGElement>;
  IconsWithLabelsList: Element[];
  SpacingContainers: Element[];
  Texts: Element[];
}

type IconsWithLabelsTestProps = Partial<IconsWithLabelsProps>;

function setup(addedProps?: IconsWithLabelsTestProps): Setup {
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
    color: "blue200",
    iconsWithLabels,
    position: "horizontal",
    size: "small",
    ...addedProps
  };
  
  const utils: RenderResult = renderWithTheme(
    <IconsWithLabels {...props} />
  );

  const { queryAllByTestId }: RenderResult = utils;

  const FlexContainer: Element = queryAllByTestId("IconsWithLabels")[0];
  const IconContainers: Element[] = queryAllByTestId("IconContainer");
  const Icons: NodeListOf<SVGSVGElement> = document.querySelectorAll("svg");
  const IconsWithLabelsList: Element[] = queryAllByTestId("IconWithLabel");
  const SpacingContainers: Element[] = queryAllByTestId("SpacingContainer");
  const Texts: Element[] = queryAllByTestId("Text");

  return {
    ...utils,
    FlexContainer,
    IconContainers,
    Icons,
    IconsWithLabelsList,
    SpacingContainers,
    Texts
  };
}
