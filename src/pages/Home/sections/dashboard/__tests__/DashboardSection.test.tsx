import React from "react";
import { RenderResult } from "@testing-library/react";

import DashboardSection from "<pages>/Home/sections/dashboard/DashboardSection";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("ip", () => ({
  address: (): string => "127.0.0.1"
}));

jest.mock("<hooks>/useFpsCounter");

jest.mock("vivus");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
jest.mock("<state>/withCommitsState", () => (WrappedComponent: React.FunctionComponent<any>) => (props: unknown): JSX.Element => {
  const commitsList = [
    {
      commit: {
        author: {
          date: "2020-03-10T22:34:52Z"
        }
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      html_url: "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2964",
      sha: "4380d5d391eee216e651d34700a331ec501c2964"
    },
    {
      commit: {
        author: {
          date: "2020-03-11T22:34:52Z"
        }
      },
      // eslint-disable-next-line @typescript-eslint/camelcase
      html_url: "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2969",
      sha: "4380d5d391eee216e651d34700a331ec501c2969"
    }
  ];

  return (
    <WrappedComponent commitsList={commitsList} hasError={false} {...props} />
  );
});

jest.mock("detect-browser", () => ({
  detect: () => ({ name: "chrome" })
}));


describe("pages / Home / sections / dashboard / DashboardSection", () => {
  test("should have correct structure", () => {
    const {
      Code,
      Commits,
      Console,
      Coords,
      FlexContainers,
      Flux,
      Fps,
      Ip,
      Navigator,
      PositionContainers,
      PoweredBy,
      Section,
      SpacingContainers,
      TechStack,
      UserAgent
    } = setup();

    expect(Section.children[0]).toEqual(SpacingContainers[0]);
    expect(SpacingContainers[0].children[0]).toEqual(PositionContainers[0]);
    expect(PositionContainers[0].children[0]).toEqual(FlexContainers[0]);

    // Top row
    expect(FlexContainers[0].children[0]).toEqual(SpacingContainers[1]);
    expect(SpacingContainers[1].children[0]).toEqual(FlexContainers[1]);
    expect(FlexContainers[1].children[0]).toEqual(TechStack);
    expect(FlexContainers[1].children[1]).toEqual(Coords);
    expect(FlexContainers[1].children[2]).toEqual(Flux);
    expect(FlexContainers[1].children[3]).toEqual(Code);

    // Console
    expect(FlexContainers[0].children[1]).toEqual(Console);
 
    // Bottom row
    expect(FlexContainers[0].children[2]).toEqual(SpacingContainers[2]);
    expect(SpacingContainers[2].children[0]).toEqual(FlexContainers[2]);
    expect(FlexContainers[2].children[0]).toEqual(Fps);
    expect(FlexContainers[2].children[1]).toEqual(Commits);
    expect(FlexContainers[2].children[2]).toEqual(PoweredBy);
    expect(FlexContainers[2].children[3]).toEqual(Navigator);
    expect(FlexContainers[2].children[4]).toEqual(UserAgent);
    expect(FlexContainers[2].children[5]).toEqual(Ip);
  });

  describe("Section", () => {
    describe("Props", () => {
      describe("id", () => {
        test("should equal dashboard", () => {
          const { Section } = setup();

          expect(Section.getAttribute("id")).toEqual("dashboard");
        });
      });

      describe("minHeight", () => {
        test("should have 100vh", () => {
          const { Section } = setup();

          expect(Section).toHaveStyleRule("min-height", "100vh");
        });
      });
    });
  });

  describe("SpacingContainers[0]", () => {
    describe("Props", () => {
      describe("paddingTop", () => {
        test("should have 9.6rem", () => {
          const { SpacingContainers } = setup();

          expect(SpacingContainers[0]).toHaveStyleRule("padding-top", "9.6rem");
        });
      });

      describe("height", () => {
        test("should have 100vh", () => {
          const { SpacingContainers } = setup();

          expect(SpacingContainers[0]).toHaveStyleRule("height", "100vh");
        });
      });
    });
  });

  describe("PositionContainers[0]", () => {
    describe("Props", () => {
      describe("height", () => {
        test("should have 100%", () => {
          const { PositionContainers } = setup();

          expect(PositionContainers[0]).toHaveStyleRule("height", "100%");
        });
      });

      describe("position", () => {
        test("should have relative", () => {
          const { PositionContainers } = setup();

          expect(PositionContainers[0]).toHaveStyleRule("position", "relative");
        });
      });
    });
  });

  describe("FlexContainers[0]", () => {
    describe("Props", () => {
      describe("alignItems", () => {
        test("should have center", () => {
          const { FlexContainers } = setup();

          expect(FlexContainers[0]).toHaveStyleRule("align-items", "center");
        });
      });

      describe("flexFlow", () => {
        test("should have column nowrap", () => {
          const { FlexContainers } = setup();

          expect(FlexContainers[0]).toHaveStyleRule("flex-flow", "column nowrap");
        });
      });

      describe("height", () => {
        test("should have 100%", () => {
          const { FlexContainers } = setup();

          expect(FlexContainers[0]).toHaveStyleRule("height", "100%");
        });
      });

      describe("justifyContent", () => {
        test("should have space-between", () => {
          const { FlexContainers } = setup();

          expect(FlexContainers[0]).toHaveStyleRule("justify-content", "space-between");
        });
      });
    });
  });

  describe("Top row", () => {
    describe("SpacingContainers[1]", () => {
      describe("Props", () => {
        describe("height", () => {
          test("should have calc(17vh + 3.6rem)", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[1]).toHaveStyleRule("height", "calc(17vh + 3.6rem)");
          });
        });

        describe("marginTop", () => {
          test("should have 2.22vh", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[1]).toHaveStyleRule("margin-top", "2.22vh");
          });
        });

        describe("width", () => {
          test("should have 100%", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[1]).toHaveStyleRule("width", "100%");
          });
        });
      });
    });

    describe("FlexContainers[1]", () => {
      describe("Props", () => {
        describe("alignItems", () => {
          test("should have stretch", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[1]).toHaveStyleRule("align-items", "stretch");
          });
        });

        describe("flexFlow", () => {
          test("should have row nowrap", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[1]).toHaveStyleRule("flex-flow", "row nowrap");
          });
        });

        describe("gap", () => {
          test("should have padding-left: 4.8rem for all children (except first)", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[1]).toHaveStyleRule("padding-left", "4.8rem", {
              modifier: "& > *"
            });
            expect(FlexContainers[1]).toHaveStyleRule("padding-left", "0", {
              modifier: "& > *:first-child"
            });
          });
        });

        describe("height", () => {
          test("should have 100%", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[1]).toHaveStyleRule("height", "100%");
          });
        });

        describe("justifyContent", () => {
          test("should have center", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[1]).toHaveStyleRule("justify-content", "center");
          });
        });
      });
    });

    describe("TechStack", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 30%", () => {
            const { TechStack } = setup();

            expect(TechStack).toHaveStyleRule("flex", "0 1 30%");
          });
        });

        describe("title", () => {
          test("should render TechStack", () => {
            const { TechStack } = setup();

            expect(TechStack.children[0].textContent).toEqual("Tech Stack");
          });
        });
      });
    });

    describe("Coords", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 15%", () => {
            const { Coords } = setup();

            expect(Coords).toHaveStyleRule("flex", "0 1 15%");
          });
        });

        describe("title", () => {
          test("should render Coords", () => {
            const { Coords } = setup();

            expect(Coords.children[0].textContent).toEqual("Coords");
          });
        });
      });
    });

    describe("Flux", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 30%", () => {
            const { Flux } = setup();

            expect(Flux).toHaveStyleRule("flex", "0 1 30%");
          });
        });

        describe("title", () => {
          test("should render Flux", () => {
            const { Flux } = setup();

            expect(Flux.children[0].textContent).toEqual("Flux");
          });
        });
      });
    });

    describe("Code", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 25%", () => {
            const { Code } = setup();

            expect(Code).toHaveStyleRule("flex", "0 1 25%");
          });
        });

        describe("title", () => {
          test("should render Code", () => {
            const { Code } = setup();

            expect(Code.children[0].textContent).toEqual("Code");
          });
        });
      });
    });

  });

  describe("Console", () => {
    describe("Props", () => {
      describe("left", () => {
        test("should have 0", () => {
          const { Console } = setup();

          expect(Console).toHaveStyleRule("left", "0");
        });
      });

      describe("position", () => {
        test("should have absolute", () => {
          const { Console } = setup();

          expect(Console).toHaveStyleRule("position", "absolute");
        });
      });

      describe("right", () => {
        test("should have 0", () => {
          const { Console } = setup();

          expect(Console).toHaveStyleRule("right", "0");
        });
      });

      describe("top", () => {
        test("should have 50%", () => {
          const { Console } = setup();

          expect(Console).toHaveStyleRule("top", "50%");
        });
      });

      describe("transform", () => {
        test("should have translateY(-50%)", () => {
          const { Console } = setup();

          expect(Console).toHaveStyleRule("transform", "translateY(-50%)");
        });
      });
    });
  });

  describe("Bottom row", () => {
    describe("SpacingContainers[2]", () => {
      describe("Props", () => {
        describe("height", () => {
          test("should have calc(22.6vh + 3.6rem)", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[2]).toHaveStyleRule("height", "calc(22.6vh + 3.6rem)");
          });
        });

        describe("marginBottom", () => {
          test("should have 2.22vh", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[2]).toHaveStyleRule("margin-bottom", "2.22vh");
          });
        });

        describe("width", () => {
          test("should have 100%", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[2]).toHaveStyleRule("width", "100%");
          });
        });
      });
    });

    describe("FlexContainers[2]", () => {
      describe("Props", () => {
        describe("alignItems", () => {
          test("should have stretch", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[2]).toHaveStyleRule("align-items", "stretch");
          });
        });

        describe("flexFlow", () => {
          test("should have row nowrap", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[2]).toHaveStyleRule("flex-flow", "row nowrap");
          });
        });

        describe("gap", () => {
          test("should have padding-left: 4.8rem for all children (except first)", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[2]).toHaveStyleRule("padding-left", "4.8rem", {
              modifier: "& > *"
            });
            expect(FlexContainers[2]).toHaveStyleRule("padding-left", "0", {
              modifier: "& > *:first-child"
            });
          });
        });

        describe("height", () => {
          test("should have 100%", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[2]).toHaveStyleRule("height", "100%");
          });
        });

        describe("justifyContent", () => {
          test("should have center", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[2]).toHaveStyleRule("justify-content", "center");
          });
        });
      });
    });

    describe("Fps", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 20%", () => {
            const { Fps } = setup();

            expect(Fps).toHaveStyleRule("flex", "0 1 20%");
          });
        });

        describe("title", () => {
          test("should render Fps", () => {
            const { Fps } = setup();

            expect(Fps.children[0].textContent).toEqual("Fps");
          });
        });
      });
    });

    describe("Commits", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 15.73%", () => {
            const { Commits } = setup();

            expect(Commits).toHaveStyleRule("flex", "0 1 15.73%");
          });
        });

        describe("title", () => {
          test("should render Commits", () => {
            const { Commits } = setup();

            expect(Commits.children[0].textContent).toEqual("Commits");
          });
        });
      });
    });

    describe("UserAgent", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 13.6%", () => {
            const { UserAgent } = setup();

            expect(UserAgent).toHaveStyleRule("flex", "0 1 13.6%");
          });
        });

        describe("title", () => {
          test("should render User Agent", () => {
            const { UserAgent } = setup();

            expect(UserAgent.children[0].textContent).toEqual("User Agent");
          });
        });
      });
    });

    describe("PoweredBy", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 20%", () => {
            const { PoweredBy } = setup();

            expect(PoweredBy).toHaveStyleRule("flex", "0 1 20%");
          });
        });

        describe("title", () => {
          test("should render Powered by react", () => {
            const { PoweredBy } = setup();

            expect(PoweredBy.children[0].textContent).toEqual("Powered by react");
          });
        });
      });
    });

    describe("Navigator", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 13.6%", () => {
            const { Navigator } = setup();

            expect(Navigator).toHaveStyleRule("flex", "0 1 13.6%");
          });
        });

        describe("title", () => {
          test("should render Navigator", () => {
            const { Navigator } = setup();

            expect(Navigator.children[0].textContent).toEqual("Navigator");
          });
        });
      });
    });

    describe("Ip", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 20%", () => {
            const { Ip } = setup();

            expect(Ip).toHaveStyleRule("flex", "0 1 20%");
          });
        });

        describe("title", () => {
          test("should render IP: ${ip.address}", () => {
            const { Ip } = setup();

            expect(Ip.children[0].textContent).toEqual("IP: 127.0.0.1");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Code: Element;
  Commits: Element;
  Console: Element;
  Coords: Element;
  FlexContainers: Element[];
  Flux: Element;
  Fps: Element;
  Ip: Element;
  Navigator: Element;
  PositionContainers: Element[];
  PoweredBy: Element;
  Section: Element;
  SpacingContainers: Element[];
  TechStack: Element;
  UserAgent: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <DashboardSection />
  );

  const { queryByTestId, queryAllByTestId }: RenderResult = utils;

  const Code: Element = queryByTestId("Code");
  const Commits: Element = queryAllByTestId("Commits")[0];
  const Console: Element = queryByTestId("Console");
  const Coords: Element = queryByTestId("Coords");
  const Flux: Element = queryByTestId("Flux");
  const FlexContainers: Element[] = queryAllByTestId("DashboardSectionFlexContainer");
  const Fps: Element = queryByTestId("Fps");
  const Ip: Element = queryByTestId("IP");
  const Navigator: Element = queryByTestId("Navigator");
  const Section: Element = queryByTestId("Section");
  const PositionContainers: Element[] = queryAllByTestId("DashboardSectionPositionContainer");
  const PoweredBy: Element = queryByTestId("PoweredBy");
  const SpacingContainers: Element[] = queryAllByTestId("DashboardSectionSpacingContainer");
  const TechStack: Element = queryByTestId("TechStack");
  const UserAgent: Element = queryByTestId("UserAgent");

  return {
    ...utils,
    Code,
    Commits,
    Console,
    Coords,
    FlexContainers,
    Flux,
    Fps,
    Ip,
    Navigator,
    PositionContainers,
    PoweredBy,
    Section,
    SpacingContainers,
    TechStack,
    UserAgent
  };
}
