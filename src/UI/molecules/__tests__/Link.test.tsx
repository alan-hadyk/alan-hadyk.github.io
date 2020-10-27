/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { RenderResult } from "@testing-library/react";
// import { createMemoryHistory } from "history";
// import { Router } from "react-router-dom";

import Link from "UI/molecules/Link";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { LinkProps } from "UI/molecules/__typings__/Link";

interface MockLinkProps {
  children: unknown;
  to: string;
}

function MockLink({ to, children, ...props }: MockLinkProps) {
  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
}

jest.mock("react-router-dom", () => ({
  Link: () => MockLink
}));

describe("molecules / Link", () => {
  test("should have correct structure if it's hoverable and is external link", () => {
    const { ExternalLink, Lines, PositionContainers } = setup({
      isExternal: true,
      isHoverable: true
    });

    expect(ExternalLink.children[1]).toEqual(PositionContainers[0]);
    expect(PositionContainers[0].children[0]).toEqual(Lines[0]);
    expect(PositionContainers[0].children[1]).toEqual(Lines[1]);
  });

  test("should have correct structure if it's hoverable and is internal link", () => {
    const { debug, Lines, PositionContainers, RouterLink } = setup({
      isExternal: false,
      isHoverable: true
    });

    debug();

    expect(RouterLink.children[0].children[1]).toEqual(PositionContainers[1]);
    expect(PositionContainers[1].children[0]).toEqual(Lines[2]);
    expect(PositionContainers[1].children[1]).toEqual(Lines[3]);
  });

  test("ExternalLink should render children", () => {
    const { ExternalLink } = setup({
      children: <div>Custom children</div>
    });

    expect(ExternalLink.textContent).toEqual("Custom children");
  });

  test("RouterLink should render children", () => {
    const { RouterLink } = setup({
      children: <div>Custom children</div>
    });

    expect(RouterLink.textContent).toEqual("Custom children");
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
      });

      describe("line-height", () => {
        test("should have 1", () => {
          const { ExternalLink } = setup();

          expect(ExternalLink).toHaveStyleRule("line-height", "1");
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
          const { RouterLink } = setup();

          expect(RouterLink).toHaveStyleRule("display", "inline");
        });

        test("should have block passed via display prop", () => {
          const { RouterLink } = setup({
            display: "block"
          });

          expect(RouterLink).toHaveStyleRule("display", "block");
        });
      });

      describe("height", () => {
        test("should have unset by default", () => {
          const { RouterLink } = setup();

          expect(RouterLink).toHaveStyleRule("height", "unset");
        });

        test("should have correct value passed via height prop", () => {
          const { RouterLink } = setup({
            height: "spacing48"
          });

          expect(RouterLink).toHaveStyleRule("height", "4.8rem");
        });

        test("should have 50% passed via height prop", () => {
          const { RouterLink } = setup({
            height: "50%"
          });

          expect(RouterLink).toHaveStyleRule("height", "50%");
        });

        test("should have 100% passed via height prop", () => {
          const { RouterLink } = setup({
            height: "100%"
          });

          expect(RouterLink).toHaveStyleRule("height", "100%");
        });
      });

      describe("line-height", () => {
        test("should have 1", () => {
          const { RouterLink } = setup();

          expect(RouterLink).toHaveStyleRule("line-height", "1");
        });
      });

      describe("width", () => {
        test("should have unset by default", () => {
          const { RouterLink } = setup();

          expect(RouterLink).toHaveStyleRule("width", "unset");
        });

        test("should have correct value passed via width prop", () => {
          const { RouterLink } = setup({
            width: "spacing48"
          });

          expect(RouterLink).toHaveStyleRule("width", "4.8rem");
        });

        test("should have 50% passed via width prop", () => {
          const { RouterLink } = setup({
            width: "50%"
          });

          expect(RouterLink).toHaveStyleRule("width", "50%");
        });

        test("should have 100% passed via width prop", () => {
          const { RouterLink } = setup({
            width: "100%"
          });

          expect(RouterLink).toHaveStyleRule("width", "100%");
        });
      });

      describe(":hover .line", () => {
        describe("opacity", () => {
          test("should have 1", () => {
            const { RouterLink } = setup();

            expect(RouterLink).toHaveStyleRule("opacity", "1", {
              modifier: "&:hover .line"
            });
          });
        });

        describe("visibility", () => {
          test("should have visible", () => {
            const { RouterLink } = setup();

            expect(RouterLink).toHaveStyleRule("visibility", "visible", {
              modifier: "&:hover .line"
            });
          });
        });

        describe("width", () => {
          test("should have 50%", () => {
            const { RouterLink } = setup();

            expect(RouterLink).toHaveStyleRule("width", "50%", {
              modifier: "&:hover .line"
            });
          });
        });
      });
    });

    describe("Props", () => {
      describe("href", () => {
        test("should have correct value passed via href prop", () => {
          const { RouterLink } = setup({
            href: "http://google.com"
          });

          expect(RouterLink.getAttribute("href")).toEqual("http://google.com");
        });
      });

      describe("target", () => {
        test("should have '_blank'", () => {
          const { RouterLink } = setup({
            isExternal: true
          });

          expect(RouterLink.getAttribute("target")).toEqual("_blank");
        });
      });
    });
  });

  describe("PositionContainers", () => {
    describe("Props", () => {
      describe("position", () => {
        test("should be relative", () => {
          const { PositionContainers } = setup();

          PositionContainers.forEach((PositionContainer: Element) => {
            expect(PositionContainer).toHaveStyleRule("position", "relative");
          });
        });
      });
    });
  });

  describe("Lines", () => {
    describe("Line[0], Line[2]", () => {
      describe("Props", () => {
        describe("direction", () => {
          test("should be left", () => {
            const { Lines } = setup();

            expect(Lines[0]).toHaveStyleRule("left", "50%");
            expect(Lines[2]).toHaveStyleRule("left", "50%");
          });
        });
      });
    });

    describe("Line[1], Line[3]", () => {
      describe("Props", () => {
        describe("direction", () => {
          test("should be right", () => {
            const { Lines } = setup();

            expect(Lines[1]).toHaveStyleRule("right", "50%");
            expect(Lines[3]).toHaveStyleRule("right", "50%");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  ExternalLink: Element;
  Lines: Element[];
  PositionContainers: Element[];
  RouterLink: Element;
}

type LinkTestProps = Partial<LinkProps>;

function setup(additionalProps?: LinkTestProps): Setup {
  const props: LinkProps = {
    children: <div>Link</div>,
    href: "/",
    isExternal: true,
    isHoverable: true,
    ...additionalProps
  };

  const utils: RenderResult = renderWithTheme(<Link {...props} />);

  const { queryByTestId, queryAllByTestId }: RenderResult = utils;

  const ExternalLink: Element = queryByTestId("ExternalLink");
  const Lines: Element[] = queryAllByTestId("Line");
  const PositionContainers: Element[] = queryAllByTestId("PositionContainer");
  const RouterLink: Element = queryByTestId("RouterLink");

  return {
    ...utils,
    ExternalLink,
    Lines,
    PositionContainers,
    RouterLink
  };
}
