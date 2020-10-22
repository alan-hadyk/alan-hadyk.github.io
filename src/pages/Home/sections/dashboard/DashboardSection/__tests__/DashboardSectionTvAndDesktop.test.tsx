import React from "react";
import { RenderResult } from "@testing-library/react";

import DashboardSectionTvAndDesktop from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionTvAndDesktop";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("ip", () => ({
  address: (): string => "127.0.0.1"
}));

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

interface Detect {
  name: string;
}

jest.mock("detect-browser", () => ({
  detect: (): Detect => ({ name: "chrome" })
}));

describe("pages / Home / sections / dashboard / DashboardSection / DashboardSectionTvAndDesktop", () => {
  test("should have correct structure", () => {
    const {
      Codes,
      Commits,
      ConsolesTvDesktopAndTablet,
      DashboardSectionInnerContainers,
      DashboardSectionOuterContainers,
      Fluxes,
      Ips,
      PoweredBy,
      DashboardSectionDesktop,
      DashboardSectionTv,
      TechStacks,
      UserAgents
    } = setup();

    expect(DashboardSectionTv.children[0]).toEqual(
      DashboardSectionOuterContainers[0]
    );
    expect(DashboardSectionDesktop.children[0]).toEqual(
      DashboardSectionOuterContainers[1]
    );

    expect(
      DashboardSectionOuterContainers[0].children[0].children[0].children[0]
    ).toEqual(DashboardSectionInnerContainers[0]);
    expect(
      DashboardSectionOuterContainers[0].children[0].children[0].children[1]
    ).toEqual(ConsolesTvDesktopAndTablet[0]);
    expect(
      DashboardSectionOuterContainers[0].children[0].children[0].children[2]
    ).toEqual(DashboardSectionInnerContainers[1]);

    expect(
      DashboardSectionOuterContainers[1].children[0].children[0].children[0]
    ).toEqual(DashboardSectionInnerContainers[2]);
    expect(
      DashboardSectionOuterContainers[1].children[0].children[0].children[1]
    ).toEqual(ConsolesTvDesktopAndTablet[1]);
    expect(
      DashboardSectionOuterContainers[1].children[0].children[0].children[2]
    ).toEqual(DashboardSectionInnerContainers[3]);

    expect(DashboardSectionInnerContainers[0].children[0].children[0]).toEqual(
      TechStacks[0]
    );
    expect(DashboardSectionInnerContainers[0].children[0].children[1]).toEqual(
      Fluxes[0]
    );
    expect(DashboardSectionInnerContainers[0].children[0].children[2]).toEqual(
      Codes[0]
    );

    expect(DashboardSectionInnerContainers[2].children[0].children[0]).toEqual(
      TechStacks[1]
    );
    expect(DashboardSectionInnerContainers[2].children[0].children[1]).toEqual(
      Fluxes[1]
    );
    expect(DashboardSectionInnerContainers[2].children[0].children[2]).toEqual(
      Codes[1]
    );

    expect(DashboardSectionInnerContainers[1].children[0].children[0]).toEqual(
      Commits[0]
    );
    expect(DashboardSectionInnerContainers[1].children[0].children[1]).toEqual(
      PoweredBy[0]
    );
    expect(DashboardSectionInnerContainers[1].children[0].children[2]).toEqual(
      UserAgents[0]
    );
    expect(DashboardSectionInnerContainers[1].children[0].children[3]).toEqual(
      Ips[0]
    );

    expect(DashboardSectionInnerContainers[3].children[0].children[0]).toEqual(
      Commits[1]
    );
    expect(DashboardSectionInnerContainers[3].children[0].children[1]).toEqual(
      PoweredBy[1]
    );
    expect(DashboardSectionInnerContainers[3].children[0].children[2]).toEqual(
      UserAgents[1]
    );
    expect(DashboardSectionInnerContainers[3].children[0].children[3]).toEqual(
      Ips[1]
    );
  });

  describe("DashboardSectionTv", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have tv", () => {
          test("should have display block when min-width is 1681px", () => {
            const { DashboardSectionTv } = setup();

            expect(DashboardSectionTv).toHaveStyleRule("display", "block", {
              media: "(min-width:1681px)"
            });
          });
        });
      });
    });
  });

  describe("DashboardSectionDesktop", () => {
    describe("Props", () => {
      describe("devices", () => {
        describe("should have desktop", () => {
          test("should have display block when min-width is 1281px and max-width is 1680px", () => {
            const { DashboardSectionDesktop } = setup();

            expect(DashboardSectionDesktop).toHaveStyleRule(
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
    describe("DashboardSectionInnerContainer[0] and [2]", () => {
      describe("Props", () => {
        describe("height", () => {
          test("should have calc(17vh + 3.6rem)", () => {
            const { DashboardSectionInnerContainers } = setup();

            expect(DashboardSectionInnerContainers[0]).toHaveStyleRule(
              "height",
              "calc(17vh + 3.6rem)"
            );
            expect(DashboardSectionInnerContainers[2]).toHaveStyleRule(
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
            expect(DashboardSectionInnerContainers[2]).toHaveStyleRule(
              "margin-top",
              "2.22vh"
            );
          });
        });
      });
    });

    describe("DashboardSectionInnerContainer[1] and [3]", () => {
      describe("Props", () => {
        describe("height", () => {
          test("should have calc(22.6vh + 3.6rem)", () => {
            const { DashboardSectionInnerContainers } = setup();

            expect(DashboardSectionInnerContainers[1]).toHaveStyleRule(
              "height",
              "calc(22.6vh + 3.6rem)"
            );
            expect(DashboardSectionInnerContainers[3]).toHaveStyleRule(
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
            expect(DashboardSectionInnerContainers[3]).toHaveStyleRule(
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
  Codes: Element[];
  Commits: Element[];
  ConsolesTvDesktopAndTablet: Element[];
  DashboardSectionDesktop: Element;
  DashboardSectionInnerContainers: Element[];
  DashboardSectionOuterContainers: Element[];
  DashboardSectionTv: Element;
  Fluxes: Element[];
  Ips: Element[];
  PoweredBy: Element[];
  TechStacks: Element[];
  UserAgents: Element[];
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(<DashboardSectionTvAndDesktop />);

  const { queryAllByTestId }: RenderResult = utils;

  const Codes: Element[] = queryAllByTestId("Code");
  const Commits: Element[] = queryAllByTestId("Commits");
  const ConsolesTvDesktopAndTablet: Element[] = queryAllByTestId(
    "ConsoleTvDesktopAndTabletOuterPositionContainer"
  );
  const DashboardSectionDesktop: Element = queryAllByTestId(
    "DashboardSectionDesktop"
  )[0];
  const DashboardSectionInnerContainers: Element[] = queryAllByTestId(
    "DashboardSectionInnerContainer"
  );
  const DashboardSectionOuterContainers: Element[] = queryAllByTestId(
    "DashboardSectionOuterContainer"
  );
  const DashboardSectionTv: Element = queryAllByTestId("DashboardSectionTv")[0];
  const Fluxes: Element[] = queryAllByTestId("Flux");
  const Ips: Element[] = queryAllByTestId("IP");
  const PoweredBy: Element[] = queryAllByTestId("PoweredBy");
  const TechStacks: Element[] = queryAllByTestId("TechStack");
  const UserAgents: Element[] = queryAllByTestId("UserAgent");

  return {
    ...utils,
    Codes,
    Commits,
    ConsolesTvDesktopAndTablet,
    DashboardSectionDesktop,
    DashboardSectionInnerContainers,
    DashboardSectionOuterContainers,
    DashboardSectionTv,
    Fluxes,
    Ips,
    PoweredBy,
    TechStacks,
    UserAgents
  };
}
