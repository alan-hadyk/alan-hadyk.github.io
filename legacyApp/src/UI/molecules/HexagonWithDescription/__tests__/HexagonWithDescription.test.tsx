import { RenderResult } from "@testing-library/react";

import HexagonWithDescription from "UI/molecules/HexagonWithDescription";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { HexagonWithDescriptionProps } from "UI/molecules/HexagonWithDescription/__typings__/HexagonWithDescription";

import isIE11 from "helpers/browser/isIE11";

jest.mock("helpers/browser/isIE11", () => jest.fn());

describe("molecules / HexagonWithDescription", () => {
  test("should have correct structure", () => {
    const {
      HexagonWithDescriptionContainer,
      HexagonWithDescriptionContents,
      ResponsiveMobile,
      ResponsiveTablet,
      ResponsiveTvDesktop
    } = setup();

    expect(HexagonWithDescriptionContainer.children[0]).toEqual(
      ResponsiveTvDesktop
    );
    expect(HexagonWithDescriptionContainer.children[1]).toEqual(
      ResponsiveTablet
    );
    expect(HexagonWithDescriptionContainer.children[2]).toEqual(
      ResponsiveMobile
    );

    expect(ResponsiveTvDesktop.children[0]).toEqual(
      HexagonWithDescriptionContents[0]
    );
    expect(ResponsiveTablet.children[0]).toEqual(
      HexagonWithDescriptionContents[1]
    );
    expect(ResponsiveMobile.children[0]).toEqual(
      HexagonWithDescriptionContents[2]
    );
  });

  describe("HexagonWithDescriptionContainer", () => {
    describe("Props", () => {
      describe("marginLeft", () => {
        test("should have auto", () => {
          const { HexagonWithDescriptionContainer } = setup();

          expect(HexagonWithDescriptionContainer).toHaveStyleRule(
            "margin-left",
            "auto"
          );
        });
      });

      describe("marginRight", () => {
        test("should have auto", () => {
          const { HexagonWithDescriptionContainer } = setup();

          expect(HexagonWithDescriptionContainer).toHaveStyleRule(
            "margin-right",
            "auto"
          );
        });
      });

      describe("maxWidth", () => {
        test("should have 105.6rem", () => {
          const { HexagonWithDescriptionContainer } = setup();

          expect(HexagonWithDescriptionContainer).toHaveStyleRule(
            "max-width",
            "105.6rem"
          );
        });
      });
    });
  });

  describe("ResponsiveTvDesktop", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have tv, desktop", () => {
          test("should have display block when min-width is 1681px", () => {
            const { ResponsiveTvDesktop } = setup();

            expect(ResponsiveTvDesktop).toHaveStyleRule("display", "block", {
              media: "(min-width:1681px)"
            });

            expect(ResponsiveTvDesktop).toHaveStyleRule("display", "block", {
              media: "(min-width:1281px) and (max-width:1680px)"
            });
          });
        });
      });
    });
  });

  describe("ResponsiveTablet", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have tablet", () => {
          test("should have display block when min-width is 641px and max-width is 1280px", () => {
            const { ResponsiveTablet } = setup();

            expect(ResponsiveTablet).toHaveStyleRule("display", "block", {
              media: "(min-width:641px) and (max-width:1280px)"
            });
          });
        });
      });
    });
  });

  describe("ResponsiveMobile", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have mobile", () => {
          test("should have display block when max-width is 640px", () => {
            const { ResponsiveMobile } = setup();

            expect(ResponsiveMobile).toHaveStyleRule("display", "block", {
              media: "(max-width:640px)"
            });
          });
        });
      });
    });
  });

  describe("HexagonWithDescriptionContents", () => {
    test("should render children", () => {
      const { HexagonWithDescriptionContents } = setup({
        children: <div>Custom image</div>
      });

      HexagonWithDescriptionContents.forEach(
        (HexagonWithDescriptionContent: Element) => {
          expect(
            HexagonWithDescriptionContent.children[0].children[0].children[1]
              .textContent
          ).toEqual("Custom image");
        }
      );
    });

    describe("Props", () => {
      describe("description", () => {
        test("should render correct content passed via description prop", () => {
          const { HexagonWithDescriptionContents } = setup({
            description: <span>Custom text</span>
          });

          HexagonWithDescriptionContents.forEach(
            (HexagonWithDescriptionContent: Element) => {
              expect(
                HexagonWithDescriptionContent.children[1].children[0]
                  .textContent
              ).toEqual("Custom text");
            }
          );
        });
      });

      describe("flexFlow", () => {
        test("should have row nowrap for first element", () => {
          const { HexagonWithDescriptionContents } = setup();

          expect(HexagonWithDescriptionContents[0]).toHaveStyleRule(
            "flex-flow",
            "row nowrap"
          );
        });

        test("should have column nowrap for second and third element", () => {
          const { HexagonWithDescriptionContents } = setup();

          expect(HexagonWithDescriptionContents[1]).toHaveStyleRule(
            "flex-flow",
            "column nowrap"
          );
          expect(HexagonWithDescriptionContents[2]).toHaveStyleRule(
            "flex-flow",
            "column nowrap"
          );
        });
      });

      describe("lineHeight", () => {
        test("should have 2.8rem for third element", () => {
          const { HexagonWithDescriptionContents } = setup();

          expect(HexagonWithDescriptionContents[2].children[1]).toHaveStyleRule(
            "line-height",
            "2.8rem"
          );
        });
      });

      describe("marginBottom", () => {
        test("should have 0 for first element", () => {
          const { HexagonWithDescriptionContents } = setup();

          expect(HexagonWithDescriptionContents[0].children[0]).toHaveStyleRule(
            "margin-bottom",
            "0"
          );
        });

        test("should have 4.8rem for second and thirdelement", () => {
          const { HexagonWithDescriptionContents } = setup();

          expect(HexagonWithDescriptionContents[1].children[0]).toHaveStyleRule(
            "margin-bottom",
            "4.8rem"
          );
          expect(HexagonWithDescriptionContents[2].children[0]).toHaveStyleRule(
            "margin-bottom",
            "4.8rem"
          );
        });
      });

      describe("marginRight", () => {
        test("should have 4.8rem for first element", () => {
          const { HexagonWithDescriptionContents } = setup();

          expect(HexagonWithDescriptionContents[0].children[0]).toHaveStyleRule(
            "margin-right",
            "4.8rem"
          );
        });

        test("should have 0 for second and thirdelement", () => {
          const { HexagonWithDescriptionContents } = setup();

          expect(HexagonWithDescriptionContents[1].children[0]).toHaveStyleRule(
            "margin-right",
            "0"
          );
          expect(HexagonWithDescriptionContents[2].children[0]).toHaveStyleRule(
            "margin-right",
            "0"
          );
        });
      });

      describe("textWidth", () => {
        test("should have 50% for first element", () => {
          const { HexagonWithDescriptionContents } = setup();

          expect(HexagonWithDescriptionContents[0].children[1]).toHaveStyleRule(
            "width",
            "50%"
          );
        });

        test("should have 80% for second element", () => {
          const { HexagonWithDescriptionContents } = setup();

          expect(HexagonWithDescriptionContents[1].children[1]).toHaveStyleRule(
            "width",
            "80%"
          );
        });
      });

      describe("width", () => {
        test("should have 50% for first element ", () => {
          const { HexagonWithDescriptionContents } = setup();

          expect(HexagonWithDescriptionContents[0].children[0]).toHaveStyleRule(
            "width",
            "50%"
          );
        });

        test("should have 60% for second element if isIE11 returns false", () => {
          const mocksiIE11 = (isIE11 as unknown) as jest.Mock;
          mocksiIE11.mockImplementation(() => false);

          const { HexagonWithDescriptionContents } = setup();

          expect(HexagonWithDescriptionContents[1].children[0]).toHaveStyleRule(
            "width",
            "60%"
          );
        });

        test("should have 100% for third element if isIE11 returns false", () => {
          const mocksiIE11 = (isIE11 as unknown) as jest.Mock;
          mocksiIE11.mockImplementation(() => false);

          const { HexagonWithDescriptionContents } = setup();

          expect(HexagonWithDescriptionContents[2].children[0]).toHaveStyleRule(
            "width",
            "100%"
          );
        });

        test("should have auto for second and third element if isIE11 returns true", () => {
          const mocksiIE11 = (isIE11 as unknown) as jest.Mock;
          mocksiIE11.mockImplementation(() => true);

          const { HexagonWithDescriptionContents } = setup();

          expect(HexagonWithDescriptionContents[1].children[0]).toHaveStyleRule(
            "width",
            "auto"
          );

          expect(HexagonWithDescriptionContents[2].children[0]).toHaveStyleRule(
            "width",
            "auto"
          );
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  HexagonWithDescriptionContainer: Element;
  HexagonWithDescriptionContents: Element[];
  ResponsiveMobile: Element;
  ResponsiveTablet: Element;
  ResponsiveTvDesktop: Element;
}
type HexagonWithDescriptionTestProps = Partial<HexagonWithDescriptionProps>;

function setup(additionalProps?: HexagonWithDescriptionTestProps): Setup {
  const props: HexagonWithDescriptionProps = {
    children: <div>Image</div>,
    description: <span>Custom text</span>,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <HexagonWithDescription {...props}>{props.children}</HexagonWithDescription>
  );

  const { queryAllByTestId } = utils || {};

  const HexagonWithDescriptionContainer: Element = queryAllByTestId(
    "HexagonWithDescription"
  )[0];
  const HexagonWithDescriptionContents: Element[] = queryAllByTestId(
    "HexagonWithDescriptionContent"
  );
  const ResponsiveMobile: Element = queryAllByTestId("ResponsiveMobile")[0];
  const ResponsiveTablet: Element = queryAllByTestId("ResponsiveTablet")[0];
  const ResponsiveTvDesktop: Element = queryAllByTestId(
    "ResponsiveTvDesktop"
  )[0];

  return {
    ...utils,
    HexagonWithDescriptionContainer,
    HexagonWithDescriptionContents,
    ResponsiveMobile,
    ResponsiveTablet,
    ResponsiveTvDesktop
  };
}
