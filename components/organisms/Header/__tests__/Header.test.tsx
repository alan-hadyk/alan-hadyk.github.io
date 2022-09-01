import { act, fireEvent, RenderResult } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import Header, { downloadCV } from "UI/organisms/Header";

import renderWithTheme from "helpers/tests/renderWithTheme";

jest.mock("helpers/browser/isIE11", () => jest.fn());

jest.mock("hooks/useIntersectionObserver");

jest.mock("hooks/useResize");

import useResize from "hooks/useResize";

import { HeaderProps } from "UI/organisms/Header/__typings__/Header";

import { UseResizeArgs } from "hooks/__typings__/useResize";

describe("organisms / Header", () => {
  test("should have correct structure", () => {
    const {
      HeaderContainer,
      HeaderDesktop,
      HeaderInnerContainer,
      HeaderInnerFlexContainer,
      HeaderOuterFlexContainer,
      HeaderTabletMobile,
      HeaderTv,
      LinksWithIcons,
      PositionContainer,
      ResponsiveLinkTvDesktopTablet,
      ResponsiveLinkMobile
    } = setup();

    expect(PositionContainer.children[0]).toEqual(HeaderContainer);

    expect(HeaderContainer.children[0]).toEqual(HeaderOuterFlexContainer);

    expect(HeaderOuterFlexContainer.children[0]).toEqual(HeaderInnerContainer);

    expect(HeaderInnerContainer.children[0]).toEqual(HeaderInnerFlexContainer);

    expect(HeaderInnerFlexContainer.children[0]).toEqual(
      ResponsiveLinkTvDesktopTablet
    );
    expect(ResponsiveLinkTvDesktopTablet.children[0]).toEqual(
      LinksWithIcons[0]
    );

    expect(HeaderInnerFlexContainer.children[1]).toEqual(ResponsiveLinkMobile);
    expect(ResponsiveLinkMobile.children[0]).toEqual(LinksWithIcons[1]);

    expect(HeaderInnerFlexContainer.children[2]).toEqual(HeaderTv);
    expect(HeaderInnerFlexContainer.children[3]).toEqual(HeaderDesktop);
    expect(HeaderInnerFlexContainer.children[4]).toEqual(HeaderTabletMobile);
  });

  describe("useResize", () => {
    test("should be called initially with correct arguments", () => {
      const spyUseResize = jest.fn();
      const mockUseResize = useResize as jest.Mock;
      mockUseResize.mockImplementation((args: UseResizeArgs) => {
        spyUseResize(args);
      });

      setup();

      expect(typeof spyUseResize.mock.calls[0][0]["callback"]).toEqual(
        "function"
      );

      expect(spyUseResize.mock.calls[0][0]["breakpoint"]).toEqual("1680px");
    });
  });

  describe("downloadCV", () => {
    test("should fire window.open(\"/pdf/Alan_Hadyk_CV_2022_compressed.pdf\", \"_blank\")", () => {
      const spyWindowOpen = jest.fn();
      global.open = spyWindowOpen;

      expect(spyWindowOpen).toHaveBeenCalledTimes(0);

      downloadCV();

      expect(spyWindowOpen).toHaveBeenCalledWith(
        "/pdf/Alan_Hadyk_CV_2022_compressed.pdf",
        "_blank"
      );
    });
  });

  describe("PositionContainer", () => {
    describe("Props", () => {
      describe("left", () => {
        test("should have 0", () => {
          const { PositionContainer } = setup();

          expect(PositionContainer).toHaveStyleRule("left", "0");
        });
      });

      describe("position", () => {
        test("should have fixed", () => {
          const { PositionContainer } = setup();

          expect(PositionContainer).toHaveStyleRule("position", "fixed");
        });
      });

      describe("right", () => {
        test("should have 0", () => {
          const { PositionContainer } = setup();

          expect(PositionContainer).toHaveStyleRule("right", "0");
        });
      });

      describe("top", () => {
        test("should have 0", () => {
          const { PositionContainer } = setup();

          expect(PositionContainer).toHaveStyleRule("top", "0");
        });
      });

      describe("z-index", () => {
        test("should have 100 by default", () => {
          const { PositionContainer } = setup();

          expect(PositionContainer).toHaveStyleRule("z-index", "100");
        });

        test("should have correct value passed via zIndex prop", () => {
          const { PositionContainer } = setup({
            zIndex: "layer4"
          });

          expect(PositionContainer).toHaveStyleRule("z-index", "400");
        });
      });
    });
  });

  describe("HeaderContainer", () => {
    describe("Styles", () => {
      describe("background-color", () => {
        test("should have rgba(34,39,42,0.75)", () => {
          const { HeaderContainer } = setup();

          expect(HeaderContainer).toHaveStyleRule(
            "background-color",
            "rgba(34,39,42,0.75)"
          );
        });
      });

      describe("border-bottom", () => {
        test("should have 1px solid rgba(120,176,181,0.5)", () => {
          const { HeaderContainer } = setup();

          expect(HeaderContainer).toHaveStyleRule(
            "border-bottom",
            "1px solid rgba(120,176,181,0.5)"
          );
        });
      });

      describe("height", () => {
        test("should have 9.6rem", () => {
          const { HeaderContainer } = setup();

          expect(HeaderContainer).toHaveStyleRule("height", "9.6rem");
        });
      });
    });
  });

  describe("HeaderInnerContainer", () => {
    describe("Styles", () => {
      describe("max-width", () => {
        test("should have 1920px", () => {
          const { HeaderInnerContainer } = setup();

          expect(HeaderInnerContainer).toHaveStyleRule("max-width", "1920px");
        });
      });

      describe("padding", () => {
        test("should have 2.4rem 4.8rem", () => {
          const { HeaderInnerContainer } = setup();

          expect(HeaderInnerContainer).toHaveStyleRule(
            "padding",
            "2.4rem 4.8rem"
          );
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { HeaderInnerContainer } = setup();

          expect(HeaderInnerContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("FlexContainers", () => {
    describe("HeaderOuterFlexContainer", () => {
      describe("Props", () => {
        describe("flex-flow", () => {
          test("should have row nowrap", () => {
            const { HeaderOuterFlexContainer } = setup();

            expect(HeaderOuterFlexContainer).toHaveStyleRule(
              "flex-flow",
              "row nowrap"
            );
          });
        });
      });
    });

    describe("HeaderInnerFlexContainer", () => {
      describe("Props", () => {
        describe("flex-flow", () => {
          test("should have row nowrap", () => {
            const { HeaderInnerFlexContainer } = setup();

            expect(HeaderInnerFlexContainer).toHaveStyleRule(
              "flex-flow",
              "row nowrap"
            );
          });
        });

        describe("height", () => {
          test("should have 4.8rem", () => {
            const { HeaderInnerFlexContainer } = setup();

            expect(HeaderInnerFlexContainer).toHaveStyleRule(
              "height",
              "4.8rem"
            );
          });
        });

        describe("justify-content", () => {
          test("should have space-between", () => {
            const { HeaderInnerFlexContainer } = setup();

            expect(HeaderInnerFlexContainer).toHaveStyleRule(
              "justify-content",
              "space-between"
            );
          });
        });
      });
    });
  });

  describe("LinksWithIcons", () => {
    describe("LinksWithIcons[0]", () => {
      describe("Props", () => {
        describe("href", () => {
          test("should have correct value", () => {
            const { LinksWithIcons } = setup();

            expect(LinksWithIcons[0].getAttribute("href")).toEqual("/");
          });
        });

        describe("height", () => {
          test("should have 4.8rem", () => {
            const { LinksWithIcons } = setup();

            expect(LinksWithIcons[0]).toHaveStyleRule("height", "4.8rem");
          });
        });

        describe("iconName", () => {
          test("should have logo", () => {
            const { LinksWithIcons } = setup();

            expect(LinksWithIcons[0].textContent).toEqual("Icon-Logo.svg");
          });
        });

        describe("width", () => {
          test("should have 24.8rem", () => {
            const { LinksWithIcons } = setup();

            expect(LinksWithIcons[0]).toHaveStyleRule("width", "24.8rem");
          });
        });
      });
    });

    describe("LinksWithIcons[1]", () => {
      describe("Props", () => {
        describe("href", () => {
          test("should have correct value", () => {
            const { LinksWithIcons } = setup();

            expect(LinksWithIcons[1].getAttribute("href")).toEqual("/");
          });
        });

        describe("iconName", () => {
          test("should have logo shortcut", () => {
            const { LinksWithIcons } = setup();

            expect(LinksWithIcons[1].textContent).toEqual(
              "Icon-Logo-Shortcut.svg"
            );
          });
        });

        describe("width", () => {
          test("should have 6.4rem", () => {
            const { LinksWithIcons } = setup();

            expect(LinksWithIcons[1]).toHaveStyleRule("width", "6.4rem");
          });
        });
      });
    });
  });

  describe("HeaderTv", () => {
    describe("Event handlers", () => {
      describe("onCVButtonClick", () => {
        test("should call downloadCV", () => {
          const spyWindowOpen = jest.fn();
          global.open = spyWindowOpen;
          const { HeaderTv } = setup();

          const Button = HeaderTv.querySelector("button");

          expect(spyWindowOpen).toHaveBeenCalledTimes(0);

          act(() => {
            fireEvent.mouseUp(Button);
          });

          expect(spyWindowOpen).toHaveBeenCalledWith(
            "/pdf/Alan_Hadyk_CV_2022_compressed.pdf",
            "_blank"
          );
        });
      });
    });
  });

  describe("HeaderDesktop", () => {
    describe("Event handlers", () => {
      describe("onCVButtonClick", () => {
        test("should call downloadCV", () => {
          const spyWindowOpen = jest.fn();
          global.open = spyWindowOpen;
          const { HeaderDesktop } = setup();

          const Button = HeaderDesktop.querySelector("button");

          expect(spyWindowOpen).toHaveBeenCalledTimes(0);

          act(() => {
            fireEvent.mouseUp(Button);
          });

          expect(spyWindowOpen).toHaveBeenCalledWith(
            "/pdf/Alan_Hadyk_CV_2022_compressed.pdf",
            "_blank"
          );
        });
      });
    });

    describe("Props", () => {
      describe("isMenuVisible", () => {
        describe("should have false by default", () => {
          test("transform - should have translateX(100%)", () => {
            const { SideMenus } = setup();

            expect(SideMenus[0]).toHaveStyleRule(
              "transform",
              "translateX(100%)"
            );
          });
        });

        describe("should have true if menu button is clicked", () => {
          test("transform - should have translateX(0)", () => {
            const { MenuButtons, SideMenus } = setup();

            expect(SideMenus[0]).toHaveStyleRule(
              "transform",
              "translateX(100%)"
            );

            act(() => {
              fireEvent.click(MenuButtons[0]);
            });

            expect(SideMenus[0]).toHaveStyleRule("transform", "translateX(0)");
          });
        });
      });
    });
  });

  describe("HeaderTabletMobile", () => {
    describe("Props", () => {
      describe("isMenuVisible", () => {
        describe("should have false by default", () => {
          test("transform - should have translateX(100%)", () => {
            const { SideMenus } = setup();

            expect(SideMenus[1]).toHaveStyleRule(
              "transform",
              "translateX(100%)"
            );
          });
        });

        describe("should have true if menu button is clicked", () => {
          test("transform - should have translateX(0)", () => {
            const { MenuButtons, SideMenus } = setup();

            expect(SideMenus[1]).toHaveStyleRule(
              "transform",
              "translateX(100%)"
            );

            act(() => {
              fireEvent.click(MenuButtons[1]);
            });

            expect(SideMenus[1]).toHaveStyleRule("transform", "translateX(0)");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  HeaderContainer: Element;
  HeaderDesktop: Element;
  HeaderInnerContainer: Element;
  HeaderInnerFlexContainer: Element;
  HeaderOuterFlexContainer: Element;
  HeaderTabletMobile: Element;
  HeaderTv: Element;
  LinksWithIcons: Element[];
  MenuButtons: Element[];
  PositionContainer: Element;
  ResponsiveLinkMobile: Element;
  ResponsiveLinkTvDesktopTablet: Element;
  SideMenus: Element[];
}

type HeaderTestProps = Partial<HeaderProps>;

function setup(additionalProps?: HeaderTestProps, route = "/"): Setup {
  const history = createMemoryHistory();
  history.push(route);

  const props: HeaderProps = {
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <Router history={history}>
      <Header {...props} />
    </Router>
  );

  const { queryAllByTestId } = utils || {};

  const HeaderContainer: Element = queryAllByTestId("HeaderContainer")[0];
  const HeaderInnerContainer: Element = queryAllByTestId(
    "HeaderInnerContainer"
  )[0];
  const HeaderInnerFlexContainer: Element = queryAllByTestId(
    "HeaderInnerFlexContainer"
  )[0];
  const HeaderDesktop: Element = queryAllByTestId("HeaderDesktop")[0];
  const HeaderOuterFlexContainer: Element = queryAllByTestId(
    "HeaderOuterFlexContainer"
  )[0];
  const HeaderTabletMobile: Element = queryAllByTestId("HeaderTabletMobile")[0];
  const HeaderTv: Element = queryAllByTestId("HeaderTv")[0];
  const LinksWithIcons: Element[] = queryAllByTestId("LinkWithIcon");
  const MenuButtons: Element[] = queryAllByTestId("MenuButtonContainer");
  const PositionContainer: Element = queryAllByTestId(
    "HeaderPositionContainer"
  )[0];
  const ResponsiveLinkMobile: Element = queryAllByTestId(
    "ResponsiveLinkMobile"
  )[0];
  const ResponsiveLinkTvDesktopTablet: Element = queryAllByTestId(
    "ResponsiveLinkTvDesktopTablet"
  )[0];
  const SideMenus: Element[] = queryAllByTestId("SideMenu");

  return {
    ...utils,
    HeaderContainer,
    HeaderDesktop,
    HeaderInnerContainer,
    HeaderInnerFlexContainer,
    HeaderOuterFlexContainer,
    HeaderTabletMobile,
    HeaderTv,
    LinksWithIcons,
    MenuButtons,
    PositionContainer,
    ResponsiveLinkMobile,
    ResponsiveLinkTvDesktopTablet,
    SideMenus
  };
}
