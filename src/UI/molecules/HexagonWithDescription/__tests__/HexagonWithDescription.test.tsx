import React from "react";
import { RenderResult } from "@testing-library/react";

import HexagonWithDescription from "<molecules>/HexagonWithDescription";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

import { HexagonWithDescriptionProps } from "<molecules>/HexagonWithDescription/__typings__/HexagonWithDescription.d.ts";

describe("molecules / HexagonWithDescription", () => {
  test("should have correct structure", () => {
    const {
      HexagonWithDescriptionContainer,
      HexagonWithDescriptionContents,
      ResponsiveDesktop,
      ResponsiveMobile,
      ResponsiveTablet,
      ResponsiveTv
    } = setup();

    expect(HexagonWithDescriptionContainer.children[0]).toEqual(ResponsiveTv);
    expect(HexagonWithDescriptionContainer.children[1]).toEqual(
      ResponsiveDesktop
    );
    expect(HexagonWithDescriptionContainer.children[2]).toEqual(
      ResponsiveTablet
    );
    expect(HexagonWithDescriptionContainer.children[3]).toEqual(
      ResponsiveMobile
    );

    expect(ResponsiveTv.children[0]).toEqual(HexagonWithDescriptionContents[0]);
    expect(ResponsiveDesktop.children[0]).toEqual(
      HexagonWithDescriptionContents[1]
    );
    expect(ResponsiveTablet.children[0]).toEqual(
      HexagonWithDescriptionContents[2]
    );
    expect(ResponsiveMobile.children[0]).toEqual(
      HexagonWithDescriptionContents[3]
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

  describe("ResponsiveTv", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have tv", () => {
          test("should have display block when min-width is 1681px", () => {
            const { ResponsiveTv } = setup();

            expect(ResponsiveTv).toHaveStyleRule("display", "block", {
              media: "(min-width:1681px)"
            });
          });
        });
      });
    });
  });

  describe("ResponsiveDesktop", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have desktop", () => {
          test("should have display block when min-width is 1281px and max-width is 1680px", () => {
            const { ResponsiveDesktop } = setup();

            expect(ResponsiveDesktop).toHaveStyleRule("display", "block", {
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

  describe("HexagonWithDescriptionContent", () => {
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

    describe("HexagonWithDescriptionContents", () => {
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
          test("should have row nowrap for first and second element", () => {
            const { HexagonWithDescriptionContents } = setup();

            expect(HexagonWithDescriptionContents[0]).toHaveStyleRule(
              "flex-flow",
              "row nowrap"
            );
            expect(HexagonWithDescriptionContents[1]).toHaveStyleRule(
              "flex-flow",
              "row nowrap"
            );
          });

          test("should have column nowrap for third and fourth element", () => {
            const { HexagonWithDescriptionContents } = setup();

            expect(HexagonWithDescriptionContents[2]).toHaveStyleRule(
              "flex-flow",
              "column nowrap"
            );
            expect(HexagonWithDescriptionContents[3]).toHaveStyleRule(
              "flex-flow",
              "column nowrap"
            );
          });
        });

        describe("lineHeight", () => {
          test("should have 3.6rem for first and second and third element", () => {
            const { HexagonWithDescriptionContents } = setup();

            expect(
              HexagonWithDescriptionContents[0].children[1].children[0]
            ).toHaveStyleRule("line-height", "3.6rem");
            expect(
              HexagonWithDescriptionContents[1].children[1].children[0]
            ).toHaveStyleRule("line-height", "3.6rem");
            expect(
              HexagonWithDescriptionContents[2].children[1].children[0]
            ).toHaveStyleRule("line-height", "3.6rem");
          });

          test("should have 2.8rem for fourth element", () => {
            const { HexagonWithDescriptionContents } = setup();

            expect(
              HexagonWithDescriptionContents[3].children[1].children[0]
            ).toHaveStyleRule("line-height", "2.8rem");
          });
        });

        describe("marginBottom", () => {
          test("should have 0 for first and second element", () => {
            const { HexagonWithDescriptionContents } = setup();

            expect(
              HexagonWithDescriptionContents[0].children[0]
            ).toHaveStyleRule("margin-bottom", "0");
            expect(
              HexagonWithDescriptionContents[1].children[0]
            ).toHaveStyleRule("margin-bottom", "0");
          });

          test("should have 4.8rem for third and fourth element", () => {
            const { HexagonWithDescriptionContents } = setup();

            expect(
              HexagonWithDescriptionContents[2].children[0]
            ).toHaveStyleRule("margin-bottom", "4.8rem");
            expect(
              HexagonWithDescriptionContents[3].children[0]
            ).toHaveStyleRule("margin-bottom", "4.8rem");
          });
        });

        describe("marginRight", () => {
          test("should have 4.8rem for first and second element", () => {
            const { HexagonWithDescriptionContents } = setup();

            expect(
              HexagonWithDescriptionContents[0].children[0]
            ).toHaveStyleRule("margin-right", "4.8rem");
            expect(
              HexagonWithDescriptionContents[1].children[0]
            ).toHaveStyleRule("margin-right", "4.8rem");
          });

          test("should have 0 for third and fourth element", () => {
            const { HexagonWithDescriptionContents } = setup();

            expect(
              HexagonWithDescriptionContents[2].children[0]
            ).toHaveStyleRule("margin-right", "0");
            expect(
              HexagonWithDescriptionContents[3].children[0]
            ).toHaveStyleRule("margin-right", "0");
          });
        });

        describe("width", () => {
          test("should have 50% for first and second element", () => {
            const { HexagonWithDescriptionContents } = setup();

            expect(
              HexagonWithDescriptionContents[0].children[0]
            ).toHaveStyleRule("width", "50%");
            expect(
              HexagonWithDescriptionContents[1].children[0]
            ).toHaveStyleRule("width", "50%");
          });

          test("should have 60% for third element", () => {
            const { HexagonWithDescriptionContents } = setup();

            expect(
              HexagonWithDescriptionContents[2].children[0]
            ).toHaveStyleRule("width", "60%");
          });

          test("should have 100% for fourth element", () => {
            const { HexagonWithDescriptionContents } = setup();

            expect(
              HexagonWithDescriptionContents[3].children[0]
            ).toHaveStyleRule("width", "100%");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  HexagonWithDescriptionContainer: Element;
  HexagonWithDescriptionContents: Element[];
  ResponsiveDesktop: Element;
  ResponsiveMobile: Element;
  ResponsiveTablet: Element;
  ResponsiveTv: Element;
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
  const ResponsiveDesktop: Element = queryAllByTestId("ResponsiveDesktop")[0];
  const ResponsiveMobile: Element = queryAllByTestId("ResponsiveMobile")[0];
  const ResponsiveTablet: Element = queryAllByTestId("ResponsiveTablet")[0];
  const ResponsiveTv: Element = queryAllByTestId("ResponsiveTv")[0];

  return {
    ...utils,
    HexagonWithDescriptionContainer,
    HexagonWithDescriptionContents,
    ResponsiveDesktop,
    ResponsiveMobile,
    ResponsiveTablet,
    ResponsiveTv
  };
}
