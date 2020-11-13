import React from "react";
import { RenderResult } from "@testing-library/react";

import BrowserInfo from "UI/molecules/BrowserInfo";

import renderWithTheme from "helpers/tests/renderWithTheme";

import isSafari from "helpers/browser/isSafari";

jest.mock("helpers/browser/isSafari", () => jest.fn());

interface Detect {
  name: string;
}

jest.mock("detect-browser", () => ({
  detect: (): Detect => ({ name: "chrome" })
}));

describe("molecules / BrowserInfo", () => {
  test("should have correct structure", () => {
    const {
      BrowserInfoIconsContainer,
      FlexContainer,
      FlexItems,
      IconContainers,
      Icons,
      SpacingContainer
    } = setup();

    expect(SpacingContainer.children[0]).toEqual(BrowserInfoIconsContainer);
    expect(SpacingContainer.children[0].children[0]).toEqual(FlexContainer);

    FlexItems.forEach((FlexItem, index) => {
      expect(FlexContainer.children[index]).toEqual(FlexItem);
      expect(FlexItem.children[0]).toEqual(IconContainers[index]);
      expect(IconContainers[index].children[0]).toEqual(Icons[index]);
    });
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have 100%", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("paddingBottom", () => {
        test("should have 1.25vh", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-bottom", "1.25vh");
        });
      });

      describe("paddingLeft", () => {
        test("should have 1.25vw", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-left", "1.25vw");
        });
      });

      describe("paddingRight", () => {
        test("should have 1.25vw", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-right", "1.25vw");
        });
      });

      describe("paddingTop", () => {
        test("should have 1.25vh", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("padding-top", "1.25vh");
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("width", "100%");
        });
      });
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
        test("should have row wrap", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("flex-flow", "row wrap");
        });
      });

      describe("height", () => {
        test("should have 100%", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("justifyContent", () => {
        test("should have space-between", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule(
            "justify-content",
            "space-between"
          );
        });
      });
    });
  });

  describe("FlexItem", () => {
    describe("Props", () => {
      describe("display", () => {
        test("should have block if isSafari returns false", () => {
          const mockisSafari = (isSafari as unknown) as jest.Mock;
          console.log("isSafari", isSafari);
          mockisSafari.mockImplementation(() => false);

          const { FlexItems } = setup();

          FlexItems.forEach((FlexItem) => {
            expect(FlexItem).toHaveStyleRule("display", "block");
          });
        });

        test("should have flex if isSafari returns true", () => {
          const mockisSafari = (isSafari as unknown) as jest.Mock;
          mockisSafari.mockImplementation(() => true);

          const { FlexItems } = setup();

          FlexItems.forEach((FlexItem) => {
            expect(FlexItem).toHaveStyleRule("display", "flex");
          });
        });
      });

      describe("flex", () => {
        test("should have 0 1 28%", () => {
          const { FlexItems } = setup();

          FlexItems.forEach((FlexItem) => {
            expect(FlexItem).toHaveStyleRule("flex", "0 1 28%");
          });
        });
      });

      describe("height", () => {
        test("should have 50%", () => {
          const { FlexItems } = setup();

          FlexItems.forEach((FlexItem) => {
            expect(FlexItem).toHaveStyleRule("height", "50%");
          });
        });
      });

      describe("justifyContent", () => {
        test("should have initial if isSafari returns false", () => {
          const mockisSafari = (isSafari as unknown) as jest.Mock;
          mockisSafari.mockImplementation(() => false);

          const { FlexItems } = setup();

          FlexItems.forEach((FlexItem) => {
            expect(FlexItem).toHaveStyleRule("justify-content", "initial");
          });
        });

        test("should have center if isSafari returns true", () => {
          const mockisSafari = (isSafari as unknown) as jest.Mock;
          mockisSafari.mockImplementation(() => true);

          const { FlexItems } = setup();

          FlexItems.forEach((FlexItem) => {
            expect(FlexItem).toHaveStyleRule("justify-content", "center");
          });
        });
      });

      describe("overflow", () => {
        test("should have visible if isSafari returns false", () => {
          const mockisSafari = (isSafari as unknown) as jest.Mock;
          mockisSafari.mockImplementation(() => false);

          const { FlexItems } = setup();

          FlexItems.forEach((FlexItem) => {
            expect(FlexItem).toHaveStyleRule("overflow", "visible");
          });
        });

        test("should have hidden if isSafari returns true", () => {
          const mockisSafari = (isSafari as unknown) as jest.Mock;
          mockisSafari.mockImplementation(() => true);

          const { FlexItems } = setup();

          FlexItems.forEach((FlexItem) => {
            expect(FlexItem).toHaveStyleRule("overflow", "hidden");
          });
        });
      });

      describe("paddingBottom", () => {
        test("should have 4.8%", () => {
          const { FlexItems } = setup();

          FlexItems.forEach((FlexItem) => {
            expect(FlexItem).toHaveStyleRule("padding-bottom", "4.8%");
          });
        });
      });

      describe("paddingTop", () => {
        test("should have 4.8%", () => {
          const { FlexItems } = setup();

          FlexItems.forEach((FlexItem) => {
            expect(FlexItem).toHaveStyleRule("padding-top", "4.8%");
          });
        });
      });
    });
  });

  describe("Icon", () => {
    test("there should be 6 icons", () => {
      const { Icons } = setup();

      expect(Icons.length).toEqual(6);
    });

    test("icons should render correct SVGs", () => {
      const { Icons } = setup();

      expect(Icons[0].textContent).toEqual("Icon-Chrome.svg");
      expect(Icons[1].textContent).toEqual("Icon-Firefox.svg");
      expect(Icons[2].textContent).toEqual("Icon-IE.svg");
      expect(Icons[3].textContent).toEqual("Icon-Opera.svg");
      expect(Icons[4].textContent).toEqual("Icon-Safari.svg");
      expect(Icons[5].textContent).toEqual("Icon-Unknown.svg");
    });

    describe("Props", () => {
      describe("height", () => {
        test("should have 100% if isSafari returns false", () => {
          const mockisSafari = (isSafari as unknown) as jest.Mock;
          mockisSafari.mockImplementation(() => false);

          const { IconContainers } = setup();

          IconContainers.forEach((IconContainer) => {
            expect(IconContainer).toHaveStyleRule("height", "100%");
          });
        });

        test("should have 4vh if isSafari returns true", () => {
          const mockisSafari = (isSafari as unknown) as jest.Mock;
          mockisSafari.mockImplementation(() => true);

          const { IconContainers } = setup();

          IconContainers.forEach((IconContainer) => {
            expect(IconContainer).toHaveStyleRule("height", "4vh");
          });
        });
      });

      describe("isActive", () => {
        describe("if icon is active", () => {
          describe("fill", () => {
            test("should have #78b0b5", () => {
              const { IconContainers } = setup();

              IconContainers.forEach((IconContainer) => {
                if (
                  IconContainer.children[0].textContent === "Icon-Chrome.svg"
                ) {
                  expect(IconContainer).toHaveStyleRule("fill", "#78b0b5", {
                    modifier: "svg path"
                  });
                }
              });
            });
          });
        });

        describe("if icon is not active", () => {
          describe("fill", () => {
            test("should not have", () => {
              const { IconContainers } = setup();

              IconContainers.forEach((IconContainer) => {
                if (
                  IconContainer.children[0].textContent !== "Icon-Chrome.svg"
                ) {
                  expect(IconContainer).not.toHaveStyleRule("fill", "#78b0b5", {
                    modifier: "svg path"
                  });
                }
              });
            });
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

      describe("overflow", () => {
        test("should have visible if isSafari returns false", () => {
          const mockisSafari = (isSafari as unknown) as jest.Mock;
          mockisSafari.mockImplementation(() => false);

          const { IconContainers } = setup();

          IconContainers.forEach((IconContainer) => {
            expect(IconContainer).toHaveStyleRule("overflow", "visible");
          });
        });

        test("should have hidden if isSafari returns true", () => {
          const mockisSafari = (isSafari as unknown) as jest.Mock;
          mockisSafari.mockImplementation(() => true);

          const { IconContainers } = setup();

          IconContainers.forEach((IconContainer) => {
            expect(IconContainer).toHaveStyleRule("overflow", "hidden");
          });
        });
      });

      describe("width", () => {
        test("should have 100% if isSafari returns false", () => {
          const mockisSafari = (isSafari as unknown) as jest.Mock;
          mockisSafari.mockImplementation(() => false);

          const { IconContainers } = setup();

          IconContainers.forEach((IconContainer) => {
            expect(IconContainer).toHaveStyleRule("width", "100%");
          });
        });

        test("should have 4vh if isSafari returns true", () => {
          const mockisSafari = (isSafari as unknown) as jest.Mock;
          mockisSafari.mockImplementation(() => true);

          const { IconContainers } = setup();

          IconContainers.forEach((IconContainer) => {
            expect(IconContainer).toHaveStyleRule("width", "4vh");
          });
        });
      });
    });
  });

  describe("BrowserInfoIconsContainer", () => {
    describe("Styles", () => {
      describe("height", () => {
        test("should have 100%", () => {
          const { BrowserInfoIconsContainer } = setup();

          expect(BrowserInfoIconsContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("isInactive", () => {
        describe("display", () => {
          test("should have none if max-height: 640px", () => {
            const { BrowserInfoIconsContainer } = setup();

            expect(BrowserInfoIconsContainer).toHaveStyleRule(
              "display",
              "none",
              {
                media: "(max-height: 640px)",
                modifier: ".isInactive"
              }
            );
          });
        });
      });

      describe("isActive", () => {
        describe("display", () => {
          test("should have block if max-height: 640px", () => {
            const { BrowserInfoIconsContainer } = setup();

            expect(BrowserInfoIconsContainer).toHaveStyleRule(
              "display",
              "block",
              {
                media: "(max-height: 640px)",
                modifier: ".isActive"
              }
            );
          });
        });

        describe("height", () => {
          test("should have 100% if max-height: 640px", () => {
            const { BrowserInfoIconsContainer } = setup();

            expect(BrowserInfoIconsContainer).toHaveStyleRule(
              "height",
              "100%",
              {
                media: "(max-height: 640px)",
                modifier: ".isActive"
              }
            );
          });
        });

        describe("margin", () => {
          test("should have 0 auto if max-height: 640px", () => {
            const { BrowserInfoIconsContainer } = setup();

            expect(BrowserInfoIconsContainer).toHaveStyleRule(
              "margin",
              "0 auto",
              {
                media: "(max-height: 640px)",
                modifier: ".isActive"
              }
            );
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  BrowserInfoIconsContainer: Element;
  FlexContainer: Element;
  FlexItems: Element[];
  IconContainers: Element[];
  Icons: NodeListOf<SVGSVGElement>;
  SpacingContainer: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<BrowserInfo />);

  const { queryAllByTestId, queryByTestId }: RenderResult = utils;

  const BrowserInfoIconsContainer: Element = queryByTestId(
    "BrowserInfoIconsContainer"
  );
  const FlexContainer: Element = queryByTestId("BrowserInfoFlexContainer");
  const FlexItems: Element[] = queryAllByTestId("FlexItem");
  const IconContainers: Element[] = queryAllByTestId("IconContainer");
  const Icons: NodeListOf<SVGSVGElement> = document.querySelectorAll("svg");
  const SpacingContainer: Element = queryByTestId("BrowserInfo");

  return {
    ...utils,
    BrowserInfoIconsContainer,
    FlexContainer,
    FlexItems,
    IconContainers,
    Icons,
    SpacingContainer
  };
}
