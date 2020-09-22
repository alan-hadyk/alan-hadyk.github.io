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
  test("should have correct structure", () => {	
    const {	
      Console,
      DashboardSectionBottom,	
      DashboardSectionOuterFlexContainer,
      DashboardSectionSpacingContainer,
      DashboardSectionTop,	
      PositionContainer,	
      Section
    } = setup();	

    expect(Section.children[4]).toEqual(DashboardSectionSpacingContainer);	
    expect(DashboardSectionSpacingContainer.children[0]).toEqual(PositionContainer);	
    expect(PositionContainer.children[0]).toEqual(DashboardSectionOuterFlexContainer);	

    // Top row	
    expect(DashboardSectionOuterFlexContainer.children[0]).toEqual(DashboardSectionTop[0]);	
    expect(DashboardSectionOuterFlexContainer.children[1]).toEqual(DashboardSectionTop[1]);	
    expect(DashboardSectionOuterFlexContainer.children[2]).toEqual(DashboardSectionTop[2]);		
    expect(DashboardSectionOuterFlexContainer.children[3]).toEqual(DashboardSectionTop[3]);		

    // Console	
    expect(DashboardSectionOuterFlexContainer.children[4]).toEqual(Console);	

    // Bottom row	
    expect(DashboardSectionOuterFlexContainer.children[5]).toEqual(DashboardSectionBottom[0]);	
    expect(DashboardSectionOuterFlexContainer.children[6]).toEqual(DashboardSectionBottom[1]);	
    expect(DashboardSectionOuterFlexContainer.children[7]).toEqual(DashboardSectionBottom[2]);	
    expect(DashboardSectionOuterFlexContainer.children[8]).toEqual(DashboardSectionBottom[3]);	
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

  describe("PositionContainer", () => {	
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
});	

interface Setup extends RenderResult {	
  Console: Element;
  DashboardSectionBottom: Element[];	
  DashboardSectionOuterFlexContainer: Element;
  DashboardSectionSpacingContainer: Element;
  DashboardSectionTop: Element[];	
  PositionContainer: Element;	
  Section: Element;	
}	

function setup(): Setup {	
  const utils: RenderResult = renderWithTheme(	
    <DashboardSection />	
  );	

  const { queryByTestId, queryAllByTestId }: RenderResult = utils;	

  const Console: Element = queryByTestId("Console");
  const DashboardSectionBottom: Element[] = queryAllByTestId("DashboardSectionBottom");
  const DashboardSectionOuterFlexContainer: Element = queryByTestId("DashboardSectionOuterFlexContainer");
  const DashboardSectionSpacingContainer: Element = queryByTestId("DashboardSectionSpacingContainer");
  const DashboardSectionTop: Element[] = queryAllByTestId("DashboardSectionTop");
  const Section: Element = queryByTestId("DashboardSection");	
  const PositionContainer: Element = queryByTestId("DashboardSectionPositionContainer");	

  return {	
    ...utils,	
    Console,
    DashboardSectionBottom,	
    DashboardSectionOuterFlexContainer,
    DashboardSectionSpacingContainer,
    DashboardSectionTop,	
    PositionContainer,	
    Section	
  };	
}