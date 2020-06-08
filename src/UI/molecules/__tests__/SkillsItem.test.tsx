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
      HexagonInnerContainer,
      IconsWithLabels,
      SpacingContainer,
      Text
    } = setup();

    expect(HexagonInnerContainer.children[0]).toEqual(Text);
    expect(HexagonInnerContainer.children[1]).toEqual(SpacingContainer);
    expect(SpacingContainer.children[0]).toEqual(IconsWithLabels);
  });

  describe("Text", () => { 
    test("should have correct content passed via title props", () => {
      const { Text } = setup({
        title: "Title"
      });

      expect(Text.textContent).toEqual("Title");
    });

    describe("Props", () => {
      describe("color", () => {
        test("should have #78b0b5", () => {
          const { Text } = setup();
  
          expect(Text).toHaveStyleRule("color", "#78b0b5");
        }); 
      });

      describe("fontSize", () => {
        test("should have 32px", () => {
          const { Text } = setup();
  
          expect(Text).toHaveStyleRule("font-size", "32px");
        }); 
      });

      describe("lineHeight", () => {
        test("should have 4rem", () => {
          const { Text } = setup();
  
          expect(Text).toHaveStyleRule("line-height", "4rem");
        }); 
      });

      describe("textAlign", () => {
        test("should have center", () => {
          const { Text } = setup();
  
          expect(Text).toHaveStyleRule("text-align", "center");
        }); 
      });

      describe("textTransform", () => {
        test("should have capitalize", () => {
          const { Text } = setup();
  
          expect(Text).toHaveStyleRule("text-transform", "capitalize");
        }); 
      });
    });
  });
  
  describe("SpacingContainer", () => {    
    describe("Props", () => {
      describe("marginTop", () => {      
        test("should have 1.6rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("margin-top", "1.6rem");
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

    test("there should be correct number of icons", () => {
      const { IconsWithLabels } = setup({
        iconsWithLabels
      });

      expect(IconsWithLabels.children[0].children.length).toEqual(2);
    });

    test("icons should render correct SVGs", () => {
      const { IconsWithLabels } = setup({
        iconsWithLabels
      });

      expect(IconsWithLabels.children[0].children[0].children[0].children[0].textContent).toEqual("Brand-JS.svg");
      expect(IconsWithLabels.children[0].children[0].children[1].children[0].textContent).toEqual("Brand-React.svg");
    });

    test("should have correct content passed via label props", () => {
      const { IconsWithLabels } = setup({
        iconsWithLabels
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
  HexagonInnerContainer: Element;
  IconFlexItems: Element[];
  IconsWithLabels: Element;
  SkillsItemContainer: Element;
  SpacingContainer: Element;
  Text: Element;
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
  const props: SkillsItemProps = {
    iconsWithLabels,
    title: "Languages",
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <SkillsItem {...props} />
  );

  const { queryByTestId, queryAllByTestId }: RenderResult = utils;

  const HexagonInnerContainer: Element = queryByTestId("HexagonInnerContainer");
  const IconFlexItems: Element[] = queryAllByTestId("FlexItem");
  const IconsWithLabels: Element = queryByTestId("IconsWithLabels");
  const SkillsItemContainer: Element = queryByTestId("SkillsItem");
  const SpacingContainer: Element = queryByTestId("SpacingContainer");
  const Text: Element = queryByTestId("Text");
  const VerticalIconsWithLabels: Element = queryByTestId("VerticalIconsWithLabels");

  return {
    ...utils,
    HexagonInnerContainer,
    IconFlexItems,
    IconsWithLabels,
    SkillsItemContainer,
    SpacingContainer,
    Text,
    VerticalIconsWithLabels
  };
}
