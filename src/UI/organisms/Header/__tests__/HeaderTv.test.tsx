import React from "react";
import { act, fireEvent, RenderResult } from "@testing-library/react";

import HeaderTv from "UI/organisms/Header/HeaderTv";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { HeaderTvProps } from "UI/organisms/Header/__typings__/HeaderTv";

import isIE11 from "helpers/browser/isIE11";

jest.mock("helpers/browser/isIE11", () => jest.fn());

jest.mock("hooks/useIntersectionObserver");

describe("organisms / HeaderTv", () => {
  test("should have correct structure", () => {
    const {
      Button,
      HeaderTvContainer,
      HeaderTvFlexContainer,
      HeaderTvSpacingContainer,
      MenuIcons,
      Nav
    } = setup();

    expect(HeaderTvContainer.children[0]).toEqual(HeaderTvFlexContainer);
    expect(HeaderTvFlexContainer.children[0]).toEqual(HeaderTvSpacingContainer);
    expect(HeaderTvSpacingContainer.children[0]).toEqual(Nav);
    expect(HeaderTvFlexContainer.children[1]).toEqual(Button);
    expect(HeaderTvFlexContainer.children[2]).toEqual(MenuIcons[0]);
  });

  describe("HeaderTv", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have tv", () => {
          test("should have display block when min-width is 1681px", () => {
            const { HeaderTvContainer } = setup();

            expect(HeaderTvContainer).toHaveStyleRule("display", "block", {
              media: "(min-width:1681px)"
            });
          });
        });
      });
    });
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("flexFlow", () => {
        test("should have row nowrap", () => {
          const { HeaderTvFlexContainer } = setup();

          expect(HeaderTvFlexContainer).toHaveStyleRule(
            "flex-flow",
            "row nowrap"
          );
        });
      });

      describe("gap", () => {
        test("should have margin-left: 2.4rem for all children (except first)", () => {
          const { HeaderTvFlexContainer } = setup();

          expect(HeaderTvFlexContainer).toHaveStyleRule(
            "margin-left",
            "2.4rem",
            {
              modifier: "& > *"
            }
          );
          expect(HeaderTvFlexContainer).toHaveStyleRule("margin-left", "0", {
            modifier: "& > *:first-child"
          });
        });
      });

      describe("height", () => {
        test("should have 4.8rem", () => {
          const { HeaderTvFlexContainer } = setup();

          expect(HeaderTvFlexContainer).toHaveStyleRule("height", "4.8rem");
        });
      });

      describe("justifyContent", () => {
        test("should have flex-start", () => {
          const { HeaderTvFlexContainer } = setup();

          expect(HeaderTvFlexContainer).toHaveStyleRule(
            "justify-content",
            "flex-start"
          );
        });
      });
    });
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("marginRight", () => {
        test("should have 2.4rem", () => {
          const { HeaderTvSpacingContainer } = setup();

          expect(HeaderTvSpacingContainer).toHaveStyleRule(
            "margin-right",
            "2.4rem"
          );
        });
      });
    });
  });

  describe("Nav", () => {
    test("should render", () => {
      const { Nav } = setup();

      expect(Nav).toBeTruthy();
    });
  });

  describe("Button", () => {
    test("should have correct icon and text", () => {
      const { Button } = setup();

      const buttonText = Button.querySelector("[font-family=\"Exan\"]");
      const buttonIcon = Button.querySelector("svg");

      expect(buttonText.textContent).toEqual("cv");
      expect(buttonIcon.textContent).toEqual("Btn-Download.svg");
    });

    describe("Props", () => {
      describe("iconWidth", () => {
        test("should have auto if isIE11 returns false", () => {
          const mockisIE11 = (isIE11 as unknown) as jest.Mock;
          mockisIE11.mockImplementation(() => false);

          const { Button } = setup();

          expect(
            Button.children[4].children[0].children[0].children[1]
          ).toHaveStyleRule("width", "auto");
        });

        test("should have 2.4rem if isIE11 returns true", () => {
          const mockisIE11 = (isIE11 as unknown) as jest.Mock;
          mockisIE11.mockImplementation(() => true);

          const { Button } = setup();

          expect(
            Button.children[0].children[0].children[0].children[1]
          ).toHaveStyleRule("width", "2.4rem");
        });
      });

      describe("size", () => {
        describe("height", () => {
          test("should have 4.8rem", () => {
            const { Button } = setup();

            expect(Button).toHaveStyleRule("height", "4.8rem");
          });
        });

        describe("width", () => {
          test("should have auto", () => {
            const { Button } = setup();

            expect(Button).toHaveStyleRule("width", "auto");
          });
        });

        describe("padding", () => {
          test("should have 2.4rem", () => {
            const { Button } = setup();

            expect(Button.children[4].children[0]).toHaveStyleRule(
              "padding-right",
              "2.4rem"
            );
          });
        });

        describe("icon height", () => {
          test("should have 2.4rem", () => {
            const { Button } = setup();

            expect(
              Button.children[4].children[0].children[0].children[1]
            ).toHaveStyleRule("height", "2.4rem");
          });
        });
      });

      describe("tabIndex", () => {
        test("should have 0", () => {
          const { Button } = setup();

          expect(Button.getAttribute("tabIndex")).toEqual("0");
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
        });
      });
    });
  });

  describe("MenuIcons", () => {
    test("should render", () => {
      const { MenuIcons } = setup();

      expect(MenuIcons).toBeTruthy();
    });
  });
});

interface Setup extends RenderResult {
  Button: Element;
  HeaderTvContainer: Element;
  HeaderTvFlexContainer: Element;
  HeaderTvSpacingContainer: Element;
  MenuIcons: Element[];
  Nav: Element;
}

type HeaderTvTestProps = Partial<HeaderTvProps>;

function setup(additionalProps?: HeaderTvTestProps): Setup {
  const props: HeaderTvProps = {
    onCVButtonClick: jest.fn(),
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<HeaderTv {...props} />);

  const { queryAllByTestId } = utils || {};

  const Button: Element = queryAllByTestId("Button")[0];
  const HeaderTvContainer: Element = queryAllByTestId("HeaderTv")[0];
  const HeaderTvFlexContainer: Element = queryAllByTestId(
    "HeaderTvFlexContainer"
  )[0];
  const HeaderTvSpacingContainer: Element = queryAllByTestId(
    "HeaderTvSpacingContainer"
  )[0];
  const MenuIcons: Element[] = queryAllByTestId("MenuIcons");
  const Nav: Element = queryAllByTestId("Nav")[0];

  return {
    ...utils,
    Button,
    HeaderTvContainer,
    HeaderTvFlexContainer,
    HeaderTvSpacingContainer,
    MenuIcons,
    Nav
  };
}
