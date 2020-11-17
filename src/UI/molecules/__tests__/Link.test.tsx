import React from "react";
import { RenderResult } from "@testing-library/react";

import Link from "UI/molecules/Link";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { LinkProps } from "UI/molecules/__typings__/Link";

interface MockLinkProps {
  children: JSX.Element | string;
  to: string;
}

function MockRouterLink({ children, ...rest }: MockLinkProps) {
  return <a {...rest}>{children}</a>;
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

    expect(RouterLink.children[0]).toEqual(queryByTestId("RouterLinkChildren"));
    expect(RouterLink.children[1]).toEqual(PositionContainer);
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

    expect(RouterLink.children[0]).toEqual(queryByTestId("RouterLinkChildren"));
    expect(PositionContainer).toBeFalsy();
    expect(Lines[0]).toBeFalsy();
    expect(Lines[1]).toBeFalsy();
  });

  describe("ExternalLink", () => {
    describe("Styles", () => {
      describe("display", () => {
        test("should have block by default", () => {
          const { ExternalLink } = setup();

          expect(ExternalLink).toHaveStyleRule("display", "block");
        });

        test("should have inline passed via display prop", () => {
          const { ExternalLink } = setup({
            display: "inline"
          });

          expect(ExternalLink).toHaveStyleRule("display", "inline");
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

      describe("&:hover .line, &:focus .line, &:active .line", () => {
        describe("opacity", () => {
          test("should have 1", () => {
            const { ExternalLink } = setup();

            expect(ExternalLink).toHaveStyleRule("opacity", "1", {
              modifier: "&:hover .line"
            });

            expect(ExternalLink).toHaveStyleRule("opacity", "1", {
              modifier: "&:focus .line"
            });

            expect(ExternalLink).toHaveStyleRule("opacity", "1", {
              modifier: "&:active .line"
            });
          });
        });

        describe("visibility", () => {
          test("should have visible", () => {
            const { ExternalLink } = setup();

            expect(ExternalLink).toHaveStyleRule("visibility", "visible", {
              modifier: "&:hover .line"
            });

            expect(ExternalLink).toHaveStyleRule("visibility", "visible", {
              modifier: "&:focus .line"
            });

            expect(ExternalLink).toHaveStyleRule("visibility", "visible", {
              modifier: "&:active .line"
            });
          });
        });

        describe("width", () => {
          test("should have 50%", () => {
            const { ExternalLink } = setup();

            expect(ExternalLink).toHaveStyleRule("width", "50%", {
              modifier: "&:hover .line"
            });

            expect(ExternalLink).toHaveStyleRule("width", "50%", {
              modifier: "&:focus .line"
            });

            expect(ExternalLink).toHaveStyleRule("width", "50%", {
              modifier: "&:active .line"
            });
          });
        });
      });

      describe("&:focus svg, &:active svg", () => {
        describe("filter", () => {
          test("should have drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))", () => {
            const { ExternalLink } = setup();

            expect(ExternalLink).toHaveStyleRule(
              "filter",
              "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))",
              {
                modifier: "&:focus svg"
              }
            );

            expect(ExternalLink).toHaveStyleRule(
              "filter",
              "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))",
              {
                modifier: "&:active svg"
              }
            );
          });
        });
      });
    });

    describe("Props", () => {
      describe("aria-label", () => {
        test("should have value equal to dataCy prop", () => {
          const { queryByTestId } = setup({
            dataCy: "DataCyAria",
            dataTestId: "DataTestIdAria",
            isExternal: true
          });

          expect(
            queryByTestId("DataTestIdAria").getAttribute("aria-label")
          ).toEqual("DataCyAria");
        });

        test("should have value equal to dataTestId prop", () => {
          const { queryByTestId } = setup({
            dataCy: undefined,
            dataTestId: "DataTestIdAria",
            isExternal: true
          });

          expect(
            queryByTestId("DataTestIdAria").getAttribute("aria-label")
          ).toEqual("DataTestIdAria");
        });
      });

      describe("href", () => {
        test("should have correct value passed via href prop", () => {
          const { ExternalLink } = setup({
            href: "http://google.com",
            isExternal: true
          });

          expect(ExternalLink.getAttribute("href")).toEqual(
            "http://google.com"
          );
        });
      });

      describe("tabIndex", () => {
        test("should have 0", () => {
          const { ExternalLink } = setup({
            isExternal: true
          });

          expect(ExternalLink.getAttribute("tabIndex")).toEqual("0");
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
        test("should have block by default", () => {
          const { RouterLink } = setup({
            isExternal: false
          });

          expect(RouterLink).toHaveStyleRule("display", "block");
        });

        test("should have inline passed via display prop", () => {
          const { RouterLink } = setup({
            display: "inline",
            isExternal: false
          });

          expect(RouterLink).toHaveStyleRule("display", "inline");
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

      describe(":hover .line, &:focus .line, &:active .line", () => {
        describe("opacity", () => {
          test("should have 1", () => {
            const { RouterLink } = setup({
              isExternal: false
            });

            expect(RouterLink).toHaveStyleRule("opacity", "1", {
              modifier: "&:hover .line"
            });

            expect(RouterLink).toHaveStyleRule("opacity", "1", {
              modifier: "&:focus .line"
            });

            expect(RouterLink).toHaveStyleRule("opacity", "1", {
              modifier: "&:active .line"
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

            expect(RouterLink).toHaveStyleRule("visibility", "visible", {
              modifier: "&:focus .line"
            });

            expect(RouterLink).toHaveStyleRule("visibility", "visible", {
              modifier: "&:active .line"
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

            expect(RouterLink).toHaveStyleRule("width", "50%", {
              modifier: "&:focus .line"
            });

            expect(RouterLink).toHaveStyleRule("width", "50%", {
              modifier: "&:active .line"
            });
          });
        });
      });

      describe("&:focus svg, &:active svg", () => {
        describe("filter", () => {
          test("should have drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))", () => {
            const { RouterLink } = setup({
              isExternal: false
            });

            expect(RouterLink).toHaveStyleRule(
              "filter",
              "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))",
              {
                modifier: "&:focus svg"
              }
            );

            expect(RouterLink).toHaveStyleRule(
              "filter",
              "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))",
              {
                modifier: "&:active svg"
              }
            );
          });
        });
      });
    });

    describe("Props", () => {
      describe("aria-label", () => {
        test("should have value equal to dataCy prop", () => {
          const { RouterLink } = setup({
            dataCy: "DataCyAria",
            dataTestId: "DataTestIdAria"
          });

          expect(RouterLink.getAttribute("aria-label")).toEqual("DataCyAria");
        });

        test("should have value equal to dataTestId prop", () => {
          const { RouterLink } = setup({
            dataCy: undefined,
            dataTestId: "DataTestIdAria"
          });

          expect(RouterLink.getAttribute("aria-label")).toEqual(
            "DataTestIdAria"
          );
        });
      });

      describe("href", () => {
        test("should not have", () => {
          const { RouterLink } = setup({
            href: "http://google.com",
            isExternal: false
          });

          expect(RouterLink.getAttribute("href")).toBeFalsy();
        });
      });

      describe("tabIndex", () => {
        test("should have 0", () => {
          const { RouterLink } = setup({
            isExternal: false
          });

          expect(RouterLink.getAttribute("tabIndex")).toEqual("0");
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
  const RouterLink: Element = document.querySelector("a");

  return {
    ...utils,
    ExternalLink,
    Lines,
    PositionContainer,
    RouterLink
  };
}
