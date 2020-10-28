import React from "react";
import { RenderResult } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";

import { NoMatchPage } from "pages/NoMatch/NoMatchPage";

import renderWithTheme from "helpers/tests/renderWithTheme";

// interface MockLinkProps {
//   children: unknown;
//   to: string;
// }

// function MockLink({ to, children }: MockLinkProps) {
//   return <a href={to}>{children}</a>;
// }

// jest.mock("react-router-dom", () => ({
//   Link: () => MockLink
// }));

interface MockLinkWithIconProps {
  height?: string;
  href: string;
  iconName: string;
  width?: string;
}

function MockLinkWithIcon({
  href,
  height,
  iconName,
  width
}: MockLinkWithIconProps) {
  return (
    <div
      data-href={href}
      data-height={height}
      data-iconname={iconName}
      data-width={width}
    />
  );
}

jest.mock("UI/molecules/LinkWithIcon", () => ({
  LinkWithIcon: () => MockLinkWithIcon
}));

describe("pages / NoMatch / NoMatchPage", () => {
  test("should have correct structure", () => {
    const {
      Button,
      DashboardElement,
      Error,
      LinkWithIcon,
      NoMatchPageTemplate,
      SpacingContainer
    } = setup("/no-match-page");

    expect(NoMatchPageTemplate.children[0]).toEqual(LinkWithIcon);
    expect(NoMatchPageTemplate.children[1]).toEqual(SpacingContainer);
    expect(NoMatchPageTemplate.children[2]).toEqual(Button);

    expect(SpacingContainer.children[0]).toEqual(DashboardElement);
    expect(DashboardElement.children[0]).toEqual(Error);
  });

  describe("LinkWithIcon", () => {
    describe("Props", () => {
      describe("href", () => {
        test("should have '/'", () => {
          const { LinkWithIcon } = setup("/no-match-page");

          expect(LinkWithIcon.children[0].getAttribute("href")).toEqual("/");
        });
      });

      describe("height", () => {
        test("should have auto", () => {
          const { LinkWithIcon } = setup("/no-match-page");

          expect(LinkWithIcon).toHaveStyleRule("height", "auto");
        });
      });

      describe("iconName", () => {
        test("should have logo", () => {
          const { LinkWithIcon } = setup("/no-match-page");

          expect(LinkWithIcon.textContent).toEqual("Icon-Logo.svg");
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { LinkWithIcon } = setup("/no-match-page");

          expect(LinkWithIcon).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("SpacingContainer", () => {
    describe("Props", () => {
      describe("marginBottom", () => {
        test("should have 3.2rem", () => {
          const { SpacingContainer } = setup("/no-match-page");

          expect(SpacingContainer).toHaveStyleRule("margin-bottom", "3.2rem");
        });
      });

      describe("marginTop", () => {
        test("should have 3.2rem", () => {
          const { SpacingContainer } = setup("/no-match-page");

          expect(SpacingContainer).toHaveStyleRule("margin-top", "3.2rem");
        });
      });

      describe("width", () => {
        test("should have 100%", () => {
          const { SpacingContainer } = setup("/no-match-page");

          expect(SpacingContainer).toHaveStyleRule("width", "100%");
        });
      });
    });
  });

  describe("DashboardElement", () => {
    describe("Props", () => {
      describe("flex", () => {
        test("should have 1 1 100%", () => {
          const { DashboardElement } = setup("/no-match-page");

          expect(DashboardElement).toHaveStyleRule("flex", "1 1 100%");
        });
      });

      describe("shouldDisplayCorners", () => {
        test("should render corners", () => {
          const { Corners, DashboardElement } = setup("/no-match-page");

          expect(DashboardElement.children[1].children[0].children[0]).toEqual(
            Corners[0]
          );
          expect(DashboardElement.children[1].children[0].children[1]).toEqual(
            Corners[1]
          );
          expect(DashboardElement.children[1].children[0].children[2]).toEqual(
            Corners[2]
          );
          expect(DashboardElement.children[1].children[0].children[3]).toEqual(
            Corners[3]
          );
        });
      });

      describe("title", () => {
        test("should have ''", () => {
          const { DashboardElement } = setup("/no-match-page");

          expect(DashboardElement).toHaveStyleRule("title", "''");
        });
      });
    });
  });

  describe("Error", () => {
    describe("Props", () => {
      describe("title", () => {
        test("should have Error", () => {
          const { Error } = setup("/no-match-page");

          expect(Error.children[0].children[1].textContent).toEqual("Error");
        });
      });

      describe("description", () => {
        test("should have Github API is offline", () => {
          const { Error } = setup("/no-match-page");

          expect(Error.children[0].children[2].textContent).toEqual(
            "Github API is offline"
          );
        });
      });
    });

    describe("IconWarning", () => {
      test("should render correct SVG", () => {
        const { Error } = setup("/no-match-page");

        expect(Error.children[0].children[0].textContent).toEqual(
          "Icon-Warning.svg"
        );
      });
    });
  });

  describe("Button", () => {
    describe("Props", () => {
      describe("buttonText", () => {
        test("should have Return to Portfolio", () => {
          const { Button } = setup("/no-match-page");

          const buttonText = Button.querySelector("[font-family=\"Exan\"]");

          expect(buttonText.textContent).toEqual("Return to Portfolio");
        });
      });

      describe("size", () => {
        describe("should have small", () => {
          describe("height", () => {
            test("should have 2.4rem", () => {
              const { Button } = setup("/no-match-page");

              expect(Button).toHaveStyleRule("height", "2.4rem");
            });
          });
        });
      });

      describe("width", () => {
        describe("should have 100%", () => {
          const { Button } = setup("/no-match-page");

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

function setup(route: string): Setup {
  const history = createMemoryHistory();
  history.push(route);

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
  const LinkWithIcon: Element = queryAllByTestId("LinkWithIcon")[0];
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
