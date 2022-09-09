import React from "react";
import { RenderResult } from "@testing-library/react";

import DashboardSectionTvAndDesktop from "pages/Home/sections/dashboard/DashboardSection/DashboardSectionTvAndDesktop";

import renderWithTheme from "helpers/tests/renderWithTheme";

jest.mock("ip", () => ({
  address: (): string => "127.0.0.1"
}));

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mockWithCommitsState(WrappedComponent: React.FunctionComponent<any>) {
  return (props: Record<string, unknown>): JSX.Element => {
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
      <WrappedComponent
        commitsList={commitsList}
        commitsState="loaded"
        {...props}
      />
    );
  };
}

jest.mock("state/withCommitsState", () => mockWithCommitsState);

interface Detect {
  name: string;
}

jest.mock("detect-browser", () => ({
  detect: (): Detect => ({ name: "chrome" })
}));

describe("pages / Home / sections / dashboard / DashboardSection / DashboardSectionTvAndDesktop", () => {
  test("should have correct structure", () => {
    const {
      Code,
      Commit,
      ConsoleTvDesktopAndTablet,
      DashboardSectionInnerContainers,
      DashboardSectionOuterContainer,
      DashboardSectionTvAndDesktopContainer,
      Flux,
      Ip,
      PoweredBy,
      TechStack,
      UserAgent
    } = setup();

    expect(DashboardSectionTvAndDesktopContainer.children[0]).toEqual(
      DashboardSectionOuterContainer
    );

    expect(
      DashboardSectionOuterContainer.children[0].children[0].children[0]
    ).toEqual(DashboardSectionInnerContainers[0]);
    expect(
      DashboardSectionOuterContainer.children[0].children[0].children[1]
    ).toEqual(ConsoleTvDesktopAndTablet);
    expect(
      DashboardSectionOuterContainer.children[0].children[0].children[2]
    ).toEqual(DashboardSectionInnerContainers[1]);

    expect(DashboardSectionInnerContainers[0].children[0].children[0]).toEqual(
      TechStack
    );
    expect(DashboardSectionInnerContainers[0].children[0].children[1]).toEqual(
      Flux
    );
    expect(DashboardSectionInnerContainers[0].children[0].children[2]).toEqual(
      Code
    );

    expect(DashboardSectionInnerContainers[1].children[0].children[0]).toEqual(
      Commit
    );
    expect(DashboardSectionInnerContainers[1].children[0].children[1]).toEqual(
      PoweredBy
    );
    expect(DashboardSectionInnerContainers[1].children[0].children[2]).toEqual(
      UserAgent
    );
    expect(DashboardSectionInnerContainers[1].children[0].children[3]).toEqual(
      Ip
    );
  });

  describe("DashboardSectionTvAndDesktop", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have tv", () => {
          test("should have display block when min-width is 1681px", () => {
            const { DashboardSectionTvAndDesktopContainer } = setup();

            expect(DashboardSectionTvAndDesktopContainer).toHaveStyleRule(
              "display",
              "block",
              {
                media: "(min-width:1681px)"
              }
            );
          });

          test("should have display block when min-width is 1281px and max-width is 1680px", () => {
            const { DashboardSectionTvAndDesktopContainer } = setup();

            expect(DashboardSectionTvAndDesktopContainer).toHaveStyleRule(
              "display",
              "block",
              {
                media: "(min-width:1281px) and (max-width:1680px)"
              }
            );
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
  Code: Element;
  Commit: Element;
  ConsoleTvDesktopAndTablet: Element;
  DashboardSectionInnerContainers: Element[];
  DashboardSectionOuterContainer: Element;
  DashboardSectionTvAndDesktopContainer: Element;
  Flux: Element;
  Ip: Element;
  PoweredBy: Element;
  TechStack: Element;
  UserAgent: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<DashboardSectionTvAndDesktop />);

  const { queryAllByTestId }: RenderResult = utils;

  const Code: Element = queryAllByTestId("Code")[0];
  const Commit: Element = queryAllByTestId("Commits")[0];
  const ConsoleTvDesktopAndTablet: Element = queryAllByTestId(
    "ConsoleTvDesktopAndTabletOuterPositionContainer"
  )[0];
  const DashboardSectionInnerContainers: Element[] = queryAllByTestId(
    "DashboardSectionInnerContainer"
  );
  const DashboardSectionOuterContainer: Element = queryAllByTestId(
    "DashboardSectionOuterContainer"
  )[0];
  const DashboardSectionTvAndDesktopContainer: Element = queryAllByTestId(
    "DashboardSectionTvAndDesktop"
  )[0];
  const Flux: Element = queryAllByTestId("Flux")[0];
  const Ip: Element = queryAllByTestId("IP")[0];
  const PoweredBy: Element = queryAllByTestId("PoweredBy")[0];
  const TechStack: Element = queryAllByTestId("TechStack")[0];
  const UserAgent: Element = queryAllByTestId("UserAgent")[0];

  return {
    ...utils,
    Code,
    Commit,
    ConsoleTvDesktopAndTablet,
    DashboardSectionInnerContainers,
    DashboardSectionOuterContainer,
    DashboardSectionTvAndDesktopContainer,
    Flux,
    Ip,
    PoweredBy,
    TechStack,
    UserAgent
  };
}
