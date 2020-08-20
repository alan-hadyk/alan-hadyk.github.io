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
      html_url: "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2964",	
      sha: "4380d5d391eee216e651d34700a331ec501c2964"	
    },	
    {	
      commit: {	
        author: {	
          date: "2020-03-11T22:34:52Z"	
        }	
      },	
      html_url: "https://github.com/alan-hadyk/portfolio/commit/4380d5d391eee216e651d34700a331ec501c2969",	
      sha: "4380d5d391eee216e651d34700a331ec501c2969"	
    }	
  ];	

  return (	
    <WrappedComponent commitsList={commitsList} hasError={false} {...props} />	
  );	
});	

interface Detect {	
  name: string;	
}	

jest.mock("detect-browser", () => ({	
  detect: (): Detect => ({ name: "chrome" })	
}));	


describe("pages / Home / sections / dashboard / DashboardSection", () => {	
  test("should have correct structure for desktop", () => {	
    const {	
      Code,	
      Commits,	
      Console,	
      DashboardSectionInnerContainers,
      DashboardSectionInnerFlexContainer,
      DashboardSectionOuterFlexContainer,
      DashboardSectionSpacingContainer,
      Flux,	
      Ip,	
      PositionContainer,	
      PoweredBy,	
      Section,
      TechStack,	
      UserAgent
    } = setup();	

    expect(Section.children[0]).toEqual(DashboardSectionSpacingContainer);	
    expect(DashboardSectionSpacingContainer.children[0]).toEqual(PositionContainer);	
    expect(PositionContainer.children[0]).toEqual(DashboardSectionOuterFlexContainer);	

    // Top row	
    expect(DashboardSectionOuterFlexContainer.children[0]).toEqual(DashboardSectionInnerContainers[0]);	
    expect(DashboardSectionInnerContainers[0].children[0]).toEqual(DashboardSectionInnerFlexContainer[0]);	
    expect(DashboardSectionInnerFlexContainer[0].children[0]).toEqual(TechStack);	
    expect(DashboardSectionInnerFlexContainer[0].children[1]).toEqual(Flux);	
    expect(DashboardSectionInnerFlexContainer[0].children[2]).toEqual(Code);	

    // Console	
    expect(DashboardSectionOuterFlexContainer.children[1]).toEqual(Console);	

    // Bottom row	
    expect(DashboardSectionOuterFlexContainer.children[2]).toEqual(DashboardSectionInnerContainers[1]);	
    expect(DashboardSectionInnerContainers[1].children[0]).toEqual(DashboardSectionInnerFlexContainer[1]);	
    expect(DashboardSectionInnerFlexContainer[1].children[0]).toEqual(Commits);	
    expect(DashboardSectionInnerFlexContainer[1].children[1]).toEqual(PoweredBy);	
    expect(DashboardSectionInnerFlexContainer[1].children[2]).toEqual(UserAgent);	
    expect(DashboardSectionInnerFlexContainer[1].children[3]).toEqual(Ip);	
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

  describe("DashboardSectionSpacingContainer", () => {	
    describe("Props", () => {	
      describe("paddingTop", () => {	
        test("should have 9.6rem", () => {	
          const { DashboardSectionSpacingContainer } = setup();	

          expect(DashboardSectionSpacingContainer).toHaveStyleRule("padding-top", "9.6rem");	
        });	
      });	

      describe("height", () => {	
        test("should have 100vh", () => {	
          const { DashboardSectionSpacingContainer } = setup();	

          expect(DashboardSectionSpacingContainer).toHaveStyleRule("height", "100vh");	
        });	
      });	
    });	
  });	

  describe("PositionContainer[0]", () => {	
    describe("Props", () => {	
      describe("height", () => {	
        test("should have 100%", () => {	
          const { PositionContainer } = setup();	

          expect(PositionContainer).toHaveStyleRule("height", "100%");	
        });	
      });	

      describe("position", () => {	
        test("should have relative", () => {	
          const { PositionContainer } = setup();	

          expect(PositionContainer).toHaveStyleRule("position", "relative");	
        });	
      });	
    });	
  });	

  describe("DashboardSectionOuterFlexContainer", () => {	
    describe("Props", () => {	
      describe("alignItems", () => {	
        test("should have center", () => {	
          const { DashboardSectionOuterFlexContainer } = setup();	

          expect(DashboardSectionOuterFlexContainer).toHaveStyleRule("align-items", "center");	
        });	
      });	

      describe("flexFlow", () => {	
        test("should have column nowrap", () => {	
          const { DashboardSectionOuterFlexContainer } = setup();	

          expect(DashboardSectionOuterFlexContainer).toHaveStyleRule("flex-flow", "column nowrap");	
        });	
      });	

      describe("height", () => {	
        test("should have 100%", () => {	
          const { DashboardSectionOuterFlexContainer } = setup();	

          expect(DashboardSectionOuterFlexContainer).toHaveStyleRule("height", "100%");	
        });	
      });	

      describe("justifyContent", () => {	
        test("should have space-between", () => {	
          const { DashboardSectionOuterFlexContainer } = setup();	

          expect(DashboardSectionOuterFlexContainer).toHaveStyleRule("justify-content", "space-between");	
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
          test("should have margin-left: 4.8rem for all children (except first)", () => {	
            const { FlexContainers } = setup();	

            expect(FlexContainers[1]).toHaveStyleRule("margin-left", "4.8rem", {	
              modifier: "& > *"	
            });	
            expect(FlexContainers[1]).toHaveStyleRule("margin-left", "0", {	
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
          test("should have 0 1 40%", () => {	
            const { TechStack } = setup();	

            TechStack.forEach((_TechStack: Element) => {
              expect(_TechStack).toHaveStyleRule("flex", "1 0 40%");	
            });
          });	
        });	

        describe("title", () => {	
          test("should render TechStack", () => {	
            const { TechStack } = setup();	

            TechStack.forEach((_TechStack: Element) => {
              expect(_TechStack.children[0].textContent).toEqual("Tech Stack");		
            });
          });	
        });	
      });	
    });	

    // describe.skip("Coords", () => {	
    //   describe("Props", () => {	
    //     describe("flex", () => {	
    //       test("should have 0 1 15%", () => {	
    //         const { Coords } = setup();	

    //         expect(Coords).toHaveStyleRule("flex", "0 1 15%");	
    //       });	
    //     });	

    //     describe("title", () => {	
    //       test("should render Coords", () => {	
    //         const { Coords } = setup();	

    //         expect(Coords.children[0].textContent).toEqual("Coords");	
    //       });	
    //     });	
    //   });	
    // });	

    describe("Flux", () => {	
      describe("Props", () => {	
        describe("flex", () => {	
          test("should have 0 1 30%", () => {	
            const { Flux } = setup();	

            Flux.forEach((_Flux: Element) => {
              expect(_Flux).toHaveStyleRule("flex", "1 0 30%");	
            });
          });	
        });	

        describe("title", () => {	
          test("should render Flux", () => {	
            const { Flux } = setup();	

            Flux.forEach((_Flux: Element) => {
              expect(_Flux.children[0].textContent).toEqual("Flux");
            });
          });	
        });	
      });	
    });	

    describe("Code", () => {	
      describe("Props", () => {	
        describe("flex", () => {	
          test("should have 0 1 30%", () => {	
            const { Code } = setup();	

            expect(Code).toHaveStyleRule("flex", "0 1 30%");	
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
          test("should have margin-left: 4.8rem for all children (except first)", () => {	
            const { FlexContainers } = setup();	

            expect(FlexContainers[2]).toHaveStyleRule("margin-left", "4.8rem", {	
              modifier: "& > *"	
            });	
            expect(FlexContainers[2]).toHaveStyleRule("margin-left", "0", {	
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

    // describe.skip("Fps", () => {	
    //   describe("Props", () => {	
    //     describe("flex", () => {	
    //       test("should have 0 1 20%", () => {	
    //         const { Fps } = setup();	

    //         expect(Fps).toHaveStyleRule("flex", "0 1 20%");	
    //       });	
    //     });	

    //     describe("title", () => {	
    //       test("should render Fps", () => {	
    //         const { Fps } = setup();	

    //         expect(Fps.children[0].textContent).toEqual("Fps");	
    //       });	
    //     });	
    //   });	
    // });	

    describe("Commits", () => {	
      describe("Props", () => {	
        describe("flex", () => {	
          test("should have 1 0 20%", () => {	
            const { Commits } = setup();	

            expect(Commits).toHaveStyleRule("flex", "1 0 20%");	
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
          test("should have 1 0 20%", () => {	
            const { UserAgent } = setup();	

            expect(UserAgent).toHaveStyleRule("flex", "1 0 20%");	
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
          test("should have 1 0 30%", () => {
            const { PoweredBy } = setup();	

            PoweredBy.forEach((_PoweredBy: Element) => {
              expect(_PoweredBy).toHaveStyleRule("flex", "1 0 30%");	
            });
          });	
        });	

        describe("title", () => {	
          test("should render Powered by", () => {	
            const { PoweredBy } = setup();	

            PoweredBy.forEach((_PoweredBy: Element) => {
              expect(_PoweredBy.children[0].textContent).toEqual("Powered by");	
            });
          });	
        });	
      });	
    });	

    // describe.skip("Navigator", () => {	
    //   describe("Props", () => {	
    //     describe("flex", () => {	
    //       test("should have 0 1 13.6%", () => {	

    //         expect(Navigator).toHaveStyleRule("flex", "0 1 13.6%");	
    //       });	
    //     });	

    //     describe("title", () => {	
    //       test("should render Navigator", () => {	
    //         const { Navigator } = setup();	

    //         expect(Navigator.children[0].textContent).toEqual("Navigator");	
    //       });	
    //     });	
    //   });	
    // });	

    describe("Ip", () => {	
      describe("Props", () => {	
        describe("flex", () => {	
          test("should have 0 1 30%", () => {	
            const { Ip } = setup();	

            Ip.forEach((_Ip: Element) => {
              expect(_Ip).toHaveStyleRule("flex", "0 1 30%");	
            });
          });	
        });	

        describe("title", () => {
          test("should render IP: ${ip.address}", () => {	
            const { Ip } = setup();

            Ip.forEach((_Ip: Element) => {
              expect(_Ip.children[0].textContent).toEqual("IP: 127.0.0.1");
            });
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
  DashboardSectionInnerContainers: Element[];
  DashboardSectionInnerFlexContainer: Element[];
  DashboardSectionOuterFlexContainer: Element;
  DashboardSectionSpacingContainer: Element;
  Flux: Element[];	
  Ip: Element[];	
  PositionContainer: Element;	
  PoweredBy: Element[];	
  Section: Element;	
  TechStack: Element[];	
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
  const DashboardSectionInnerContainers: Element[] = queryAllByTestId("DashboardSectionInnerContainer");
  // const Coords: Element = queryByTestId("Coords");	
  const DashboardSectionInnerFlexContainer: Element[] = queryAllByTestId("DashboardSectionInnerFlexContainer");
  const DashboardSectionOuterFlexContainer: Element = queryByTestId("DashboardSectionOuterFlexContainer");
  const DashboardSectionSpacingContainer: Element = queryByTestId("DashboardSectionSpacingContainer");
  const Flux: Element[] = queryAllByTestId("Flux");	
  // const FlexContainers: Element[] = queryAllByTestId("DashboardSectionFlexContainer");	
  // const Fps: Element = queryByTestId("Fps");	
  const Ip: Element[] = queryAllByTestId("IP");	
  // const Navigator: Element = queryByTestId("Navigator");	
  const Section: Element = queryByTestId("Section");	
  const PositionContainer: Element = queryByTestId("DashboardSectionPositionContainer");	
  const PoweredBy: Element[] = queryAllByTestId("PoweredBy");	
  // const SpacingContainers: Element[] = queryAllByTestId("DashboardSectionSpacingContainer");	
  const TechStack: Element[] = queryAllByTestId("TechStack");	
  const UserAgent: Element = queryByTestId("UserAgent");	

  return {	
    ...utils,	
    Code,	
    Commits,	
    Console,	
    DashboardSectionInnerContainers,
    DashboardSectionInnerFlexContainer,
    DashboardSectionOuterFlexContainer,
    DashboardSectionSpacingContainer,
    Flux,	
    Ip,	
    PositionContainer,	
    PoweredBy,	
    Section,	
    TechStack,	
    UserAgent	
  };	
}