import React from "react";
import { RenderResult } from "@testing-library/react";

import SkillsItem from "<molecules>/SkillsItem";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import {
  SkillsItemProps
} from "<molecules>/__typings__/SkillsItem.d.ts";

import {
  IconWithLabelProps
} from "<molecules>/__typings__/IconWithLabel.d.ts";

describe("molecules / SkillsItem", () => {
  test("should have correct structure", () => {
    const {
      IconsWithLabels,
      SkillsItemContainer,
      SkillsItemSpacingContainer
    } = setup();

    expect(SkillsItemContainer.children[1].children[0].children[0].children[0]).toEqual(SkillsItemSpacingContainer);
    expect(SkillsItemSpacingContainer.children[0]).toEqual(IconsWithLabels);
  });

  describe("SkillsItemContainer", () => {
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

    const data = {
      iconsWithLabels,
      title: "Languages"
    };

    describe("Props", () => {
      describe("flex", () => {      
        test("should have 1 1 100%", () => {
          const { SkillsItemContainer } = setup({
            data
          });

          expect(SkillsItemContainer).toHaveStyleRule("flex", "1 1 100%");
        });
      });

      describe("shouldDisplayBorder", () => {   
        describe("border", () => {
          test("should have thin solid #78b0b5", () => {
            const { SkillsItemContainer } = setup({
              data
            });
      
            expect(SkillsItemContainer.children[1].children[0].children[0]).toHaveStyleRule("border", "thin solid #78b0b5");
          });
        });

        describe("box-shadow", () => {
          test("should have 0px 0px .8rem 0px #bcd8db", () => {
            const { SkillsItemContainer } = setup({
              data
            });
      
            expect(SkillsItemContainer.children[1].children[0].children[0]).toHaveStyleRule("box-shadow", "0px 0px .8rem 0px #bcd8db");
          });
        }); 
      });

      describe("title", () => {      
        test("should have correct content", () => {
          const { SkillsItemContainer } = setup({
            data
          });

          expect(SkillsItemContainer.children[0].textContent).toEqual("Languages");
        });
      });

      describe("titleFontSize", () => {      
        test("should have 28px", () => {
          const { SkillsItemContainer } = setup();

          expect(SkillsItemContainer.children[0]).toHaveStyleRule("font-size", "28px");
        });
      });
    });
  });
  
  describe("SkillsItemSpacingContainer", () => {    
    describe("Props", () => {
      describe("paddingBottom", () => {      
        test("should have 3.2rem", () => {
          const { SkillsItemSpacingContainer } = setup();

          expect(SkillsItemSpacingContainer).toHaveStyleRule("padding-bottom", "3.2rem");
        });
      });

      describe("paddingLeft", () => {      
        test("should have 3.2rem", () => {
          const { SkillsItemSpacingContainer } = setup();

          expect(SkillsItemSpacingContainer).toHaveStyleRule("padding-left", "3.2rem");
        });
      });

      describe("paddingRight", () => {      
        test("should have 3.2rem", () => {
          const { SkillsItemSpacingContainer } = setup();

          expect(SkillsItemSpacingContainer).toHaveStyleRule("padding-right", "3.2rem");
        });
      });

      describe("paddingTop", () => {      
        test("should have 3.2rem", () => {
          const { SkillsItemSpacingContainer } = setup();

          expect(SkillsItemSpacingContainer).toHaveStyleRule("padding-top", "3.2rem");
        });
      });
    });
  });

  describe("IconsWithLabels", () => {
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

    const data = {
      iconsWithLabels,
      title: "Languages"
    };

    test("there should be correct number of icons", () => {

      const { IconsWithLabels } = setup({
        data
      });

      expect(IconsWithLabels.children[0].children.length).toEqual(2);
    });

    test("icons should render correct SVGs", () => {
      const { IconsWithLabels } = setup({
        data
      });

      expect(IconsWithLabels.children[0].children[0].children[0].children[0].textContent).toEqual("Brand-JS.svg");
      expect(IconsWithLabels.children[0].children[0].children[1].children[0].textContent).toEqual("Brand-React.svg");
    });

    test("should have correct content passed via data.iconsWithLanels['label'] prop", () => {
      const { IconsWithLabels } = setup({
        data
      });

      expect(IconsWithLabels.children[0].children[1].children[0].children[0].textContent).toEqual("Javascript");
      expect(IconsWithLabels.children[0].children[1].children[1].children[0].textContent).toEqual("React");
    });

    describe("Props", () => {
      describe("position", () => {      
        test("should have vertical", () => {
          const {
            IconsWithLabels,
            VerticalIconsWithLabels
          } = setup();

          expect(IconsWithLabels.children[0]).toEqual(VerticalIconsWithLabels);
        });
      });

      describe("size", () => {      
        test("should have medium", () => {
          const { IconsWithLabels } = setup();

          expect(IconsWithLabels).toHaveStyleRule("margin-left", "1.2rem", {
            modifier: "& > *"
          });
          expect(IconsWithLabels).toHaveStyleRule("margin-left", "0", {
            modifier: "& > *:first-child"
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  IconFlexItems: Element[];
  IconsWithLabels: Element;
  SkillsItemContainer: Element;
  SkillsItemSpacingContainer: Element;
  VerticalIconsWithLabels: Element;
}

type SkillsItemTestProps = Partial<SkillsItemProps>;

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

function setup(additionalProps?: SkillsItemTestProps): Setup {
  const data = {
    iconsWithLabels,
    title: "Languages"
  };

  const props: SkillsItemProps = {
    data,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <SkillsItem {...props} />
  );

  const { queryByTestId, queryAllByTestId }: RenderResult = utils;

  const IconFlexItems: Element[] = queryAllByTestId("FlexItem");
  const IconsWithLabels: Element = queryByTestId("IconsWithLabels");
  const SkillsItemContainer: Element = queryByTestId("SkillsItem");
  const SkillsItemSpacingContainer: Element = queryByTestId("SkillsItemSpacingContainer");
  const VerticalIconsWithLabels: Element = queryByTestId("VerticalIconsWithLabels");

  return {
    ...utils,
    IconFlexItems,
    IconsWithLabels,
    SkillsItemContainer,
    SkillsItemSpacingContainer,
    VerticalIconsWithLabels
  };
}
