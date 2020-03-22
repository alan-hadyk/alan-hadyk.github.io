import React from "react";
import { RenderResult } from "@testing-library/react";

import DashboardSection from "<pages>/Home/sections/dashboard/DashboardSection";

import renderWithTheme from "<helpers>/tests/renderWithTheme";

jest.mock("vivus");
jest.mock("<state>/withCommitsState", () => (WrappedComponent: React.FunctionComponent<any>) => (props: unknown) => {
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

describe("pages / Home / sections / dashboard / DashboardSection", () => {
  test("should have correct structure", () => {
    const {
      Code,
      Commits,
      Console,
      Coords,
      FlexContainers,
      Section,
      SpacingContainers,
      TechStack,
      Flux
    } = setup();

    expect(Section.children[0]).toEqual(SpacingContainers[0]);
    expect(SpacingContainers[0].children[0]).toEqual(FlexContainers[0]);
    expect(FlexContainers[0].children[0]).toEqual(TechStack);
    expect(FlexContainers[0].children[1]).toEqual(Coords);
    expect(FlexContainers[0].children[2]).toEqual(Flux);
    expect(FlexContainers[0].children[3]).toEqual(Code);

    expect(Section.children[1]).toEqual(SpacingContainers[1]);
    expect(SpacingContainers[1].children[0]).toEqual(FlexContainers[1]);
    expect(FlexContainers[1].children[0]).toEqual(Console);

    expect(Section.children[2]).toEqual(SpacingContainers[2]);
    expect(SpacingContainers[2].children[0]).toEqual(FlexContainers[2]);
    expect(FlexContainers[2].children[0]).toEqual(Commits);
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

  describe("SpacingContainers", () => {
    describe("SpacingContainers[0]", () => {
      describe("Props", () => {
        describe("paddingTop", () => {
          test("should have 2.4rem", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[0]).toHaveStyleRule("padding-top", "2.4rem");
          });
        });

        describe("height", () => {
          test("should have calc(17vh + 3.6rem)", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[0]).toHaveStyleRule("height", "calc(17vh + 3.6rem)");
          });
        });
      });
    });

    describe("SpacingContainers[1]", () => {
      describe("Props", () => {
        describe("marginTop", () => {
          test("should have 5.6rem", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[1]).toHaveStyleRule("margin-top", "5.6rem");
          });
        });

        describe("marginBottom", () => {
          test("should have 4rem", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[1]).toHaveStyleRule("margin-bottom", "4rem");
          });
        });
      });
    });

    describe("SpacingContainers[2]", () => {
      describe("Props", () => {
        describe("height", () => {
          test("should have calc(22.6vh + 3.6rem)", () => {
            const { SpacingContainers } = setup();

            expect(SpacingContainers[2]).toHaveStyleRule("height", "calc(22.6vh + 3.6rem)");
          });
        });
      });
    });
  });

  describe("FlexContainers", () => {
    describe("FlexContainers[0]", () => {
      describe("Props", () => {
        describe("alignItems", () => {
          test("should have flex-start", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[0]).toHaveStyleRule("align-items", "flex-start");
          });
        });

        describe("flexFlow", () => {
          test("should have row nowrap", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[0]).toHaveStyleRule("flex-flow", "row nowrap");
          });
        });

        describe("gap", () => {
          test("each child should have padding-left: 4.8rem (except the first item)", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[0]).toHaveStyleRule("padding-left", "4.8rem", {
              modifier: "& > *"
            });

          });
        });

        describe("height", () => {
          test("should have row 22rem", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[0]).toHaveStyleRule("height", "22rem");
          });
        });

        describe("justifyContent", () => {
          test("should have center", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[0]).toHaveStyleRule("justify-content", "center");
          });
        });
      });
    });

    describe("FlexContainers[1]", () => {
      describe("Props", () => {
        describe("alignItems", () => {
          test("should have center", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[1]).toHaveStyleRule("align-items", "center");
          });
        });

        describe("flexFlow", () => {
          test("should have row nowrap", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[1]).toHaveStyleRule("flex-flow", "row nowrap");
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

    describe("FlexContainers[2]", () => {
      describe("Props", () => {
        describe("alignItems", () => {
          test("should have flex-start", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[2]).toHaveStyleRule("align-items", "flex-start");
          });
        });

        describe("flexFlow", () => {
          test("should have row nowrap", () => {
            const { FlexContainers } = setup();

            expect(FlexContainers[2]).toHaveStyleRule("flex-flow", "row nowrap");
          });
        });

        describe("gap", () => {
          test("should have row 4.8rem", () => {
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
  });

  describe("Commits", () => {
    describe("Props", () => {
      describe("childrenHeight", () => {
        test("should have 22.6vh", () => {
          const { Commits } = setup();

          expect(Commits.children[1]).toHaveStyleRule("height", "22.6vh");
        });
      });

      describe("flex", () => {
        test("should have 0 1 20%", () => {
          const { Commits } = setup();

          expect(Commits).toHaveStyleRule("flex", "0 1 20%");
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
});

interface Setup extends RenderResult {
  Code: Element;
  Commits: Element;
  Console: Element;
  Coords: Element;
  FlexContainers: Element[];
  Flux: Element;
  Section: Element;
  SpacingContainers: Element[];
  TechStack: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <DashboardSection />
  );

  const { queryByTestId, queryAllByTestId }: RenderResult = utils;
  const Code: Element = queryByTestId("Code");
  const Commits: Element = queryByTestId("Commits");
  const Coords: Element = queryByTestId("Coords");
  const Flux: Element = queryByTestId("Flux");
  const Console: Element = queryByTestId("Console");
  const FlexContainers: Element[] = queryAllByTestId("DashboardSectionFlexContainer");
  const Section: Element = queryByTestId("Section");
  const SpacingContainers: Element[] = queryAllByTestId("DashboardSectionSpacingContainer");
  const TechStack: Element = queryByTestId("TechStack");

  return {
    ...utils,
    Code,
    Commits,
    Console,
    Coords,
    FlexContainers,
    Flux,
    Section,
    SpacingContainers,
    TechStack
  };
}
