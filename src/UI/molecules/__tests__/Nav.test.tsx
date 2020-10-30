import React from "react";
import { RenderResult } from "@testing-library/react";

import Nav from "UI/molecules/Nav";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { NavProps } from "UI/molecules/__typings__/Nav";

jest.mock("hooks/useIntersectionObserver");

import useIntersectionObserver from "hooks/useIntersectionObserver";

import { UseIntersectionObserver } from "hooks/__typings__/useIntersectionObserver";

describe("molecules / Nav", () => {
  test("should have correct structure", () => {
    const { FlexContainer, NavItems } = setup();

    expect(FlexContainer.children[0]).toEqual(NavItems[0].parentNode);
    expect(FlexContainer.children[1]).toEqual(NavItems[1].parentNode);
    expect(FlexContainer.children[2]).toEqual(NavItems[2].parentNode);
    expect(FlexContainer.children[3]).toEqual(NavItems[3].parentNode);
  });

  describe("useIntersectionObserver", () => {
    test("should be called initially with correct arguments", () => {
      const spyUseIntersectionObserver = jest.fn();
      const mockUseIntersectionObserver = useIntersectionObserver as jest.Mock;
      mockUseIntersectionObserver.mockImplementation(
        (args: UseIntersectionObserver) => {
          spyUseIntersectionObserver(args);
        }
      );

      setup();

      expect(
        typeof spyUseIntersectionObserver.mock.calls[0][0]["onElementVisible"]
      ).toEqual("function");

      expect(
        JSON.stringify(spyUseIntersectionObserver.mock.calls[0][0])
      ).toEqual(
        JSON.stringify({
          selectors: ["#experience", "#skills", "#about-me", "#contact"]
        })
      );
    });
  });

  describe("FlexContainer", () => {
    describe("Props", () => {
      describe("alignItems", () => {
        test("should have center if position is horizontal", () => {
          const { FlexContainer } = setup({
            position: "horizontal"
          });

          expect(FlexContainer).toHaveStyleRule("align-items", "center");
        });

        test("should have flex-end if position is vertical", () => {
          const { FlexContainer } = setup({
            position: "vertical"
          });

          expect(FlexContainer).toHaveStyleRule("align-items", "flex-end");
        });
      });

      describe("flexFlow", () => {
        test("should have row nowrap if position is horizontal", () => {
          const { FlexContainer } = setup({
            position: "horizontal"
          });

          expect(FlexContainer).toHaveStyleRule("flex-flow", "row nowrap");
        });

        test("should have column nowrap if position is vertical", () => {
          const { FlexContainer } = setup({
            position: "vertical"
          });

          expect(FlexContainer).toHaveStyleRule("flex-flow", "column nowrap");
        });
      });

      describe("gap", () => {
        test("each child of FlexContainer should have margin-left: 2.4rem, except first item if position is horizontal", () => {
          const { FlexContainer } = setup();

          expect(FlexContainer).toHaveStyleRule("margin-left", "2.4rem", {
            modifier: "& > *"
          });
          expect(FlexContainer).toHaveStyleRule("margin-left", "0", {
            modifier: "& > *:first-child"
          });
        });

        test("each child of FlexContainer should have margin-top: 1.2rem, except first item if position is vertical", () => {
          const { FlexContainer } = setup({
            position: "vertical"
          });

          expect(FlexContainer).toHaveStyleRule("margin-top", "1.2rem", {
            modifier: "& > *"
          });
          expect(FlexContainer).toHaveStyleRule("margin-top", "0", {
            modifier: "& > *:first-child"
          });
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

  describe("NavItem", () => {
    test("there should be 5 elements", () => {
      const { NavItems } = setup();

      expect(NavItems.length).toEqual(4);
    });

    test("each NavItem should have correct content", () => {
      const { NavItems } = setup();

      expect(NavItems[0].textContent).toEqual("Experience");
      expect(NavItems[1].textContent).toEqual("Skills");
      expect(NavItems[2].textContent).toEqual("About me");
      expect(NavItems[3].textContent).toEqual("Contact");
    });
  });
});

interface Setup extends RenderResult {
  FlexContainer: Element;
  NavItems: NodeListOf<HTMLAnchorElement>;
}

type NavTestProps = Partial<NavProps>;

function setup(additionalProps?: NavTestProps): Setup {
  const props: NavProps = {
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<Nav {...props} />);

  const { queryAllByTestId }: RenderResult = utils;

  const FlexContainer: Element = queryAllByTestId("Nav")[0];
  const NavItems: NodeListOf<HTMLAnchorElement> = document.querySelectorAll(
    "a"
  );

  return {
    ...utils,
    FlexContainer,
    NavItems
  };
}
