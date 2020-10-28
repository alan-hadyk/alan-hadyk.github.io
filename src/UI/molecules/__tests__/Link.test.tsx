import React from "react";
import { RenderResult } from "@testing-library/react";
// import { createMemoryHistory } from "history";
// import { Router } from "react-router-dom";

import Link from "UI/molecules/Link";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { LinkProps } from "UI/molecules/__typings__/Link";

interface MockLinkProps {
  children: JSX.Element | string;
  to: string;
}

function MockRouterLink({ to, children }: MockLinkProps) {
  return <a href={to}>{children}</a>;
}

jest.mock("react-router-dom", () => ({
  Link: MockRouterLink
}));

describe("molecules / Link", () => {
  test("should have correct structure if it's hoverable and it's external link", () => {
    const { ExternalLink, Lines, PositionContainer, queryByTestId } = setup({
      children: <div data-testid="ExternalLinkChildren" />,
      isExternal: true,
      isHoverable: true
    });

    expect(ExternalLink.children[0]).toEqual(
      queryByTestId("ExternalLinkChildren")
    );
    expect(ExternalLink.children[1]).toEqual(PositionContainer);
    expect(PositionContainer.children[0]).toEqual(Lines[0]);
    expect(PositionContainer.children[1]).toEqual(Lines[1]);
  });

  test("should have correct structure if it's hoverable and it's internal link", () => {
    const { Lines, PositionContainer, RouterLink, queryByTestId } = setup({
      children: <div data-testid="RouterLinkChildren" />,
      isExternal: false,
      isHoverable: true
    });

    expect(RouterLink.children[0].children[0]).toEqual(
      queryByTestId("RouterLinkChildren")
    );
    expect(RouterLink.children[0].children[1]).toEqual(PositionContainer);
    expect(PositionContainer.children[0]).toEqual(Lines[0]);
    expect(PositionContainer.children[1]).toEqual(Lines[1]);
  });

  test("should have correct structure if it's not hoverable and it's external link", () => {
    const { ExternalLink, Lines, PositionContainer, queryByTestId } = setup({
      children: <div data-testid="ExternalLinkChildren" />,
      isExternal: true,
      isHoverable: false
    });

    expect(ExternalLink.children[0]).toEqual(
      queryByTestId("ExternalLinkChildren")
    );
    expect(PositionContainer).toBeFalsy();
    expect(Lines[0]).toBeFalsy();
    expect(Lines[1]).toBeFalsy();
  });

  test("should have correct structure if it's hoverable and it's internal link", () => {
    const { Lines, PositionContainer, RouterLink, queryByTestId } = setup({
      children: <div data-testid="RouterLinkChildren" />,
      isExternal: false,
      isHoverable: false
    });

    expect(RouterLink.children[0].children[0]).toEqual(
      queryByTestId("RouterLinkChildren")
    );
    expect(PositionContainer).toBeFalsy();
    expect(Lines[0]).toBeFalsy();
    expect(Lines[1]).toBeFalsy();
  });

  describe("ExternalLink", () => {
    describe("Styles", () => {
      describe("display", () => {
        test("should have inline by default", () => {
          const { ExternalLink } = setup();

          expect(ExternalLink).toHaveStyleRule("display", "inline");
        });

        test("should have block passed via display prop", () => {
          const { ExternalLink } = setup({
            display: "block"
          });

          expect(ExternalLink).toHaveStyleRule("display", "block");
        });
      });

      describe("height", () => {
        test("should have unset by default", () => {
          const { ExternalLink } = setup();

          expect(ExternalLink).toHaveStyleRule("height", "unset");
        });

        test("should have correct value passed via height prop", () => {
          const { ExternalLink } = setup({
            height: "spacing48"
          });

          expect(ExternalLink).toHaveStyleRule("height", "4.8rem");
        });

        test("should have 50% passed via height prop", () => {
          const { ExternalLink } = setup({
            height: "50%"
          });

          expect(ExternalLink).toHaveStyleRule("height", "50%");
        });

        test("should have 100% passed via height prop", () => {
          const { ExternalLink } = setup({
            height: "100%"
          });

          expect(ExternalLink).toHaveStyleRule("height", "100%");
        });

        test("should have auto passed via height prop", () => {
          const { ExternalLink } = setup({
            height: "auto"
          });

          expect(ExternalLink).toHaveStyleRule("height", "auto");
        });
      });

      describe("line-height", () => {
        test("should have 1", () => {
          const { ExternalLink } = setup();

          expect(ExternalLink).toHaveStyleRule("line-height", "1");
        });
      });

      describe("width", () => {
        test("should have unset by default", () => {
          const { ExternalLink } = setup();

          expect(ExternalLink).toHaveStyleRule("width", "unset");
        });

        test("should have correct value passed via width prop", () => {
          const { ExternalLink } = setup({
            width: "spacing48"
          });

          expect(ExternalLink).toHaveStyleRule("width", "4.8rem");
        });

        test("should have 50% passed via width prop", () => {
          const { ExternalLink } = setup({
            width: "50%"
          });

          expect(ExternalLink).toHaveStyleRule("width", "50%");
        });

        test("should have 100% passed via width prop", () => {
          const { ExternalLink } = setup({
            width: "100%"
          });

          expect(ExternalLink).toHaveStyleRule("width", "100%");
        });

        test("should have auto passed via width prop", () => {
          const { ExternalLink } = setup({
            width: "auto"
          });

          expect(ExternalLink).toHaveStyleRule("width", "auto");
        });
      });

      describe(":hover .line", () => {
        describe("opacity", () => {
          test("should have 1", () => {
            const { ExternalLink } = setup();

            expect(ExternalLink).toHaveStyleRule("opacity", "1", {
              modifier: "&:hover .line"
            });
          });
        });

        describe("visibility", () => {
          test("should have visible", () => {
            const { ExternalLink } = setup();

            expect(ExternalLink).toHaveStyleRule("visibility", "visible", {
              modifier: "&:hover .line"
            });
          });
        });

        describe("width", () => {
          test("should have 50%", () => {
            const { ExternalLink } = setup();

            expect(ExternalLink).toHaveStyleRule("width", "50%", {
              modifier: "&:hover .line"
            });
          });
        });
      });
    });

    describe("Props", () => {
      describe("href", () => {
        test("should have correct value passed via href prop", () => {
          const { ExternalLink } = setup({
            href: "http://google.com"
          });

          expect(ExternalLink.getAttribute("href")).toEqual(
            "http://google.com"
          );
        });
      });

      describe("target", () => {
        test("should have '_blank'", () => {
          const { ExternalLink } = setup({
            isExternal: true
          });

          expect(ExternalLink.getAttribute("target")).toEqual("_blank");
        });
      });
    });
  });

  describe("RouterLink", () => {
    describe("Styles", () => {
      describe("display", () => {
        test("should have inline by default", () => {
          const { RouterLink } = setup({
            isExternal: false
          });

          expect(RouterLink).toHaveStyleRule("display", "inline");
        });

        test("should have block passed via display prop", () => {
          const { RouterLink } = setup({
            display: "block",
            isExternal: false
          });

          expect(RouterLink).toHaveStyleRule("display", "block");
        });
      });

      describe("height", () => {
        test("should have unset by default", () => {
          const { RouterLink } = setup({
            isExternal: false
          });

          expect(RouterLink).toHaveStyleRule("height", "unset");
        });

        test("should have correct value passed via height prop", () => {
          const { RouterLink } = setup({
            height: "spacing48",
            isExternal: false
          });

          expect(RouterLink).toHaveStyleRule("height", "4.8rem");
        });

        test("should have 50% passed via height prop", () => {
          const { RouterLink } = setup({
            height: "50%",
            isExternal: false
          });

          expect(RouterLink).toHaveStyleRule("height", "50%");
        });

        test("should have 100% passed via height prop", () => {
          const { RouterLink } = setup({
            height: "100%",
            isExternal: false
          });

          expect(RouterLink).toHaveStyleRule("height", "100%");
        });

        test("should have auto passed via height prop", () => {
          const { RouterLink } = setup({
            height: "auto",
            isExternal: false
          });

          expect(RouterLink).toHaveStyleRule("height", "auto");
        });
      });

      describe("line-height", () => {
        test("should have 1", () => {
          const { RouterLink } = setup({
            isExternal: false
          });

          expect(RouterLink).toHaveStyleRule("line-height", "1");
        });
      });

      describe("width", () => {
        test("should have unset by default", () => {
          const { RouterLink } = setup({
            isExternal: false
          });

          expect(RouterLink).toHaveStyleRule("width", "unset");
        });

        test("should have correct value passed via width prop", () => {
          const { RouterLink } = setup({
            isExternal: false,
            width: "spacing48"
          });

          expect(RouterLink).toHaveStyleRule("width", "4.8rem");
        });

        test("should have 50% passed via width prop", () => {
          const { RouterLink } = setup({
            isExternal: false,
            width: "50%"
          });

          expect(RouterLink).toHaveStyleRule("width", "50%");
        });

        test("should have 100% passed via width prop", () => {
          const { RouterLink } = setup({
            isExternal: false,
            width: "100%"
          });

          expect(RouterLink).toHaveStyleRule("width", "100%");
        });

        test("should have auto passed via width prop", () => {
          const { RouterLink } = setup({
            isExternal: false,
            width: "auto"
          });

          expect(RouterLink).toHaveStyleRule("width", "auto");
        });
      });

      describe(":hover .line", () => {
        describe("opacity", () => {
          test("should have 1", () => {
            const { RouterLink } = setup({
              isExternal: false
            });

            expect(RouterLink).toHaveStyleRule("opacity", "1", {
              modifier: "&:hover .line"
            });
          });
        });

        describe("visibility", () => {
          test("should have visible", () => {
            const { RouterLink } = setup({
              isExternal: false
            });

            expect(RouterLink).toHaveStyleRule("visibility", "visible", {
              modifier: "&:hover .line"
            });
          });
        });

        describe("width", () => {
          test("should have 50%", () => {
            const { RouterLink } = setup({
              isExternal: false
            });

            expect(RouterLink).toHaveStyleRule("width", "50%", {
              modifier: "&:hover .line"
            });
          });
        });
      });
    });

    describe("Props", () => {
      describe("href", () => {
        test("should have empty string", () => {
          const { RouterLink } = setup({
            href: "http://google.com",
            isExternal: false
          });

          expect(RouterLink.getAttribute("href")).toEqual("");
        });
      });

      describe("target", () => {
        test("should have '_self'", () => {
          const { RouterLink } = setup({
            isExternal: false
          });

          expect(RouterLink.getAttribute("target")).toEqual("_self");
        });
      });
    });
  });

  describe("PositionContainer", () => {
    describe("Props", () => {
      describe("position", () => {
        test("should have relative", () => {
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
  ExternalLink: Element;
  Lines: Element[];
  PositionContainer: Element;
  RouterLink: Element;
}

type LinkTestProps = Partial<LinkProps>;

function setup(additionalProps?: LinkTestProps): Setup {
  const props: LinkProps = {
    children: <span>Link</span>,
    href: "/",
    isExternal: true,
    isHoverable: true,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<Link {...props} />);

  const { queryByTestId, queryAllByTestId }: RenderResult = utils;

  const ExternalLink: Element = queryByTestId("ExternalLink");
  const Lines: Element[] = queryAllByTestId("Line");
  const PositionContainer: Element = queryAllByTestId("PositionContainer")[0];
  const RouterLink: Element = queryByTestId("RouterLink");

  return {
    ...utils,
    ExternalLink,
    Lines,
    PositionContainer,
    RouterLink
  };
}
