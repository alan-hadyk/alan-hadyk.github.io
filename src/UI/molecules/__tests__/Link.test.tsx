import React from "react";
import { RenderResult } from "@testing-library/react";

import Link from "molecules/Link";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { LinkProps } from "molecules/__typings__/Link";

describe("molecules / Link", () => {
  test("should have correct structure if it is hovered", () => {
    const { Lines, LinkContainer, PositionContainer } = setup({
      isHoverable: true
    });

    expect(LinkContainer.children[1]).toEqual(PositionContainer);
    expect(PositionContainer.children[0]).toEqual(Lines[0]);
    expect(PositionContainer.children[1]).toEqual(Lines[1]);
  });

  test("should render children", () => {
    const { LinkContainer } = setup({
      children: <div>Custom children</div>
    });

    expect(LinkContainer.textContent).toEqual("Custom children");
  });

  describe("Styles", () => {
    describe("display", () => {
      test("should have inline by default", () => {
        const { LinkContainer } = setup();

        expect(LinkContainer).toHaveStyleRule("display", "inline");
      });

      test("should have block passed via display prop", () => {
        const { LinkContainer } = setup({
          display: "block"
        });

        expect(LinkContainer).toHaveStyleRule("display", "block");
      });
    });

    describe("height", () => {
      test("should have unset by default", () => {
        const { LinkContainer } = setup();

        expect(LinkContainer).toHaveStyleRule("height", "unset");
      });

      test("should have correct value passed via height prop", () => {
        const { LinkContainer } = setup({
          height: "spacing48"
        });

        expect(LinkContainer).toHaveStyleRule("height", "4.8rem");
      });

      test("should have 50% passed via height prop", () => {
        const { LinkContainer } = setup({
          height: "50%"
        });

        expect(LinkContainer).toHaveStyleRule("height", "50%");
      });

      test("should have 100% passed via height prop", () => {
        const { LinkContainer } = setup({
          height: "100%"
        });

        expect(LinkContainer).toHaveStyleRule("height", "100%");
      });
    });

    describe("line-height", () => {
      test("should have 1", () => {
        const { LinkContainer } = setup();

        expect(LinkContainer).toHaveStyleRule("line-height", "1");
      });
    });

    describe(":hover .Line", () => {
      describe("opacity", () => {
        test("should have 1", () => {
          const { LinkContainer } = setup();

          expect(LinkContainer).toHaveStyleRule("opacity", "1", {
            modifier: "&:hover .line"
          });
        });
      });

      describe("visibility", () => {
        test("should have visible", () => {
          const { LinkContainer } = setup();

          expect(LinkContainer).toHaveStyleRule("visibility", "visible", {
            modifier: "&:hover .line"
          });
        });
      });

      describe("width", () => {
        test("should have 50%", () => {
          const { LinkContainer } = setup();

          expect(LinkContainer).toHaveStyleRule("width", "50%", {
            modifier: "&:hover .line"
          });
        });
      });
    });
  });

  describe("Props", () => {
    describe("href", () => {
      test("should have correct value passed via href prop", () => {
        const { LinkContainer } = setup({
          href: "http://google.com"
        });

        expect(LinkContainer.getAttribute("href")).toEqual("http://google.com");
      });
    });

    describe("target", () => {
      test("should have '_blank' when isExternal: true", () => {
        const { LinkContainer } = setup({
          isExternal: true
        });

        expect(LinkContainer.getAttribute("target")).toEqual("_blank");
      });

      test("should have '_self' when isExternal: false", () => {
        const { LinkContainer } = setup({
          isExternal: false
        });

        expect(LinkContainer.getAttribute("target")).toEqual("_self");
      });
    });
  });

  describe("PositionContainer", () => {
    describe("Props", () => {
      describe("position", () => {
        test("should be relative", () => {
          const { PositionContainer } = setup();

          expect(PositionContainer).toHaveStyleRule("position", "relative");
        });
      });
    });
  });

  describe("Lines", () => {
    describe("Line[0]", () => {
      describe("Props", () => {
        describe("direction", () => {
          test("should be left", () => {
            const { Lines } = setup();

            expect(Lines[0]).toHaveStyleRule("left", "50%");
          });
        });
      });
    });

    describe("Line[1]", () => {
      describe("Props", () => {
        describe("direction", () => {
          test("should be right", () => {
            const { Lines } = setup();

            expect(Lines[1]).toHaveStyleRule("right", "50%");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Lines: Element[];
  LinkContainer: Element;
  PositionContainer: Element;
}

type LinkTestProps = Partial<LinkProps>;

function setup(additionalProps?: LinkTestProps): Setup {
  const props: LinkProps = {
    children: <div>Link</div>,
    href: "/",
    isHoverable: true,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(
    <Link {...props}>{props.children}</Link>
  );

  const { queryByTestId, queryAllByTestId }: RenderResult = utils;

  const Lines: Element[] = queryAllByTestId("Line");
  const LinkContainer: Element = queryByTestId("Link");
  const PositionContainer: Element = queryByTestId("PositionContainer");

  return {
    ...utils,
    Lines,
    LinkContainer,
    PositionContainer
  };
}
