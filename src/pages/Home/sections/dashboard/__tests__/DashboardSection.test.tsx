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
      Commits,
      Code,
      Coords,
      DashboardSectionFlexContainers,
      Section,
      DashboardSectionSpacingContainers,
      TechStack,
      Flux
    } = setup();

    expect(Section.children[0]).toEqual(DashboardSectionSpacingContainers[0]);
    expect(DashboardSectionSpacingContainers[0].children[0]).toEqual(DashboardSectionFlexContainers[0]);
    expect(DashboardSectionSpacingContainers[1].children[0]).toEqual(DashboardSectionFlexContainers[1]);
    expect(DashboardSectionFlexContainers[0].children[0]).toEqual(TechStack);
    expect(DashboardSectionFlexContainers[0].children[1]).toEqual(Coords);
    expect(DashboardSectionFlexContainers[0].children[2]).toEqual(Flux);
    expect(DashboardSectionFlexContainers[0].children[3]).toEqual(Code);
    expect(DashboardSectionFlexContainers[1].children[0]).toEqual(Commits);
  });

  describe("Section", () => {    
    describe("Props", () => {
      describe("id", () => {
        test("should be dashboard", () => {
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

  describe("DashboardSectionSpacingContainers", () => {
    describe("DashboardSectionSpacingContainers[0]", () => {
      describe("Styles", () => {
        describe("padding-top", () => {      
          test("should have 2.4rem", () => {
            const { DashboardSectionSpacingContainers } = setup();
  
            expect(DashboardSectionSpacingContainers[0]).toHaveStyleRule("padding-top", "2.4rem");
          });
        });
      });
    });

    describe("DashboardSectionSpacingContainers[1]", () => {
      describe("Styles", () => {
        describe("padding-top", () => {      
          test("should have 4.8rem", () => {
            const { DashboardSectionSpacingContainers } = setup();
  
            expect(DashboardSectionSpacingContainers[1]).toHaveStyleRule("padding-top", "4.8rem");
          });
        });
      });
    });
  });

  describe("DashboardSectionFlexContainers", () => {   
    describe("DashboardSectionFlexContainers[0]", () => {
      describe("Props", () => {
        describe("align-items", () => {      
          test("should have flex-start", () => {
            const { DashboardSectionFlexContainers } = setup();
      
            expect(DashboardSectionFlexContainers[0]).toHaveStyleRule("align-items", "flex-start");
          });
        });
  
        describe("flex-flow", () => {      
          test("should have row nowrap", () => {
            const { DashboardSectionFlexContainers } = setup();
      
            expect(DashboardSectionFlexContainers[0]).toHaveStyleRule("flex-flow", "row nowrap");
          });
        });
  
        describe("gap", () => {
          test("should have row 4.8rem", () => {
            const { DashboardSectionFlexContainers } = setup();
  
            expect(DashboardSectionFlexContainers[0]).toHaveStyleRule("padding-left", "4.8rem", {
              modifier: "& > *"
            });
            expect(DashboardSectionFlexContainers[0]).toHaveStyleRule("padding-left", "0", {
              modifier: "& > *:first-child"
            });
          });
        });
  
        describe("height", () => {
          test("should have 22rem", () => {
            const { DashboardSectionFlexContainers } = setup();
  
            expect(DashboardSectionFlexContainers[0]).toHaveStyleRule("height", "22rem");
          });
        });
  
        describe("justify-content", () => {      
          test("should have center", () => {
            const { DashboardSectionFlexContainers } = setup();
      
            expect(DashboardSectionFlexContainers[0]).toHaveStyleRule("justify-content", "center");
          });
        });
      });
    });
    describe("DashboardSectionFlexContainers[1]", () => {
      describe("Props", () => {
        describe("align-items", () => {      
          test("should have flex-start", () => {
            const { DashboardSectionFlexContainers } = setup();
      
            expect(DashboardSectionFlexContainers[1]).toHaveStyleRule("align-items", "flex-start");
          });
        });
  
        describe("flex-flow", () => {      
          test("should have row nowrap", () => {
            const { DashboardSectionFlexContainers } = setup();
      
            expect(DashboardSectionFlexContainers[1]).toHaveStyleRule("flex-flow", "row nowrap");
          });
        });
  
        describe("gap", () => {
          test("should have row 4.8rem", () => {
            const { DashboardSectionFlexContainers } = setup();
  
            expect(DashboardSectionFlexContainers[1]).toHaveStyleRule("padding-left", "4.8rem", {
              modifier: "& > *"
            });
            expect(DashboardSectionFlexContainers[1]).toHaveStyleRule("padding-left", "0", {
              modifier: "& > *:first-child"
            });
          });
        });
  
        describe("height", () => {
          test("should have 22rem", () => {
            const { DashboardSectionFlexContainers } = setup();
  
            expect(DashboardSectionFlexContainers[1]).toHaveStyleRule("height", "22rem");
          });
        });
  
        describe("justify-content", () => {      
          test("should have center", () => {
            const { DashboardSectionFlexContainers } = setup();
      
            expect(DashboardSectionFlexContainers[1]).toHaveStyleRule("justify-content", "center");
          });
        });
      });
    });
  });
});

interface Setup extends RenderResult {
  Code: Element;
  Commits: Element;
  Coords: Element;
  DashboardSectionFlexContainers: Element[];
  DashboardSectionSpacingContainers: Element[];
  Flux: Element;
  Section: Element;
  TechStack: Element;
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <DashboardSection />
  );

  const { queryAllByTestId, queryByTestId }: RenderResult = utils;

  const Code: Element = queryByTestId("Code");
  const Commits: Element = queryByTestId("Commits");
  const Coords: Element = queryByTestId("Coords");
  const DashboardSectionFlexContainers: Element[] = queryAllByTestId("DashboardSectionFlexContainer");
  const DashboardSectionSpacingContainers: Element[] = queryAllByTestId("DashboardSectionSpacingContainer");
  const Flux: Element = queryByTestId("Flux");
  const Section: Element = queryByTestId("Section");
  const TechStack: Element = queryByTestId("TechStack");

  return {
    ...utils,
    Code,
    Commits,
    Coords,
    DashboardSectionFlexContainers,
    DashboardSectionSpacingContainers,
    Flux,
    Section,
    TechStack
  };
}
