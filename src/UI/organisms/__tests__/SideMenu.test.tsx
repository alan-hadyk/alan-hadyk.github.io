import React from "react";
import { RenderResult, act, fireEvent } from "@testing-library/react";

import SideMenu from "UI/organisms/SideMenu";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { SideMenuProps } from "UI/organisms/__typings__/SideMenu";

import isIE11 from "helpers/browser/isIE11";

jest.mock("helpers/browser/isIE11", () => jest.fn());

jest.mock("hooks/useIntersectionObserver");

describe("organisms / SideMenu", () => {
  test("should have correct structure", () => {
    const {
      Button,
      MenuIcons,
      Navs,
      ResponsiveMobileTablet,
      SideMenuContainer,
      SideMenuInnerFlexContainer,
      SideMenuInnerSpacingContainer,
      SideMenuMobileFlexContainers,
      SideMenuMobileSpacingContainers,
      SideMenuNavSpacingContainers,
      SideMenuOuterSpacingContainer
    } = setup();

    expect(SideMenuContainer.children[0]).toEqual(
      SideMenuOuterSpacingContainer
    );

    // Mobile an tablet
    expect(SideMenuOuterSpacingContainer.children[0]).toEqual(
      ResponsiveMobileTablet
    );
    expect(ResponsiveMobileTablet.children[0]).toEqual(
      SideMenuMobileSpacingContainers[0]
    );

    expect(SideMenuMobileSpacingContainers[0].children[0]).toEqual(
      SideMenuMobileFlexContainers[0]
    );

    expect(SideMenuMobileSpacingContainers[0].children[1]).toEqual(Button);

    expect(SideMenuMobileFlexContainers[0].children[0]).toEqual(
      SideMenuNavSpacingContainers[0]
    );
    expect(SideMenuNavSpacingContainers[0].children[0]).toEqual(Navs[0]);

    // MenuIcons
    expect(SideMenuOuterSpacingContainer.children[1]).toEqual(
      SideMenuInnerSpacingContainer
    );
    expect(SideMenuInnerSpacingContainer.children[0]).toEqual(
      SideMenuInnerFlexContainer
    );
    expect(SideMenuInnerFlexContainer.children[0]).toEqual(MenuIcons[0]);
  });

  describe("SideMenu", () => {
    describe("Styles", () => {
      describe("background", () => {
        test("should have rgba(34,39,42,0.875)", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule(
            "background",
            "rgba(34,39,42,0.875)"
          );
        });
      });

      describe("border-left", () => {
        test("should have 1px solid rgba(120,176,181,0.75)", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule(
            "border-left",
            "1px solid rgba(120,176,181,0.75)"
          );
        });
      });

      describe("height", () => {
        test("should have 100%", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("height", "100%");
        });
      });

      describe("padding-top", () => {
        test("should have 8.8rem", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("padding-top", "8.8rem");
        });
      });

      describe("position", () => {
        test("should have fixed", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("position", "fixed");
        });
      });

      describe("right", () => {
        test("should have 0", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("right", "0");
        });
      });

      describe("top", () => {
        test("should have 0", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("top", "0");
        });
      });

      describe("transform", () => {
        test("should have translateX(0) when is expanded", () => {
          const { SideMenuContainer } = setup({
            isExpanded: true
          });

          expect(SideMenuContainer).toHaveStyleRule(
            "transform",
            "translateX(0)"
          );
        });

        test("should have translateX(100%) when is not expanded", () => {
          const { SideMenuContainer } = setup({
            isExpanded: false
          });

          expect(SideMenuContainer).toHaveStyleRule(
            "transform",
            "translateX(100%)"
          );
        });
      });

      describe("transition", () => {
        test("should have all 150ms ease-in-out", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule(
            "transition",
            "all 150ms ease-in-out"
          );
        });
      });

      describe("z-index", () => {
        test("should have 1000", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("z-index", "1000");
        });
      });

      describe("max-width", () => {
        test("should have 300px", () => {
          const { SideMenuContainer } = setup();

          expect(SideMenuContainer).toHaveStyleRule("max-width", "300px", {
            media: "(-ms-high-contrast: none)"
          });
          expect(SideMenuContainer).toHaveStyleRule("max-width", "300px", {
            media: "(-ms-high-contrast: active)"
          });
        });
      });
    });
  });

  describe("SpacingContainers", () => {
    describe("SideMenuOuterSpacingContainer", () => {
      describe("Props", () => {
        describe("height", () => {
          test("should have 100%", () => {
            const { SideMenuOuterSpacingContainer } = setup();

            expect(SideMenuOuterSpacingContainer).toHaveStyleRule(
              "height",
              "100%"
            );
          });
        });

        describe("overflowY", () => {
          test("should have auto", () => {
            const { SideMenuOuterSpacingContainer } = setup();

            expect(SideMenuOuterSpacingContainer).toHaveStyleRule(
              "overflow-y",
              "auto"
            );
          });
        });

        describe("paddingLeft", () => {
          test("should have 4.8rem", () => {
            const { SideMenuOuterSpacingContainer } = setup();

            expect(SideMenuOuterSpacingContainer).toHaveStyleRule(
              "padding-left",
              "4.8rem"
            );
          });
        });

        describe("paddingRight", () => {
          test("should have 4.8rem", () => {
            const { SideMenuOuterSpacingContainer } = setup();

            expect(SideMenuOuterSpacingContainer).toHaveStyleRule(
              "padding-right",
              "4.8rem"
            );
          });
        });

        describe("paddingTop", () => {
          test("should have .8rem", () => {
            const { SideMenuOuterSpacingContainer } = setup();

            expect(SideMenuOuterSpacingContainer).toHaveStyleRule(
              "padding-top",
              ".8rem"
            );
          });
        });
      });
    });

    describe("SideMenuMobileSpacingContainers", () => {
      describe("Props", () => {
        describe("marginBottom", () => {
          test("should have 2.4rem", () => {
            const { SideMenuMobileSpacingContainers } = setup();

            SideMenuMobileSpacingContainers.forEach(
              (SideMenuMobileSpacingContainer) => {
                expect(SideMenuMobileSpacingContainer).toHaveStyleRule(
                  "margin-bottom",
                  "2.4rem"
                );
              }
            );
          });
        });
      });
    });

    describe("SideMenuNavSpacingContainers", () => {
      describe("Props", () => {
        describe("marginBottom", () => {
          test("should have 2.4rem", () => {
            const { SideMenuNavSpacingContainers } = setup();

            SideMenuNavSpacingContainers.forEach(
              (SideMenuNavSpacingContainer) => {
                expect(SideMenuNavSpacingContainer).toHaveStyleRule(
                  "margin-bottom",
                  "2.4rem"
                );
              }
            );
          });
        });
      });
    });

    describe("SideMenuInnerSpacingContainer", () => {
      describe("Props", () => {
        describe("marginBottom", () => {
          test("should have 2.4rem", () => {
            const { SideMenuInnerSpacingContainer } = setup();

            expect(SideMenuInnerSpacingContainer).toHaveStyleRule(
              "margin-bottom",
              "2.4rem"
            );
          });
        });
      });
    });
  });

  describe("FlexContainers", () => {
    describe("SideMenuMobileFlexContainers", () => {
      describe("Props", () => {
        describe("flexFlow", () => {
          test("should have row wrap", () => {
            const { SideMenuMobileFlexContainers } = setup();

            SideMenuMobileFlexContainers.forEach(
              (SideMenuMobileFlexContainer) => {
                expect(SideMenuMobileFlexContainer).toHaveStyleRule(
                  "flex-flow",
                  "row wrap"
                );
              }
            );
          });
        });

        describe("justifyContent", () => {
          test("should have flex-end", () => {
            const { SideMenuMobileFlexContainers } = setup();

            SideMenuMobileFlexContainers.forEach(
              (SideMenuMobileFlexContainer) => {
                expect(SideMenuMobileFlexContainer).toHaveStyleRule(
                  "justify-content",
                  "flex-end"
                );
              }
            );
          });
        });
      });
    });

    describe("SideMenuInnerFlexContainer", () => {
      describe("Props", () => {
        describe("flexFlow", () => {
          test("should have row nowrap", () => {
            const { SideMenuInnerFlexContainer } = setup();

            expect(SideMenuInnerFlexContainer).toHaveStyleRule(
              "flex-flow",
              "row nowrap"
            );
          });
        });

        describe("gap", () => {
          test("should have margin-left: 2.4rem for all children (except first)", () => {
            const { SideMenuInnerFlexContainer } = setup();

            expect(SideMenuInnerFlexContainer).toHaveStyleRule(
              "margin-left",
              "2.4rem",
              {
                modifier: "& > *"
              }
            );
            expect(SideMenuInnerFlexContainer).toHaveStyleRule(
              "margin-left",
              "0",
              {
                modifier: "& > *:first-child"
              }
            );
          });
        });
      });
    });
  });

  describe("Navs", () => {
    describe("Props", () => {
      describe("position", () => {
        test("should have vertical", () => {
          const { Navs } = setup();

          Navs.forEach((Nav) => {
            expect(Nav).toHaveStyleRule("align-items", "flex-end");
          });
        });
      });
    });
  });

  describe("Button", () => {
    describe("Props", () => {
      describe("buttonText", () => {
        test("should have cv", () => {
          const { Button } = setup();

          const buttonText = Button.querySelector("[font-family=\"Exan\"]");

          expect(buttonText.textContent).toEqual("cv");
        });
      });

      describe("iconName", () => {
        test("should have Btn-Download.svg", () => {
          const { Button } = setup();

          const buttonIcon = Button.querySelector("svg");

          expect(buttonIcon.textContent).toEqual("Btn-Download.svg");
        });
      });

      describe("iconWidth", () => {
        test("should have 2.4rem if isIE11 returns false", () => {
          const mockisIE11 = (isIE11 as unknown) as jest.Mock;
          mockisIE11.mockImplementation(() => false);

          const { Button } = setup();

          expect(
            Button.children[4].children[0].children[0].children[1]
          ).toHaveStyleRule("width", "auto");
        });

        test("should have auto if isIE11 returns true", () => {
          const mockisIE11 = (isIE11 as unknown) as jest.Mock;
          mockisIE11.mockImplementation(() => true);

          const { Button } = setup();

          expect(
            Button.children[0].children[0].children[0].children[1]
          ).toHaveStyleRule("width", "2.4rem");
        });
      });

      describe("size", () => {
        describe("should have medium", () => {
          describe("height", () => {
            test("should have 4.8rem", () => {
              const { Button } = setup();

              expect(Button).toHaveStyleRule("height", "4.8rem");
            });
          });
        });
      });

      describe("width", () => {
        describe("should have 100%", () => {
          const { Button } = setup();

          expect(Button).toHaveStyleRule("width", "100%");
        });
      });
    });

    describe("Event handlers", () => {
      describe("onClick", () => {
        test("should fire onCVButtonClick", () => {
          const onCVButtonClick = jest.fn();

          const { Button } = setup({ onCVButtonClick });

          expect(onCVButtonClick).toHaveBeenCalledTimes(0);

          act(() => {
            fireEvent.mouseUp(Button);
          });

          expect(onCVButtonClick).toHaveBeenCalledTimes(1);

          act(() => {
            fireEvent.mouseUp(Button);
          });

          expect(onCVButtonClick).toHaveBeenCalledTimes(2);
        });
      });
    });
  });

  describe("MenuIcons", () => {
    test("there should be 3 icons", () => {
      const { MenuIcons } = setup();

      expect(MenuIcons.length).toEqual(3);
    });

    test("MenuIcons should render correct SVGs", () => {
      const { MenuIcons } = setup();

      expect(MenuIcons[0].children[0].textContent).toEqual("Icon-GitHub.svg");
      expect(MenuIcons[1].children[0].textContent).toEqual(
        "Icon-CodeSandbox.svg"
      );
      expect(MenuIcons[2].children[0].textContent).toEqual("Icon-LinkedIn.svg");
    });
  });
});

interface Setup extends RenderResult {
  Button: Element;
  MenuIcons: Element[];
  Navs: Element[];
  ResponsiveMobileTablet: Element;
  SideMenuContainer: Element;
  SideMenuInnerFlexContainer: Element;
  SideMenuInnerSpacingContainer: Element;
  SideMenuMobileFlexContainers: Element[];
  SideMenuMobileSpacingContainers: Element[];
  SideMenuNavSpacingContainers: Element[];
  SideMenuOuterSpacingContainer: Element;
}

type SideMenuTestProps = Partial<SideMenuProps>;

function setup(props?: SideMenuTestProps): Setup {
  const utils: RenderResult = renderWithTheme(<SideMenu {...props} />);

  const { queryAllByTestId }: RenderResult = utils;

  const Button: Element = queryAllByTestId("Button")[0];
  const MenuIcons: Element[] = queryAllByTestId("MenuIcons");
  const Navs: Element[] = queryAllByTestId("Nav");
  const ResponsiveMobileTablet: Element = queryAllByTestId(
    "ResponsiveMobileTablet"
  )[0];
  const SideMenuContainer: Element = queryAllByTestId("SideMenu")[0];
  const SideMenuInnerFlexContainer: Element = queryAllByTestId(
    "SideMenuInnerFlexContainer"
  )[0];
  const SideMenuInnerSpacingContainer: Element = queryAllByTestId(
    "SideMenuInnerSpacingContainer"
  )[0];
  const SideMenuMobileFlexContainers: Element[] = queryAllByTestId(
    "SideMenuMobileFlexContainer"
  );
  const SideMenuMobileSpacingContainers: Element[] = queryAllByTestId(
    "SideMenuMobileSpacingContainer"
  );
  const SideMenuNavSpacingContainers: Element[] = queryAllByTestId(
    "SideMenuNavSpacingContainer"
  );
  const SideMenuOuterSpacingContainer: Element = queryAllByTestId(
    "SideMenuOuterSpacingContainer"
  )[0];

  return {
    ...utils,
    Button,
    MenuIcons,
    Navs,
    ResponsiveMobileTablet,
    SideMenuContainer,
    SideMenuInnerFlexContainer,
    SideMenuInnerSpacingContainer,
    SideMenuMobileFlexContainers,
    SideMenuMobileSpacingContainers,
    SideMenuNavSpacingContainers,
    SideMenuOuterSpacingContainer
  };
}
