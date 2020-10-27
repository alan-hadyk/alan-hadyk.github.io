import React from "react";
import { RenderResult } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import LinkWithIcon from "UI/molecules/LinkWithIcon";

import renderWithTheme from "helpers/tests/renderWithTheme";

import { LinkWithIconProps } from "UI/molecules/__typings__/LinkWithIcon";

describe("molecules / LinkWithIcon", () => {
  test("should have correct structure - isExternal: false", () => {
    const { IconContainer, Link } = setup({
      isExternal: false
    });

    expect(Link.children[0].children[0]).toEqual(IconContainer);
  });

  test("should have correct structure - isExternal: true", () => {
    const { IconContainer, Link } = setup({
      isExternal: true
    });

    expect(Link.children[0]).toEqual(IconContainer);
  });

  describe("Icon", () => {
    describe("Props", () => {
      describe("animationTime", () => {
        test("should have transiton: all 150ms ease-in-out 0ms", () => {
          const { IconContainer } = setup();

          expect(IconContainer).toHaveStyleRule(
            "transition",
            "all 150ms ease-in-out 0ms",
            {
              modifier: "svg"
            }
          );
        });
      });

      describe("height", () => {
        test("should have 4.8rem by default", () => {
          const { IconContainer } = setup();

          expect(IconContainer).toHaveStyleRule("height", "4.8rem");
        });

        test("should have correct value passed via height prop", () => {
          const { IconContainer } = setup({
            height: "spacing72"
          });

          expect(IconContainer).toHaveStyleRule("height", "7.2rem");
        });
      });

      describe("width", () => {
        test("should have auto", () => {
          const { IconContainer } = setup();

          expect(IconContainer).toHaveStyleRule("width", "auto");
        });

        test("should have correct value passed via width prop", () => {
          const { IconContainer } = setup({
            width: "spacing72"
          });

          expect(IconContainer).toHaveStyleRule("width", "7.2rem");
        });
      });

      describe("shouldGlowOnHover", () => {
        test("should have filter: drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))", () => {
          const { IconContainer } = setup();

          expect(IconContainer).toHaveStyleRule(
            "filter",
            "drop-shadow(0px 0px .4rem rgba(255,255,255,0.5))",
            {
              modifier: "svg:hover"
            }
          );
        });
      });

      describe("iconName", () => {
        test("should render correct icon - logo", () => {
          const { Icon } = setup({
            iconName: "logo"
          });

          expect(Icon.textContent).toEqual("Icon-Logo.svg");
        });

        test("should render correct icon - codeSandbox", () => {
          const { Icon } = setup({
            iconName: "codeSandbox"
          });

          expect(Icon.textContent).toEqual("Icon-CodeSandbox.svg");
        });

        test("should render correct icon - gitHub", () => {
          const { Icon } = setup({
            iconName: "gitHub"
          });

          expect(Icon.textContent).toEqual("Icon-GitHub.svg");
        });

        test("should render correct icon - linkedIn", () => {
          const { Icon } = setup({
            iconName: "linkedIn"
          });

          expect(Icon.textContent).toEqual("Icon-LinkedIn.svg");
        });
      });
    });
  });

  describe("Link", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have spacing48", () => {
          const { Link } = setup();

          expect(Link.getAttribute("height")).toEqual("spacing48");
        });

        test("should have correct value passed via height prop", () => {
          const { Link } = setup({
            height: "spacing72"
          });

          expect(Link).toHaveStyleRule("height", "7.2rem");
        });
      });

      describe("display", () => {
        test("should have block", () => {
          const { Link } = setup();

          expect(Link.getAttribute("display")).toEqual("block");
        });
      });

      describe("isExternal", () => {
        test("should render RouterLink as a Link child if isExternal prop is false", () => {
          const { Link } = setup({
            isExternal: false
          });

          expect(Link.children[0].getAttribute("href")).toEqual("/");
        });
      });

      describe("href", () => {
        test("should have correct value passed via href prop", () => {
          const { Link } = setup({
            href: "http://google.com"
          });

          expect(Link.getAttribute("href")).toEqual("http://google.com");
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Icon: SVGSVGElement;
  IconContainer: Element;
  Link: Element;
}

type LinkWithIconTestProps = Partial<LinkWithIconProps>;

function setup(additionalProps?: LinkWithIconTestProps): Setup {
  const props: LinkWithIconProps = {
    height: "spacing48",
    href: "/",
    iconName: "logo",
    isExternal: true,
    ...additionalProps
  };

  const history = createMemoryHistory();

  const utils: RenderResult = renderWithTheme(
    <Router history={history}>
      <LinkWithIcon {...props} />
    </Router>
  );

  const { queryByTestId }: RenderResult = utils;

  const Link: Element = queryByTestId("LinkWithIcon");
  const Icon: SVGSVGElement = document.querySelector("svg");
  const IconContainer: Element = queryByTestId("IconContainer");

  return {
    ...utils,
    Icon,
    IconContainer,
    Link
  };
}
