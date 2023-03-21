import { RenderResult } from "@testing-library/react";

import VerticalIconsWithLabels from "UI/molecules/VerticalIconsWithLabels";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { IconWithLabelProps } from "UI/molecules/__typings__/IconWithLabel";

import { VerticalIconsWithLabelsProps } from "UI/molecules/__typings__/VerticalIconsWithLabels";

jest.mock("helpers/browser/isIE11", () => jest.fn());

describe("molecules / VerticalIconsWithLabels", () => {
  test("should have correct structure", () => {
    const {
      FlexContainer,
      FlexItems,
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
      expect(IconSpacingContainer.children[0]).toEqual(Icons[index]);
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
          test("should have 0 0 75%", () => {
            const { FlexItems } = setup();

            expect(FlexItems[1]).toHaveStyleRule("flex", "0 0 75%");
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

            expect(IconSpacingContainers[0]).toHaveStyleRule(
              "margin-bottom",
              "1.2rem"
            );
          });
        });
      });
    });

    describe("LabelSpacingContainer", () => {
      describe("Props", () => {
        describe("height", () => {
          test("should have 3.2rem", () => {
            const { LabelSpacingContainers } = setup();

            expect(LabelSpacingContainers[0]).toHaveStyleRule(
              "height",
              "3.2rem"
            );
          });
        });

        describe("marginBottom", () => {
          test("should have 1.2rem", () => {
            const { LabelSpacingContainers } = setup();

            expect(LabelSpacingContainers[0]).toHaveStyleRule(
              "margin-bottom",
              "1.2rem"
            );
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

    test("icons should render correct images", () => {
      const { Icons } = setup({
        iconsWithLabels
      });

      expect(Icons[0].getAttribute("src")).toEqual("/images/svg/brandJS.svg");
      expect(Icons[1].getAttribute("src")).toEqual(
        "/images/svg/brandReact.svg"
      );
    });

    describe("IconContainer", () => {
      describe("Props", () => {
        describe("height", () => {
          test("should have 2.8rem for small size", () => {
            const { Icons } = setup({
              size: "small"
            });

            Icons.forEach((Icon) => {
              expect(Icon).toHaveStyleRule("height", "2.8rem");
            });
          });

          test("should have 3.2rem for medium size", () => {
            const { Icons } = setup({
              size: "medium"
            });

            Icons.forEach((Icon) => {
              expect(Icon).toHaveStyleRule("height", "3.2rem");
            });
          });

          test("should have 4rem for large size", () => {
            const { Icons } = setup({
              size: "large"
            });

            Icons.forEach((Icon) => {
              expect(Icon).toHaveStyleRule("height", "4rem");
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
        test("should have correct content passed via label prop", () => {
          const { Texts } = setup({
            iconsWithLabels
          });

          expect(Texts[0].textContent).toEqual("Javascript");
          expect(Texts[1].textContent).toEqual("React");
        });
      });

      describe("color", () => {
        test("should have #bcd8db by dafault", () => {
          const { Texts } = setup();

          Texts.forEach((Text) => {
            expect(Text).toHaveStyleRule("color", "#bcd8db");
          });
        });

        test("should have correct color passed via labelColor prop", () => {
          const { Texts } = setup({
            labelColor: "blue200"
          });

          Texts.forEach((Text) => {
            expect(Text).toHaveStyleRule("color", "#67d2df");
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
        test("should have 3.2rem", () => {
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
  IconSpacingContainers: Element[];
  Icons: Element[];
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
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <VerticalIconsWithLabels {...props} />
  );

  const { queryAllByTestId }: RenderResult = utils;

  const FlexContainer: Element = queryAllByTestId("VerticalIconsWithLabels")[0];
  const FlexItems: Element[] = queryAllByTestId("FlexItem");
  const Icons: Element[] = queryAllByTestId("IconImage");
  const LabelSpacingContainers: Element[] = queryAllByTestId(
    "LabelSpacingContainer"
  );
  const IconSpacingContainers: Element[] = queryAllByTestId(
    "IconSpacingContainer"
  );
  const Texts: Element[] = queryAllByTestId("LabelText");

  return {
    ...utils,
    FlexContainer,
    FlexItems,
    IconSpacingContainers,
    Icons,
    LabelSpacingContainers,
    Texts
  };
}
