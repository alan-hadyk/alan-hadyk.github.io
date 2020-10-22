import React from "react";
import { RenderResult } from "@testing-library/react";

import DashboardSectionTablet from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionTablet";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
jest.mock(
  "<state>/withCommitsState",
  () => (WrappedComponent: React.FunctionComponent<any>) => (
    props: unknown
  ): JSX.Element => {
    const commitsList = [
      {
        commit: {
          author: {
            date: "2020-03-10T22:34:52Z"
          }
        },
        html_url:
          "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2964",
        sha: "4380d5d391eee216e651d34700a331ec501c2964"
      },
      {
        commit: {
          author: {
            date: "2020-03-11T22:34:52Z"
          }
        },
        html_url:
          "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2969",
        sha: "4380d5d391eee216e651d34700a331ec501c2969"
      }
    ];

    return (
      <WrappedComponent commitsList={commitsList} hasError={false} {...props} />
    );
  }
);

describe("pages / Home / sections / dashboard / DashboardSection / DashboardSectionTablet", () => {
  test("should have correct structure", () => {
    const {
      Commit,
      ConsoleTablet,
      DashboardSectionInnerContainers,
      DashboardSectionOuterContainer,
      PoweredBy,
      ResponsiveTablet,
      TechStack
    } = setup();

    expect(ResponsiveTablet.children[0]).toEqual(
      DashboardSectionOuterContainer
    );

    expect(
      DashboardSectionOuterContainer.children[0].children[0].children[0]
    ).toEqual(DashboardSectionInnerContainers[0]);
    expect(DashboardSectionInnerContainers[0].children[0].children[0]).toEqual(
      TechStack
    );

    expect(
      DashboardSectionOuterContainer.children[0].children[0].children[1]
    ).toEqual(ConsoleTablet);

    expect(
      DashboardSectionOuterContainer.children[0].children[0].children[2]
    ).toEqual(DashboardSectionInnerContainers[1]);
    expect(DashboardSectionInnerContainers[1].children[0].children[0]).toEqual(
      Commit
    );
    expect(DashboardSectionInnerContainers[1].children[0].children[1]).toEqual(
      PoweredBy
    );
  });

  describe("ResponsiveTablet", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have tablet", () => {
          test("should have display block when min-width is 641px and max-width is 1280px", () => {
            const { ResponsiveTablet } = setup();

            expect(ResponsiveTablet).toHaveStyleRule("display", "block", {
              media: "(min-width:641px) and (max-width:1280px)"
            });
          });
        });
      });
    });
  });

  describe("DashboardSectionInnerContainers", () => {
    describe("DashboardSectionInnerContainer[0]", () => {
      describe("Props", () => {
        describe("height", () => {
          test("should have calc(17vh + 3.6rem)", () => {
            const { DashboardSectionInnerContainers } = setup();

            expect(DashboardSectionInnerContainers[0]).toHaveStyleRule(
              "height",
              "calc(17vh + 3.6rem)"
            );
          });
        });

        describe("marginTop", () => {
          test("should have 2.22vh", () => {
            const { DashboardSectionInnerContainers } = setup();

            expect(DashboardSectionInnerContainers[0]).toHaveStyleRule(
              "margin-top",
              "2.22vh"
            );
          });
        });
      });
    });

    describe("DashboardSectionInnerContainer[1]", () => {
      describe("Props", () => {
        describe("height", () => {
          test("should have calc(22.6vh + 3.6rem)", () => {
            const { DashboardSectionInnerContainers } = setup();

            expect(DashboardSectionInnerContainers[1]).toHaveStyleRule(
              "height",
              "calc(22.6vh + 3.6rem)"
            );
          });
        });

        describe("marginBottom", () => {
          test("should have 2.22vh", () => {
            const { DashboardSectionInnerContainers } = setup();

            expect(DashboardSectionInnerContainers[1]).toHaveStyleRule(
              "margin-bottom",
              "2.22vh"
            );
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Commit: Element;
  ConsoleTablet: Element;
  DashboardSectionInnerContainers: Element[];
  DashboardSectionOuterContainer: Element;
  PoweredBy: Element;
  ResponsiveTablet: Element;
  TechStack: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<DashboardSectionTablet />);

  const { queryAllByTestId }: RenderResult = utils;

  const Commit: Element = queryAllByTestId("Commits")[0];
  const ConsoleTablet: Element = queryAllByTestId(
    "ConsoleTvDesktopAndTabletOuterPositionContainer"
  )[0];
  const DashboardSectionInnerContainers: Element[] = queryAllByTestId(
    "DashboardSectionInnerContainer"
  );
  const DashboardSectionOuterContainer: Element = queryAllByTestId(
    "DashboardSectionOuterContainer"
  )[0];
  const PoweredBy: Element = queryAllByTestId("PoweredBy")[0];
  const ResponsiveTablet: Element = queryAllByTestId(
    "DashboardSectionTablet"
  )[0];
  const TechStack: Element = queryAllByTestId("TechStack")[0];

  return {
    ...utils,
    Commit,
    ConsoleTablet,
    DashboardSectionInnerContainers,
    DashboardSectionOuterContainer,
    PoweredBy,
    ResponsiveTablet,
    TechStack
  };
}
