import React from "react";
import { RenderResult } from "@testing-library/react";

import DashboardSectionDesktop from "<pages>/Home/sections/dashboard/DashboardSection/DashboardSectionDesktop";

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

describe("pages / Home / sections / dashboard / DashboardSection / DashboardSectionDesktop", () => {
  test("should have correct structure", () => {
    const {
      Code,
      Commits,
      Console,
      DashboardSectionInnerContainer,
      DashboardSectionOuterContainer,
      Flux,
      Ip,
      PoweredBy,
      ResponsiveDesktop,
      TechStack,
      UserAgent
    } = setup();

    expect(ResponsiveDesktop.children[0]).toEqual(DashboardSectionOuterContainer);
    
    // Top row
    expect(DashboardSectionOuterContainer.children[0].children[0]).toEqual(DashboardSectionInnerContainer[0]);
    expect(DashboardSectionInnerContainer[0].children[0].children[0]).toEqual(TechStack);
    expect(DashboardSectionInnerContainer[0].children[0].children[1]).toEqual(Flux);
    expect(DashboardSectionInnerContainer[0].children[0].children[2]).toEqual(Code);
    
    // Console
    expect(DashboardSectionOuterContainer.children[0].children[1]).toEqual(Console);
    
    // Bottom row
    expect(DashboardSectionOuterContainer.children[0].children[2]).toEqual(DashboardSectionInnerContainer[1]);
    expect(DashboardSectionInnerContainer[1].children[0].children[0]).toEqual(Commits);
    expect(DashboardSectionInnerContainer[1].children[0].children[1]).toEqual(PoweredBy);
    expect(DashboardSectionInnerContainer[1].children[0].children[2]).toEqual(UserAgent);
    expect(DashboardSectionInnerContainer[1].children[0].children[3]).toEqual(Ip);
  });

  describe("Top row", () => {
    describe("DashboardSectionInnerContainer[0]", () => {
      describe("Props", () => {
        describe("height", () => {
          test("should have calc(17vh + 3.6rem)", () => {
            const { DashboardSectionInnerContainer } = setup();

            expect(DashboardSectionInnerContainer[0]).toHaveStyleRule("height", "calc(17vh + 3.6rem)");
          });
        });
      });
    });

    describe("TechStack", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 40%", () => {
            const { TechStack } = setup();

            expect(TechStack).toHaveStyleRule("flex", "0 1 40%");
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
    describe("DashboardSectionInnerContainer[1]", () => {
      describe("Props", () => {
        describe("height", () => {
          test("should have calc(22.6vh + 3.6rem)", () => {
            const { DashboardSectionInnerContainer } = setup();

            expect(DashboardSectionInnerContainer[1]).toHaveStyleRule("height", "calc(22.6vh + 3.6rem)");
          });
        });
      });
    });

    describe("Commits", () => {
      describe("Props", () => {
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

    describe("UserAgent", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 20%", () => {
            const { UserAgent } = setup();

            expect(UserAgent).toHaveStyleRule("flex", "0 1 20%");
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
          test("should have 0 1 30%", () => {
            const { PoweredBy } = setup();

            expect(PoweredBy).toHaveStyleRule("flex", "0 1 30%");
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

    describe("Ip", () => {
      describe("Props", () => {
        describe("flex", () => {
          test("should have 0 1 30%", () => {
            const { Ip } = setup();

            expect(Ip).toHaveStyleRule("flex", "0 1 30%");
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
  Code: Element,
  Commits: Element,
  Console: Element,
  DashboardSectionInnerContainer: Element[],
  DashboardSectionOuterContainer: Element,
  Flux: Element,
  Ip: Element,
  PoweredBy: Element,
  ResponsiveDesktop: Element,
  TechStack: Element,
  UserAgent: Element
}

function setup(): Setup {
  const utils: RenderResult = renderWithTheme(
    <DashboardSectionDesktop />
  );

  const { queryAllByTestId, queryByTestId }: RenderResult = utils;

  const Code: Element = queryByTestId("Code");
  const Commits: Element = queryAllByTestId("Commits")[0];
  const Console: Element = queryByTestId("Console");
  const DashboardSectionInnerContainer: Element[] = queryAllByTestId("DashboardSectionInnerContainer");
  const DashboardSectionOuterContainer: Element = queryByTestId("DashboardSectionOuterContainer");
  const Flux: Element = queryByTestId("Flux");
  const Ip: Element = queryByTestId("IP");
  const PoweredBy: Element = queryByTestId("PoweredBy");
  const ResponsiveDesktop: Element = queryByTestId("ResponsiveDesktop");
  const TechStack: Element = queryByTestId("TechStack");
  const UserAgent: Element = queryByTestId("UserAgent");

  return {
    ...utils,
    Code,
    Commits,
    Console,
    DashboardSectionInnerContainer,
    DashboardSectionOuterContainer,
    Flux,
    Ip,
    PoweredBy,
    ResponsiveDesktop,
    TechStack,
    UserAgent
  };
}
