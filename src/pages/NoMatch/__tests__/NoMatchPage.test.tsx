import React from "react";
import { RenderResult } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import NoMatchPage from "pages/NoMatch/NoMatchPage";

import renderWithTheme from "helpers/tests/renderWithTheme";

interface MockLinkWithIconProps {
  height?: string;
  href?: string;
  iconName?: string;
  width?: string;
}

function MockLinkWithIcon({
  href,
  height,
  iconName,
  width
}: MockLinkWithIconProps) {
  return (
    <a
      data-height={height}
      data-href={href}
      data-iconname={iconName}
      data-width={width}
      className="LinkWithIcon"
    />
  );
}

jest.mock("UI/molecules/LinkWithIcon", () => MockLinkWithIcon);

describe("pages / NoMatch / NoMatchPage", () => {
  test("should have correct structure", () => {
    const {
      Button,
      DashboardElement,
      Error,
      LinkWithIcon,
      NoMatchPageTemplate,
      SpacingContainer
    } = setup();

    expect(NoMatchPageTemplate.children[0]).toEqual(LinkWithIcon);
    expect(NoMatchPageTemplate.children[1]).toEqual(SpacingContainer);
    expect(NoMatchPageTemplate.children[2]).toEqual(Button);

    expect(SpacingContainer.children[0]).toEqual(DashboardElement);
    expect(
      DashboardElement.children[0].children[0].children[4].children[0]
        .children[0]
    ).toEqual(Error);
  });

  describe("LinkWithIcon", () => {
    describe("Props", () => {
      describe("href", () => {
        test("should have '/'", () => {
          const { LinkWithIcon } = setup();

          expect(LinkWithIcon.getAttribute("data-href")).toEqual("/");
        });
      });

      describe("height", () => {
        test("should have auto", () => {
          const { LinkWithIcon } = setup();

          expect(LinkWithIcon.getAttribute("data-height")).toEqual("auto");
        });
      });

      describe("iconName", () => {
        test("should have logo", () => {
          const { LinkWithIcon } = setup();

          expect(LinkWithIcon.getAttribute("data-iconname")).toEqual("logo");
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { LinkWithIcon } = setup();

          expect(LinkWithIcon.getAttribute("data-width")).toEqual("100%");
        });
      });
    });
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("marginBottom", () => {
        test("should have 3.2rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("margin-bottom", "3.2rem");
        });
      });

      describe("marginTop", () => {
        test("should have 3.2rem", () => {
          const { SpacingContainer } = setup();

          expect(SpacingContainer).toHaveStyleRule("margin-top", "3.2rem");
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

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 1 1 100%", () => {
          const { DashboardElement } = setup();

          expect(DashboardElement).toHaveStyleRule("flex", "1 1 100%");
        });
      });

      describe("shouldDisplayCorners", () => {
        test("should render corners", () => {
          const { Corners, DashboardElement } = setup();

          expect(DashboardElement.children[0].children[0].children[0]).toEqual(
            Corners[0]
          );
          expect(DashboardElement.children[0].children[0].children[1]).toEqual(
            Corners[1]
          );
          expect(DashboardElement.children[0].children[0].children[2]).toEqual(
            Corners[2]
          );
          expect(DashboardElement.children[0].children[0].children[3]).toEqual(
            Corners[3]
          );
        });
      });
    });
  });

  describe("Error", () => {
    test("should render correct SVG - Icon-Warning", () => {
      const { Error } = setup();

      expect(Error.children[0].children[0].textContent).toEqual(
        "Icon-Warning.svg"
      );
    });

    describe("Props", () => {
      describe("title", () => {
        test("should have Error", () => {
          const { Error } = setup();

          expect(Error.children[0].children[1].textContent).toEqual("Error");
        });
      });

      describe("description", () => {
        test("should have Page not found", () => {
          const { Error } = setup();

          expect(Error.children[0].children[2].textContent).toEqual(
            "Page not found"
          );
        });
      });
    });
  });

  describe("Button", () => {
    describe("Props", () => {
      describe("buttonText", () => {
        test("should have Return to Portfolio", () => {
          const { Button } = setup();

          const buttonText = Button.querySelector("[font-family=\"Exan\"]");

          expect(buttonText.textContent).toEqual("Return to Portfolio");
        });
      });

      describe("size", () => {
        describe("should have small", () => {
          describe("height", () => {
            test("should have 4rem", () => {
              const { Button } = setup();

              expect(Button).toHaveStyleRule("height", "4rem");
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
  });
});

interface Setup extends RenderResult {
  Button: Element;
  Corners: Element[];
  DashboardElement: Element;
  Error: Element;
  LinkWithIcon: Element;
  NoMatchPageTemplate: Element;
  SpacingContainer: Element;
}

function setup(): Setup {
  const history = createMemoryHistory();

  const utils: RenderResult = renderWithTheme(
    <Router history={history}>
      <NoMatchPage />
    </Router>
  );

  const { queryAllByTestId } = utils || {};

  const Button: Element = queryAllByTestId("Button")[0];
  const Corners: Element[] = queryAllByTestId("Corner");
  const DashboardElement: Element = queryAllByTestId(
    "NoMatchPageDashboardElement"
  )[0];
  const Error: Element = queryAllByTestId("Error")[0];
  const LinkWithIcon: Element = document.querySelectorAll(".LinkWithIcon")[0];
  const NoMatchPageTemplate: Element = queryAllByTestId(
    "NoMatchPageTemplate"
  )[0];
  const SpacingContainer: Element = queryAllByTestId("SpacingContainer")[0];

  return {
    ...utils,
    Button,
    Corners,
    DashboardElement,
    Error,
    LinkWithIcon,
    NoMatchPageTemplate,
    SpacingContainer
  };
}
